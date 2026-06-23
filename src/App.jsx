import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/ui/PageTransition";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

// HOME PAGE
import Home from "./pages/Home";

// ABOUT PAGES
// import CompanyOverview from "./pages/About/Companyoverview";
// import Leadership from "./pages/About/Leadership";
// import InnovationPage from "./pages/About/Innovation";
// import Partnerships from "./pages/About/Partnerships";
// import Testimonials from "./pages/About/Testimonials";
// import GenericServicePage from "./pages/Services/GenericServicePage"

// APPLICATION SERVICES
import PortalDevelopment from "./pages/Services/Application/PortalDevelopment";



// CAREERS
import Jobs from "./pages/Careers/Jobs";

export default function App() {
  const location = useLocation();

  return (
    <div
      style={{
        background: "#0a0a0f",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <Header />
      <ScrollToTop />

      {/* ROUTES */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* HOME */}
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />

          {/* ABOUT */}
          {/* <Route path="/aboutus/companyoverview" element={<PageTransition><CompanyOverview /></PageTransition>} />
          <Route path="/aboutus/leadership" element={<PageTransition><Leadership /></PageTransition>} />
          <Route path="/aboutus/innovation" element={<PageTransition><InnovationPage /></PageTransition>} />
          <Route path="/aboutus/partnerships" element={<PageTransition><Partnerships /></PageTransition>} />
          <Route path="/aboutus/testimonials" element={<PageTransition><Testimonials /></PageTransition>} /> */}



          {/* APPLICATION */}
          <Route path="/services/portal-development" element={<PageTransition><PortalDevelopment /></PageTransition>} />
         
          {/* HARDWARE */}
        
          {/* EMBEDDED */}
         
          {/* INDUSTRIES */}
          {/* <Route path="/industries/automotive" element={<PageTransition><Automative /></PageTransition>} />
          <Route path="/industries/medical" element={<PageTransition><Medical /></PageTransition>} />
          <Route path="/industries/semiconductor" element={<PageTransition><Semiconductor /></PageTransition>} />
          <Route path="/industries/telecom" element={<PageTransition><Telecom /></PageTransition>} /> */}

          {/* RESOURCES */}
          {/* <Route path="/resources/blogs" element={<PageTransition><Blogs /></PageTransition>} />
          <Route path="/resources/casestudies" element={<PageTransition><CaseStudies /></PageTransition>} />
          <Route path="/resources/whitepapers" element={<PageTransition><Whitepapers /></PageTransition>} /> */}

          {/* CAREERS */}
          {/* <Route path="/careers/jobs" element={<PageTransition><Jobs /></PageTransition>} />
          <Route path="/careers/career-areas" element={<PageTransition><Jobs /></PageTransition>} />
          <Route path="/careers/search-jobs" element={<PageTransition><Jobs /></PageTransition>} /> */}
        </Routes>
      </AnimatePresence>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}