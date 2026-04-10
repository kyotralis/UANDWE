import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── ANIMATED NUMBER ───────────────────────────── */
function AnimatedNumber({ target, suffix = "", shouldAnimate }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) {
      setValue(0);
      return;
    }

    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [target, shouldAnimate]);

  return (
    <motion.span
      initial={{ rotateX: -90, opacity: 0 }}
      animate={
        shouldAnimate
          ? { rotateX: 0, opacity: 1 }
          : { rotateX: -90, opacity: 0 }
      }
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      style={{ display: "inline-block" }}
    >
      {value}
      {suffix}
    </motion.span>
  );
}

/* ─── DATA ─────────────────────────────────────── */
const stats = [
  { value: 12, label: "HAPPY CLIENTS" },
  { value: 10, suffix: "+", label: "PROJECTS" },
  { value: 2, label: "PARTNERS" },
  { value: 44, label: "UANDWEIANS" },
];

/* ─── MAIN COMPONENT ───────────────────────────── */
export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,  // Animate only once when it comes into view
    margin: "-100px 0px -100px 0px" // Trigger when component is 100px into viewport
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Track if animation has started
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#0b0b12] text-white px-[6%] pt-24 pb-20"
    >

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="font-black leading-[1.05] text-[clamp(40px,6vw,80px)]">
          Built on <br />
          <span className="text-orange-500">Proven Excellence</span>
        </h2>

        <p className="text-white/50 text-sm mt-6 max-w-md">
          Quantified results from our most demanding engineering partnerships.
        </p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="relative group rounded-2xl border border-white/10 
            bg-gradient-to-b from-white/[0.03] to-transparent 
            p-10 overflow-hidden 
            hover:border-orange-500/30 
            hover:-translate-y-2
            transition-all duration-300"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full" />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center text-center gap-3 mt-6">

              {/* Number (ROTATE + COUNT) - Only animate when section is in view */}
              <h3 className="text-[48px] md:text-[56px] font-black text-white leading-none perspective-[1000px]">
                <AnimatedNumber
                  target={stat.value}
                  suffix={stat.suffix}
                  shouldAnimate={hasAnimated}
                />
              </h3>

              {/* Label */}
              <p className="text-sm text-white/60 tracking-wide">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}