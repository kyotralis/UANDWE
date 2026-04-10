import React from "react";


const Semiconductor = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 text-center bg-gradient-to-r from-orange-600 via-orange-700 to-orange-900">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Powering the Future of{" "}
            <span className="text-white">Silicon Innovation</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            We deliver end-to-end semiconductor design solutions — from architecture
            to fully tested silicon — enabling next-generation high-performance,
            low-power, and scalable chip designs.
          </p>

          <button className="mt-10 px-10 py-4 bg-white text-orange-700 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
            Explore Capabilities
          </button>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-orange-400">
            End-to-End Silicon Engineering
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            The semiconductor industry is the backbone of modern technology,
            driving innovations across AI, automotive, IoT, and high-performance
            computing. At UANDWE, we provide turnkey silicon design services with
            expertise across multiple technology nodes and fabrication ecosystems.
          </p>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-orange-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-orange-400">
            Our Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Front-End Design",
                desc: "RTL design, IP integration, verification & simulation",
              },
              {
                title: "Back-End Design",
                desc: "Physical design, PnR, timing closure, sign-off",
              },
              {
                title: "Analog & Mixed Signal",
                desc: "High-performance analog circuits & AMS integration",
              },
              {
                title: "Low Power Design",
                desc: "Ultra-low power architectures & optimization",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500 transition-all duration-300 bg-white/5 backdrop-blur-lg hover:bg-white/10"
              >
                <h3 className="text-xl font-semibold mb-3 text-orange-400 group-hover:text-orange-300">
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

      {/* ================= DIFFERENTIATORS ================= */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-orange-400">
            Why UANDWE for Semiconductor Design
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">

            {[
              "100+ successful silicon tape-outs",
              "Expertise across multiple nodes & fabs",
              "Full-stack capability from RTL to GDSII",
              "Specialized in low-power & high-performance design",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/5 p-5 rounded-xl border border-orange-500/20"
              >
                <span className="text-orange-400 text-xl">✔</span>
                <p className="text-white/80">{item}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 px-6 bg-orange-900/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-orange-400">
            From Architecture to Silicon
          </h2>

          <div className="flex flex-wrap justify-center gap-6">

            {[
              "Architecture",
              "RTL Design",
              "Verification",
              "Physical Design",
              "Tape-out",
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
      <section className="py-28 text-center bg-gradient-to-r from-orange-700 via-orange-800 to-orange-900">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Build Next-Gen Silicon with Confidence
        </h2>

        <p className="text-white/80 mb-10">
          Partner with us to accelerate your semiconductor innovation journey —
          from concept to silicon success.
        </p>

        <button className="px-10 py-4 bg-white text-orange-700 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-xl">
          Get Started
        </button>
      </section>

    </div>
  );
};

export default Semiconductor;