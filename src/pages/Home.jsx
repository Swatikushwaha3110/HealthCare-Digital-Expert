import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import InfoStrip from "../components/InfoStrip";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <InfoStrip/>
      <About/>
      <Services />
      <WhyChooseUs />
      <Contact/>
    </>
  );
};

export default Home;
