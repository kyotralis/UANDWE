import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SHOWCASE_FEATURES = [
    {
        id: "01",
        title: "Manage Users",
        description: "Easily provision and manage users across your entire organization with a centralized dashboard.",
        points: ["Create and manage users", "Role-based access control", "User activity tracking"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: "02",
        title: "Control Access & Permissions",
        description: "Ensure the right people have the right access with granular permission settings and security policies.",
        points: ["Permission management", "Security policies", "Authentication controls"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=80",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "03",
        title: "Automate Workflows",
        description: "Streamline operations by automating repetitive tasks and building custom approval processes.",
        points: ["Workflow automation", "Approval processes", "Task routing"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: "04",
        title: "Track Tasks & Activities",
        description: "Keep a pulse on your team's progress with real-time task monitoring and comprehensive activity logs.",
        points: ["Task monitoring", "Activity logs", "Progress tracking"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        color: "from-pink-500/20 to-rose-500/20"
    },
    {
        id: "05",
        title: "Manage Documents",
        description: "Securely store, version, and share critical business documents from a single source of truth.",
        points: ["Centralized storage", "Version control", "Secure sharing"],
        image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&auto=format&fit=crop&q=80",
        color: "from-indigo-500/20 to-cyan-500/20"
    },
    {
        id: "06",
        title: "Generate Reports",
        description: "Transform raw data into actionable insights with powerful analytics dashboards and custom reports.",
        points: ["Analytics dashboards", "Custom reports", "Export capabilities"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        color: "from-violet-500/20 to-fuchsia-500/20"
    },
    {
        id: "07",
        title: "Monitor Operations",
        description: "Maintain operational excellence with proactive monitoring, intelligent alerts, and real-time insights.",
        points: ["Real-time monitoring", "Alerts and notifications", "Operational insights"],
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
        color: "from-amber-500/20 to-orange-500/20"
    },
    {
        id: "08",
        title: "Collaborate Across Teams",
        description: "Break down silos and foster innovation with shared workspaces and robust team communication tools.",
        points: ["Team communication", "Shared workspaces", "Cross-team collaboration"],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
        color: "from-lime-500/20 to-green-500/20"
    }
];

const UnfoldingFeatures = () => {
    const FEATURES = [
        { id: 1, title: "Secure Login", desc: "Enterprise-grade authentication with multi-factor support to keep your organization secure.", gradient: "from-blue-500/10 to-transparent", origin: { x: "110%", y: "60%" } },
        { id: 2, title: "Dashboard & Analytics", desc: "Real-time insights and data visualization to track key metrics and performance.", gradient: "from-purple-500/10 to-transparent", origin: { x: "0%", y: "60%" } },
        { id: 3, title: "Notifications & Alerts", desc: "Intelligent alerting system to keep your team informed about critical events.", gradient: "from-pink-500/10 to-transparent", origin: { x: "-110%", y: "60%" } },
        { id: 4, title: "System Integrations", desc: "Connect seamlessly with your existing tools, databases, and third-party APIs.", gradient: "from-cyan-500/10 to-transparent", origin: { x: "110%", y: "-60%" } },
        { id: 5, title: "Workflow Automation", desc: "Custom approval and task routing to eliminate manual bottlenecks in your processes.", gradient: "from-orange-500/10 to-transparent", origin: { x: "0%", y: "-60%" } },
        { id: 6, title: "Role-Based Access", desc: "Granular permission controls to ensure team members only access what they need.", gradient: "from-emerald-500/10 to-transparent", origin: { x: "-110%", y: "-60%" } }
    ];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // 0.0 to 0.15: Zoom out from scale 1.5 to 1.0
    const gridScale = useTransform(scrollYProgress, [0, 0.15], [1.5, 1]);

    // 0.2 to 0.45: Split image
    const splitProgress = useTransform(scrollYProgress, [0.2, 0.45], [1, 0]);

    // 0.55 to 0.85: Flip cards
    const flipProgress = useTransform(scrollYProgress, [0.55, 0.85], [0, 180]);

    // bgPositions for 3x2 grid
    const bgPositions = [
        "0% 0%", "50% 0%", "100% 0%",
        "0% 100%", "50% 100%", "100% 100%"
    ];

    return (
        <section ref={containerRef} className="h-[400vh] relative bg-[#0b0b12] border-t border-white/5">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-[2000px] bg-[#0b0b12] px-4 md:px-[4%]">

                {/* CSS needed for 3D card flip */}
                <style>{`
          .preserve-3d { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
        `}</style>

                <div className="text-center mb-6 md:mb-10 lg:mb-12 w-full">
                    <h2 className="text-[clamp(1.5rem,4vw,3.75rem)] font-black text-white tracking-tight leading-tight whitespace-nowrap">
                        Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-orange-400">Enterprise Scale</span>
                    </h2>
                    <p className="mt-4 text-white/60 text-lg md:text-xl">Where are you in your journey?</p>
                </div>

                {/* Wrapper to enforce grid size without artificial max-width to match other pages */}
                <motion.div style={{ scale: gridScale, transformOrigin: "top center" }} className="w-full mx-auto">
                    <div className="grid grid-cols-3 grid-rows-2 gap-[16px] md:gap-[32px] [--gap-x:16px] md:[--gap-x:32px] [--gap-y:16px] md:[--gap-y:32px] w-full aspect-[4/3] sm:aspect-[2/1] lg:aspect-[2.5/1] xl:aspect-[3/1]">
                        {FEATURES.map((feature, i) => {
                            const col = i % 3;
                            const row = Math.floor(i / 3);

                            const xMultiplier = col === 0 ? 1 : col === 2 ? -1 : 0;
                            const yMultiplier = row === 0 ? 0.5 : -0.5;

                            // We use a mapping function and CSS calc to perfectly close the gap regardless of responsive breakpoints
                            const xPos = useTransform(splitProgress, v => `calc(${v} * var(--gap-x) * ${xMultiplier})`);
                            const yPos = useTransform(splitProgress, v => `calc(${v} * var(--gap-y) * ${yMultiplier})`);

                            // Border radius interpolation: 0px when unified, 24px when split.
                            const borderRadius = useTransform(splitProgress, [0, 1], ["24px", "0px"]);

                            return (
                                <motion.div
                                    key={feature.id}
                                    style={{ x: xPos, y: yPos }}
                                    className="relative w-full h-full perspective-1000"
                                >
                                    <motion.div
                                        style={{ rotateY: flipProgress }}
                                        className="w-full h-full relative preserve-3d"
                                    >
                                        {/* FRONT: Image Slice */}
                                        <motion.div
                                            style={{ borderRadius }}
                                            className="absolute inset-0 backface-hidden bg-cover bg-no-repeat shadow-[0_0_50px_rgba(255,107,26,0.1)] overflow-hidden"
                                        >
                                            <div
                                                className="w-full h-full"
                                                style={{
                                                    backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
                                                    backgroundSize: "300% 200%",
                                                    backgroundPosition: bgPositions[i]
                                                }}
                                            />
                                        </motion.div>

                                        {/* BACK: Feature Card */}
                                        <motion.div
                                            className="absolute inset-0 backface-hidden bg-[#0b0b12] border border-white/10 p-2 min-[400px]:p-3 sm:p-6 md:p-8 flex flex-col justify-end shadow-2xl overflow-hidden"
                                            style={{ rotateY: 180, borderRadius }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b1a]/0 via-[#ff6b1a]/0 to-[#ff6b1a]/10 opacity-50" />

                                            <div className="relative z-10">
                                                <h3 className="text-[clamp(0.7rem,3vw,1rem)] sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 md:mb-4 tracking-tight leading-tight">{feature.title}</h3>
                                                <p className="text-white/60 leading-relaxed font-medium text-xs sm:text-sm md:text-base hidden sm:block">{feature.desc}</p>
                                            </div>
                                        </motion.div>

                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

const FeatureShowcase = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [activeIndex, setActiveIndex] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsCount = SHOWCASE_FEATURES.length;
        const segmentSize = 1 / cardsCount;
        const rawIndex = Math.floor(latest / segmentSize);
        const clampedIndex = Math.min(Math.max(rawIndex, 0), cardsCount - 1);
        setActiveIndex(clampedIndex);
    });

    return (
        <section ref={containerRef} className="relative w-full bg-[#0b0b12]" style={{ height: `${SHOWCASE_FEATURES.length * 100}vh` }}>
            <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-[4%] py-20 md:py-16 gap-4 md:gap-0">

                {/* LEFT: Image */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-0 md:pr-8 mt-12 md:mt-0 h-[30%] md:h-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className={`relative w-full max-w-[200px] sm:max-w-[280px] md:max-w-[500px] aspect-[4/3] rounded-xl md:rounded-[2rem] overflow-hidden bg-gradient-to-br ${SHOWCASE_FEATURES[activeIndex].color} p-[2px] shadow-2xl`}
                        >
                            <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative group bg-[#0b0b12]">
                                <img
                                    src={SHOWCASE_FEATURES[activeIndex].image}
                                    alt={SHOWCASE_FEATURES[activeIndex].title}
                                    className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-125"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* RIGHT: Content */}
                <div className="w-full md:w-1/2 h-[70%] md:h-full flex flex-col justify-start md:justify-center pl-0 md:pl-8 relative pt-4 md:pt-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="max-w-xl"
                        >
                            <div className="text-[#ff6b1a] font-mono text-lg sm:text-xl md:text-2xl font-bold tracking-widest mb-2 md:mb-4">
                                {SHOWCASE_FEATURES[activeIndex].id}
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 sm:mb-4 md:mb-6 tracking-tight leading-tight">
                                {SHOWCASE_FEATURES[activeIndex].title}
                            </h2>
                            <p className="text-sm sm:text-base md:text-xl text-white/60 mb-4 md:mb-8 leading-relaxed">
                                {SHOWCASE_FEATURES[activeIndex].description}
                            </p>
                            <ul className="space-y-2 md:space-y-4">
                                {SHOWCASE_FEATURES[activeIndex].points.map((point, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (i * 0.1), duration: 0.4 }}
                                        className="flex items-center text-white/80 text-sm sm:text-base md:text-xl font-medium"
                                    >
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#ff6b1a] mr-3 md:mr-4 shadow-[0_0_8px_#ff6b1a]" />
                                        {point}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.15, 1]);
    return (
        <span className="relative mr-[0.25em] mt-[0.1em] inline-block">
            <span className="absolute opacity-0">{children}</span>
            <motion.span style={{ opacity }} className="text-white">{children}</motion.span>
            <span className="absolute left-0 top-0 text-white/20">{children}</span>
        </span>
    );
};

const ScrollRevealAbout = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start 75%", "end 45%"]
    });

    const text = "We specialize in creating robust, custom portal solutions that connect your people, data, and processes into a single, unified interface. From employee intranets to customer self-service hubs, our portals are designed with usability and security at their core.";
    const words = text.split(" ");

    return (
        <section ref={targetRef} className="py-32 md:py-48 px-4 md:px-[4%] bg-[#0b0b12] relative">
            <div className="w-full mx-auto">
                <p className="flex flex-wrap justify-center text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.3] md:leading-[1.4] tracking-tight">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                    })}
                </p>
            </div>
        </section>
    );
};

const PortalDevelopment = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0b0b12] text-white pt-[100px]">

            {/* BACK BUTTON */}
            <div className="w-full px-4 md:px-[4%] flex justify-start mb-4 relative z-50">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                >
                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="font-medium text-sm md:text-base">Back</span>
                </button>
            </div>

            {/* HERO SECTION */}
            <section className="relative px-4 md:px-[4%] py-12 lg:py-24 flex flex-col items-center justify-center text-center">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#ff6b1a]/20 blur-[120px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-5xl mx-auto"
                >


                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        {/* Enterprise <br className="hidden sm:block" /> */}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1a] to-orange-400">
                            Portal Development
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-10">
                        Build secure, scalable, and highly interactive web portals that streamline your business operations. </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-[#ff6b1a] text-white rounded-full font-semibold hover:bg-[#ff8c42] transition-colors w-full sm:w-auto shadow-lg shadow-[#ff6b1a]/20">
                            Explore Our Portals
                        </button>
                        <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto">
                            Discuss Your Project
                        </button>
                    </div>
                </motion.div>
            </section>

            <ScrollRevealAbout />

            <UnfoldingFeatures />
            <FeatureShowcase />
        </div>
    );
};

export default PortalDevelopment;