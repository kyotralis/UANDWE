import React from "react";
import { motion } from "framer-motion";

const Companyoverview = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-[#0E0E0E] text-white py-32 overflow-hidden">

        {/* Animated Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-orange-700/20 blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-4 text-center relative z-10">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent"
          >
            UANDWE TECHNOLOGIES
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300"
          >
            We transform bold ideas into intelligent products through deep tech,
            design precision, and scalable engineering systems.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            {/* Primary Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="relative px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold shadow-lg overflow-hidden"
            >
              <span className="relative z-10">Explore Capabilities</span>

              {/* Glow */}
              <div className="absolute inset-0 bg-orange-400 opacity-0 hover:opacity-20 blur-xl transition"></div>
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-10 py-4 rounded-full border border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-black transition"
            >
              Start a Conversation
            </motion.a>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-28 bg-[#111] text-white text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-400">
            Engineering Intelligence
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            We exist at the intersection of innovation and real-world engineering —
            crafting high-performance systems that scale, adapt, and lead industries
            forward.
          </p>
        </motion.div>
      </section>

      {/* ================= WHAT WE BUILD ================= */}
      <section className="py-28 bg-[#0E0E0E] text-white">
        <div className="container mx-auto px-4">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 text-orange-400">
              What We Build
            </h2>
            <p className="text-gray-400">
              Precision-engineered digital and hardware systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Embedded Systems",
              "Hardware Design",
              "AI Integration",
              "IoT Solutions",
              "Product Engineering",
              "Automation Systems",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-xl"
              >
                <div className="text-4xl mb-4 text-orange-400">⚡</div>

                <h3 className="text-xl font-bold mb-2">{item}</h3>

                <p className="text-gray-400">
                  High-performance, scalable solutions engineered for real-world impact.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-28 bg-[#111] text-white text-center">
        <h2 className="text-5xl font-bold mb-16 text-orange-400">
          From Idea to Impact
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-10 px-4">
          {["Discover", "Design", "Build", "Validate", "Launch"].map(
            (step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center text-black text-xl font-bold shadow-lg">
                  {i + 1}
                </div>

                <p className="mt-4 text-gray-300">{step}</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-28 bg-[#0E0E0E] text-white text-center">
        <h2 className="text-5xl font-bold mb-16 text-orange-400">
          Our DNA
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          {["Innovation First", "Precision Quality", "Client Success"].map(
            (item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-3 text-orange-300">
                  {item}
                </h3>
                <p className="text-gray-400">
                  We build with intent, precision, and long-term vision.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Companyoverview;