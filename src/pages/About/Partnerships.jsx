import { motion } from "framer-motion";

export default function Partnerships() {
  const data = {
    badge: "Partnerships",
    heading: "Stronger solutions through strategic alliances",
    description:
      "We partner with leading technology companies, academic institutions, and industry bodies to extend our capabilities and deliver greater value to our clients.",
    partnerCategories: [
      {
        category: "Technology partners",
        partners: ["ARM Holdings", "Cadence Design Systems", "Synopsys", "NXP Semiconductors", "Qualcomm"],
      },
      {
        category: "Academic partners",
        partners: ["MIT Media Lab", "IIT Bombay", "TU Munich", "Stanford Engineering", "University of Tokyo"],
      },
      {
        category: "Industry bodies",
        partners: ["IEEE", "SAE International", "SEMI", "IPC — Association Connecting Electronics Industries"],
      },
    ],
    benefits: [
      { title: "Faster time to market", desc: "Access to pre-certified IP blocks and shared toolchains." },
      { title: "Expanded capabilities", desc: "Leverage partner expertise in domains beyond our core stack." },
      { title: "Joint innovation", desc: "Co-develop next-gen solutions through shared R&D programs." },
      { title: "Global reach", desc: "Partner networks extend our delivery capacity to 30+ countries." },
    ],
    cta: "Interested in partnering with us? Our partnerships team is open to exploring technology alliances, co-development programs, and distribution agreements.",
  };

  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6 md:px-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
          {data.badge}
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
          {data.heading}
        </h2>

        <p className="text-gray-400 mt-4">{data.description}</p>
      </div>

      {/* Partner Categories */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {data.partnerCategories.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-orange-500 transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-orange-400">
              {item.category}
            </h3>

            <ul className="space-y-2 text-gray-300">
              {item.partners.map((p, idx) => (
                <li
                  key={idx}
                  className="hover:text-white transition cursor-pointer"
                >
                  • {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-4 gap-6 mb-20">
        {data.benefits.map((b, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 p-6 rounded-xl"
          >
            <h4 className="font-semibold text-lg mb-2">{b.title}</h4>
            <p className="text-gray-400 text-sm">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gray-300 mb-6">{data.cta}</p>

        <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-full font-semibold transition">
          Become a Partner
        </button>
      </div>
    </section>
  );
}