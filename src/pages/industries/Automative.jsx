import React from "react";

const Automotive = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 text-center bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Driving the Future of{" "}
            <span className="text-white">Intelligent Mobility</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            We engineer cutting-edge automotive solutions — from embedded systems
            to AI-powered mobility platforms, enabling safer, smarter, and more
            connected vehicles.
          </p>

          <button className="mt-10 px-10 py-4 bg-white text-orange-700 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
            Explore Solutions
          </button>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-orange-400">
            Transforming the Automotive Landscape
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            The automotive industry is undergoing a massive shift driven by
            electrification, autonomous driving, and connected ecosystems. At
            UANDWE, we empower automotive companies with advanced engineering,
            scalable architectures, and future-ready technologies to accelerate
            innovation.
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
                title: "Embedded Systems",
                desc: "ECU development, RTOS, firmware & hardware integration",
              },
              {
                title: "EV Solutions",
                desc: "Battery systems, charging tech, power electronics",
              },
              {
                title: "ADAS & AI",
                desc: "Sensor fusion, computer vision, autonomous systems",
              },
              {
                title: "Connected Vehicles",
                desc: "IoT platforms, telematics, cloud & OTA updates",
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

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-orange-400">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">

            {[
              "100+ successful engineering deployments",
              "Expertise from silicon to system level",
              "Strong focus on performance & safety",
              "Scalable solutions for next-gen mobility",
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
            From Concept to Road-Ready Innovation
          </h2>

          <div className="flex flex-wrap justify-center gap-6">

            {[
              "Discovery",
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
      <section className="py-28 text-center bg-gradient-to-r from-orange-700 via-orange-800 to-orange-900">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s Build the Future of Mobility Together
        </h2>

        <p className="text-white/80 mb-10">
          Partner with us to accelerate innovation and deliver next-gen automotive solutions.
        </p>

        <button className="px-10 py-4 bg-white text-orange-700 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-xl">
          Get Started
        </button>
      </section>

    </div>
  );
};

export default Automotive;