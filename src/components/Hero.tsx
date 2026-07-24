import { ArrowRight, Building2, MapPin, RadioTower, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-28 relative flex min-h-[50vh] items-center overflow-hidden pt-8"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero_bg_2.png')",
        }}
      /> 
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black/90" />

      <div className="container relative z-10 mx-auto px-4 py-10 md:py-16">
        <div className="max-w-3xl text-left">
          <p className="mb-4 font-poppins text-sm font-semibold uppercase tracking-[0.12em] text-gold md:text-base">
            Telecom Infrastructure Specialist
          </p>
          <h1 className="mb-6 font-poppins text-4xl font-bold leading-tight text-dark-foreground md:text-5xl lg:text-6xl">
            Engineering Infrastructure That{" "}
            <span className="text-gold">Connects</span> Communities
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-dark-foreground/90 md:text-xl">
            Telecom towers, structural engineering, and design-build solutions
            delivered across the Philippines.
          </p>

          <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-dark-foreground/90 md:text-base">
            <span>Telecom Towers</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>Structural Engineering</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>Design-Build Solutions</span>
          </div>

          <div className="mb-10 grid max-w-3xl grid-cols-1 gap-5 border-y border-dark-foreground/20 py-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3">
              <RadioTower className="h-9 w-9 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="font-poppins text-2xl font-bold text-dark-foreground">350+</p>
                <p className="text-sm text-dark-foreground/75">Design & Assessments</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="h-9 w-9 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="font-poppins text-2xl font-bold text-dark-foreground">120+</p>
                <p className="text-sm text-dark-foreground/75">Projects Completed</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-9 w-9 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="font-poppins text-xl font-bold text-dark-foreground">30+</p>
                <p className="text-sm text-dark-foreground/75">Engineering Professionals</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-9 w-9 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="font-poppins text-lg font-bold text-dark-foreground">Nationwide</p>
                <p className="text-sm text-dark-foreground/75">Project Coverage</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-gold px-8 font-poppins font-semibold text-dark hover:bg-gold-light"
              asChild
            >
              <a href="#projects">
                View Portfolio <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-dark-foreground bg-transparent px-8 font-poppins font-semibold text-dark-foreground hover:bg-dark-foreground hover:text-dark"
              asChild
            >
              <a href="#services">
                Our Services <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
