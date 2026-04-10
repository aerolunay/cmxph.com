import { useState } from "react";

import logo from "../assets/cmxlogo.png";
import phFlag from "../assets/phFlag.png";

import Hero from "./sections/Hero";
import LifeAtCMX from "./sections/LifeAtCMX";
import WhyJoinCarousel from "./sections/WhyJoinCarousel";
import RecruitmentProcess from "./sections/RecruitmentProcess";
import CTASection from "./sections/CTASection";
import Footer from "./sections/Footer";

import { Menu, X } from "lucide-react";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HEADER ================= */}
      <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4">

        {/* LEFT */}
        <div className="flex items-center gap-2 sm:gap-3">

          <img src={logo} alt="Callmax" className="h-8 sm:h-9 md:h-10" />

          <div className="flex items-center gap-1 sm:gap-2">
            <span className="font-semibold text-sm sm:text-base md:text-lg">
              Philippines
            </span>
            <img src={phFlag} alt="PH Flag" className="h-3 sm:h-4 w-auto" />
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* APPLY BUTTON (HIDDEN ON SMALL) */}
          <button className="hidden md:inline-block bg-blue-900 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition text-sm">
            Apply Now
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

      </div>

      {/* ================= NAVBAR ================= */}

      {/* DESKTOP NAV */}
      <div className="w-full bg-[#2f466f] text-white hidden md:flex justify-center py-3">
        <nav className="flex gap-8 lg:gap-10 text-sm font-medium">
          <a href="#life-at-cmx" className="hover:text-blue-300">Life at CMX</a>
          <a href="#why-join-cmx" className="hover:text-blue-300">Why Join CMX?</a>
          <a href="#recruitment-process" className="hover:text-blue-300">Recruitment Process</a>
          <a href="#contact-us" className="hover:text-blue-300">Contact Us</a>
        </nav>
      </div>

      {/* MOBILE NAV (DROPDOWN) */}
      {menuOpen && (
        <div className="md:hidden bg-[#2f466f] text-white px-6 py-6 space-y-4">

          <a href="#life-at-cmx" onClick={() => setMenuOpen(false)} className="block">Life at CMX</a>
          <a href="#why-join-cmx" onClick={() => setMenuOpen(false)} className="block">Why Join CMX?</a>
          <a href="#recruitment-process" onClick={() => setMenuOpen(false)} className="block">Recruitment Process</a>
          <a href="#contact-us" onClick={() => setMenuOpen(false)} className="block">Contact Us</a>

          {/* APPLY BUTTON MOBILE */}
          <button className="w-full mt-4 bg-white text-[#2f466f] py-2 rounded-full font-semibold">
            Apply Now
          </button>

        </div>
      )}

      {/* ================= SECTIONS ================= */}
      <Hero />
      <LifeAtCMX />
      <WhyJoinCarousel />
      <RecruitmentProcess />
      <CTASection />
      <Footer />

    </div>
  );
}