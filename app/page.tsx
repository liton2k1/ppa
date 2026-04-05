import Blueprint from "./components/Blueprint";
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Meeting from "./components/Meeting";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Struggle from "./components/Struggle";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Struggle />
      <Meeting/>
      <Blueprint />
      <Curriculum />
      <Testimonials />
      <Pricing />
      <Footer/>
    </div>
  );
};

export default Home;
