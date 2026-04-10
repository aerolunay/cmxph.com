export default function CTASection() {
  return (
    <section className="
      py-14 md:py-20               /* ✅ LESS BULKY */
      px-4 sm:px-6 md:px-10       /* ✅ CONSISTENT PADDING */
      text-center
      bg-white
      border-t border-b border-blue-200  /* ✅ SOFTER BORDER */
    ">

      {/* TITLE */}
      <h2 className="
        text-2xl md:text-3xl       /* ✅ SMALLER */
        font-semibold
        mb-3 md:mb-4
        text-[#2f466f]
      ">
        Ready to grow your career with us?
      </h2>

      {/* DESCRIPTION */}
      <p className="
        text-gray-600
        text-sm sm:text-base       /* ✅ MATCH WHY JOIN */
        mb-6 md:mb-8
        max-w-lg mx-auto
        leading-relaxed
      ">
        Take the next step and join a team that values your growth,
        supports your journey, and celebrates your success.
      </p>

      {/* BUTTON */}
      <button
        onClick={() =>
          window.open("https://quickapply.cmxph.com", "_blank")
        }
        className="
          text-sm md:text-base     /* ✅ SMALLER */
          bg-blue-600 text-white
          px-6 py-2.5              /* ✅ LESS BULKY */
          rounded-full
          hover:bg-blue-700 hover:scale-105
          transition-all duration-300
          shadow-md                /* ✅ LIGHTER SHADOW */
        "
      >
        Apply Now
      </button>

    </section>
  );
}