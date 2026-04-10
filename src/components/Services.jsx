import { motion } from "framer-motion";
import { Cpu, CircuitBoard, Brain, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

import hardwareImg from "../assets/images/hardware.png";
import embeddedSwImg from "../assets/images/embeddedsw.png";
import applicationImg from "../assets/images/application.png";
import aimlImg from "../assets/images/aiml.png";

/* DATA */
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

const AI_ML = {
  icon: <Brain size={20} />,
  title: "AI & ML",
  desc: "Deploying neural networks directly onto edge hardware with quantized optimization for real-time inference at scale.",
  image: aimlImg,
};

/* CARD SHELL */
function CardShell({ children, className = "", delay = 0, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`group relative rounded-xl sm:rounded-2xl border border-white/[0.07]
        hover:border-orange-500/30
        transition-all duration-500 cursor-pointer
        shadow-[0_4px_25px_rgba(0,0,0,0.6)]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)]
        hover:-translate-y-1 sm:hover:-translate-y-2
        overflow-hidden ${className}`}
    >
      {/* IMAGE */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12]/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />
        </div>
      )}

      {/* BASE */}
      <div className="absolute inset-0 bg-[#161619] -z-10" />

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

/* CARD */
function Card({ data, delay }) {
  return (
    <CardShell
      className="p-4 sm:p-6 flex flex-col min-h-[220px] sm:min-h-[280px]"
      delay={delay}
      image={data.image}
    >
      <div className="flex items-start justify-between mb-4 sm:mb-6">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-orange-400">
          {data.icon}
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-bold mb-2">
        {data.title}
      </h3>

      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed flex-1">
        {data.desc}
      </p>
    </CardShell>
  );
}

/* MAIN */
export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-[#0b0b12] text-white px-4 sm:px-6 md:px-[5%] py-14 sm:py-20 md:py-24 overflow-hidden">

      {/* BACKGROUND GLOW (responsive) */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] md:w-[700px] h-[250px] sm:h-[350px] md:h-[500px] bg-orange-600/8 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[400px] bg-orange-800/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="text-[clamp(1.8rem,6vw,4.5rem)] font-extrabold leading-tight mb-4">
            <span>CORE </span>
            <span className="text-orange-500">SERVICES</span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 max-w-full sm:max-w-lg">
            Architecting the future of computational infrastructure through bespoke silicon engineering and integrated autonomous intelligence.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">

          <div onClick={() => navigate("/services/hardware")}>
            <Card data={HARDWARE} delay={0} />
          </div>

          <div onClick={() => navigate("/services/embedded")}>
            <Card data={EMBEDDED_SW} delay={0.05} />
          </div>

          <div onClick={() => navigate("/services/application")}>
            <Card data={APPLICATION} delay={0.1} />
          </div>

          <div className="cursor-not-allowed opacity-80">
            <Card data={AI_ML} delay={0.15} />
          </div>

        </div>
      </div>
    </section>
  );
}