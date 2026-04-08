import { motion } from "framer-motion";
import { Play, TrendingUp, Zap, Shield, Star } from "lucide-react";
import TrustedImage from "../../assets/images/TrustedImage.png"
/* ── DATA ─────────────────────────────────────────────────────── */
const STATS = [
  { value: "100+", label: "PROJECTS DELIVERED" },
  { value: "50+",  label: "HAPPY CLIENTS" },
  { value: "10+",  label: "INDUSTRIES SERVED" },
];

const GRID_TESTIMONIALS = [
  {
    avatar: "AV",
    color: "#e85d26",
    name: "Anjali Verma",
    company: "INNOVATEX",
    text: '"The technical expertise they brought to our project was unmatched. They transformed our legacy system into a scalable powerhouse in record time."',
    stars: 5,
    italic: false,
  },
  {
    avatar: "SI",
    color: "#2563eb",
    name: "Sneha Iyer",
    company: "NEXA DIGITAL",
    text: '"Reliability is hard to find, but we found it here. Every milestone was hit perfectly."',
    stars: 5,
    italic: true,
    italicPart: "Reliability is hard to find, but we found it here.",
  },
  {
    avatar: "KR",
    color: "#16a34a",
    name: "Karthik Reddy",
    company: "SCALEUP LABS",
    text: '"A team that actually understands business goals, not just code. The ROI we saw after launch was immediate."',
    stars: 5,
    italic: false,
  },
  {
    avatar: "RA",
    color: "#e85d26",
    name: "Rohit Agarwal",
    company: "MARKETFLOW",
    text: '"The agility they maintained throughout our product\'s pivoting phase saved us months of development debt."',
    stars: 5,
    italic: false,
  },
  {
    avatar: "PN",
    color: "#2563eb",
    name: "Priya Nair",
    company: "BRIGHTEDGE",
    text: '"Immaculate attention to detail and user experience. They truly care about the end user."',
    stars: 5,
    italic: true,
    italicPart: "They truly care about the end user.",
  },
  {
    avatar: "VS",
    color: "#16a34a",
    name: "Vikram Singh",
    company: "NEXTGEN SYSTEMS",
    text: '"Scalability was our main concern, and they engineered a solution that handled 5x our peak load effortlessly."',
    stars: 5,
    italic: false,
  },
];

const WHY_ITEMS = [
  { title: "Long-term partnerships", sub: "We grow as your business grows." },
  { title: "Fast execution", sub: "Rapid prototyping to production." },
  { title: "Strong business + tech understanding", sub: "Bridging the gap between code and ROI." },
  { title: "Tailored innovative solutions", sub: "No cookie-cutter templates here." },
  { title: "Reliable support", sub: "Dedicated maintenance for critical systems." },
];

const INDUSTRIES_LIST = ["Fintech", "Healthcare", "E-commerce", "SaaS", "EdTech", "Enterprise"];

const MARQUEE_ITEMS = [
  "TOP-TIER TEAM", "EXCEPTIONAL QUALITY", "FAST DELIVERY", "RELIABLE PARTNER", "HIGHLY RECOMMENDED",
];

/* ── AVATAR ───────────────────────────────────────────────────── */
function Avatar({ initials, color }) {
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
      style={{ background: color }}
    >
      {initials}
    </div>
  );
}

/* ── STAR ROW ─────────────────────────────────────────────────── */
function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5 mt-2">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={11} className="text-orange-500 fill-orange-500" />
      ))}
    </div>
  );
}

/* ── MAIN COMPONENT ───────────────────────────────────────────── */
export default function Testimonials() {
  return (
    <section className="bg-[#080809] text-white w-full overflow-hidden font-sans">

      {/* ══════════════════════════════════════════════════
          HERO WITH IMAGE
      ══════════════════════════════════════════════════ */}
      <div className="px-[5%] pt-24 pb-16 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
       
      


            
  

         {/* Right Image - Trusted by Businesses */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="flex-1 w-full h-full"
>
  <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl w-full h-full min-h-[400px]">
    <img 
      src={TrustedImage} 
      alt="Trusted by Businesses Worldwide" 
      className="w-full h-full object-cover"
    />
    {/* Optional overlay gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
  </div>
</motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          FEATURED TESTIMONIAL
      ══════════════════════════════════════════════════ */}
    

      {/* ══════════════════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════════════════ */}
      <div className="overflow-hidden py-5 border-y border-white/[0.06] my-12">
        <div
          className="flex whitespace-nowrap gap-16 text-[11px] tracking-[0.3em] text-gray-600 uppercase font-semibold"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
            <span key={i} className="flex items-center gap-4">
              {t}
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500/60 inline-block" />
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-33.333%); }
          }
        `}</style>
      </div>

      {/* ══════════════════════════════════════════════════
          VIDEO SECTION — "Hear From Our Clients"
      ══════════════════════════════════════════════════ */}
      <div className="px-[5%] pb-20 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 min-w-0"
          >
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-tight leading-tight mb-4">
              Hear From Our <br /> Clients
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-8">
              Watch how our clients share their experience working with us. We
              believe in the power of visual storytelling and real-world results.
            </p>
            <button className="flex items-center gap-3 group">
              <span className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center group-hover:bg-orange-400 transition-colors shadow-[0_0_30px_rgba(255,107,26,0.5)]">
                <Play size={14} fill="white" className="text-white ml-0.5" />
              </span>
              <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-white group-hover:text-orange-400 transition-colors">
                Watch the Showcase
              </span>
            </button>
          </motion.div>

          {/* Right: video card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full md:w-[380px]"
          >
            <div
              className="relative w-full h-[200px] rounded-2xl overflow-hidden border border-white/[0.08] bg-cover bg-center"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80)` }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                  <Play size={16} fill="white" className="text-white ml-1" />
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-[9px] text-gray-500 tracking-[0.2em] uppercase">Coming Next</span>
              <span className="text-[10px] text-gray-400 font-medium">UANDWE × ScaleUp Labs Story</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          TESTIMONIALS GRID
      ══════════════════════════════════════════════════ */}
      <div className="px-[5%] pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          {GRID_TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="p-6 rounded-2xl bg-[#111113] border border-white/[0.07] hover:border-orange-500/20 transition-all duration-300 flex flex-col gap-3"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <Avatar initials={t.avatar} color={t.color} />
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">{t.name}</p>
                  <p className="text-[9px] text-gray-500 tracking-widest uppercase">{t.company}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[13px] text-gray-400 leading-relaxed flex-1">
                {t.italicPart ? (
                  <>
                    <span className="text-gray-300 italic">"{t.italicPart}</span>
                    {t.text.replace(`"${t.italicPart}`, "").replace(/^,?\s*/, " ")}
                  </>
                ) : (
                  t.text
                )}
              </p>

              <Stars count={t.stars} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          CASE STUDY
      ══════════════════════════════════════════════════ */}
      <div className="px-[5%] pb-20 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Left: case study text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#111113] border border-white/[0.07] rounded-2xl p-8"
          >
            <span className="text-[9px] tracking-[0.28em] text-orange-500 uppercase font-semibold">Case Study</span>
            <h3 className="text-[1.5rem] font-extrabold tracking-tight mt-3 mb-4">
              Real Impact, Real Results
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-xs">
              One of our recent collaborations with a fast-growing SaaS startup
              resulted in a complete transformation of their digital platform.
            </p>

            {/* Results list */}
            <div className="space-y-3">
              {[
                { icon: <TrendingUp size={14} />, text: "60% Engagement Increase" },
                { icon: <Zap size={14} />, text: "40% Speed Improvement" },
                { icon: <Shield size={14} />, text: "Higher Customer Retention" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-orange-500">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full md:w-[380px] rounded-2xl overflow-hidden border border-white/[0.07] bg-cover bg-center min-h-[250px]"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80)` }}
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          WHY CLIENTS + INDUSTRIES (side by side)
      ══════════════════════════════════════════════════ */}
      <div className="px-[5%] pb-20 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Why clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-[1.3rem] font-extrabold tracking-tight mb-7">Why Clients Choose Us</h3>
            <div className="space-y-5">
              {WHY_ITEMS.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-[12px] text-gray-500 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Industries + Global reach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1 space-y-8"
          >
            {/* Industries */}
            <div>
              <h3 className="text-[1.3rem] font-extrabold tracking-tight mb-5">Industries</h3>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES_LIST.map((item, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium text-gray-300 border border-white/10 bg-white/[0.04] px-3 py-1.5 rounded-full hover:border-orange-500/30 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Global Reach */}
            <div>
              <h3 className="text-[1.3rem] font-extrabold tracking-tight mb-5">Global Reach</h3>
              <div className="bg-[#111113] border border-white/[0.07] rounded-2xl overflow-hidden">
                {/* World map visual */}
                <div
                  className="relative h-[140px] bg-cover bg-center opacity-60"
                  style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png)`, filter: "brightness(0.4) sepia(1) saturate(2) hue-rotate(10deg)" }}
                />
                <div className="absolute" style={{ marginTop: "-140px" }}>
                  <div className="relative h-[140px] flex items-center px-6 gap-8">
                    <div>
                      <p className="text-[1.6rem] font-extrabold text-orange-400 tracking-tight">30%</p>
                      <p className="text-[9px] text-gray-500 tracking-[0.18em] uppercase">Faster Delivery</p>
                    </div>
                    <div>
                      <p className="text-[1.6rem] font-extrabold text-orange-500 tracking-tight">Global</p>
                      <p className="text-[9px] text-gray-500 tracking-[0.18em] uppercase">Client Presence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          RELATIONSHIP QUOTE
      ══════════════════════════════════════════════════ */}
      <div className="px-[5%] py-16 text-center max-w-3xl mx-auto">
        <div className="w-10 h-10 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center mx-auto mb-8">
          <Star size={16} className="text-orange-500 fill-orange-500" />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[1.1rem] text-gray-300 leading-relaxed font-medium"
        >
          "We believe great work comes from strong relationships.
          That's why we collaborate closely with our clients and stay
          committed to their success long after delivery."
        </motion.p>
      </div>

      {/* ══════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════ */}
      <div className="px-[5%] pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)" }}
        >
          <div className="px-10 py-16 text-center">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-white mb-4">
              Ready to Experience <br /> the Difference?
            </h2>
            <p className="text-orange-100 text-sm mb-10 max-w-md mx-auto">
              Let's build something impactful, scalable, and future-ready together.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-7 py-3.5 rounded-full bg-[#1a1007] text-white text-sm font-bold hover:bg-black/50 transition-colors">
                Get Started
              </button>
              <button className="px-7 py-3.5 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}