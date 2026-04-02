export default function CTASection() {
  return (
    <section className="py-20 text-center px-4 bg-white border-t-2 border-b-2 border-blue-300">

      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#2f466f]">
        Ready to grow your career with us?
      </h2>

      <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
        Take the next step and join a team that values your growth, supports your journey, and celebrates your success.
      </p>

      <button
        onClick={() =>
          window.open("https://quickapply.cmxph.com", "_blank")
        }
        className="
          text-lg
          bg-blue-600 text-white px-8 py-4 rounded-full
          hover:bg-blue-700 hover:scale-105
          transition-all duration-300 shadow-lg
        "
      >
        Apply Now
      </button>

    </section>
  );
}