import logo from "../../assets/cmxlogo.png";
import emailIcon from "../../assets/emailIcon.png";
import locationIcon from "../../assets/locationIcon.png";
import quickApplyQR from "../../assets/quickapplyqr.png";

export default function Footer() {
  return (
    <footer id="contact-us" className="bg-gray-100 pt-14 md:pt-20">

      <div className="
        grid md:grid-cols-2
        gap-10 md:gap-16
        px-4 sm:px-6 md:px-10
        max-w-5xl mx-auto         /* ✅ FIX WIDTH */
        items-start
        text-center md:text-left
      ">

        {/* LEFT */}
        <div>

          {/* LOGO + TITLE */}
          <div className="
            flex flex-col md:flex-row
            items-center md:items-center
            justify-center md:justify-start
            gap-2 md:gap-3
            mb-4 md:mb-5
          ">
            <img src={logo} alt="Callmax" className="h-8 md:h-9" />
            <span className="text-lg md:text-xl font-semibold text-[#2f466f]">
              Philippines
            </span>
          </div>

          {/* TEXT */}
          <div className="max-w-md mx-auto md:mx-0">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
              Callmax Solutions, founded in New York around 2012, expanded to the Philippines as part of its global growth strategy.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Today, Callmax serves 75+ clients across multiple industries, combining a skilled workforce with AI-driven systems.
            </p>
          </div>

        </div>

        {/* RIGHT */}
        <div>

          <div className="grid md:grid-cols-[1fr_140px] gap-8 items-start">

            {/* CONTACT */}
            <div>

              <h3 className="text-base md:text-lg font-semibold mb-4 text-[#2f466f]">
                Contact Info
              </h3>

              <div className="flex flex-col gap-4 text-xs sm:text-sm items-center md:items-start">

                {/* EMAIL */}
                <a
                  href="mailto:apply@callmaxsolutions.com"
                  className="flex items-center gap-2 hover:text-blue-600 transition"
                >
                  <img src={emailIcon} className="h-4 w-4" />
                  <span>apply@callmaxsolutions.com</span>
                </a>

                {/* LOCATION */}
                <a
                  href="https://maps.app.goo.gl/itRGpmVQ8o3qJKnr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-blue-600 transition text-center md:text-left"
                >
                  <img src={locationIcon} className="h-4 w-4 mt-1" />
                  <span>
                    T. De Castro Building, Aguinaldo Hwy <br />
                    Imus, Cavite 4103
                  </span>
                </a>

                {/* SOCIALS */}
                <div className="flex gap-4 mt-3">

                  <a href="https://www.facebook.com/callmaxph" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                      className="h-4 w-4 hover:opacity-70 transition"
                      style={{ filter: "invert(31%) sepia(17%) saturate(1483%) hue-rotate(182deg) brightness(92%) contrast(92%)" }}
                    />
                  </a>

                  <a href="https://www.linkedin.com/company/callmaxph/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                      className="h-4 w-4 hover:opacity-70 transition"
                      style={{ filter: "invert(31%) sepia(17%) saturate(1483%) hue-rotate(182deg) brightness(92%) contrast(92%)" }}
                    />
                  </a>

                  <a href="https://www.instagram.com/callmaxph" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                      className="h-4 w-4 hover:opacity-70 transition"
                      style={{ filter: "invert(31%) sepia(17%) saturate(1483%) hue-rotate(182deg) brightness(92%) contrast(92%)" }}
                    />
                  </a>

                </div>
              </div>

            </div>

            {/* QR */}
            <div className="flex justify-center md:justify-end">

              <a
                href="https://quickapply.cmxph.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group bg-white p-3
                  rounded-xl
                  shadow-sm
                  hover:shadow-md
                  transition
                  flex flex-col items-center
                  w-[120px]              /* ✅ SMALLER */
                "
              >
                <img
                  src={quickApplyQR}
                  alt="Quick Apply QR"
                  className="w-24 h-24 object-contain group-hover:scale-105 transition"
                />

                <span className="mt-2 text-[11px] text-gray-600 group-hover:text-blue-600 transition">
                  Scan to Apply
                </span>
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 bg-[#2f466f] text-white text-center py-3 text-xs md:text-sm">
        © {new Date().getFullYear()} Callmax Solutions Philippines
      </div>

    </footer>
  );
}