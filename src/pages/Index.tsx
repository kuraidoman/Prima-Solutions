import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceStrip from "@/components/ServiceStrip";
import About from "@/components/About"; // Add this
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const timeout = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServiceStrip />
      <About />
      <Features />
      <Projects />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
