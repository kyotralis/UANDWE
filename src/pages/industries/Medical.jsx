import React from "react";

const Medical = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 text-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Engineering the Future of{" "}
            <span className="text-white">Healthcare Technology</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            We build advanced medical and healthcare solutions that enhance
            patient care, improve diagnostics, and enable smarter healthcare systems.
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
            Transforming Modern Healthcare
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            The healthcare industry is rapidly evolving with digital health,
            AI-driven diagnostics, and connected medical devices. At UANDWE,
            we help healthcare innovators design and develop reliable, scalable,
            and regulatory-compliant solutions that improve lives.
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
                title: "Medical Device Engineering",
                desc: "Design & development of embedded medical devices",
              },
              {
                title: "AI Diagnostics",
                desc: "AI/ML models for imaging, diagnostics & predictions",
              },
              {
                title: "Healthcare Software",
                desc: "EHR systems, hospital platforms, cloud integration",
              },
              {
                title: "Connected Health",
                desc: "IoT devices, remote monitoring & telemedicine",
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
              "Expertise in regulated medical systems",
              "High focus on safety & compliance",
              "Scalable and secure architectures",
              "End-to-end healthcare engineering support",
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
            From Concept to Clinical Deployment
          </h2>

          <div className="flex flex-wrap justify-center gap-6">

            {[
              "Research",
              "Design",
              "Development",
              "Validation",
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
          Innovate Healthcare with Confidence
        </h2>

        <p className="text-white/80 mb-10">
          Partner with us to build reliable, scalable, and future-ready healthcare solutions.
        </p>

        <button className="px-10 py-4 bg-white text-orange-600 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-xl">
          Get Started
        </button>
      </section>

    </div>
  );
};

export default Medical;