import { motion, AnimatePresence } from "framer-motion";

export default function JobDetailsModal({ job, onClose }) {
  if (!job) return null;

const descriptionList = job.job_description
  ? job.job_description.split("\n").filter(item => item.trim() !== "")
  : [];

const requirementsList = job.job_requirements
  ? job.job_requirements.split("\n").filter(item => item.trim() !== "")
  : [];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // ✅ close on outside click
      >

        {/* MODAL */}
        <motion.div
          onClick={(e) => e.stopPropagation()} // ✅ prevent close inside
          className="
            bg-white 
            w-full 
            max-w-3xl 
            h-[80vh] 
            rounded-2xl 
            shadow-xl 
            flex flex-col
          "
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >

          {/* HEADER (FIXED) */}
          <div className="flex justify-between items-start p-6 border-b">
            <div>
              <h2 className="text-2xl font-bold text-[#2f466f]">
                {job.position_title}
              </h2>
              <p className="text-gray-500 text-sm">
                {job.department}
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-black text-lg"
            >
              ✕
            </button>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div className="flex-1 overflow-y-auto p-3">

            <span className="inline-block mb-4 text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {job.workSetup}
            </span>

            {/* DESCRIPTION */}
            <div className="mb-6">
              <h3 className="font-semibold text-[#2f466f] mb-2 px-3">
                Job Description
              </h3>

              <ul className="list-disc px-6 md:px-16 space-y-2 text-gray-700">
                {descriptionList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* REQUIREMENTS */}
            <div className="mb-6">
              <h3 className="font-semibold text-[#2f466f] mb-2 px-3">
                Requirements
              </h3>

              <ul className="list-disc px-6 md:px-16 space-y-2 text-gray-700">
                {requirementsList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* FOOTER (FIXED) */}
          <div className="p-6 border-t text-center">
            <button
              onClick={() =>
                window.open(
                  `https://quickapply.cmxph.com?jobCode=${job.job_code}`,
                  "_blank"
                )
              }
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700"
            >
              Apply Now
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}