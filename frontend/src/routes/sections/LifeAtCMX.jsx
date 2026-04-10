import lifeAtCMXImg from "../../assets/lifeAtCMXImg.jpg";

export default function LifeAtCMX() {
  return (
    <section
      id="life-at-cmx"
      className="
        py-16 md:py-24
        px-4 sm:px-6 md:px-10   /* ✅ CONSISTENT PADDING */
        bg-blue-50              /* ✅ SOFTER BACKGROUND */
      "
    >

      <div className="
        grid md:grid-cols-2
        gap-10 md:gap-20        /* ✅ LESS EXTREME GAP */
        items-center
        max-w-5xl mx-auto       /* ✅ NARROWER */
      ">

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative">

            {/* SUBTLE BACK LAYER */}
            <div className="
              absolute -top-3 -left-3
              w-full h-full
              bg-blue-200/60
              rounded-2xl
            "></div>

            {/* IMAGE */}
            <img
              src={lifeAtCMXImg}
              alt="Life at CMX"
              className="
                relative
                w-full
                max-w-[360px] sm:max-w-[420px] md:max-w-[460px]  /* ✅ SMALLER */
                rounded-2xl
                shadow-md                                         /* ✅ LIGHTER */
                object-cover
                border border-white
              "
            />

          </div>
        </div>

        {/* TEXT */}
        <div className="max-w-lg text-center md:text-left">

          <h2 className="
            text-2xl md:text-3xl     /* ✅ MATCH WHY JOIN */
            font-semibold
            text-[#2f466f]
            mb-4 md:mb-5
          ">
            Life at CMX
          </h2>

          <div className="
            space-y-3
            text-gray-600
            text-sm sm:text-base     /* ✅ MATCH SITE */
            leading-relaxed
          ">
            <p>At CMX, work isn’t just about hitting targets—it’s about building a culture where people genuinely thrive.</p>
            <p>We take pride in our diverse and inclusive environment, bringing together talent from different backgrounds, experiences, and perspectives.</p>
            <p>Unlike traditional BPO setups, CMX is designed to be flexible, modern, and people-first—empowering teams with autonomy and creativity.</p>
            <p>What truly sets CMX apart is our family-like culture—where colleagues become friends and leaders are invested in your growth.</p>
            <p>We promote work-life balance and create an environment where people enjoy coming to work every day.</p>
            <p>At CMX, it’s not just a job—it’s a community where you can grow, belong, and enjoy the journey.</p>
          </div>

        </div>

      </div>

    </section>
  );
}