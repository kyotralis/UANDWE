import { useState } from "react";
import america from "../assets/images/america.png";
import india from "../assets/images/india.png";
import china from "../assets/images/china.png";


export default function ContactUs() {
  const [activeRegion, setActiveRegion] = useState("AMERICA");

  const regions = ["AMERICA", "INDIA", "CHINA"];

  const regionData = {
    AMERICA: {
      label: "REGION_ALPHA_US",
      city: "San Jose, USA",
      address: ["2535 Amaryl Dr", "San Jose, CA 95132"],
      mapLink: "https://www.google.com/maps?q=2535+Amaryl+Dr+San+Jose",
      image: america,
      dot: { cx: 150, cy: 90 },
    },
    INDIA: {
      label: "REGION_ALPHA_IN",
      city: "Bangalore, India",
      address: [
        "Novel MSR Building",
        "Marathahalli Village",
        "Bengaluru, Karnataka 560037",
      ],
      mapLink: "https://www.google.com/maps?q=Novel+MSR+Building+Marathahalli+Bangalore",
      image: india,
      dot: { cx: 430, cy: 95 },
    },
    CHINA: {
      label: "REGION_ALPHA_CN",
      city: "Shanghai, China",
      address: [
        "张江路 665号 德宏大厦9楼908",
        "浦东新区 上海市",
        "邮政编码: 201203",
      ],
      mapLink: "https://www.google.com/maps?q=Zhangjiang+Road+665+Shanghai",
      image: china,
      dot: { cx: 490, cy: 78 },
    },
  };

  const active = regionData[activeRegion];

  return (
    <section className="relative min-h-screen bg-[#0b0b12] px-4 sm:px-6 md:px-[5%] py-16 sm:py-20 md:py-24 lg:py-30 xl:pb-30 overflow-hidden">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
        <h1 className="font-black leading-[1.1] sm:leading-[1.08] md:leading-[1.05] text-[clamp(32px,8vw,80px)]">
          CONTACT{" "}
          <span className="text-orange-500 inline-block sm:pl-3 md:pl-5">
            US
          </span>
        </h1>

        <p className="mt-4 sm:mt-5 md:mt-6 text-white/50 text-xs sm:text-sm max-w-md leading-relaxed">
          Connect with our global engineering hubs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {/* LEFT MAP PANEL */}
        <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-[#141414] overflow-hidden flex flex-col">
          {/* REGION SWITCH */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 border-b border-white/10">
            <span className="text-white/40 text-[10px] tracking-[0.25em] font-mono text-center sm:text-left">
              GLOBAL NODES
            </span>

            <div className="flex gap-1.5 sm:gap-2 justify-center sm:justify-start flex-wrap">
              {regions.map((r) => (
                <button
                  key={r}
                  onClick={() => setActiveRegion(r)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold cursor-pointer tracking-wide border transition-all duration-300 whitespace-nowrap ${
                    activeRegion === r
                      ? "bg-orange-500 text-black border-orange-500 shadow-md shadow-orange-500/30"
                      : "border-white/30 text-white/80 hover:border-orange-400 hover:text-orange-400 hover:bg-orange-500/10"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* MAP IMAGE (CLICKABLE) */}
          <div
            onClick={() => window.open(active.mapLink, "_blank")}
            className="relative flex-1 cursor-pointer group min-h-[200px] sm:min-h-[250px] md:min-h-[300px]"
          >
            <img
              src={active.image}
              alt="map"
              className="w-full h-full object-cover brightness-[0.6] contrast-[0.9] group-hover:brightness-[1] group-hover:contrast-[1] transition-all duration-500 ease-out"
            />

            {/* PIN BUTTON */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(active.mapLink, "_blank");
              }}
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition cursor-pointer"
              aria-label="Open map location"
            >
              <span className="text-base sm:text-lg md:text-xl">📍</span>
            </div>
          </div>

          {/* INFO */}
          <div className="px-4 sm:px-5 py-3 sm:py-4 border-t border-white/10">
            <p className="text-orange-400 text-[10px] sm:text-xs font-mono">
              {active.label}
            </p>

            <p className="text-white font-bold mt-1 text-sm sm:text-base">
              {active.city}
            </p>

            <div className="mt-1 space-y-0.5">
              {active.address.map((line, i) => (
                <p key={i} className="text-white/40 text-xs sm:text-sm">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative rounded-xl sm:rounded-2xl border border-white/10 bg-[#141414] p-4 sm:p-6 md:p-8 overflow-hidden">
          {/* subtle glow */}
          <div
            className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500
            bg-[radial-gradient(circle_at_80%_20%,rgba(255,115,0,0.12),transparent_60%)] pointer-events-none"
          />

          <h2 className="text-white text-center font-bold text-lg sm:text-xl mb-6 sm:mb-7 md:mb-8 tracking-tight">
            Connect With Us
          </h2>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* NAME */}
            <div>
              <label className="text-[10px] sm:text-xs text-white/40 tracking-widest mb-1.5 sm:mb-2 block">
                NAME
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/60 border border-white/10 rounded-lg
                text-white placeholder-white/30 text-sm sm:text-base
                focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
                transition-all duration-300"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-[10px] sm:text-xs text-white/40 tracking-widest mb-1.5 sm:mb-2 block">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/60 border border-white/10 rounded-lg
                text-white placeholder-white/30 text-sm sm:text-base
                focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
                transition-all duration-300"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-[10px] sm:text-xs text-white/40 tracking-widest mb-1.5 sm:mb-2 block">
                MESSAGE
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/60 border border-white/10 rounded-lg
                text-white placeholder-white/30 text-sm sm:text-base
                focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
                transition-all duration-300 resize-none"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            className="
            mt-6 sm:mt-7 md:mt-8 w-full py-3 sm:py-3.5 md:py-4 rounded-full font-semibold tracking-wide text-sm sm:text-base
            bg-gradient-to-r from-orange-500 to-orange-600
            hover:from-orange-400 hover:to-orange-500
            transition-all duration-300
            shadow-[0_10px_30px_rgba(255,115,0,0.25)]
            hover:shadow-[0_20px_60px_rgba(255,115,0,0.45)]
            hover:-translate-y-[2px]
            active:translate-y-0
            "
          >
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}