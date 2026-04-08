import React from "react";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Bangalore",
    type: "Full-Time",
    desc: "Build modern, responsive UI using React, Tailwind, and animations.",
  },
  {
    title: "Backend Developer",
    location: "Bangalore",
    type: "Full-Time",
    desc: "Develop scalable APIs and backend systems using Node.js.",
  },
  {
    title: "Full Stack Developer",
    location: "Bangalore",
    type: "Full-Time",
    desc: "Work across frontend & backend to build end-to-end solutions.",
  },
  {
    title: "Embedded Engineer",
    location: "Onsite",
    type: "Full-Time",
    desc: "Design and develop embedded systems and firmware solutions.",
  },
  {
    title: "AI / ML Engineer",
    location: "Remote",
    type: "Full-Time",
    desc: "Develop AI models and intelligent systems for real-world applications.",
  },
];

const OpenPosition = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-32 text-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-800">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our Team
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Explore exciting career opportunities and work on cutting-edge
            technologies shaping the future.
          </p>
        </div>
      </section>

      {/* ================= JOB LIST ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-orange-500">
            Open Positions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {jobs.map((job, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-orange-500/20 bg-white/5 hover:bg-white/10 hover:border-orange-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-orange-500 mb-2">
                  {job.title}
                </h3>

                <p className="text-sm text-white/60 mb-4">
                  {job.location} • {job.type}
                </p>

                <p className="text-white/70 mb-6">
                  {job.desc}
                </p>

                <button className="px-6 py-2 bg-orange-500 text-black font-semibold rounded-full hover:scale-105 transition">
                  Apply Now
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= WHY JOIN ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-orange-900/10">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-orange-500">
            Why Work With Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">

            {[
              "Work on real-world cutting-edge technologies",
              "Collaborative and innovative work culture",
              "Career growth and learning opportunities",
              "Competitive salary and benefits",
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

      {/* ================= CTA ================= */}
      <section className="py-28 text-center bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Don’t See a Role That Fits?
        </h2>

        <p className="text-white/80 mb-10">
          Send us your resume and we’ll get in touch when a suitable role opens.
        </p>

        <button className="px-10 py-4 bg-white text-orange-600 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-xl">
          Submit Resume
        </button>
      </section>

    </div>
  );
};

export default OpenPosition;