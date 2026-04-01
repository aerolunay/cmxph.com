import logo from "../../assets/cmxlogo.png";
import emailIcon from "../../assets/emailIcon.png";
import locationIcon from "../../assets/locationIcon.png";
import quickApplyQR from "../../assets/quickapplyqr.png";

export default function Footer() {
  return (
    <footer id="contact-us" className="bg-gray-200 pt-16">

      <div className="grid md:grid-cols-2 gap-12 px-6 md:px-8 md:mx-48 items-start text-center md:text-left">

        {/* LEFT */}
        <div>
          <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-2 md:gap-3 mb-6">
            <img src={logo} alt="Callmax" className="h-10" />
            <span className="text-2xl font-semibold text-[#2f466f]">
              Philippines
            </span>
          </div>

          <div className="max-w-lg md:max-w-2xl mx-auto md:mx-0 md:pl-20">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Callmax Solutions, founded in New York around 2012 with roots in earlier outsourcing operations, expanded to the Philippines as part of its global growth strategy. Its Philippine operations, primarily based in Cavite, serve as a key delivery hub.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              Today, Callmax serves 75+ clients across multiple industries, combining a skilled workforce with AI-driven systems to scale operations efficiently.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:pl-24">

          <div className="grid md:grid-cols-[1fr_160px] gap-10 items-start">

            {/* CONTACT INFO */}
            <div>

              <h3 className="text-lg font-semibold mb-6 text-[#2f466f]">
                Contact Info
              </h3>

              <div className="flex flex-col gap-5 text-sm items-center md:items-start">

                {/* EMAIL */}
                <a
                  href="mailto:apply@callmaxsolutions.com"
                  className="flex items-center gap-3 hover:text-blue-600 transition"
                >
                  <img src={emailIcon} className="h-5 w-5" />
                  <span>apply@callmaxsolutions.com</span>
                </a>

                {/* LOCATION */}
                <a
                  href="https://maps.app.goo.gl/itRGpmVQ8o3qJKnr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-blue-600 transition text-center md:text-left"
                >
                  <img src={locationIcon} className="h-5 w-5 mt-1" />
                  <span>
                    T. De Castro Building, Aguinaldo Hwy <br />
                    Imus, Cavite 4103
                  </span>
                </a>

                {/* SOCIALS */}
                <div className="flex gap-5 mt-4">

                  <a href="https://www.facebook.com/callmaxph" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                      className="h-5 w-5 hover:opacity-70 transition"
                      style={{ filter: "invert(31%) sepia(17%) saturate(1483%) hue-rotate(182deg) brightness(92%) contrast(92%)" }}
                    />
                  </a>

                  <a href="https://www.linkedin.com/company/callmaxph/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                      className="h-5 w-5 hover:opacity-70 transition"
                      style={{ filter: "invert(31%) sepia(17%) saturate(1483%) hue-rotate(182deg) brightness(92%) contrast(92%)" }}
                    />
                  </a>

                  <a href="https://www.instagram.com/callmaxph" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                      className="h-5 w-5 hover:opacity-70 transition"
                      style={{ filter: "invert(31%) sepia(17%) saturate(1483%) hue-rotate(182deg) brightness(92%) contrast(92%)" }}
                    />
                  </a>

                </div>
              </div>

            </div>

            {/* QR CARD */}
            <div className="flex justify-center md:justify-end">

              <a
                href="https://quickapply.cmxph.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center w-[140px]"
              >
                <img
                  src={quickApplyQR}
                  alt="Quick Apply QR"
                  className="w-28 h-28 object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <span className="mt-3 text-xs text-gray-600 group-hover:text-blue-600 transition">
                  Scan to Apply
                </span>
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 bg-[#2f466f] text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Callmax Solutions Philippines
      </div>

    </footer>
  );
}