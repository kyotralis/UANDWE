import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "Future of AI in Semiconductor Industry",
    desc: "Discover how artificial intelligence is reshaping chip design, verification, and manufacturing efficiency.",
    date: "March 2026",
    img: "https://images.unsplash.com/photo-1581092919535-7146ff1d3b87",
  },
  {
    title: "Top Trends in Embedded Systems",
    desc: "From IoT to edge computing, explore the latest innovations driving embedded system development.",
    date: "February 2026",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Building Scalable Cloud Applications",
    desc: "Best practices for designing secure, scalable, and high-performance cloud-native applications.",
    date: "January 2026",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const Blogs = () => {
  return (
    <div className="relative py-32 bg-gradient-to-br from-[#1a0f05] via-[#2b1406] to-[#140a03] text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full top-[-120px] left-[-120px]" />

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">Blogs & Insights</h1>
        <p className="text-orange-200 mt-4 max-w-2xl mx-auto">
          Stay updated with industry trends, innovations, and expert perspectives.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="w-[85%] mx-auto grid md:grid-cols-3 gap-8">
        {blogs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-orange-400/20 rounded-2xl overflow-hidden hover:bg-orange-500/10 transition"
          >
            <img src={item.img} className="h-48 w-full object-cover" />

            <div className="p-6">
              <div className="flex items-center text-sm text-orange-300 mb-2">
                <Calendar size={14} className="mr-2" />
                {item.date}
              </div>

              <h2 className="text-lg font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-orange-200 text-sm mb-4">
                {item.desc}
              </p>

              <button className="flex items-center gap-2 text-orange-400 hover:gap-3 transition">
                Read More <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;