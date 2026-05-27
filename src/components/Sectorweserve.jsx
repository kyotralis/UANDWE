import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import automation from "../assets/images/automation.png"
import telecom from "../assets/images/telecom.png"
import medical from "../assets/images/medical.png"
import semiconductor from "../assets/images/semiconductor.png"
import { useNavigate } from "react-router-dom";


const INDUSTRIES = [
   {
    num: "01",
    title: "Semiconductor",
    desc: "Building the foundation of modern technology through advanced chip design, high-performance processors, and scalable silicon solutions.",
    img: semiconductor
  },
   {
    num: "02",
    title: "Telecom & Networking",
    desc: "Enabling high-speed connectivity with next-generation telecom infrastructure, 5G networks, and scalable cloud communication systems.",
    img: telecom,
  },
  {
    num: "03",
    title: "Automotive",
    desc: "Driving the future of mobility with advanced driver assistance systems, electric vehicle platforms, and intelligent safety solutions.",
    img: automation
  },
  {
    num: "04",
    title: "Medical ",
    desc: "Transforming healthcare through precision robotics, smart diagnostics, and real-time medical imaging technologies.",
    img: medical,
  },
 
 
];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function Industries() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isInView, setIsInView] = useState(false); // Track if component is in view
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sectionRef = useRef(null);

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    if (current < INDUSTRIES.length - 1) {
      setDirection(1);
      setCurrent(c => c + 1);
    } else {
      setDirection(1);
      setCurrent(0);
    }
  }, [current]);

  const prev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent(c => c - 1);
    } else {
      setDirection(-1);
      setCurrent(INDUSTRIES.length - 1);
    }
  }, [current]);

  const routeMap = {
  "Automotive": "/industries/automotive",
  "Healthcare": "/industries/medical",
  "Telecom & Networking": "/industries/telecom",
  "Semiconductor": "/industries/semiconductor",
};

  // Intersection Observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // Component is considered "in view" when 30% is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-slide functionality - only when component is in view AND auto-playing is enabled
  useEffect(() => {
    if (isAutoPlaying && isInView) {
      intervalRef.current = setInterval(() => {
        next();
      }, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, isInView, next]);

  // Reset auto-play when component comes back into view
  useEffect(() => {
    if (isInView) {
      setIsAutoPlaying(true);
    } else {
      setIsAutoPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [isInView]);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // Resume after 10 seconds of no interaction, but only if still in view
    setTimeout(() => {
      if (isInView) {
        setIsAutoPlaying(true);
      }
    }, 10000);
  }, [isInView]);

  const handleNext = () => {
    pauseAutoPlay();
    next();
  };

  const handlePrev = () => {
    pauseAutoPlay();
    prev();
  };

  const handleGoTo = (index) => {
    pauseAutoPlay();
    goTo(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    pauseAutoPlay();
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const industry = INDUSTRIES[current];

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative w-full bg-[#0a0a0f] text-white overflow-hidden"
      style={{ height: "100vh", minHeight: "600px" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${industry.img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-0 left-0 z-20 px-[5%] pt-20 md:pt-24 pointer-events-none">
       
         
        <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold tracking-tight leading-[1.0]">
          Industries We <br /><span className="text-orange-500">  Power</span>
        </h2>
      </div>

<div className="absolute top-[120px] sm:top-24 md:top-24 right-[5%] z-20 flex gap-3">        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-white/25 text-white hover:border-orange-500/60 hover:text-orange-400 flex items-center justify-center transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={17} />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-white/25 text-white hover:border-orange-500/60 hover:text-orange-400 flex items-center justify-center transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={17} />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 z-20 px-[5%] pb-20 w-full md:w-[55%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {/* <span className="block text-orange-500 text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              {industry.num} / INDUSTRY
            </span> */}

            <h3 className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold tracking-tight leading-tight mb-4">
              {industry.title}
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed mb-7 max-w-sm">
              {industry.desc}
            </p>

           <button
  onClick={() => navigate(routeMap[industry.title])}
  className="group flex items-center gap-2 text-orange-500 text-[12px] font-bold tracking-[0.2em] cursor-pointer uppercase hover:text-orange-400 transition-colors"
>
  VIEW SOLUTIONS
  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
</button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 items-center">
        {INDUSTRIES.map((_, i) => (
          <button
            key={i}
            onClick={() => handleGoTo(i)}
            className={`rounded-full transition-all duration-400
              ${i === current
                ? "w-6 h-[6px] bg-orange-500"
                : "w-[6px] h-[6px] bg-white/25 hover:bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}