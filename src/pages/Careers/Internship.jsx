import React from "react";

const Internship = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-32 text-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-800">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Start Your Career With Us
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Join our internship program and work on real-world projects in cutting-edge
            technologies like AI, Embedded Systems, Web Development, and more.
          </p>

          <button className="mt-10 px-10 py-4 bg-white text-orange-600 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
            Apply Now
          </button>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-orange-500">
            Internship Opportunities
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            At UANDWE, our internship programs are designed to give students and
            fresh graduates hands-on experience in real-time industry projects.
            You will collaborate with experienced engineers, learn modern tools,
            and build impactful solutions.
          </p>
        </div>
      </section>

      {/* ================= ROLES ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-orange-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-orange-500">
            Available Internship Roles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Frontend Development",
              "Backend Development",
              "Full Stack Development",
              "Embedded Systems",
              "AI / Machine Learning",
              "UI / UX Design",
            ].map((role, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-orange-500/20 bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-orange-500 mb-2">
                  {role}
                </h3>
                <p className="text-white/70 text-sm">
                  Work on real projects and gain hands-on experience in {role}.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-orange-500">
            Why Join Our Internship Program
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">

            {[
              "Hands-on experience with real projects",
              "Mentorship from industry experts",
              "Exposure to modern technologies",
              "Certificate of completion",
              "Opportunity for full-time role",
              "Flexible and collaborative environment",
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

      {/* ================= APPLICATION PROCESS ================= */}
      <section className="py-24 px-6 bg-orange-900/10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-orange-500">
          Application Process
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {["Apply", "Screening", "Interview", "Offer"].map((step, i) => (
            <div
              key={i}
              className="px-6 py-3 border border-orange-500 rounded-full text-white/80 hover:bg-orange-500 hover:text-black transition"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 text-center bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Kickstart Your Career?
        </h2>

        <p className="text-white/80 mb-10">
          Apply now and be part of an innovative team shaping the future of technology.
        </p>

        <button className="px-10 py-4 bg-white text-orange-600 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-xl">
          Apply Now
        </button>
      </section>

    </div>
  );
};

export default Internship;