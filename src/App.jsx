import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// HOME PAGE
import Home from "./pages/Home";

// ABOUT PAGES
import CompanyOverview from "./pages/About/Companyoverview";
import Leadership from "./pages/About/Leadership";
import InnovationPage from "./pages/About/Innovation";
import Partnerships from "./pages/About/Partnerships";
import Testimonials from "./pages/About/Testimonials";

// SERVICES PAGES
import Application from "./pages/Services/Application";
import Embedded from "./pages/Services/Embedded";
import Hardware from "./pages/Services/Hardware";
import AiMl from "./pages/Services/AiMl";
import GenericServicePage from "./pages/Services/GenericServicePage";

// INDUSTRIES PAGES
import Automative from "./pages/industries/Automative";
import Medical from "./pages/industries/Medical";
import Semiconductor from "./pages/industries/Semiconductor";
import Telecom from "./pages/industries/Telecom";

// RESOURCES
import Blogs from "./pages/Resource/Blogs";
import CaseStudies from "./pages/Resource/CaseStudies";
import Whitepapers from "./pages/Resource/Whitepapers";

// CAREERS
import Internship from "./pages/Careers/Internship";
import OpenPosition from "./pages/Careers/Openposition";

export default function App() {
  const location = useLocation();
  
  return (
    <div
      className="overflow-x-hidden"
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
          <Route path="/aboutus/companyoverview" element={<PageTransition><CompanyOverview /></PageTransition>} />
          <Route path="/aboutus/leadership" element={<PageTransition><Leadership /></PageTransition>} />
          <Route path="/aboutus/innovation" element={<PageTransition><InnovationPage /></PageTransition>} />
          <Route path="/aboutus/partnerships" element={<PageTransition><Partnerships /></PageTransition>} />
          <Route path="/aboutus/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />

          {/* SERVICES */}
          <Route path="/services/application" element={<PageTransition><Application /></PageTransition>} />
          <Route path="/services/embedded" element={<PageTransition><Embedded /></PageTransition>} />
          <Route path="/services/hardware" element={<PageTransition><Hardware /></PageTransition>} />
          <Route path="/services/aiml" element={<PageTransition><AiMl /></PageTransition>} />
          
          {/* APPLICATION */}
          <Route path="/services/web-application" element={<PageTransition><GenericServicePage title="Web Application Development" /></PageTransition>} />
          <Route path="/services/mobile-app" element={<PageTransition><GenericServicePage title="Mobile App Development" /></PageTransition>} />
          <Route path="/services/cloud-integration" element={<PageTransition><GenericServicePage title="Cloud Integration" /></PageTransition>} />
          <Route path="/services/api-development" element={<PageTransition><GenericServicePage title="API Development" /></PageTransition>} />
          <Route path="/services/ui-ux-design" element={<PageTransition><GenericServicePage title="UI/UX Design" /></PageTransition>} />
          <Route path="/services/ai-data-integration" element={<PageTransition><GenericServicePage title="AI & Data Integration" /></PageTransition>} />
          <Route path="/services/devops-automation" element={<PageTransition><GenericServicePage title="DevOps Automation" /></PageTransition>} />
          <Route path="/services/cyber-security" element={<PageTransition><GenericServicePage title="Cyber Security" /></PageTransition>} />

          {/* HARDWARE */}
          <Route path="/services/pcb-design" element={<PageTransition><GenericServicePage title="PCB Design" /></PageTransition>} />
          <Route path="/services/fpga-development" element={<PageTransition><GenericServicePage title="FPGA Development" /></PageTransition>} />
          <Route path="/services/chip-design" element={<PageTransition><GenericServicePage title="Chip Design" /></PageTransition>} />
          <Route path="/services/testing-validation" element={<PageTransition><GenericServicePage title="Testing & Validation" /></PageTransition>} />

          {/* EMBEDDED */}
          <Route path="/services/rtos-development" element={<PageTransition><GenericServicePage title="RTOS Development" /></PageTransition>} />
          <Route path="/services/device-driver-development" element={<PageTransition><GenericServicePage title="Device Driver Development" /></PageTransition>} />
          <Route path="/services/firmware-development" element={<PageTransition><GenericServicePage title="Firmware Development" /></PageTransition>} />
          <Route path="/services/iot-integration" element={<PageTransition><GenericServicePage title="IoT Integration" /></PageTransition>} />
          <Route path="/services/system-optimization" element={<PageTransition><GenericServicePage title="System Optimization" /></PageTransition>} />
          <Route path="/services/hardware-software-integration" element={<PageTransition><GenericServicePage title="Hardware-Software Integration" /></PageTransition>} />

          {/* INDUSTRIES */}
          <Route path="/industries/automotive" element={<PageTransition><Automative /></PageTransition>} />
          <Route path="/industries/medical" element={<PageTransition><Medical /></PageTransition>} />
          <Route path="/industries/semiconductor" element={<PageTransition><Semiconductor /></PageTransition>} />
          <Route path="/industries/telecom" element={<PageTransition><Telecom /></PageTransition>} />

          {/* RESOURCES */}
          <Route path="/resources/blogs" element={<PageTransition><Blogs /></PageTransition>} />
          <Route path="/resources/casestudies" element={<PageTransition><CaseStudies /></PageTransition>} />
          <Route path="/resources/whitepapers" element={<PageTransition><Whitepapers /></PageTransition>} />

          {/* CAREERS */}
          <Route path="/careers/internship" element={<PageTransition><Internship /></PageTransition>} />
          <Route path="/careers/openpositions" element={<PageTransition><OpenPosition /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}