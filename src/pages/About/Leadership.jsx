import React from 'react'

const Leadership = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">
            Leadership Team
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            Meet the visionary leaders driving U&amp;WE Engineering&apos;s mission to deliver cutting-edge engineering solutions worldwide
          </p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1974&amp;q=80" 
          alt="Executive leadership team in modern conference room"
          className="absolute top-1/2 right-0 w-1/2 h-[80vh] object-cover opacity-10 transform translate-y-[-20%]"
        />
      </section>

      {/* Leadership Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* CEO */}
            <div className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1974&amp;q=80" 
                  alt="Dr. Sarah Chen, CEO"
                  className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-2xl mx-auto group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Dr. Sarah Chen</h3>
              <p className="text-blue-600 font-semibold text-lg text-center mb-4">CEO &amp; Co-Founder</p>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                20+ years in semiconductor and embedded systems. Holds 12 patents in FPGA acceleration.
              </p>
              <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.52 8.52 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                </a>
              </div>
            </div>

            {/* CTO */}
            <div className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1974&amp;q=80" 
                  alt="Michael Rodriguez, CTO"
                  className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-2xl mx-auto group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Michael Rodriguez</h3>
              <p className="text-emerald-600 font-semibold text-lg text-center mb-4">CTO &amp; Co-Founder</p>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                Expert in hardware acceleration and AI systems. Led development of industry-leading FPGA platforms.
              </p>
              <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">LI</a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">TW</a>
              </div>
            </div>

            {/* CFO */}
            <div className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white rounded-3xl p-10 shadow-xl border border-gray-100 md:col-span-2 lg:col-span-1">
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1970&amp;q=80" 
                  alt="Priya Patel, CFO"
                  className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-2xl mx-auto group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Priya Patel</h3>
              <p className="text-purple-600 font-semibold text-lg text-center mb-4">CFO</p>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                18 years in tech finance. Scaled 3 engineering firms to $100M+ revenue with 40% YoY growth.
              </p>
              <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">LI</a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">TW</a>
              </div>
            </div>

            {/* VP Engineering */}
            <div className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" 
                  alt="David Kim, VP Engineering"
                  className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-2xl mx-auto group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">David Kim</h3>
              <p className="text-orange-600 font-semibold text-lg text-center mb-4">VP Engineering</p>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                Oversees 200+ engineers. Delivered 300M+ lines of verified RTL code.
              </p>
              <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">LI</a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">TW</a>
              </div>
            </div>

            {/* VP Operations */}
            <div className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white rounded-3xl p-10 shadow-xl border border-gray-100 md:col-span-2">
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" 
                  alt="Lisa Wong, VP Operations"
                  className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-2xl mx-auto group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Lisa Wong</h3>
              <p className="text-indigo-600 font-semibold text-lg text-center mb-4">VP Global Operations</p>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                Manages 8 global delivery centers. Achieved 99.9% on-time delivery for Fortune 500 clients.
              </p>
              <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">LI</a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">TW</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Visionary Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with leadership that&apos;s shaping the future of engineering
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/careers" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all">
              View Career Opportunities
            </a>
            <a href="/contact" className="border-2 border-white hover:bg-white hover:text-slate-900 px-12 py-6 rounded-2xl text-xl font-bold transition-all">
              Schedule Executive Briefing
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Leadership