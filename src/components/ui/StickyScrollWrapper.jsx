import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StickyScrollWrapper({ children }) {
  const containerRef = useRef(null);

  // Track the scroll progress of this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale down and fade opacity as the user scrolls
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[200vh] z-0" 
      style={{ marginBottom: "-100vh" }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <motion.div
          style={{ scale, opacity, y }}
          className="w-full h-full origin-top"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
