import React from "react";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const whitepapers = [
  {
    title: "AI in Semiconductor Design",
    desc: "Explore how AI is transforming chip design, improving efficiency and reducing time-to-market.",
    img: "https://images.unsplash.com/photo-1581092919535-7146ff1d3b87",
    file: "#",
  },
  {
    title: "Embedded Systems Optimization",
    desc: "Techniques to enhance performance and reduce power consumption in embedded systems.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    file: "#",
  },
  {
    title: "Automotive Software Safety",
    desc: "Understanding ISO standards and safety-critical software in modern vehicles.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    file: "#",
  },
];

const Whitepapers = () => {
  return (
    <div className="relative py-32 bg-gradient-to-br from-[#1a0f05] via-[#2b1406] to-[#140a03] text-white overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-amber-400/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

      {/* 🧠 Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold tracking-tight"
        >
          White Papers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-orange-200 mt-4 max-w-2xl mx-auto text-lg"
        >
          Insights, research, and technical expertise to help you stay ahead in
          semiconductor, embedded, and software innovation.
        </motion.p>
      </div>

      {/* 📚 Cards */}
      <div className="w-[85%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {whitepapers.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/5 backdrop-blur-xl border border-orange-400/20 rounded-2xl overflow-hidden hover:bg-orange-500/10 transition duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              {/* Overlay Icon */}
              <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full">
                <FileText size={18} className="text-orange-400" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h2 className="text-lg font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-orange-200 text-sm mb-5">
                {item.desc}
              </p>

              {/* CTA */}
              <a
                href={item.file}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Whitepapers;