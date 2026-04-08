import { motion } from "framer-motion";
import { Eye, Target, BookOpen, ArrowUpRight, Settings, CheckCircle } from "lucide-react";

const cards = [
  {
    icon: <Eye size={20} />,
    title: "Vision",
    desc: "To become the primary nervous system for the next industrial revolution.",
   
  },
  {
    icon: <Target size={20} />,
    title: "Mission",
    desc: "We engineer high-fidelity hardware solutions that dissolve the barrier between silicon and reality.",
   
    
  },
  {
    icon: <BookOpen size={20} />,
    title: "Origin",
    desc: "From a small research lab in Zurich to a global leader in kinetic hardware architecture.",
  
   
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden bg-[#0b0b12] text-white px-[5%] py-[10%]"
    >
      {/* ROTATING BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[1100px] h-[1100px]"
          style={{ transformOrigin: "center center" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        >
          <img
            src="/src/assets/images/rotate.png"
            alt=""
            className="w-full h-full object-contain opacity-[0.3]"
          />
        </motion.div>

        {/* Radial fade overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_35%,#0b0b12_80%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
       

        {/* Heading */}
        <h1 className="text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[1.05] tracking-tight mb-20">
          Shaping <br />
          tomorrow's <br />
          technology,{" "}
          <span className="relative inline-block">
           <span className="relative z-10 text-orange-500 ">
  today
</span>
            <span
              className="absolute inset-0 bg-orange-500 blur-2xl opacity-40 z-0"
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className={`
                relative rounded-2xl p-7 min-h-[300px] flex flex-col
                transition-all duration-500 group cursor-pointer
                ${
                  card.highlight
                    ? "border border-orange-500/30 bg-[linear-gradient(145deg,rgba(255,107,26,0.07),rgba(255,255,255,0.02))]"
                    : "border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))]"
                }
                backdrop-blur-2xl
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.07),0_24px_64px_rgba(0,0,0,0.5)]
                hover:border-orange-500/40
                hover:shadow-[0_0_50px_rgba(255,107,26,0.12)]
              `}
            >
              {/* Top gradient shine */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.07] via-transparent to-transparent opacity-100 pointer-events-none" />

              {/* Icon circle */}
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center mb-6
                  ${
                    card.highlight
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                      : "bg-white/8 text-gray-300 border border-white/10"
                  }
                `}
              >
                {card.icon}
              </div>

              {/* EST tag */}
              {/* {card.tag && (
                <span className="text-[10px] bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-3 font-semibold tracking-wider w-fit">
                  {card.tag}
                </span>
              )} */}

              {/* Title */}
              <h3 className="text-[1.35rem] font-bold mb-3 tracking-tight">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed flex-1">
                {card.desc}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/[0.06]">
                <span className="text-[10px] tracking-[0.18em] text-gray-500 uppercase font-medium">
                  {card.footer}
                </span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors duration-300">
                  {card.footerIcon}
                </span>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] rounded-b-2xl bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}