import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import careerGrowthImg from "../../assets/careerGrowthImg.png";
import supportiveLeadershipImg from "../../assets/SupportiveLeadershipImg.png";
import continuousLearningImg from "../../assets/continuousLearningImg.png";
import employeeRecognitionImg from "../../assets/employeeRecognitionImg.png";
import stableOpportunitiesImg from "../../assets/stableOpportunitiesImg.png";
import workLifeBalanceImg from "../../assets/workLifeBalanceImg.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WhyJoinCarousel() {

  const slides = [
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const isEven = currentSlide % 2 === 1;

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // 🔥 SWIPE LOGIC
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;

    const threshold = 50;

    if (touchStartX - touchEndX > threshold) {
      nextSlide(); // swipe left
    }

    if (touchEndX - touchStartX > threshold) {
      prevSlide(); // swipe right
    }
  };

  return (
    <section
      id="why-join-cmx"
      className="py-16 px-3 bg-white md:h-[650px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#2f466f] mb-10">
        Why Join Callmax PH?
      </h2>

      <div className="max-w-[1300px] mx-auto relative">

        {/* ❌ HIDDEN ON MOBILE */}
        {/* LEFT */}
        <div
          onClick={prevSlide}
          className={`
            hidden md:flex
            absolute top-1/2 -translate-y-1/2 z-50
            left-0 -translate-x-[100px]
            w-16 h-16 items-center justify-center
            cursor-pointer group
            transition-all duration-300
            ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          `}
        >
          <div className="
            relative w-full h-full rounded-full flex items-center justify-center

            bg-blue-600
            border border-white/40
            shadow-[0_15px_50px_rgba(37,99,235,0.6)]

            group-hover:scale-110
            group-hover:bg-blue-700
            group-active:scale-95

            transition-all duration-300
          ">

            {/* GLOW */}
            <div className="
              absolute inset-0 rounded-full
              bg-blue-500 blur-2xl opacity-60
              group-hover:opacity-90
              transition
            "></div>

            {/* ICON (DIRECT — NO SPAN) */}
            <ChevronLeft
              size={30}
              strokeWidth={3}
              className="relative text-white"
            />

          </div>
        </div>

        {/* RIGHT */}
        <div
          onClick={nextSlide}
          className={`
            hidden md:flex
            absolute top-1/2 -translate-y-1/2 z-50
            right-0 translate-x-[100px]
            w-16 h-16 items-center justify-center
            cursor-pointer group
            transition-all duration-300
            ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          `}
        >
          <div className="
            relative w-full h-full rounded-full flex items-center justify-center

            bg-blue-600
            border border-white/40
            shadow-[0_15px_50px_rgba(37,99,235,0.6)]

            group-hover:scale-110
            group-hover:bg-blue-700
            group-active:scale-95

            transition-all duration-300
          ">

            {/* GLOW */}
            <div className="
              absolute inset-0 rounded-full
              bg-blue-500 blur-2xl opacity-60
              group-hover:opacity-90
              transition
            "></div>

            {/* ICON */}
            <ChevronRight
              size={30}
              strokeWidth={3}
              className="relative text-white"
            />

          </div>
        </div>

        {/* CONTENT + SWIPE */}
        <div
          className="max-w-[1500px] mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid md:grid-cols-2 gap-24 items-center">

            {/* IMAGE */}
            <div className={`flex justify-center ${isEven ? "md:order-2" : "md:order-1"}`}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={slides[currentSlide].image}
                  className="w-full max-w-[520px] rounded-3xl shadow-xl"
                  initial={{ x: direction > 0 ? 120 : -120, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? -120 : 120, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>

            {/* TEXT */}
            <div className={`flex justify-center text-lg ${isEven ? "md:order-1" : "md:order-2"}`}>
              <div className="max-w-[550px] w-full text-center md:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide + "-text"}
                    initial={{ x: direction > 0 ? 120 : -120, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction > 0 ? -120 : 120, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#2f466f] mb-4">
                      {slides[currentSlide].title}
                    </h3>

                    <div className="space-y-3 text-gray-700 leading-relaxed">
                      {slides[currentSlide].content.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* INDICATORS */}
      <div className="flex justify-center mt-10 gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-6 rounded-full cursor-pointer transition ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </section>
  );
}