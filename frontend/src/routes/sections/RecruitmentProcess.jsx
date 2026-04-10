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
    }, 700);

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
        className="py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-blue-50"
      >

        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#2f466f] mb-4">
            Recruitment Process
          </h2>

          {/* INTRO */}
          <div className="text-center text-gray-600 text-sm sm:text-base space-y-3 mb-12">
            <p>
              At Callmax PH, we’ve designed our recruitment process to be efficient, transparent, and candidate-friendly.
            </p>
            <p>
              From resume screening to final interview, every step is structured to ensure alignment and success.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6   /* ✅ MOBILE FIX */
            gap-6 md:gap-8
            mb-16
          ">

            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <div key={index} className="flex flex-col items-center text-center">

                  {/* DOT */}
                  <div className="w-8 h-8 flex items-center justify-center mb-3">

                    {isCompleted && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <Check className="text-white w-3 h-3" />
                      </motion.div>
                    )}

                    {isActive && (
                      <motion.div
                        className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.7 }}
                      />
                    )}

                    {!isActive && !isCompleted && (
                      <div className="w-5 h-5 bg-blue-300 rounded-full" />
                    )}
                  </div>

                  {/* CARD */}
                  <motion.div
                    animate={{
                      y: isActive ? -4 : 0,
                      scale: isActive ? 1.03 : 1
                    }}
                    className="bg-white p-3 rounded-lg shadow-sm w-full"
                  >
                    <h3 className="text-xs md:text-sm font-medium text-[#2f466f]">
                      {step}
                    </h3>
                  </motion.div>

                </div>
              );
            })}
          </div>

          {/* DESCRIPTION */}
          <div className="text-gray-600 text-sm sm:text-base space-y-3 text-center">
            <p>
              Each stage is designed to evaluate not only skills but also your potential to thrive within our culture.
            </p>
            <p>
              We keep the process clear, structured, and focused on your success.
            </p>
          </div>

        </div>
      </section>

      {/* ========================= */}
      {/* 1-DAY HIRING */}
      {/* ========================= */}
      <section className="py-14 md:py-20 px-4 sm:px-6 md:px-10 bg-white">

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 items-center">

          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src={recruiterImg}
              alt="Recruiter"
              className="
                w-full
                max-w-[280px] sm:max-w-[320px] md:max-w-[360px]   /* ✅ SMALLER */
                rounded-xl
                shadow-md
                object-cover
              "
            />
          </div>

          {/* TEXT */}
          <div>
            <div className="
              bg-blue-50
              border border-blue-200
              p-5 md:p-6
              rounded-xl
              shadow-sm
            ">

              <h3 className="text-lg md:text-xl font-semibold text-[#2f466f] mb-2 text-center md:text-left">
                ⚡ 1-Day Hiring Process
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center md:text-left">
                In a fast-moving BPO environment, we understand the importance of timely hiring. Callmax PH offers a 1-Day Hiring Process designed to accelerate candidate onboarding.
              </p>

              <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed text-center md:text-left">
                Qualified applicants can complete interviews, assessments, and final evaluations within a single day, ensuring faster turnaround times and quicker hiring decisions.
              </p>
              

            </div>
          </div>

        </div>
      </section>
    </>
  );
}