import "./App.css";
import Features from "./components/Features";
import HelpsSection from "./components/HelpsSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HelpsSection />
      <Features />
    </>
  );
}

export default App;
