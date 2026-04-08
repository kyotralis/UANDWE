import React from "react";

const Innovation = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-32 text-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-800">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Driving Innovation Through{" "}
            <span className="text-white">Technology & Research</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            We explore, experiment, and engineer breakthrough solutions that shape
            the future — from silicon to intelligent systems.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-orange-500">
            Innovation at Our Core
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            At UANDWE, innovation is not just a process — it’s a mindset. We continuously
            push boundaries by combining deep technical expertise with creative thinking
            to solve complex real-world challenges across industries.
          </p>
        </div>
      </section>

      {/* ================= FOCUS AREAS ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-orange-900/10">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-orange-500">
            Our Innovation Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Artificial Intelligence",
                desc: "Building intelligent systems with advanced AI & ML models",
              },
              {
                title: "Embedded & IoT",
                desc: "Smart connected devices and real-time systems",
              },
              {
                title: "Semiconductor R&D",
                desc: "Next-gen chip design and silicon innovation",
              },
              {
                title: "Next-Gen Platforms",
                desc: "Scalable cloud, edge, and digital platforms",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-orange-500/20 bg-white/5 hover:bg-white/10 hover:border-orange-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-orange-500 mb-3 group-hover:text-orange-400">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-orange-500">
            Our Innovation Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Research",
                desc: "Exploring emerging technologies and future possibilities",
              },
              {
                title: "Experimentation",
                desc: "Rapid prototyping and iterative development",
              },
              {
                title: "Execution",
                desc: "Transforming ideas into scalable real-world solutions",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-orange-500/20 bg-white/5"
              >
                <h3 className="text-xl font-semibold text-orange-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="py-24 px-6 bg-orange-900/10">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-orange-500">
            Innovation Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "100+ successful engineering innovations",
              "Cross-domain expertise from silicon to software",
              "Focus on scalable and future-ready solutions",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-orange-500/20 bg-white/5"
              >
                <p className="text-white/80">{item}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 text-center bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s Innovate Together
        </h2>

        <p className="text-white/80 mb-10">
          Partner with us to transform bold ideas into impactful technological solutions.
        </p>

        <button className="px-10 py-4 bg-white text-orange-600 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-xl">
          Get Started
        </button>
      </section>

    </div>
  );
};

export default Innovation;