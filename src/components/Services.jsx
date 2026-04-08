import { motion } from "framer-motion";
import { Cpu, CircuitBoard, Brain, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
// ── LOCAL IMAGE IMPORTS ──
import hardwareImg from "../assets/images/hardware.png";
import embeddedSwImg from "../assets/images/embeddedsw.png";
import applicationImg from "../assets/images/application.png";
import aimlImg from "../assets/images/aiml.png";

/* ─── DATA ───────────────────────────────────────── */
const HARDWARE = {
  icon: <Cpu size={22} />,
  title: "Hardware Design",
  desc: "Next-gen 3nm FinFET architecture with ultra-high transistor density for high-performance compute workloads.",
  image: hardwareImg,
};

const EMBEDDED_SW = {
  icon: <CircuitBoard size={22} />,
  title: "Embedded SW",
  desc: "Custom firmware and hardware abstraction layers designed for ultra-low power reliability in critical environments.",
  image: embeddedSwImg,
};

const APPLICATION = {
  icon: <Layers size={22} />,
  title: "Application",
  desc: "Scalable application frameworks engineered for industrial-grade reliability, real-time data processing and systems integration.",
  image: applicationImg,
};

const AI_ML = {
  icon: <Brain size={22} />,
  title: "AI & ML",
  desc: "Deploying neural networks directly onto edge hardware with quantized optimization for real-time inference at scale.",
  image: aimlImg,
};

/* ─── CARD SHELL ─────────────────────────────────── */
function CardShell({ children, className = "", delay = 0, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.55, ease: "easeOut" }}
      className={`group relative rounded-2xl border border-white/[0.07]
        hover:border-orange-500/30
        transition-all duration-500 cursor-pointer
        shadow-[0_4px_40px_rgba(0,0,0,0.6)]
        hover:shadow-[0_25px_80px_rgba(0,0,0,0.9)]
        hover:-translate-y-2
        overflow-hidden ${className}`}
    >
    {/* ── BACKGROUND IMAGE ── */}
{image && (
  <div className="absolute inset-0 z-0">
    <img
      src={image}
      alt=""
      className="
        w-full h-full object-cover
        opacity-0
        group-hover:opacity-[0.38]
        transition-all duration-700
        scale-110 group-hover:scale-100
        blur-[1px] group-hover:blur-0
      "
    />

    {/* gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12]/80 via-[#0b0b12]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
  </div>
)}

      {/* glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
        bg-[radial-gradient(circle_at_30%_20%,rgba(255,115,0,0.15),transparent_60%)]" />

      {/* base background */}
      <div className="absolute inset-0 bg-[#161619] -z-10" />

      {/* top shine */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none z-10" />

      {/* bottom glow line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] rounded-b-2xl bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-10" />

      {/* content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

/* ─── CARD TEMPLATE ─────────────────────────────── */
function Card({ data, delay }) {
  return (
    <CardShell className="p-7 flex flex-col min-h-[300px]" delay={delay} image={data.image}>
      <div className="flex items-start justify-between mb-6">
        <div className="w-10 h-10 rounded-lg bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-orange-400
          group-hover:scale-110 transition-transform duration-300">
          {data.icon}
        </div>
      </div>

      <h3 className="text-xl font-bold tracking-tight mb-2">
        {data.title}
      </h3>

      <p className="text-sm text-gray-300 leading-relaxed flex-1">
        {data.desc}
      </p>
    </CardShell>
  );
}

/* ─── MAIN ─────────────────────────────────────── */
export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-[#0b0b12] text-white px-[5%] py-24 overflow-hidden">

      {/* background glows */}
      <div className="absolute top-0 left-0 w-[700px] h-[500px] bg-orange-600/8 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-orange-800/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-tight leading-none mb-5">
            <span className="text-white">CORE </span>
            <span className="text-orange-500">SERVICES</span>
          </h2>

          <p className="text-sm text-gray-400 max-w-lg">
            Architecting the future of computational infrastructure through bespoke silicon
            engineering and integrated autonomous intelligence.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Hardware */}
          <div onClick={() => navigate("/services/hardware")}>
            <Card data={HARDWARE} delay={0} />
          </div>

          {/* Embedded */}
          <div onClick={() => navigate("/services/embedded")}>
            <Card data={EMBEDDED_SW} delay={0.05} />
          </div>

          {/* Application */}
          <div onClick={() => navigate("/services/application")}>
            <Card data={APPLICATION} delay={0.1} />
          </div>

          {/* AI/ML (NO CLICK) */}
          <div className="cursor-not-allowed opacity-80">
            <Card data={AI_ML} delay={0.15} />
          </div>

        </div>

      </div>
    </section>
  );
}