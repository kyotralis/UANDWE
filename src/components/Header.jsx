import { useState, useEffect,useRef  } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuData = {
    about: [
      { name: "Company Overview", path: "/aboutus/companyoverview" },
      { name: "Leadership", path: "/aboutus/leadership" },
      // { name: "Innovation", path: "/aboutus/innovation" },
      { name: "Testimonials", path: "/aboutus/testimonials" },
      { name: "Partnerships", path: "/aboutus/partnerships" }
    ],
    services: [
      { name: "Application", path: "/services/application" },
      { name: "Embedded Software", path: "/services/embedded" },
      { name: "Hardware", path: "/services/hardware" }
    ],
    industries: [
      { name: "Automotive", path: "/industries/automotive" },
      { name: "Medical", path: "/industries/medical" },
      { name: "Semiconductor", path: "/industries/semiconductor" },
      { name: "Telecom", path: "/industries/telecom" }
    ],
    resources: [
      { name: "Blogs", path: "/resources/blogs" },
      { name: "Case Studies", path: "/resources/casestudies" },
      { name: "Whitepapers", path: "/resources/whitepapers" }
    ],
    careers: [
      { name: "Open Positions", path: "/careers/openpositions" },
      { name: "Internships", path: "/careers/internship" }
    ]
  };

  const menuItems = [
    { name: "About Us", key: "about" },
    { name: "Services", key: "services" },
    { name: "Industries", key: "industries" },
    { name: "Resources", key: "resources" },
    { name: "Careers", key: "careers" }
  ];

  // 🔍 Flatten menu for search
  const allItems = Object.values(menuData).flat();

  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[72px] transition-all duration-300 ${
        scrolled ? "" : "bg-transparent"
      }`}
    >
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-12 h-12" />
        <span className="text-white text-2xl font-bold">UANDWE</span>
      </Link>

      {/* RIGHT */}
      <div className="hidden md:flex items-center ml-auto gap-8">

        {/* MENU */}
        <ul className="flex gap-8">
          {menuItems.map((item) => (
            <li
              key={item.key}
              onMouseEnter={() => setActiveDropdown(item.key)}
              onMouseLeave={() => setActiveDropdown(null)}
              className="relative"
            >
              <div className="text-white/80 hover:text-white cursor-pointer">
                {item.name}
              </div>

              <AnimatePresence>
                {activeDropdown === item.key && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute top-full mt-3 w-[360px] bg-[#0f172a] border-t-2 border-orange-500 rounded-xl"
                  >
                    {menuData[item.key].map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        className="block px-6 py-3 text-white/70 hover:text-orange-400 hover:bg-orange-500/10"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* 🔍 SEARCH ICON */}
<div ref={searchRef} className="relative">          <Search
            className="text-white cursor-pointer"
            onClick={() => setSearchOpen(!searchOpen)}
          />

          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute right-0 mt-3 w-[300px] bg-[#0f172a] rounded-xl p-4 shadow-xl"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 rounded-md bg-black/30 text-white outline-none"
                />

                {/* RESULTS */}
                <div className="mt-3 max-h-[200px] overflow-y-auto">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        className="block px-3 py-2 text-white/70 hover:text-orange-400 hover:bg-orange-500/10 rounded"
                      >
                        {item.name}
                      </Link>
                    ))
                  ) : (
                    <p className="text-white/40 text-sm px-2 py-2">
                      No results found
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BUTTON */}
        <a
  href="/#contactus"
  className="bg-[#ff6b1a] px-5 py-2 rounded-full text-white hover:bg-[#ff8c42]"
>
  Contact
</a>

      </div>
    </motion.nav>
  );
}