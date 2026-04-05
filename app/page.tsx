import Blueprint from "./components/Blueprint";
import Curriculum from "./components/Curriculum";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Struggle from "./components/Struggle";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Struggle />
      <Blueprint />
      <Curriculum />
    </div>
  );
};

export default Home;
