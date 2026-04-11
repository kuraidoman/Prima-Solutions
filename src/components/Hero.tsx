import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-28 relative min-h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-dark/40" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-dark-foreground mb-6 leading-tight">
          Let's engineer to a better future.
        </h1>
        <p className="text-dark-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Innovative infrastructure solutions for commercial, residential, and
          telecom projects across the Philippines.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-light text-dark font-poppins font-semibold px-8"
            asChild
          >
            <a href="#projects">View Our Projects</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-black hover:bg-slate-100 font-poppins font-semibold px-8"
            asChild
          >
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
