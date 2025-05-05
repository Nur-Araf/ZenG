import "./App.css";
import Features from "./components/Features";
import HelpsSection from "./components/HelpsSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <HelpsSection />
      <Features />
      <Pricing />
    </div>
  );
}

export default App;
