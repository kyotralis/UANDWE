import React from 'react';
import { motion } from 'framer-motion';

const AlprSystem = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative px-[5%] py-20 lg:py-32 flex flex-col items-center justify-center text-center">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#ff6b1a]/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#ff6b1a]/30 bg-[#ff6b1a]/10 text-[#ff6b1a] text-xs sm:text-sm tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 bg-[#ff6b1a] rounded-full animate-pulse"></span>
            AI & Machine Learning
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
            Automatic License Plate <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-orange-400">
              Recognition (ALPR)
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-10">
            Harness the power of cutting-edge AI and computer vision to automatically detect, read, and process vehicle license plates with unparalleled accuracy and speed in real-time environments. Secure your premises, automate tolling, and optimize traffic flow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-[#ff6b1a] text-white rounded-full font-semibold hover:bg-[#ff8c42] transition-colors w-full sm:w-auto shadow-lg shadow-[#ff6b1a]/20">
              Explore ALPR Solutions
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto">
              Request a Demo
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AlprSystem;