import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About"; // Add this
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Projects />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
