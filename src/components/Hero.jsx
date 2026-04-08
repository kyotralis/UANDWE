import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: 0,
    type: "image",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop",
  },
{
  id: 1,
  type: "image",
  src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop", 
},
// {
//   id: 2,
//   type: "image",
//   // Replacing with a cleaner, terminal-focused software shot
//   src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1920&auto=format&fit=crop", 
// },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop",
  },


];

const SLIDE_DURATION = 5000;

function VideoSlide({ src, isActive }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    if (isActive) {
      ref.current.currentTime = 0;
      ref.current.play().catch(() => {});
    } else {
      ref.current.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover brightness-[0.6] contrast-[1.1]"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default function Hero({ title, description, badge }) {
  const [current, setCurrent] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // 👈 control animation
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startTimer();
    setHasAnimated(true); // animate only first time
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (idx) => {
    setCurrent(idx);
    startTimer();
  };

  const slideVariants = {
    enter: { opacity: 0, scale: 1.15 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: { duration: 1 },
    },
  };

  return (
    <section className="relative w-full min-h-[100svh] flex items-center overflow-hidden">

      {/* BACKGROUND */}
      <AnimatePresence>
        <motion.div
          key={current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {SLIDES[current].type === "video" ? (
            <VideoSlide {...SLIDES[current]} isActive />
          ) : (
            <motion.img
              src={SLIDES[current].src}
              className="absolute inset-0 w-full h-full object-cover brightness-[0.6] contrast-[1.1]"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "easeOut" }}
            />
          )}

<div className="absolute inset-0 " />  
      </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative z-10 px-[6%] max-w-[1000px]">

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-500 text-xs tracking-widest uppercase font-semibold"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            {badge}
          </motion.div>
        )}

<motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 1, delay: 0.3 }}
  className="font-extrabold leading-[1.1] tracking-tight mb-6 text-white"
>
  {/* BIG LINE */}
<span className="block text-[clamp(2.2rem,4vw,3.5rem)] whitespace-nowrap">
  Where Innovation Meets
</span>

  {/* SMALLER LINE */}
  <span className="block text-[clamp(1.6rem,3.2vw,2.4rem)] text-orange-500 mt-2">
    Engineering Excellence.
  </span>
</motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/150 text-[clamp(1rem,2.vw,1rem)] max-w-[600px] leading-relaxed"
        >
         A team of passionate tech entrepreneurs committed to building your product success.
        </motion.p>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-10 right-[6%] z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 hover:scale-110 ${
              i === current
                ? "w-6 h-2 bg-orange-500 rounded-md"
                : "w-2 h-2 bg-white/40 rounded-full"
            }`}
          />
        ))}
      </div>
    </section>
  );
}