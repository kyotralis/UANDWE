import { Routes, Route } from "react-router-dom";

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
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/aboutus/companyoverview" element={<CompanyOverview />} />
        <Route path="/aboutus/leadership" element={<Leadership />} />
        <Route path="/aboutus/innovation" element={<InnovationPage />} />
        <Route path="/aboutus/partnerships" element={<Partnerships />} />
        <Route path="/aboutus/testimonials" element={<Testimonials />} />

        {/* SERVICES */}
        <Route path="/services/application" element={<Application />} />
        <Route path="/services/embedded" element={<Embedded />} />
        <Route path="/services/hardware" element={<Hardware />} />

        {/* INDUSTRIES */}
        <Route path="/industries/automotive" element={<Automative />} />
        <Route path="/industries/medical" element={<Medical />} />
        <Route path="/industries/semiconductor" element={<Semiconductor />} />
        <Route path="/industries/telecom" element={<Telecom />} />

        {/* RESOURCES */}
        <Route path="/resources/blogs" element={<Blogs />} />
        <Route path="/resources/casestudies" element={<CaseStudies />} />
        <Route path="/resources/whitepapers" element={<Whitepapers />} />

        {/* CAREERS */}
        <Route path="/careers/internship" element={<Internship />} />
        <Route path="/careers/openpositions" element={<OpenPosition />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}