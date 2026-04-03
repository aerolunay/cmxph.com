import { motion } from "framer-motion";
import collabImg from "../../assets/collab.jpg";
import collabImgsm from "../../assets/collabsm.jpg";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 items-center px-6 py-6 md:py-12 gap-6 bg-white max-w-[1300px] mx-auto">

      {/* LEFT */}
      <div className="p-4 min-w-0">
        <div className="flex justify-center md:justify-start">
          <div className="border border-blue-300 text-blue-600 px-4 py-1 rounded-full text-sm md:text-lg mb-4">
            Careers at Callmax Solutions Philippines
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
        >
          Build Your Career <br />
          With Purpose
        </motion.h1>

        <p className="text-gray-600 text-lg mb-6 max-w-lg">
          Join a team that values growth, innovation, and people-first culture. 
          At Callmax PH, we don’t just offer jobs — we build careers.
        </p>

        <div className="flex flex-col lg:flex-row gap-4">
          <button
            onClick={() => window.open("/careers/jobs", "_blank")}
            className="bg-blue-600 text-white text-lg px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            View Open Positions
          </button>

          {/* Optional secondary CTA */}
          {/*
          <button className="border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Submit Application
          </button>
          */}
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
            max-w-[720px]
            object-contain
            md:translate-x-6
          "
        />

        {/* MOBILE IMAGE */}
        <img
          src={collabImgsm}
          alt="Team Collaboration"
          className="
            block md:hidden
            w-full
            max-w-[420px]
            object-contain
          "
        />

      </div>

    </section>
  );
}