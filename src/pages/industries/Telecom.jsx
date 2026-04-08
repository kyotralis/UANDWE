import React from "react";

const Telecom = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 text-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-800">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Enabling the Future of{" "}
            <span className="text-white">Connected Networks</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            We design and deliver advanced telecom solutions powering next-generation
            networks — from 5G infrastructure to intelligent, scalable connectivity platforms.
          </p>

          <button className="mt-10 px-10 py-4 bg-white text-orange-600 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
            Explore Solutions
          </button>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-orange-500">
            Building Next-Gen Telecom Infrastructure
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            The telecom industry is evolving rapidly with the rise of 5G, edge computing,
            and software-defined networks. UANDWE helps telecom providers and technology
            partners build high-performance, scalable, and secure network solutions that
            enable seamless global connectivity.
          </p>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-orange-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-orange-500">
            Our Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "5G & Network Infrastructure",
                desc: "RAN, core networks, and next-gen telecom architecture",
              },
              {
                title: "Network Software",
                desc: "SDN, NFV, protocol stack development & optimization",
              },
              {
                title: "Edge & Cloud Integration",
                desc: "Edge computing, cloud-native telecom platforms",
              },
              {
                title: "Network Testing & QA",
                desc: "Performance testing, validation & automation",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500 transition-all duration-300 bg-white/5 backdrop-blur-lg hover:bg-white/10"
              >
                <h3 className="text-xl font-semibold mb-3 text-orange-500 group-hover:text-orange-400">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-orange-500">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">

            {[
              "Expertise in 5G and next-gen telecom systems",
              "Strong capabilities in network software & protocols",
              "Scalable and cloud-native telecom solutions",
              "End-to-end testing and performance optimization",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/5 p-5 rounded-xl border border-orange-500/20"
              >
                <span className="text-orange-500 text-xl">✔</span>
                <p className="text-white/80">{item}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 px-6 bg-orange-900/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-orange-500">
            From Network Design to Deployment
          </h2>

          <div className="flex flex-wrap justify-center gap-6">

            {[
              "Planning",
              "Architecture",
              "Development",
              "Testing",
              "Deployment",
            ].map((step, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-full border border-orange-500 text-white/80 hover:bg-orange-500 hover:text-black transition-all duration-300"
              >
                {step}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 text-center bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Power the Future of Connectivity
        </h2>

        <p className="text-white/80 mb-10">
          Partner with us to build resilient, scalable, and high-performance telecom networks.
        </p>

        <button className="px-10 py-4 bg-white text-orange-600 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-xl">
          Get Started
        </button>
      </section>

    </div>
  );
};

export default Telecom;