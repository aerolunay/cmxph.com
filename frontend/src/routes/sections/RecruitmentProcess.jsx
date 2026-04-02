import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import recruiterImg from "../../assets/Recruiter.jpg";

export default function RecruitmentProcess() {
  const steps = [
    "Resume Screening",
    "Initial Interview",
    "Online Assessment",
    "Skills Evaluation",
    "Final Interview",
    "Job Offer"
  ];

  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let i = 0;

    const interval = setInterval(() => {
      setActiveStep(i);
      i++;

      if (i > steps.length) clearInterval(interval);
    }, 700); // 🔥 smoother pacing

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <>
      {/* ========================= */}
      {/* RECRUITMENT PROCESS */}
      {/* ========================= */}
      <section
        ref={sectionRef}
        id="recruitment-process"
        className="py-20 px-6 md:px-8 bg-blue-100"
      >
        <div className="max-w-8xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#2f466f] mb-6">
            Recruitment Process
          </h2>

          <div className="text-center text-gray-600 text-xl space-y-4 mb-16">
            <p>
              At Callmax PH, we’ve designed our recruitment process to be efficient, transparent, and candidate-friendly—because we value your time as much as you do.
            </p>
            <p>
              Our hiring journey begins with a resume screening, followed by an initial interview, online assessment, and skills evaluation to ensure alignment with the role.
            </p>
            <p>
              Candidates then proceed to a final behavioral interview, and for select roles, a test project or client interview may be conducted before endorsement for a job offer.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="grid md:grid-cols-6 gap-10 mb-20 max-w-7xl mx-auto">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <div key={index} className="flex flex-col items-center text-center">

                  {/* DOT */}
                  <div className="w-10 h-10 flex items-center justify-center mb-4 relative">

                    {/* COMPLETED */}
                    {isCompleted && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md"
                      >
                        <Check className="text-white w-4 h-4" />
                      </motion.div>
                    )}

                    {/* ACTIVE */}
                    {isActive && (
                      <motion.div
                        className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 0.7, // 🔥 matches interval
                          ease: "easeInOut"
                        }}
                      />
                    )}

                    {/* INACTIVE */}
                    {!isActive && !isCompleted && (
                      <div className="w-6 h-6 bg-blue-300 rounded-full" />
                    )}
                  </div>

                  {/* CARD */}
                  <motion.div
                    animate={{
                      y: isActive ? -6 : 0,
                      scale: isActive ? 1.04 : 1
                    }}
                    transition={{ duration: 0.2 }}
                    className={`bg-white p-4 rounded-xl shadow-md w-full ${
                      isActive ? "shadow-lg" : ""
                    }`}
                  >
                    <h3 className="text-sm font-semibold text-[#2f466f]">
                      {step}
                    </h3>
                  </motion.div>

                </div>
              );
            })}
          </div>

          {/* DESCRIPTION */}
          <div className="text-gray-700 text-xl space-y-4 text-center">
            <p>
              Candidates who successfully pass each stage are carefully evaluated not only based on skills, but also on their potential to thrive within our culture.
            </p>
            <p>
              We ensure every step is clear, structured, and focused on helping you succeed—while giving you a complete view of what it’s like to be part of Callmax PH.
            </p>
          </div>

        </div>
      </section>

      {/* ========================= */}
      {/* 1-DAY HIRING */}
      {/* ========================= */}
      <section className="py-20 px-6 md:px-8 bg-white">

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-36 items-center">

          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src={recruiterImg}
              alt="Recruiter"
              className="w-full max-w-[500px] rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* TEXT CONTAINER */}
          <div>

            <div className="
              bg-blue-50 
              border border-blue-200 
              p-8 rounded-2xl shadow-sm w-[500px]
            ">

              <h3 className="text-2xl font-semibold text-[#2f466f] mb-3">
                ⚡ 1-Day Hiring Process
              </h3>

              <p className="text-gray-600 text-xl leading-relaxed">
                We understand that speed matters. That’s why Callmax PH offers a streamlined hiring process where qualified candidates can complete everything—from interview to final evaluation—within a single day.
              </p>

              <p className="text-gray-600 text-xl mt-4 leading-relaxed">
                This means faster feedback, quicker decisions, and the opportunity to receive a job offer without unnecessary delays.
              </p>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}