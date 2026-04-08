import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import WhyChooseUs from "./Whyuandwe";
import Contactus from "../components/ContactUs";
import Industries from "./Sectorweserve";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Industries />
      <Services />
      <WhyChooseUs />
      

         <div id="contactus">
        <Contactus />
      </div>
    </>
  );
};

export default Home;