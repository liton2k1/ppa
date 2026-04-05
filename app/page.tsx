import Blueprint from "./components/Blueprint";
import Curriculum from "./components/Curriculum";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
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
    </div>
  );
};

export default Home;
