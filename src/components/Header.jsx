import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown, ChevronRight, Globe } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  
  const searchRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const menuData = {
    whatWeDo: {
      title: "What we do",
      sections: [
        {
          heading: "Application",
          links: [
            { name: "Web Application Development", path: "/services/application" },
            { name: "Mobile App Development", path: "/services/application" },
            { name: "Cloud Integration", path: "/services/application" },
            { name: "API Development", path: "/services/application" },
        
          ]
        },
        {
          heading: "Hardware",
          links: [
            { name: "PCB Design", path: "/services/pcb-design" },
            { name: "FPGA Development", path: "/services/fpga-development" },
            { name: "Chip Design", path: "/services/chip-design" },
            { name: "Testing & Validation", path: "/services/testing-validation" }
          ]
        },
        {
          heading: "Embedded Software",
          links: [
            { name: "RTOS Development", path: "/services/rtos-development" },
            { name: "Device Driver Development", path: "/services/device-driver-development" },
            { name: "Firmware Development", path: "/services/firmware-development" },
            { name: "IoT Integration", path: "/services/iot-integration" },
            { name: "System Optimization", path: "/services/system-optimization" },
            { name: "Hardware-Software Integration", path: "/services/hardware-software-integration" }
          ]
        },
        {
          heading: "Industries",
          links: [
            { name: "Automotive", path: "/industries/automotive" },
            { name: "Medical", path: "/industries/medical" },
            { name: "Semiconductor", path: "/industries/semiconductor" },
            { name: "Telecom", path: "/industries/telecom" }
          ]
        }
      ]
    },
    whatWeThink: {
      title: "What we think",
      sections: [
        {
          heading: "Resources",
          links: [
            { name: "Blogs", path: "/resources/blogs" },
            { name: "Case Studies", path: "/resources/casestudies" },
            { name: "Whitepapers", path: "/resources/whitepapers" }
          ]
        }
      ]
    },
    whoWeAre: {
      title: "Who we are",
      sections: [
        {
          heading: "About Us",
          links: [
            { name: "Company Overview", path: "/aboutus/companyoverview" },
            { name: "Leadership", path: "/aboutus/leadership" },
            { name: "Testimonials", path: "/aboutus/testimonials" },
            { name: "Partnerships", path: "/aboutus/partnerships" }
          ]
        }
      ]
    },
    careers: {
      title: "Careers homepage",
      sections: [
        {
          heading: "Find a job",
          links: [
            { name: "Search for jobs", path: "/careers/search-jobs" },
            { name: "Career areas", path: "/careers/career-areas" }
          ]
        },
        {
          heading: "Life at UANDWE",
          links: [
            { name: "Working here", path: "/careers/working-here" },
            { name: "Benefits", path: "/careers/benefits" },
            { name: "Work environment", path: "/careers/work-environment" },
            { name: "Careers blog", path: "/careers/blog" }
          ]
        },
        {
          heading: "How we hire",
          links: [
            { name: "Using AI", path: "/careers/using-ai" },
            { name: "Hiring journey", path: "/careers/hiring-journey" },
            { name: "Pro tips", path: "/careers/pro-tips" }
          ]
        }
      ]
    }
  };

  const menuItems = [
    { name: "What we do", key: "whatWeDo" },
    { name: "What we think", key: "whatWeThink" },
    { name: "Who we are", key: "whoWeAre" },
    { name: "Careers", key: "careers" }
  ];

  // Flatten menu for search
  const allItems = Object.values(menuData).flatMap(section => 
    section.sections.flatMap(sub => sub.links)
  );

  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const toggleMobileDropdown = (key) => {
    setMobileDropdownOpen(mobileDropdownOpen === key ? null : key);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute top-0 left-0 right-0 z-50 flex items-center px-[4%] h-[80px] transition-colors duration-300 ${scrolled || activeDropdown ? 'bg-[#000000] border-b border-white/10' : 'bg-transparent'}`}
      >
        {/* LEFT: LOGO */}
        <div className="flex-1 flex items-center z-50">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="logo" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
            <div className="overflow-hidden w-0 opacity-0 group-hover:w-[100px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <span className="text-white text-xl font-bold tracking-tight block">UANDWE</span>
            </div>
          </Link>
        </div>

        {/* CENTER: DESKTOP MENU */}
        <div className="hidden md:flex flex-none justify-center h-full">
          <ul className="flex h-full gap-8">
            {menuItems.map((item) => (
              <li
                key={item.key}
                onMouseEnter={() => setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
                className="h-full flex items-center px-4 cursor-pointer relative group"
              >
                <div className={`flex items-center gap-1.5 text-[22px] font-bold transition-colors ${activeDropdown === item.key ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                  {item.name}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.key ? 'rotate-180' : ''}`} />
                </div>
                
                {/* Active Indicator Line */}
                <div className={`absolute bottom-0 left-0 w-full h-[4px] bg-[#ff6b1a] transition-transform origin-left duration-300 ${activeDropdown === item.key ? 'scale-x-100' : 'scale-x-0'}`} />
              </li>
            ))}
          </ul>
        </div>
          
        {/* RIGHT: SEARCH & LANG */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-6 h-full">
            {/* SEARCH ICON */}
            <Search
              className="text-white/80 hover:text-white cursor-pointer transition-colors"
              onClick={() => setSearchOpen(true)}
              size={28}
            />

            {/* LANGUAGE SELECTOR */}
            <div ref={langRef} className="relative flex items-center gap-2 cursor-pointer group" onClick={() => setLanguageOpen(!languageOpen)}>
              <Globe size={28} className="text-white/80 group-hover:text-white transition-colors" />
              <span className="text-white/80 group-hover:text-white text-[20px] font-semibold transition-colors">India</span>
              <ChevronDown size={18} className={`text-white/80 group-hover:text-white transition-transform ${languageOpen ? 'rotate-180' : ''}`} />
              
              <AnimatePresence>
                {languageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-6 w-[160px] bg-[#1a1a1a] rounded-lg shadow-2xl border border-white/10 py-2"
                  >
                    {['India', 'Global', 'USA', 'UK'].map(lang => (
                      <div key={lang} className="px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 transition-colors font-medium">
                        {lang}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-4 md:hidden z-50 ml-auto">
          <Search
            className="text-white cursor-pointer"
            onClick={() => setSearchOpen(true)}
            size={22}
          />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MEGA MENU BACKGROUND PANEL (DESKTOP) */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-[80px] left-0 w-full bg-[#121212] overflow-hidden shadow-2xl hidden md:block border-b border-white/10"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-[1400px] mx-auto px-[5%] py-12">
                <div className="flex flex-col gap-10">
                  {/* Top Row: Big Title */}
                  <div>
                    <h2 className="text-[36px] font-bold text-white flex items-center gap-3">
                      {menuData[activeDropdown].title} 
                      <span className="w-8 h-8 bg-[#ff6b1a] flex items-center justify-center text-white flex-shrink-0">
                         <ChevronRight size={20} strokeWidth={3} />
                      </span>
                    </h2>
                  </div>
                  
                  {/* Bottom Row: Dynamic Sections */}
                  <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {menuData[activeDropdown].sections.map((section, idx) => (
                      <div key={idx} className="flex flex-col">
                        <h3 className="text-[#a0a0a0] text-[14px] font-normal mb-6 pb-2 border-b border-[#333333]">{section.heading}</h3>
                        <div className="flex flex-col gap-4">
                          {section.links.map((link, i) => (
                            <Link
                              key={i}
                              to={link.path}
                              className="text-white hover:underline decoration-1 underline-offset-4 transition-all duration-300 text-[16px] font-semibold flex items-center w-fit"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-[340px] bg-[#121212] shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-24 pb-12 px-6">
                {menuItems.map((item) => (
                  <div key={item.key} className="mb-1 border-b border-white/5">
                    <button
                      onClick={() => toggleMobileDropdown(item.key)}
                      className="flex justify-between items-center w-full py-5 text-white/80 hover:text-white group"
                    >
                      <span className="text-xl font-light group-hover:text-[#ff6b1a] transition-colors">{item.name}</span>
                      <motion.div
                        animate={{ rotate: mobileDropdownOpen === item.key ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={20} className={mobileDropdownOpen === item.key ? 'text-[#ff6b1a]' : 'text-white/40'} />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {mobileDropdownOpen === item.key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-5 pt-2 flex flex-col gap-6">
                            {menuData[item.key].sections.map((section, idx) => (
                              <div key={idx}>
                                <h4 className="text-white/40 text-sm mb-3 font-semibold uppercase">{section.heading}</h4>
                                <div className="flex flex-col gap-3">
                                  {section.links.map((sub, i) => (
                                    <Link
                                      key={i}
                                      to={sub.path}
                                      className="text-white/70 hover:text-[#ff6b1a] text-lg transition-colors"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* FULL SCREEN SEARCH OVERLAY */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#000000]/95 backdrop-blur-md flex flex-col pt-[15vh] px-[5%] md:px-[15%]"
          >
            <button 
              onClick={() => setSearchOpen(false)}
              className="absolute top-8 right-[5%] md:right-[5%] text-white/60 hover:text-white transition-colors"
            >
              <X size={40} strokeWidth={1} />
            </button>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="w-full relative max-w-5xl mx-auto"
            >
              <input
                ref={(input) => input && input.focus()}
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-white/20 text-3xl md:text-5xl lg:text-6xl text-white font-light pb-4 outline-none focus:border-[#ff6b1a] transition-colors placeholder:text-white/20"
              />
              
              {searchQuery && (
                <div className="mt-8 max-h-[50vh] overflow-y-auto custom-scrollbar">
                  <h3 className="text-[#ff6b1a] text-sm font-semibold uppercase tracking-widest mb-6">Search Results</h3>
                  {filteredItems.length > 0 ? (
                    <div className="flex flex-col gap-2">
                      {filteredItems.map((item, i) => (
                        <Link
                          key={i}
                          to={item.path}
                          className="text-2xl md:text-3xl text-white/70 hover:text-white transition-colors py-2 flex items-center group w-fit"
                          onClick={() => setSearchOpen(false)}
                        >
                          {item.name}
                          <ChevronRight size={24} className="opacity-0 group-hover:opacity-100 transition-transform translate-x-[-10px] group-hover:translate-x-0 ml-2 text-[#ff6b1a]" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-white/40 text-xl">No results found for "{searchQuery}"</p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}