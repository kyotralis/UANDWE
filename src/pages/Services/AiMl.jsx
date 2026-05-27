import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Color from "../../assets/images/color.jpg"
import CarModel from "../../assets/images/carmodel.jpg";
import carmake from "../../assets/images/carmake.gif"
import Lpdr from "../../assets/images/Lpdr.jpg"
import AetherFlowHero from "../../components/ui/aether-flow-hero";
// --- DATA ---
const capabilities = [
  {
    title: "Color Detection",
    desc: "Accurately identifies vehicle color in real-time using computer vision models.",
    image: Color
  },
  {
    title: "Make Recognition",
    desc: "Detects the manufacturer of vehicles such as Toyota, BMW, Tesla, and more.",
    image: carmake
  },
  {
    title: "Model Classification",
    desc: "Classifies specific vehicle models with high precision from visual data.",
    image: CarModel
  },
  {
    title: "License Plate Detection",
    desc: "Extracts and reads vehicle number plates using OCR technology.",
    image: Lpdr
  },
];

// --- 3D FLOATING HERO ---
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // 3D Transforms based on scroll
  const scale = useTransform(smoothProgress, [0, 1], [1, 2]);
  const rotateX = useTransform(smoothProgress, [0, 1], [0, 80]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const translateZ = useTransform(smoothProgress, [0, 1], [0, 500]);
  const blur = useTransform(smoothProgress, [0, 1], ["blur(0px)", "blur(20px)"]);

  return (
    <div ref={ref} className="relative h-[150vh] w-full" style={{ perspective: 1000 }}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Deep space AI 3D background elements */}
        {/* Aether Flow Particle Network Background */}
        <div className="absolute inset-0 bg-[#020204]">
          <AetherFlowHero />
        </div>

        {/* 3D Scrolling Hero Content */}
      <motion.div
  style={{
    scale,
    rotateX,
    z: translateZ,
    opacity,
    filter: blur,
    transformStyle: "preserve-3d"
  }}
  className="text-center z-10 px-4"
>
  {/* HEADLINE */}
  <motion.h1
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.9] tracking-[-0.02em] uppercase text-white"
    style={{ transform: "translateZ(120px)" }}
  >
    <motion.span
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="block"
    >
      VISUAL
    </motion.span>

    <motion.span
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="block bg-gradient-to-r from-[#ff6b1a] via-[#ff8a3d] to-[#ffb067] bg-clip-text text-transparent"
    >
      INTELLIGENCE
    </motion.span>
  </motion.h1>

  {/* PARAGRAPH */}
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.8 }}
    className="mt-6 text-[16px] md:text-[18px] leading-[1.7] text-[#cfcfd2] max-w-[600px] mx-auto text-center"
  >
    Visual Intelligence helps systems see, understand, and analyze visual data in real time.
  </motion.p>

  {/* SUBTLE GLOW EFFECT */}
  <motion.div
    animate={{ opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-r from-[#ff6b1a]/20 via-[#ff8a3d]/10 to-transparent"
  />
</motion.div>

        {/* Scroll indicator */}
        {/* <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">Initiate Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#ff6b1a] to-transparent animate-pulse" />
        </motion.div> */}
      </div>
    </div>
  );
}

// --- 3D CAPABILITIES ALTERNATING CARD ---
function AlternatingCard({ cap, index }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-1, 1], [3, -3]);
  const rotateY = useTransform(mouseXSpring, [-1, 1], [-3, 3]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set((mouseX / width - 0.5) * 2);
    y.set((mouseY / height - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isImageRight = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className={`relative w-full flex flex-col md:flex-row bg-[#1c1c1c] overflow-hidden shadow-2xl cursor-pointer group h-auto md:h-[450px] ${!isImageRight ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between text-left relative z-10">
        <div>
          <div className="w-8 h-[3px] bg-[#ff6b1a] mb-5 group-hover:w-16 transition-all duration-300" />
          <p className="text-white/80 text-[11px] font-bold uppercase tracking-[0.15em] mb-4">
            {cap.title}
          </p>
          <h3 className="font-semibold text-white mb-4 leading-tight group-hover:text-[#ff6b1a] transition-colors duration-300 text-3xl md:text-4xl">
            {cap.desc}
          </h3>
        </div>

        <div className="flex items-center gap-3 mt-8 group-hover:translate-x-2 transition-transform duration-300">
          <span className="text-white font-bold text-sm">Learn more</span>
          <div className="w-6 h-6 bg-[#ff6b1a] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 h-[300px] md:h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[#ff6b1a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none" />
        <img src={cap.image} alt={cap.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
    </motion.div>
  );
}

function CapabilitiesGrid() {
  return (
    <div className="relative w-full py-5 bg-[#020204]">
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-white">Capabilities</span>
          </h3>
        </div>

        <div className="flex flex-col gap-4" style={{ perspective: 1200 }}>
          {capabilities.map((cap, i) => (
            <AlternatingCard key={i} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

// --- 3D SCROLL TIMELINE (AI WORKFLOW) ---
function AiWorkflow() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  const steps = [
    { num: "01", title: "DATA COLLECTION", desc: "Gathering and aggregating structured and unstructured data from diverse sources." },
    { num: "02", title: "DATA CLEANING", desc: "Processing, normalizing, and structuring raw data to ensure high-quality inputs." },
    { num: "03", title: "MODEL SELECTION", desc: "Identifying the optimal neural architectures and algorithms for your specific use case." },
    { num: "04", title: "TRAINING", desc: "Harnessing high-performance compute to train models on your proprietary data." },
    { num: "05", title: "EVALUATION", desc: "Rigorous testing and validation to ensure accuracy, safety, and reliability." },
    { num: "06", title: "PREDICTION", desc: "Deploying inference engines to generate real-time insights and autonomous decisions." }
  ];

  return (
    <div ref={ref} className="relative w-full py-40 bg-[#020204] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-32 text-center">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-white">AI Workflow</span>
        </h2>

        <div className="relative">
          {/* Animated 3D SVG Line */}
          <svg className="absolute left-1/2 top-0 -translate-x-1/2 w-[20px] h-full overflow-visible" preserveAspectRatio="none">
            <motion.line
              x1="10" y1="0" x2="10" y2="100%"
              stroke="#ff6b1a"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength }}
              className="drop-shadow-[0_0_15px_rgba(255,107,26,0.8)]"
            />
            <line x1="10" y1="0" x2="10" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="4" strokeLinecap="round" />
          </svg>

          {/* Steps */}
          <div className="space-y-40 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex items-center w-full ${isEven ? "justify-start" : "justify-end"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, rotateY: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: false, margin: "-150px" }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className={`w-1/2 ${isEven ? "pr-16 text-right" : "pl-16 text-left"}`}
                    style={{ perspective: 1000 }}
                  >
                    <div className="text-[#ff6b1a] font-black text-6xl opacity-20 mb-2">{step.num}</div>
                    <h3 className="text-2xl font-black text-white mb-4 tracking-wide">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- FLOATING IMPACT METRICS ---
function ImpactMetrics() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div ref={ref} className="relative py-40 w-full overflow-hidden bg-[#020204]">
      <div className="absolute inset-0 bg-[#3a0ca3]/5 blur-[200px]" />
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">

        <motion.div style={{ y: y1 }} className="text-center">
          <div className="text-[5rem] md:text-[8rem] font-black text-white leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            40<span className="text-[#ff6b1a]">%</span>
          </div>
          <div className="text-white/40 uppercase tracking-[0.3em] font-bold text-sm mt-4">OpEx Reduction</div>
        </motion.div>

        <motion.div style={{ y: y2 }} className="text-center">
          <div className="text-[5rem] md:text-[8rem] font-black text-white leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            10<span className="text-[#ff6b1a]">x</span>
          </div>
          <div className="text-white/40 uppercase tracking-[0.3em] font-bold text-sm mt-4">Processing Speed</div>
        </motion.div>

        <motion.div style={{ y: y3 }} className="text-center">
          <div className="text-[5rem] md:text-[8rem] font-black text-white leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            24<span className="text-[#ff6b1a]">/7</span>
          </div>
          <div className="text-white/40 uppercase tracking-[0.3em] font-bold text-sm mt-4">Autonomous Operation</div>
        </motion.div>

      </div>
    </div>
  );
}

export default function AiMl() {
  return (
    <div className="bg-[#020204] text-white overflow-hidden min-h-screen font-sans selection:bg-[#ff6b1a] selection:text-white">
      <HeroSection />
      <CapabilitiesGrid />
      <AiWorkflow />
      <ImpactMetrics />

      {/* Footer CTA */}
      <section className="relative py-40 text-center px-6 bg-[#020204]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="relative z-10 max-w-4xl mx-auto"
          style={{ perspective: 1000 }}
        >
          <div className="w-24 h-1 bg-[#ff6b1a] mx-auto mb-10 shadow-[0_0_15px_#ff6b1a]" />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-[#ff2a00]">Evolve?</span>
          </h2>
          <button className="relative px-12 py-5 bg-transparent border-2 border-[#ff6b1a]/50 text-white font-black tracking-[0.3em] uppercase text-sm group overflow-hidden rounded-full">
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Contact Us</span>
            <div className="absolute inset-0 bg-[#ff6b1a] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
