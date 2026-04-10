import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import video from "../assets/images/video.mp4";
import heroimage1 from "../assets/images/heroimage1.png";
import heroimage2 from "../assets/images/heroimage2.png";

const SLIDES = [
  { id: 0, type: "image", src: heroimage1 },
  { id: 1, type: "video", src: video },
  { id: 2, type: "image", src: heroimage2 },
];

const SLIDE_DURATION = 5000;

function VideoSlide({ src, isActive, onEnd }) {
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
      playsInline
      onEnded={onEnd}
      className="absolute inset-0 w-full h-full object-cover brightness-[0.6] contrast-[1.1]"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default function Hero({ title, description, badge }) {
  const [current, setCurrent] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    clearTimeout(timerRef.current);

    const currentSlide = SLIDES[current];

    if (currentSlide.type === "image") {
      timerRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
      }, SLIDE_DURATION);
    }

    return () => clearTimeout(timerRef.current);
  }, [current]);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const goTo = (idx) => setCurrent(idx);

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
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">

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
            <VideoSlide
              src={SLIDES[current].src}
              isActive={true}
              onEnd={() =>
                setCurrent((prev) => (prev + 1) % SLIDES.length)
              }
            />
          ) : (
            <motion.img
              src={SLIDES[current].src}
              className="absolute inset-0 w-full h-full object-cover brightness-[0.6] contrast-[1.1]"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "easeOut" }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-[6%] max-w-[1000px]">

        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 py-1 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-500 text-[10px] sm:text-xs tracking-widest uppercase font-semibold"
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

      {/* DOTS */}
      <div className="absolute bottom-6 sm:bottom-10 right-1/2 translate-x-1/2 sm:right-[6%] sm:translate-x-0 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 ${
              i === current
                ? "w-5 sm:w-6 h-2 bg-orange-500 rounded-md"
                : "w-2 h-2 bg-white/40 rounded-full"
            }`}
          />
        ))}
      </div>
    </section>
  );
}