import { motion } from "framer-motion";
import collabImg from "../../assets/collab.jpg";
import collabImgsm from "../../assets/collabsm.jpg";

export default function Hero() {
  return (
    <section className="
      grid md:grid-cols-2 items-center
      px-4 sm:px-6 md:px-10   /* ✅ FIXED MOBILE PADDING */
      py-6 md:py-10           /* ✅ LESS TALL */
      gap-6 md:gap-10
      bg-white
      max-w-[1200px] mx-auto  /* ✅ SLIGHTLY NARROWER */
    ">

      {/* LEFT */}
      <div className="p-2 md:p-4 min-w-0">

        {/* TAG */}
        <div className="flex justify-center md:justify-start">
          <div className="
            border border-blue-300 text-blue-600
            px-3 py-1 rounded-full
            text-xs sm:text-sm md:text-base   /* ✅ SMALLER */
            mb-3 md:mb-4
          ">
            Careers at Callmax Solutions Philippines
          </div>
        </div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl   /* ✅ BALANCED */
            font-semibold
            leading-tight
            mb-4 md:mb-5
            text-center md:text-left
          "
        >
          Build Your Career <br />
          With Purpose
        </motion.h1>

        {/* DESCRIPTION */}
        <p className="
          text-gray-600
          text-sm sm:text-base md:text-base   /* ✅ MATCH WHY JOIN */
          mb-5 md:mb-6
          max-w-md md:max-w-lg
          text-center md:text-left
        ">
          Join a team that values growth, innovation, and people-first culture.
          At Callmax PH, we don’t just offer jobs — we build careers.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">

          <button
            onClick={() => window.open("/careers/jobs", "_blank")}
            className="
              bg-blue-600 text-white
              text-sm md:text-base           /* ✅ SMALLER BUTTON TEXT */
              px-5 py-2.5                    /* ✅ LESS BULKY */
              rounded-full
              hover:bg-blue-700
              transition
            "
          >
            View Open Positions
          </button>

        </div>
      </div>

      {/* RIGHT */}
      <div className="relative flex justify-center md:justify-end items-center min-w-0">

        {/* DESKTOP IMAGE */}
        <img
          src={collabImg}
          alt="Team Collaboration"
          className="
            hidden md:block
            w-full
            max-w-[520px]       /* ✅ SMALLER IMAGE */
            object-contain
            md:translate-x-4    /* ✅ LESS OFFSET */
          "
        />

        {/* MOBILE IMAGE */}
        <img
          src={collabImgsm}
          alt="Team Collaboration"
          className="
            block md:hidden
            w-full
            max-w-[320px]       /* ✅ SMALLER MOBILE IMAGE */
            object-contain
          "
        />

      </div>

    </section>
  );
}