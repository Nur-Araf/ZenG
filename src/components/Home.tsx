import FAQ from "./FAQ";
import Features from "./Features";
import HelpsSection from "./HelpsSection";
import HeroSection from "./HeroSection";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <HelpsSection />
      <Features />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default Home;
