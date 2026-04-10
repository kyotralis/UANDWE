import { motion } from "framer-motion";
import { Eye, Target, BookOpen, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: <Eye size={20} />,
    title: "Vision",
    desc: "To become the primary nervous system for the next industrial revolution.",
    footer: "PERSPECTIVE",
    footerIcon: <ArrowRight size={14} />,
    highlight: false,
  },
  {
    icon: <Target size={20} />,
    title: "Mission",
    desc: "We engineer high-fidelity hardware solutions that dissolve the barrier between silicon and reality.",
    footer: "PURPOSE",
    footerIcon: <ArrowRight size={14} />,
    highlight: false,
  },
  {
    icon: <BookOpen size={20} />,
    title: "Origin",
    desc: "From a small research lab in Zurich to a global leader in kinetic hardware architecture.",
    footer: "HISTORY",
    footerIcon: <ArrowRight size={14} />,
    highlight: false,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden bg-[#0b0b12] text-white
                 px-4 sm:px-6 md:px-8 lg:px-[5%]
                 py-12 sm:py-16 md:py-20 lg:py-[8%]"
    >
      {/* ROTATING BACKGROUND - Optimized for mobile */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] xl:w-[1100px] xl:h-[1100px]"
          style={{ transformOrigin: "center center" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        >
          <img
            src="/src/assets/images/rotate.png"
            alt=""
            className="w-full h-full object-contain opacity-20 sm:opacity-25 md:opacity-30"
            loading="lazy"
          />
        </motion.div>

        {/* Radial fade overlay - Improved gradient stops */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0b0b12_75%)] sm:bg-[radial-gradient(circle_at_center,transparent_35%,#0b0b12_80%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading - Responsive typography */}
        <h1 className="text-[clamp(2rem,8vw,6rem)] font-extrabold leading-[1.1] sm:leading-[1.08] lg:leading-[1.05] tracking-tight mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          Shaping <br className="hidden sm:block" />
          tomorrow's <br className="sm:hidden md:block" />
          technology, <span className="relative z-10 text-orange-500">today</span>
       
        </h1>

        {/* Cards Grid - Responsive gap and columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: { xs: -4, sm: -6, md: -8 } }}
              className={`
                relative rounded-xl sm:rounded-2xl 
                p-4 sm:p-5 md:p-6 lg:p-7 
                min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px] 
                flex flex-col
                transition-all duration-500 group cursor-pointer
                ${
                  card.highlight
                    ? "border border-orange-500/30 bg-[linear-gradient(145deg,rgba(255,107,26,0.07),rgba(255,255,255,0.02))]"
                    : "border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))]"
                }
                backdrop-blur-sm sm:backdrop-blur-md lg:backdrop-blur-2xl
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.07),0_12px_32px_rgba(0,0,0,0.5)]
                hover:border-orange-500/40
                hover:shadow-[0_0_30px_rgba(255,107,26,0.08)] sm:hover:shadow-[0_0_40px_rgba(255,107,26,0.1)] lg:hover:shadow-[0_0_50px_rgba(255,107,26,0.12)]
              `}
            >
              {/* Top gradient shine */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/[0.07] via-transparent to-transparent opacity-100 pointer-events-none" />

              {/* Icon circle - Responsive sizing */}
              <div
                className={`
                  w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
                  rounded-full flex items-center justify-center 
                  mb-4 sm:mb-5 md:mb-6
                  transition-all duration-300
                  group-hover:scale-105
                  ${
                    card.highlight
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                      : "bg-white/8 text-gray-300 border border-white/10"
                  }
                `}
              >
                {card.icon}
              </div>

              {/* Title - Responsive text */}
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] font-bold mb-2 sm:mb-3 tracking-tight">
                {card.title}
              </h3>

              {/* Description - Responsive text size */}
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed flex-1">
                {card.desc}
              </p>

              {/* Footer - Responsive spacing */}
              <div className="flex items-center justify-between mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t border-white/[0.06]">
                <span className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.18em] text-gray-500 uppercase font-medium">
                  {card.footer}
                </span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-all duration-300 group-hover:translate-x-1">
                  {card.footerIcon}
                </span>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] rounded-b-xl sm:rounded-b-2xl bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}