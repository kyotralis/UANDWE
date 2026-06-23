import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, X, Globe } from "lucide-react";
import alprImg from "../assets/Servicesimages/alpr.png";
import colorImg from "../assets/Servicesimages/colordetection.png";
import vehicleDetectionImg from "../assets/Servicesimages/vechicledetection.png";
import classificationImg from "../assets/Servicesimages/classication.png";
import trackingImg from "../assets/Servicesimages/vechicletracking.png";
import portalImg from "../assets/Servicesimages/portal.png";
import appDevImg from "../assets/Servicesimages/appdevelopment.png";
import cloudImg from "../assets/Servicesimages/cloud.png";
import fullStackImg from "../assets/Servicesimages/fullstack.png";
import apiImg from "../assets/Servicesimages/apiintegration.png";
import testingImg from "../assets/Servicesimages/testing.png";
/* ─── SERVICE CARD (Destination-style) ─── */
function ServiceCard({ data, onLinkClick }) {
  const { t } = useTranslation();
  return (
    <div
      className="group w-full h-full"
      style={{ "--theme-color": data.themeColor }}
    >
      <Link
        to={data.href || "#"}
        onClick={(e) => onLinkClick(e, data.href, data.name)}
        className="relative block w-full h-full rounded-2xl overflow-hidden
                   transition-all duration-500 ease-in-out
                   group-hover:scale-[1.03] shadow-lg hover:shadow-2xl "
      >
        {/* Image with Parallax Zoom */}
        <motion.img
          src={data.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.08] group-hover:rotate-1"
          style={{ imageRendering: 'high-quality' }}
        />

        {/* Subtle overlay that gets slightly darker on hover */}
        <div className="absolute inset-0  transition-colors duration-500" />

        {/* Gentle Bottom Gradient for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-[60%]  to-transparent" />

        {/* Content */}
        <div className="relative flex flex-col justify-end h-full p-4 sm:p-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <h4 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-2xl min-[1920px]:text-[40px] min-[2560px]:text-[48px] font-bold tracking-tight leading-snug">
            {data.name}
          </h4>
          <p className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-lg min-[1920px]:text-[24px] min-[2560px]:text-[32px] text-white mt-1.5 font-semibold leading-relaxed line-clamp-2">
            {data.desc}
          </p>

          <div
            className="mt-3 inline-flex items-center gap-1.5 transition-all duration-300 text-white"
          >
            <span className="text-[11px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs 2xl:text-sm min-[1920px]:text-lg min-[2560px]:text-xl font-bold tracking-wider uppercase">{t('services.explore_now')}</span>
            <ArrowRight className="h-3 w-3 md:h-3.5 md:w-3.5 min-[1920px]:w-6 min-[1920px]:h-6 transform transition-transform duration-300 group-hover:translate-x-1 text-white" />
          </div>
        </div>
      </Link>
    </div>
  );
}

/* ─── SERVICE IMAGES ─── */
const IMAGES = {
  // AI & ML
  ml: alprImg,
  dl: colorImg,
  cv: vehicleDetectionImg,
  nlp: classificationImg,
  edge: trackingImg,
  analytics: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80", // Glowing neural network
  // Hardware
  pcb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80", // PCB
  fpga: "https://images.unsplash.com/photo-1591808216268-ce0b82787efe?w=600&auto=format&fit=crop&q=80", // Motherboard components
  asic: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&auto=format&fit=crop&q=80", // Silicon die / CPU
  circuit: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&auto=format&fit=crop&q=80", // Glowing traces
  prototype: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&auto=format&fit=crop&q=80", // Engineer soldering
  validation: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&fit=crop&q=80", // Oscilloscope/lab testing
  // Embedded
  drivers: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80", // Code on screen
  firmware: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80", // Matrix/terminal code
  rtos: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80", // Fast server/data
  linux: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&auto=format&fit=crop&q=80", // Linux terminal
  bsp: "https://images.unsplash.com/photo-1597839219216-a773cb2473e4?w=600&auto=format&fit=crop&q=80", // Abstract board/silicon
  protocol: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80", // Network cables
  // Application
  web: portalImg,
  mobile: appDevImg,
  enterprise: cloudImg,
  api: fullStackImg,
  cloud: apiImg,
  dashboard: testingImg,
};

/* ─── THEME COLORS (HSL values) ─── */
const THEMES = {
  aiml: "25 65% 28%",
  hardware: "25 65% 28%",
  embedded: "25 65% 28%",
  application: "25 65% 28%",
};

/* ─── MAIN COMPONENT ─── */
function CategorySection({ category, index, totalCategories, handleLinkClick }) {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale down and fade opacity as the user scrolls past this section
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[200vh]" 
      style={{ 
        marginBottom: index === totalCategories - 1 ? "0" : "-100vh",
        zIndex: index
      }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#0b0b12] border-t border-white/5">
        <motion.div
          style={{ scale, opacity, y }}
          className="w-full h-full origin-top flex flex-col pt-6 sm:pt-10"
        >
          {/* FIXED HEADER FOR CATEGORY */}
          <div className="w-full px-[4%] shrink-0 relative z-20">
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl min-[1920px]:text-[64px] min-[2560px]:text-[80px] font-extrabold text-orange-500 tracking-wider uppercase mb-2">
              {category.title}
            </h3>
            <div className="w-full h-[1px] bg-white/10 mb-3 sm:mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl min-[1920px]:text-[72px] min-[2560px]:text-[80px] font-extrabold leading-tight mb-1 sm:mb-2">
              <span className="text-white">{t("services.core_part1")}</span>
              <span className="text-orange-500">{t("services.core_part2")}</span>
            </h2>
          </div>

          {/* DYNAMIC CARD CONTENT */}
          <div className="w-full flex-1 px-[4%] pb-4 overflow-hidden relative flex items-start mt-3 sm:mt-4">
            <div className="w-full h-full">
              <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:grid-rows-3 lg:grid-rows-2 gap-3 sm:gap-4 h-full overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0">
                {category.services.map((service, i) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
                    className="min-h-0 min-w-[85%] sm:min-w-0 h-full snap-center shrink-0"
                  >
                    <ServiceCard data={service} onLinkClick={handleLinkClick} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Services() {
  const { t } = useTranslation();
  
  const [comingSoonModal, setComingSoonModal] = useState({ isOpen: false, title: "" });
  const activePaths = ["/"];

  const handleLinkClick = (e, path, name) => {
    if (!activePaths.includes(path)) {
      if (e) e.preventDefault();
      setComingSoonModal({ isOpen: true, title: name });
    }
  };

  /* DATA — ordered: AI & ML → Hardware Design → Embedded SW → Application */
  const SERVICE_CATEGORIES = [
    {
      id: "ai-ml",
      title: t("services.categories.ai_ml.title"),
      categoryDesc: t("services.categories.ai_ml.desc"),
      services: [
        { name: t("services.categories.ai_ml.services.s1.name"), desc: t("services.categories.ai_ml.services.s1.desc"), image: IMAGES.ml, themeColor: THEMES.aiml, href: "/services/aiml" },
        { name: t("services.categories.ai_ml.services.s2.name"), desc: t("services.categories.ai_ml.services.s2.desc"), image: IMAGES.dl, themeColor: THEMES.aiml, href: "/services/aiml" },
        { name: t("services.categories.ai_ml.services.s3.name"), desc: t("services.categories.ai_ml.services.s3.desc"), image: IMAGES.cv, themeColor: THEMES.aiml, href: "/services/aiml" },
        { name: t("services.categories.ai_ml.services.s4.name"), desc: t("services.categories.ai_ml.services.s4.desc"), image: IMAGES.nlp, themeColor: THEMES.aiml, href: "/services/aiml" },
        { name: t("services.categories.ai_ml.services.s5.name"), desc: t("services.categories.ai_ml.services.s5.desc"), image: IMAGES.edge, themeColor: THEMES.aiml, href: "/services/aiml" },
        { name: t("services.categories.ai_ml.services.s6.name"), desc: t("services.categories.ai_ml.services.s6.desc"), image: IMAGES.analytics, themeColor: THEMES.aiml, href: "/services/aiml" },
      ]
    },
    {
      id: "hardware-design",
      title: t("services.categories.hardware_design.title"),
      categoryDesc: t("services.categories.hardware_design.desc"),
      services: [
        { name: t("services.categories.hardware_design.services.s1.name"), desc: t("services.categories.hardware_design.services.s1.desc"), image: IMAGES.pcb, themeColor: THEMES.hardware, href: "/services/pcb-design" },
        { name: t("services.categories.hardware_design.services.s2.name"), desc: t("services.categories.hardware_design.services.s2.desc"), image: IMAGES.fpga, themeColor: THEMES.hardware, href: "/services/fpga-development" },
        { name: t("services.categories.hardware_design.services.s3.name"), desc: t("services.categories.hardware_design.services.s3.desc"), image: IMAGES.asic, themeColor: THEMES.hardware, href: "/services/chip-design" },
        { name: t("services.categories.hardware_design.services.s4.name"), desc: t("services.categories.hardware_design.services.s4.desc"), image: IMAGES.circuit, themeColor: THEMES.hardware, href: "/services/hardware" },
        { name: t("services.categories.hardware_design.services.s5.name"), desc: t("services.categories.hardware_design.services.s5.desc"), image: IMAGES.prototype, themeColor: THEMES.hardware, href: "/services/hardware" },
        { name: t("services.categories.hardware_design.services.s6.name"), desc: t("services.categories.hardware_design.services.s6.desc"), image: IMAGES.validation, themeColor: THEMES.hardware, href: "/services/testing-validation" },
      ]
    },
    {
      id: "embedded-sw",
      title: t("services.categories.embedded_sw.title"),
      categoryDesc: t("services.categories.embedded_sw.desc"),
      services: [
        { name: t("services.categories.embedded_sw.services.s1.name"), desc: t("services.categories.embedded_sw.services.s1.desc"), image: IMAGES.drivers, themeColor: THEMES.embedded, href: "/services/device-driver-development" },
        { name: t("services.categories.embedded_sw.services.s2.name"), desc: t("services.categories.embedded_sw.services.s2.desc"), image: IMAGES.firmware, themeColor: THEMES.embedded, href: "/services/firmware-development" },
        { name: t("services.categories.embedded_sw.services.s3.name"), desc: t("services.categories.embedded_sw.services.s3.desc"), image: IMAGES.rtos, themeColor: THEMES.embedded, href: "/services/rtos-development" },
        { name: t("services.categories.embedded_sw.services.s4.name"), desc: t("services.categories.embedded_sw.services.s4.desc"), image: IMAGES.linux, themeColor: THEMES.embedded, href: "/services/embedded" },
        { name: t("services.categories.embedded_sw.services.s5.name"), desc: t("services.categories.embedded_sw.services.s5.desc"), image: IMAGES.bsp, themeColor: THEMES.embedded, href: "/services/embedded" },
        { name: t("services.categories.embedded_sw.services.s6.name"), desc: t("services.categories.embedded_sw.services.s6.desc"), image: IMAGES.protocol, themeColor: THEMES.embedded, href: "/services/iot-integration" },
      ]
    },
    {
      id: "application",
      title: t("services.categories.application.title"),
      categoryDesc: t("services.categories.application.desc"),
      services: [
        { name: t("services.categories.application.services.s1.name"), desc: t("services.categories.application.services.s1.desc"), image: IMAGES.web, themeColor: THEMES.application, href: "/services/portal-development" },
        { name: t("services.categories.application.services.s2.name"), desc: t("services.categories.application.services.s2.desc"), image: IMAGES.mobile, themeColor: THEMES.application, href: "/services/mobile-app" },
        { name: t("services.categories.application.services.s3.name"), desc: t("services.categories.application.services.s3.desc"), image: IMAGES.enterprise, themeColor: THEMES.application, href: "/services/application" },
        { name: t("services.categories.application.services.s4.name"), desc: t("services.categories.application.services.s4.desc"), image: IMAGES.api, themeColor: THEMES.application, href: "/services/api-development" },
        { name: t("services.categories.application.services.s5.name"), desc: t("services.categories.application.services.s5.desc"), image: IMAGES.cloud, themeColor: THEMES.application, href: "/services/cloud-integration" },
        { name: t("services.categories.application.services.s6.name"), desc: t("services.categories.application.services.s6.desc"), image: IMAGES.dashboard, themeColor: THEMES.application, href: "/services/application" },
      ]
    }
  ];

  return (
    <section className="relative w-full bg-[#0b0b12] text-white z-20">
      {SERVICE_CATEGORIES.map((category, index) => (
        <CategorySection 
          key={category.id} 
          category={category} 
          index={index} 
          totalCategories={SERVICE_CATEGORIES.length}
          handleLinkClick={handleLinkClick}
        />
      ))}

      {/* COMING SOON MODAL */}
      <AnimatePresence>
        {comingSoonModal.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setComingSoonModal({ isOpen: false, title: "" })}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121212] border border-white/10 rounded-2xl p-8 max-w-sm w-full shadow-2xl relative text-center"
            >
              <button 
                onClick={() => setComingSoonModal({ isOpen: false, title: "" })}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 bg-[#ff6b1a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe size={32} className="text-[#ff6b1a]" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{t("coming_soon", "Coming Soon")}</h3>
              <p className="text-white/60 mb-6">
                The <span className="text-[#ff6b1a] font-semibold">{comingSoonModal.title}</span> page is currently under development. Check back soon!
              </p>
              
              <button
                onClick={() => setComingSoonModal({ isOpen: false, title: "" })}
                className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-colors font-medium border border-white/10"
              >
                {t("okay", "Okay, got it")}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}