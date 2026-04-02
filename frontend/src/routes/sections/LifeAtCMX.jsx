import lifeAtCMXImg from "../../assets/lifeAtCMXImg.jpg";

export default function LifeAtCMX() {
  return (
    <section id="life-at-cmx" className="py-20 px-6 md:px-8 bg-blue-100">

      <div className="grid md:grid-cols-2 gap-16 md:gap-48 items-center max-w-7xl mx-auto">

        {/* IMAGE WITH DESIGN */}
        <div className="flex justify-center">
          <div className="relative">

            {/* BACK DESIGN LAYER */}
            <div className="
              absolute -top-4 -left-4 
              w-full h-full 
              bg-blue-300 
              rounded-3xl
            "></div>

            {/* IMAGE CARD */}
            <img
              src={lifeAtCMXImg}
              alt="Life at CMX"
              className="
                relative
                w-full max-w-[520px] 
                rounded-3xl 
                shadow-2xl 
                object-cover
                border border-white
              "
            />

          </div>
        </div>

        {/* TEXT */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2f466f] mb-6">
            Life at CMX
          </h2>

          <div className="space-y-4 text-gray-700 text-xl leading-relaxed">
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