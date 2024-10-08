import About from "./components/ui/About";
import Contact from "./components/ui/Contact";
import CTASection from "./components/ui/CTASection";
import FaqSection from "./components/ui/FaqSection";
import FeaturesSection from "./components/ui/FeaturesSection";
import Footer from "./components/ui/Footer";
import Hero from "./components/ui/Hero";
import Navbar from "./components/ui/Navbar";
import Properties from "./components/ui/Properties";
import TeamSection from "./components/ui/TeamSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <Properties />
      <About />
      <CTASection />
      <FaqSection />
      <TeamSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
