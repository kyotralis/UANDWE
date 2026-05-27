import React, { useState, useRef, useEffect } from "react";
import Applicationfront from "../../assets/images/applicationfront.png";
import { motion } from "framer-motion";
import webdevelopment from "../../assets/images/cards/webdevelopment.png"
import appdevelopment from "../../assets/images/cards/appdevelopment.png"
import cloud from "../../assets/images/cards/cloud.png"
import api from "../../assets/images/cards/api.png"
import uiux from "../../assets/images/cards/uiux.png"
import WovenCanvas from "../../components/ui/WovenCanvas";

const capabilities = [
  {
    title: "Web Application Development",
    mod: "01",
    specs: ["REACT", "NODE.JS",],
    tags: ["FRONTEND", "BACKEND", "FULL-STACK"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    desc: "Scalable, high-performance SPAs and full-stack platforms engineered for growth. From architecture to deployment.",
    longDesc: "We build modern web applications using the latest frameworks and best practices. Our team specializes in creating responsive, accessible, and SEO-friendly interfaces with real-time capabilities. From complex dashboards to e-commerce platforms, we deliver end-to-end solutions that scale with your business. We focus on performance optimization, security hardening, and progressive web app features to ensure your users get the best experience possible.",
    img: webdevelopment,
  },
  {
    title: "Mobile App Development",
    mod: "02",
    specs: ["Flutter", "swift"],
    tags: ["iOS", "ANDROID",],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
    desc: "Native and cross-platform iOS & Android experiences. Performant, intuitive, and built to last.",
    longDesc: "Our mobile development team crafts seamless experiences for iOS and Android platforms. Whether you need a native app with platform-specific optimizations or a cross-platform solution to reach both markets simultaneously, we have the expertise. We prioritize smooth animations, offline capabilities, push notifications, and biometric authentication. Our apps are tested rigorously on real devices to ensure performance and reliability in all conditions.",
    img: appdevelopment,
  },
  {
    title: "Cloud Integration",
    mod: "03",
    specs: ["AWS", "AZURE"],
    tags: ["INFRASTRUCTURE", "SCALING", "DEVOPS"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    desc: "AWS, GCP, Azure — cloud infrastructure designed for reliability, auto-scaling, and zero-downtime delivery.",
    longDesc: "We architect cloud solutions that are resilient, cost-effective, and ready to handle millions of users. Our services include infrastructure as code (Terraform, CloudFormation), auto-scaling configurations, load balancing, CDN setup, database replication, and disaster recovery planning. We ensure your application stays online during traffic spikes and maintain security compliance across all cloud providers.",
    img: cloud,
  },
  {
    title: "API Development",
    mod: "04",
    specs: ["REST", "GRAPHQL", "WEBSOCKETS"],
    tags: ["BACKEND", "INTEGRATION", "MICROSERVICES"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 9l3 3-3 3M13 15h3" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
    desc: "RESTful and GraphQL APIs built for performance, versioning, and clean developer ergonomics.",
    longDesc: "Our API development focuses on clean architecture, comprehensive documentation (Swagger/OpenAPI), and robust authentication (OAuth, JWT). We build versioned APIs with rate limiting, request validation, and caching strategies. For real-time needs, we implement WebSockets and server-sent events. Our GraphQL endpoints include batching, persisted queries, and federation for microservices.",
    img: api,
  },
];

const techStackRow1 = [
  "React", "Next.js", "React Native", "Node.js", "TypeScript",
  "GraphQL", "PostgreSQL", "Redis", "AWS"
];
const techStackRow2 = [
  "GCP", "Docker", "Kubernetes", "Tailwind CSS", "Prisma",
  "OpenAI API", "Stripe", "Vercel", "Figma"
];

const doubledRow1 = [...techStackRow1, ...techStackRow1];
const doubledRow2 = [...techStackRow2, ...techStackRow2];

// MODAL COMPONENT
function SpecModal({ item, onClose }) {
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 z-50 animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div
          className="relative bg-[#0a0a0a] border border-[#ff6b1a]/30 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-[#ff6b1a]/50 transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="relative">
            <div className="relative h-56 md:h-72 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
                {item.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {item.specs.map((spec, i) => (
                  <span key={i} className="text-[20px] bg-[#ff6b1a]/10 border border-[#ff6b1a]/30 text-white py-1.5 px-3 rounded-full font-bold tracking-wide">
                    {spec}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, i) => (
                  <span key={i} className="text-[9px] border border-white/20 text-white/40 py-1 px-2.5 rounded font-semibold tracking-wide uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-4">
                <p className="text-white/80 leading-relaxed">{item.longDesc || item.desc}</p>
                <p className="text-white/60 leading-relaxed text-sm">
                  Our team brings deep expertise in {item.title.toLowerCase()}, ensuring your project benefits from
                  industry best practices, cutting-edge technologies, and a commitment to excellence. We work
                  closely with you throughout the development lifecycle, from initial discovery to deployment
                  and beyond.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/10">
                <button className="bg-[#ff6b1a] hover:bg-[#e85f14] text-white border-none py-2.5 px-6 text-xs font-bold tracking-widest cursor-pointer rounded transition-all duration-200">
                  START A PROJECT →
                </button>
                <button
                  onClick={onClose}
                  className="bg-transparent text-white/60 border border-white/20 hover:border-white/50 py-2.5 px-6 text-xs font-bold tracking-widest cursor-pointer rounded transition-all duration-200"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// CAPABILITY CARD
function CapCard({ item, index, total, hoveredIndex, onHover, onLeave, onViewSpec }) {
  const isHovered = hoveredIndex === index;
  const isShrunken = hoveredIndex !== null && !isHovered;

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      className={`relative overflow-hidden min-w-0 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
      bg-gradient-to-b from-[#1a1a1d] via-[#121215] to-[#0e0e11]   
      border-r border-b border-white/5                             
      ${isHovered
          ? "border-[#ff6b1a] flex-[1.4]"
          : isShrunken
            ? "flex-1 hover:flex-[1.5]"
            : "flex-1 hover:flex-[1.5]"
        }`}
      style={{ borderBottomColor: isHovered ? "#ff6b1a" : "#1f1f1f" }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] transition-all duration-500 px-5 pb-5"
        style={{
          height: isHovered ? "58%" : "52%",
        }}
      >
        <div className="w-full h-full rounded-xl overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? "grayscale-0 brightness-100" : "grayscale brightness-50"
            }`}
          />
        </div>
      </div>

      {/* Left accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff6b1a] z-10 transition-transform duration-400 ease-out ${isHovered ? "scale-y-100" : "scale-y-0"
          }`}
        style={{ transformOrigin: "top" }}
      />

      {/* Content layer */}
      <div className="absolute inset-0 z-[2] p-[18px_20px] flex flex-col justify-between">
        <div>
          <div className="text-[clamp(1.5rem,0.3vw,3rem)] font-black text-white leading-[1.1] tracking-[-0.02em] uppercase mb-4">
            {item.title.split("\n").map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>

          <div className="flex flex-col gap-1.5">
            {item.specs.map((spec, i) => (
              <div
                key={i}
                className="text-[15px] tracking-[0.12em] text-white font-bold uppercase flex items-center gap-2 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 inline-block" />
                {spec}
              </div>
            ))}
          </div>
        </div>

        {/* Hover reveal: desc + tags + CTA */}
        <div
          className={`mt-auto transition-all duration-350 delay-150 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[15px] pointer-events-none"
            }`}
        >
          <p className="text-[11px] text-white/60 leading-relaxed mb-3">{item.desc}</p>
          <div className="flex gap-1.5 flex-wrap mb-3.5">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[8px] border border-[#ff6b1a]/40 text-white/50 py-1 px-2.5 rounded-[2px] font-semibold tracking-[0.08em] uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        
        </div>
      </div>
    </div>
  );
}

// CAPABILITIES GRID
function CapabilitiesGrid({ onViewSpec }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const row1 = capabilities.slice(0, 4);
  const row2 = capabilities.slice(4, 8);

  return (
<section className="bg-[#0b0b12] w-full px-[8%] py-8">      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-[60px] px-12 pb-10"
      >
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-white leading-[1.1] tracking-[-0.02em]">
          WHAT WE{" "}
          <span className="text-[#ff8844]">BUILD</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
className="flex w-full h-[300px] md:h-[620px] relative mb-2"      >
        {row1.map((item, i) => (
          <CapCard
            key={i}
            item={item}
            index={i}
            total={capabilities.length}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            onLeave={() => setHoveredIndex(null)}
            onViewSpec={onViewSpec}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex w-full h-[300px] md:h-[120px] relative"
      >
        {row2.map((item, i) => (
          <CapCard
            key={i + 4}
            item={item}
            index={i + 4}
            total={capabilities.length}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            onLeave={() => setHoveredIndex(null)}
            onViewSpec={onViewSpec}
          />
        ))}
      </motion.div>
    </section>
  );
}

// PROCESS SECTION
function ProcessSection() {
  const [activeStep, setActiveStep] = useState(-1);
  const [svgPoints, setSvgPoints] = useState([]);
  const containerRef = useRef(null);
  const colRefs = useRef([]);
  const wrapRef = useRef(null);
  const runningRef = useRef(false);
  const timerRef = useRef(null);

  const NODE_CY = [185, 115, 115, 58, 22];
  const SVG_H = 220;

const steps = [
  {
    title: "Discovery",
    desc: "We uncover your vision through strategy sessions, market research, and technical analysis. By understanding your users, business goals, and challenges, we create a solid foundation before a single line of code is written.",
    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>),
  },
  {
    title: "Design",
    desc: "Our designers transform ideas into intuitive digital experiences with modern UI/UX, interactive prototypes, and scalable design systems that balance aesthetics with usability.",
    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>),
  },
  {
    title: "Build",
    desc: "Using modern technologies and agile workflows, we develop fast, secure, and scalable applications with clean architecture, optimized performance, and continuous testing throughout the process.",
    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>),
  },
  {
    title: "Deploy",
    desc: "We ensure smooth product launches with automated deployments, cloud infrastructure, and performance optimization — delivering reliable experiences across every platform and device.",
    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" /></svg>),
  },
  {
    title: "Scale",
    desc: "After launch, we help your platform evolve through analytics, feature improvements, infrastructure scaling, and ongoing support — ensuring long-term growth and stability.",
    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>),
  },
];

  useEffect(() => {
    function measure() {
      if (!containerRef.current) return;
      const cRect = containerRef.current.getBoundingClientRect();
      const pts = colRefs.current.map((el, i) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { cx: r.left + r.width / 2 - cRect.left, cy: NODE_CY[i] };
      }).filter(Boolean);
      if (pts.length === 5) setSvgPoints(pts);
    }
    const t = setTimeout(measure, 60);
    window.addEventListener("resize", measure);
    return () => { clearTimeout(t); window.removeEventListener("resize", measure); };
  }, []);

  function runSequence() {
    if (runningRef.current) return;
    runningRef.current = true;
    setActiveStep(-1);
    steps.forEach((_, i) => {
      timerRef.current = setTimeout(() => {
        setActiveStep(i);
        if (i === steps.length - 1) runningRef.current = false;
      }, i * 680 + 250);
    });
  }

  useEffect(() => {
    const section = wrapRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting && !runningRef.current) runSequence(); }); },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => { observer.disconnect(); if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const buildFullPath = (pts) => {
    if (!pts || pts.length < 2) return "";
    let d = `M ${pts[0].cx} ${pts[0].cy}`;
    for (let i = 1; i < pts.length; i++) {
      const p = pts[i - 1], c = pts[i], mx = (p.cx + c.cx) / 2;
      d += ` C ${mx} ${p.cy}, ${mx} ${c.cy}, ${c.cx} ${c.cy}`;
    }
    return d;
  };

  const buildSeg = (p, c) => {
    const mx = (p.cx + c.cx) / 2;
    return `M ${p.cx} ${p.cy} C ${mx} ${p.cy}, ${mx} ${c.cy}, ${c.cx} ${c.cy}`;
  };

  return (
    <section className="relative bg-[#0b0b12] py-24 overflow-hidden">
      <div ref={wrapRef} className="relative max-w-6xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white tracking-tight leading-tight mb-3">
            From concept to <span className="text-[#ff6b1a] drop-shadow-lg">global scale</span>
          </h2>
          <p className="text-white/50 text-[1.05rem] max-w-xl leading-relaxed font-medium">
            A battle-tested five-phase process that transforms ideas into production-grade digital products — on time, on budget, and built to last.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative w-full" style={{ minHeight: `${SVG_H}px` }}>
          <div style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            right: 0, 
            height: SVG_H, 
            pointerEvents: "none",
            zIndex: 10
          }}>
            {svgPoints.length === 5 && (
              <svg width="100%" height={SVG_H}
                style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}
              >
                <path d={buildFullPath(svgPoints)} fill="none" stroke="#1e2236"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                {svgPoints.slice(1).map((pt, i) => {
                  const isActive = i < activeStep;
                  return (
                    <motion.path key={`seg-${i}`}
                      d={buildSeg(svgPoints[i], pt)}
                      fill="none" stroke="#ff6b1a" strokeWidth="3" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: isActive ? 1 : 0, 
                        opacity: isActive ? 1 : 0 
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      style={{ filter: "drop-shadow(0 0 8px #ff6b1aaa)" }}
                    />
                  );
                })}

                {svgPoints.map((pt, i) => {
                  const on = i <= activeStep;
                  return (
                    <g key={`node-${i}`}>
                      {on && (
                        <motion.circle cx={pt.cx} cy={pt.cy} r={28}
                          fill="none" stroke="#ff6b1a" strokeWidth="1.5"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.2 }}
                          transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                        />
                      )}
                      <motion.circle cx={pt.cx} cy={pt.cy} r={20}
                        fill="#0b0b12"
                        stroke={on ? "#ff6b1a" : "#252836"}
                        strokeWidth="1.5"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: on ? 1.1 : 1, filter: on ? "drop-shadow(0 0 10px rgba(255,107,26,0.6))" : "drop-shadow(0 0 0px rgba(255,107,26,0))" }}
                        transition={{ duration: 0.4, type: "spring" }}
                      />
                      <foreignObject x={pt.cx - 10} y={pt.cy - 10} width="20" height="20">
                        <motion.div xmlns="http://www.w3.org/1999/xhtml"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ 
                            opacity: on ? 1 : 0.4, 
                            scale: on ? 1.1 : 1,
                            color: on ? "#ff6b1a" : "#3a3d4a" 
                          }}
                          transition={{ duration: 0.4 }}
                          style={{
                            display: "flex", alignItems: "center", justifyContent: "center",
                            width: "100%", height: "100%",
                          }}
                        >
                          {steps[i].icon}
                        </motion.div>
                      </foreignObject>
                    </g>
                  );
                })}
              </svg>
            )}
          </div>

          <div className="flex w-full" style={{ paddingTop: `${SVG_H - 40}px` }}>
            {steps.map((s, i) => {
              const on = i <= activeStep;
              return (
                <div key={i}
                  ref={el => colRefs.current[i] = el}
                  className="flex-1 px-3"
                  style={{
                    opacity: on ? 1 : 0,
                    transform: on ? "translateY(0) scale(1)" : "translateY(30px) scale(0.9)",
                    filter: on ? "blur(0px)" : "blur(8px)",
                    transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.6s ease",
                  }}
                >
                  <div className="font-black select-none leading-none mb-1 transition-all duration-700"
                    style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)", color: "#ff6b1a", opacity: on ? 0.2 : 0 }}>
                    {i + 1}
                  </div>
                  <h3 className="text-white font-bold text-[0.95rem] tracking-wide mb-2">{s.title}</h3>
                  <div className="h-[2px] mb-3 rounded-full bg-[#ff6b1a] shadow-[0_0_8px_#ff6b1a]"
                    style={{ width: on ? "32px" : "0px", transition: "width 0.6s ease 0.2s" }} />
                  <p className="text-white/50 text-[0.7rem] leading-[1.65]">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-[#ff6b1a] hover:bg-[#e85f14] text-white py-3.5 px-10 text-xs font-bold tracking-[0.2em] cursor-pointer rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(255,107,26,0.3)] hover:shadow-[0_0_25px_rgba(255,107,26,0.5)] hover:-translate-y-1">
            START YOUR PROJECT →
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// SCROLLING TECH STACK
function ScrollingTechStack() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);

  useEffect(() => {
    const container = row1Ref.current;
    if (!container) return;
    let animationId;
    const speed = 0.5;
    const scroll = () => {
      if (!container) return;
      setScrollPosition1((prev) => {
        let newPosition = prev + speed;
        if (newPosition >= container.scrollWidth / 2) newPosition = 0;
        return newPosition;
      });
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => { if (animationId) cancelAnimationFrame(animationId); };
  }, []);

  useEffect(() => {
    const container = row2Ref.current;
    if (!container) return;
    let animationId;
    const speed = 0.5;
    const scroll = () => {
      if (!container) return;
      setScrollPosition2((prev) => {
        let newPosition = prev - speed;
        if (newPosition <= 0) newPosition = container.scrollWidth / 2;
        return newPosition;
      });
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => { if (animationId) cancelAnimationFrame(animationId); };
  }, []);

  useEffect(() => {
    if (row1Ref.current) row1Ref.current.scrollLeft = scrollPosition1;
  }, [scrollPosition1]);

  useEffect(() => {
    if (row2Ref.current) row2Ref.current.scrollLeft = scrollPosition2;
  }, [scrollPosition2]);

  return (
    <section className="bg-[#0b0b12] py-24">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <div className="w-10 h-[2px] bg-[#ff6b1a] mx-auto mb-5 shadow-[0_0_8px_#ff6b1a]" />
          <h2 className="font-extrabold text-xl tracking-[0.15em] uppercase mb-4 text-white drop-shadow-md">TECH STACK</h2>
          <p className="text-white/50 text-sm tracking-wide font-medium">Modern tools we use to build exceptional products</p>
        </motion.div>

        <div className="mb-6">
          <div ref={row1Ref} className="overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <div className="flex gap-3 pb-4 min-w-max">
              {doubledRow1.map((tech, idx) => (
                <motion.span
                  key={`row1-${idx}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="border border-white/10 py-2.5 px-5 text-[0.7rem] tracking-[0.1em] text-white/60 font-semibold rounded-full cursor-default transition-all duration-200 hover:border-[#ff6b1a]/50 hover:text-[#ff8844] hover:bg-[#ff6b1a]/10 whitespace-nowrap"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div ref={row2Ref} className="overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <div className="flex gap-3 pt-2 min-w-max">
              {doubledRow2.map((tech, idx) => (
                <motion.span
                  key={`row2-${idx}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="border border-white/10 py-2.5 px-5 text-[0.7rem] tracking-[0.1em] text-white/60 font-semibold rounded-full cursor-default transition-all duration-200 hover:border-[#ff6b1a]/50 hover:text-[#ff8844] hover:bg-[#ff6b1a]/10 whitespace-nowrap"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-[#ff6b1a]/60" />
          <div className="w-2 h-2 rounded-full bg-[#ff6b1a]/30" />
          <div className="w-2 h-2 rounded-full bg-[#ff6b1a]/10" />
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

// MAIN COMPONENT
const Application = () => {
  const [selectedSpec, setSelectedSpec] = useState(null);

  const handleViewSpec = (item) => setSelectedSpec(item);
  const handleCloseModal = () => setSelectedSpec(null);

  return (
    <div className="bg-[#0b0b12] text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-[650px] lg:min-h-[800px] flex items-center">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.15, filter: "blur(10px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0" />
          <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#0b0b12] to-transparent" />
        </motion.div>

        <motion.div 
          className="absolute top-0 left-0 right-0 h-[100px] bg-black z-20 pointer-events-none"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[100px] bg-black z-20 pointer-events-none"
          initial={{ y: 0 }}
          animate={{ y: "100%" }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
        />

        <div className="relative z-30 max-w-7xl mx-auto px-8 pt-20 pb-24 w-full flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 z-10 relative pr-0 lg:pr-10">
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-black leading-[1.05] tracking-tight mb-1 text-[clamp(3rem,6vw,5.5rem)]"
            >
              APPLICATION
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-black leading-[1.05] text-[#ff6b1a] tracking-tight mb-8 text-[clamp(3rem,6vw,5.5rem)] drop-shadow-2xl"
            >
              DEVELOPMENT
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
              className="max-w-[550px] text-[1.1rem] text-white/70 leading-relaxed mb-12 font-medium"
            >
              Engineering high-performance digital ecosystems. From silicon-level precision to cloud-scale intelligence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-5"
            >
              <button className="bg-transparent text-white border border-white/25 hover:border-white hover:bg-white/5 py-3.5 px-8 text-xs font-bold tracking-[0.2em] cursor-pointer rounded-sm transition-all duration-300 backdrop-blur-sm">
                EXPLORE_SYSTEMS
              </button>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative mt-16 lg:mt-0">
            <WovenCanvas />
          </div>
        </div>
      </section>

      <CapabilitiesGrid onViewSpec={handleViewSpec} />
      <ProcessSection />
      <ScrollingTechStack />

      {/* CTA SECTION */}
      <section className="relative border-t border-white/[0.06] py-32 bg-[#0b0b12] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#ff6b1a] opacity-[0.03] blur-[120px] pointer-events-none rounded-[100%]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 max-w-6xl mx-auto px-8 text-center"
        >
          <div className="w-12 h-[2px] bg-[#ff6b1a] mx-auto mb-8 shadow-[0_0_10px_#ff6b1a]" />
          <h2 className="font-black text-[clamp(2rem,4vw,3.5rem)] text-white tracking-tight mb-6 leading-tight">
            READY TO EXPERIENCE <br className="hidden sm:block" /> THE <span className="text-[#ff6b1a] drop-shadow-lg">DIFFERENCE</span>?
          </h2>
          <p className="text-white/50 text-[1.1rem] max-w-2xl mx-auto mb-12 font-medium">
            Partner with Kinetic Engineering and build the future of deep tech infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-transparent text-white border border-white/25 hover:border-white hover:bg-white/5 py-4 px-10 text-xs font-bold tracking-[0.2em] cursor-pointer rounded-sm transition-all duration-300 backdrop-blur-sm">
              Contact US
            </button>
          </div>
        </motion.div>
      </section>

      {selectedSpec && <SpecModal item={selectedSpec} onClose={handleCloseModal} />}
    </div>
  );
};

export default Application;