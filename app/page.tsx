import Blueprint from "./components/Blueprint";
import Curriculum from "./components/Curriculum";
import Hero from "./components/Hero";
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
      <Blueprint />
      <Curriculum />
      <Testimonials />
      <Pricing />
    </div>
  );
};

export default Home;
