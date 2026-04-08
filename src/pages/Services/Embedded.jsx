import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Settings,
  Wifi,
  Gauge,
  Layers,
} from "lucide-react";

const features = [
  { title: "RTOS Development", icon: <Cpu size={28} /> },
  { title: "Device Driver Development", icon: <Settings size={28} /> },
{ title: "Firmware Development", icon: <Cpu size={28} /> },  { title: "IoT Integration", icon: <Wifi size={28} /> },
  { title: "System Optimization", icon: <Gauge size={28} /> },
  { title: "Hardware-Software Integration", icon: <Layers size={28} /> },
];

const Embedded = () => {
  return (
    <div className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a0f05] via-[#2b1406] to-[#140a03] text-white overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-amber-400/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

      {/* ⚙️ Hero Section */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-tight"
        >
          Embedded Software Engineering
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-orange-200 mt-4 max-w-2xl mx-auto text-lg"
        >
          We build reliable, real-time embedded systems powering next-generation
          smart devices and connected ecosystems.
        </motion.p>
      </div>

      {/* 🧠 Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-[85%] mx-auto mb-16 relative z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Embedded Systems"
          className="w-full h-[350px] object-cover rounded-2xl shadow-2xl"
        />

        <div className="absolute inset-0 bg-black/40 rounded-2xl" />
      </motion.div>

      {/* ⚡ Features Grid */}
      <div className="w-[85%] mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/5 backdrop-blur-xl border border-orange-400/20 p-6 rounded-2xl hover:bg-orange-500/10 transition duration-300"
          >
            <div className="mb-4 text-orange-400 group-hover:scale-110 transition">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* 🔥 CTA */}
      <div className="text-center mt-20 relative z-10">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-orange-500/40 transition"
        >
          Start Your Embedded Project
        </motion.button>
      </div>
    </div>
  );
};

export default Embedded;