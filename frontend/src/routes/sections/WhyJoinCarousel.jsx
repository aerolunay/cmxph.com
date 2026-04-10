import { motion } from "framer-motion";

import careerGrowthImg from "../../assets/careerGrowthImg.jpg";
import supportiveLeadershipImg from "../../assets/SupportiveLeadershipImg.jpg";
import continuousLearningImg from "../../assets/continuousLearningImg.jpg";
import employeeRecognitionImg from "../../assets/employeeRecognitionImg.jpg";
import stableOpportunitiesImg from "../../assets/stableOpportunitiesImg.jpg";
import workLifeBalanceImg from "../../assets/workLifeBalanceImg.jpg";

export default function WhyJoinSection() {

  const items = [
    {
      title: "Career Growth",
      image: careerGrowthImg,
      content: [
        "At Callmax PH, career growth isn’t just a promise—it’s a structured and supported journey.",
        "We invest in our people by creating real opportunities for advancement, continuous learning, and skill development.",
        "From hands-on training to leadership development, we ensure every team member has a clear path forward.",
        "At CMX, your growth is our priority—and your success drives our collective success."
      ]
    },
    {
      title: "Supportive Leadership",
      image: supportiveLeadershipImg,
      content: [
        "At CMX, leadership is not about hierarchy—it’s about guidance, support, and empowerment.",
        "Our leaders are approachable, hands-on, and genuinely invested in your growth.",
        "Through continuous coaching and mentorship, we provide clarity, direction, and confidence.",
        "You grow with leaders who are committed to your success."
      ]
    },
    {
      title: "Continuous Learning",
      image: continuousLearningImg,
      content: [
        "Growth never stops at CMX.",
        "We provide structured training, real-time coaching, and ongoing development opportunities.",
        "We support both role mastery and career progression.",
        "Learning is embedded in your everyday journey."
      ]
    },
    {
      title: "Employee Recognition",
      image: employeeRecognitionImg,
      content: [
        "At CMX, we believe recognition is a powerful driver of motivation and growth.",
        "We celebrate individual achievements and team milestones in meaningful ways.",
        "Our culture ensures every contribution is seen, valued, and appreciated.",
        "Recognition fuels engagement, confidence, and continued success."
      ]
    },
    {
      title: "Stable Opportunities",
      image: stableOpportunitiesImg,
      content: [
        "CMX offers a stable and forward-moving environment where careers grow with confidence.",
        "Our diverse client portfolio creates consistent opportunities for development.",
        "We provide clear career paths supported by real progression.",
        "Stability here means long-term growth, not just staying—it’s moving forward."
      ]
    },
    {
      title: "Work-Life Balance",
      image: workLifeBalanceImg,
      content: [
        "At CMX, we understand that performance thrives when life is balanced.",
        "We promote a culture where work supports your well-being—not the other way around.",
        "Our teams are encouraged to recharge, grow personally, and stay fulfilled.",
        "Balanced people bring their best energy, focus, and performance every day."
      ]
    }
  ];

  return (
    <section
      id="why-join-cmx"
      className="bg-[#f8fafc] py-16 md:py-24 px-4 sm:px-6 md:px-10"
    >

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#2f466f]">
          Why Join Callmax PH?
        </h2>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          A workplace built for growth, balance, and long-term success.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto"> {/* narrower */}

        {items.map((item, index) => {
          const reverse = index % 2 === 1;

          return (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-6 md:gap-10 items-center mb-14 md:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >

              {/* IMAGE */}
              <div className={`flex justify-center ${reverse ? "md:order-2" : ""}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full 
                    max-w-[260px] sm:max-w-[300px] md:max-w-[340px]  /* 🔥 SMALLER */
                    rounded-xl md:rounded-2xl
                    shadow-sm
                    object-cover
                    transition duration-500 hover:scale-105
                  "
                />
              </div>

              {/* TEXT */}
              <div className={`text-center md:text-left ${reverse ? "md:order-1" : ""}`}>
                <h3 className="text-xl md:text-2xl font-semibold text-[#2f466f] mb-2 md:mb-3">
                  {item.title}
                </h3>

                <div className="space-y-2 text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}