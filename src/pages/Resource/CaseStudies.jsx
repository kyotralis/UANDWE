import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const caseStudies = [
  {
    title: "AI-Powered Chip Design Optimization",
    problem: "Manual chip design process caused delays and inefficiencies.",
    solution: "Implemented AI-driven automation for faster design iterations.",
    result: "Reduced design time by 40% and improved accuracy.",
    img: "https://images.unsplash.com/photo-1581093588401-22f3c6d1c8d3",
  },
  {
    title: "IoT-Based Smart Device Platform",
    problem: "Lack of real-time monitoring in embedded systems.",
    solution: "Developed IoT-enabled firmware with cloud integration.",
    result: "Enabled real-time analytics and improved device efficiency.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "High-Performance Web Application",
    problem: "Scalability issues under heavy user load.",
    solution: "Re-architected application using microservices and cloud.",
    result: "Achieved 3x performance improvement and better scalability.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const CaseStudies = () => {
  return (
    <div className="relative py-32 bg-gradient-to-br from-[#1a0f05] via-[#2b1406] to-[#140a03] text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full top-[-120px] right-[-120px]" />

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">Case Studies</h1>
        <p className="text-orange-200 mt-4 max-w-2xl mx-auto">
          Real-world success stories showcasing our expertise and impact.
        </p>
      </div>

      {/* Case Studies */}
      <div className="w-[85%] mx-auto space-y-10">
        {caseStudies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8 bg-white/5 border border-orange-400/20 rounded-2xl overflow-hidden"
          >
            {/* Image */}
            <img src={item.img} className="h-full w-full object-cover" />

            {/* Content */}
            <div className="p-8">
              <h2 className="text-xl font-semibold mb-4">
                {item.title}
              </h2>

              <div className="space-y-3 text-sm text-orange-200">
                <p><strong>Problem:</strong> {item.problem}</p>
                <p><strong>Solution:</strong> {item.solution}</p>
                <p className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-orange-400" />
                  <strong>Result:</strong> {item.result}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;