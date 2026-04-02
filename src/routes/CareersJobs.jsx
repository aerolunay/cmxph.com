import { useEffect, useState } from "react";
import axios from "axios";

import logo from "../assets/cmxlogo.png";
import phFlag from "../assets/phFlag.png";
import JobDetailsModal from "../components/JobDetailsModal";

export default function CareersJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("/api/recruitment/jobs");

      if (res.data.success) {
        setJobs(res.data.data);
      }
    } catch (err) {
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* HEADER (MATCH HOMEPAGE) */}
      <div className="w-full flex items-center justify-between px-8 py-4">
        <div className="flex flex-row items-center gap-2">

          <img src={logo} alt="Callmax" className="h-10" />

          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg">Philippines</span>
            <img src={phFlag} alt="PH Flag" className="h-4 w-auto" />
          </div>

        </div>

        <button
          onClick={() => window.close()}
          className="hidden md:inline-block bg-blue-900 text-white px-6 py-2 rounded-full"
        >
          Close
        </button>
      </div>

      {/* NAVBAR */}
      <div className="w-full bg-[#2f466f] text-white flex justify-center py-3">
      </div>

      {/* HERO SECTION */}
      <section className="px-6 py-12 max-w-[1200px] mx-auto text-center">
        <div className="inline-block border border-blue-300 text-blue-600 px-4 py-1 rounded-full text-sm mb-4">
          Careers at Callmax PH
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#2f466f] mb-4">
          Open Positions
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          Explore opportunities and find the role that fits your career journey.
        </p>
      </section>

      {/* JOB LIST */}
      <section id="jobs" className="px-6 pb-16 max-w-[1200px] mx-auto">

        {loading ? (
          <div className="text-center text-gray-500">Loading jobs...</div>
        ) : jobs.length === 0 ? (
          <div className="text-center text-gray-500">
            No open positions available.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {jobs.map((job) => (
              <div
                key={job.id}
                className="
                  bg-white 
                  border border-gray-200 
                  p-6 
                  rounded-2xl 
                  shadow-sm 
                  hover:shadow-xl 
                  transition 
                  flex flex-col
                "
              >

                {/* TITLE */}
                <h2 className="text-lg font-semibold text-[#2f466f]">
                  {job.position_title}
                </h2>

                {/* META */}
                <p className="text-gray-500 text-sm mt-1">
                  {job.department}
                </p>

                {/* TAG */}
                <span className="inline-block mt-2 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                  {job.workSetup}
                </span>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm mt-4 line-clamp-4">
                  {job.job_description}
                </p>

                {/* FOOTER */}
                <div className="mt-auto pt-6 flex justify-between items-center">

                  <span className="text-xs text-gray-400">
                    {new Date(job.created_datetime).toLocaleDateString()}
                  </span>

                  <button
                    className="text-blue-600 font-medium hover:underline"
                    onClick={() => setSelectedJob(job)}
                  >
                    View →
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </section>

      <JobDetailsModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />

    </div>
  );
}