import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ImageTrail } from "../components/ui/image-trail";
import { useTranslation } from "react-i18next";
import videoBg from "../assets/images/uaw.mp4";

const AnimatedText = ({ text }) => {
  const characters = typeof text === 'string' ? text.split("") : [];
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.03 } // Faster stagger for letters
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="inline-block"
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
          }}
          className={`inline-block ${char === " " ? "w-[0.35em]" : ""}`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
export default function Hero({ title, description, badge }) {
  const { t } = useTranslation();
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
      <div className="relative z-10 w-full px-[4%] pointer-events-none">

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
          className="font-extrabold leading-tight tracking-tight mb-4 sm:mb-6 text-white max-w-full"
        >
          <span className="block whitespace-nowrap text-[clamp(20px,7vw,36px)] sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl min-[1920px]:text-[96px] min-[2560px]:text-[120px]">
            <AnimatedText key={t("hero.title_1")} text={t("hero.title_1")} />
          </span>
          <span className="block text-[clamp(16px,5.5vw,24px)] sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl min-[1920px]:text-[64px] min-[2560px]:text-[80px] text-orange-500 mt-1 md:mt-2">
            <AnimatedText key={t("hero.title_2")} text={t("hero.title_2")} />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/80 text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl min-[1920px]:text-[28px] min-[2560px]:text-[36px] max-w-full sm:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] leading-relaxed"
        >
          <AnimatedText key={t("hero.description")} text={t("hero.description")} />
        </motion.p>
      </div>
    </section>
  );
}