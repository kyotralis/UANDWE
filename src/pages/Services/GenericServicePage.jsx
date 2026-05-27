import React from "react";
import { motion } from "framer-motion";

export default function GenericServicePage({ title, description }) {
  return (
    <div className="pt-32 pb-20 px-[5%] min-h-[70vh] bg-[#0a0a0f]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-[2px] bg-[#ff6b1a]" />
          <span className="text-sm tracking-[0.2em] text-[#ff6b1a] font-bold uppercase">
            Services
          </span>
          <div className="w-12 h-[2px] bg-[#ff6b1a]" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
          {title}
        </h1>
        
        <p className="text-xl text-white/60 leading-relaxed mb-12">
          {description || `We provide cutting-edge ${title.toLowerCase()} solutions tailored to your business needs. Our expert team leverages the latest technologies to deliver scalable, secure, and high-performance results.`}
        </p>
        
        <div className="flex justify-center gap-4">
          <a
            href="/#contactus"
            className="bg-[#ff6b1a] px-8 py-4 rounded-full text-white font-medium hover:bg-[#ff8c42] transition-colors"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </div>
  );
}
