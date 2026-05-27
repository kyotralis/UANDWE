import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, CircuitBoard, Brain, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

import hardwareImg from "../assets/images/hardware.png";
import embeddedSwImg from "../assets/images/embeddedsw.png";
import applicationImg from "../assets/images/application.png";
import aimlImg from "../assets/images/aiml.png";

/* DATA */
const AI_ML = {
  icon: <Brain size={20} />,
  title: "AI & ML",
  desc: "Deploying neural networks directly onto edge hardware with quantized optimization for real-time inference at scale.",
  image: aimlImg,
};

const HARDWARE = {
  icon: <Cpu size={20} />,
  title: "Hardware Design",
  desc: "Next-gen 3nm FinFET architecture with ultra-high transistor density for high-performance compute workloads.",
  image: hardwareImg,
};

const EMBEDDED_SW = {
  icon: <CircuitBoard size={20} />,
  title: "Embedded SW",
  desc: "Custom firmware and hardware abstraction layers designed for ultra-low power reliability in critical environments.",
  image: embeddedSwImg,
};

const APPLICATION = {
  icon: <Layers size={20} />,
  title: "Application",
  desc: "Scalable application frameworks engineered for industrial-grade reliability, real-time data processing and systems integration.",
  image: applicationImg,
};

const CARDS = [AI_ML, HARDWARE, EMBEDDED_SW, APPLICATION];

/* CARD */
function Card({ data, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative rounded-xl sm:rounded-2xl border border-white/[0.07]
        shadow-[0_4px_25px_rgba(0,0,0,0.6)]
        overflow-hidden cursor-pointer
        p-5 sm:p-6 flex flex-col justify-between min-h-[220px]
        bg-[#161619]
        hover:border-orange-500/30 transition-colors duration-300"
    >
      <div>
        <div className="w-10 h-10 rounded-lg bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-orange-400 mb-4">
          {data.icon}
        </div>

        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          {data.title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed">
          {data.desc}
        </p>
      </div>
    </div>
  );
}

/* SCROLLING CARDS — scroll upward past the sticky heading */
function ScrollingCards({ navigate }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Cards travel upward as you scroll — they start below and move up
  const y = useTransform(scrollYProgress, [0, 1], ["60px", "-80px"]);

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        style={{ y }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
      >
        {CARDS.map((card, i) => {
          const routes = ["/services/aiml", "/services/hardware", "/services/embedded", "/services/application"];
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Card data={card} onClick={() => navigate(routes[i])} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* MAIN */
export default function Services() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Cards grid moves up at a slower rate than scroll — parallax
  // So cards appear to slide up "behind" the sticky heading
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0px", "-120px"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0b0b12] text-white px-4 sm:px-6 md:px-[5%] py-14 sm:py-20 md:py-24 overflow-hidden"
    >


      <div className="relative z-10 max-w-7xl mx-auto">

        {/*
          STICKY HEADER — stays in place while cards scroll behind it.
          z-20 ensures it sits above the cards grid (z-10).
          The bg gradient fades from the section background color to transparent,
          so cards appear to "disappear" under the heading as they scroll past.
        */}
        <div className="sticky top-0 z-20 pb-6 pt-2">
          {/* Fade mask so cards gracefully go "behind" the heading */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b0b12] to-transparent pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[clamp(1.8rem,6vw,4.5rem)] font-extrabold leading-tight mb-4">
              <span>CORE </span>
              <span className="text-orange-500">SERVICES</span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 max-w-full sm:max-w-lg">
              Architecting the future of computational infrastructure through bespoke silicon engineering and integrated autonomous intelligence.
            </p>
          </motion.div>
        </div>

        {/* CARDS — z-10, scroll upward behind the sticky heading */}
        <motion.div style={{ y: cardsY }} className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
            {CARDS.map((card, i) => {
              const routes = [
                "/services/aiml",
                "/services/hardware",
                "/services/embedded",
                "/services/application",
              ];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  onClick={() => navigate(routes[i])}
                >
                  <Card data={card} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}