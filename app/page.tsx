import Blueprint from "./components/Blueprint";
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
    </div>
  );
};

export default Home;
