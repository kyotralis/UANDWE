import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  CircuitBoard,
  Activity,
  CheckCircle,
} from "lucide-react";

const capabilities = [
  {
    title: "PCB Design",
    desc: "High-speed and multi-layer PCB design for reliable and scalable hardware systems.",
    icon: <CircuitBoard size={28} />,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "FPGA Development",
    desc: "Custom FPGA solutions for high-performance computing and real-time processing.",
    icon: <Cpu size={28} />,
    img: "https://images.unsplash.com/photo-1581092160607-ee22731c7a02",
  },
  {
    title: "Chip Design",
    desc: "Advanced semiconductor design including RTL, verification, and silicon validation.",
    icon: <Cpu size={28} />,
    img: "https://images.unsplash.com/photo-1581093588401-22f3c6d1c8d3",
  },
  {
    title: "Testing & Validation",
    desc: "Comprehensive testing methodologies ensuring quality, reliability, and compliance.",
    icon: <Activity size={28} />,
    img: "https://images.unsplash.com/photo-1581093458791-9f3c3900f6a9",
  },
];

const Hardware = () => {
  return (
    <div className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a0f05] via-[#2b1406] to-[#140a03] text-white overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-amber-400/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

      {/* 🧠 Hero */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold tracking-tight"
        >
          Hardware Engineering
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-orange-200 mt-4 max-w-2xl mx-auto text-lg"
        >
          End-to-end hardware solutions from concept to production — enabling
          high-performance semiconductor and embedded systems.
        </motion.p>
      </div>

      {/* 🖼 Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-[85%] mx-auto mb-16 relative z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1581092919535-7146ff1d3b87"
          alt="Hardware Engineering"
          className="w-full h-[380px] object-cover rounded-2xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-2xl" />
      </motion.div>

      {/* ⚡ Capabilities */}
      <div className="w-[85%] mx-auto mb-20 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Capabilities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-xl border border-orange-400/20 rounded-2xl overflow-hidden hover:bg-orange-500/10 transition duration-300"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 text-orange-400 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-orange-200 text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 💡 Why Choose */}
      <div className="w-[85%] mx-auto text-center mb-16 relative z-10">
        <h2 className="text-3xl font-semibold mb-6">
          Why Choose UANDWE?
        </h2>

        <p className="text-orange-200 max-w-2xl mx-auto mb-6">
          We combine deep semiconductor expertise with modern engineering
          practices to deliver scalable, reliable, and high-performance
          hardware solutions.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {[
            "High Performance",
            "Faster Time-to-Market",
            "Scalable Design",
            "Industry Expertise",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-orange-400/20"
            >
              <CheckCircle size={18} className="text-orange-400" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 CTA */}
      <div className="text-center relative z-10">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-orange-500/40 transition"
        >
          Contact Our Experts
        </motion.button>
      </div>
    </div>
  );
};

export default Hardware;