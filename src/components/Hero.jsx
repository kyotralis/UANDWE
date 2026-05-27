import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ImageTrail } from "../components/ui/image-trail";
import videoBg from "../assets/images/UAW.mp4"


export default function Hero({ title, description, badge }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0b0b12]">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>

      {/* IMAGE TRAIL ANIMATION (OVERLAY) */}
      <div className="absolute inset-0 z-[5]">
       
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-[6%] max-w-[1000px] pointer-events-none">

        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 py-1 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-500 text-[10px] sm:text-xs tracking-widest uppercase font-semibold pointer-events-auto"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            {badge}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-extrabold leading-tight tracking-tight mb-4 sm:mb-6 text-white"
        >
          <span className="block text-[clamp(1.8rem,6vw,3.5rem)] break-words">
            Where Innovation Meets
          </span>
          <span className="block text-[clamp(1.2rem,4vw,2.4rem)] text-orange-500 mt-2">
            Engineering Excellence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/80 text-[clamp(0.9rem,2.5vw,1rem)] max-w-full sm:max-w-[600px] leading-relaxed"
        >
          A team of passionate tech entrepreneurs committed to building your product success.
        </motion.p>
      </div>
    </section>
  );
}