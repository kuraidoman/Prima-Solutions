import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  DraftingCompass,
  Construction,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const employeePhotos = [
  "/employees/1.png",
  "/employees/2.jpg",
  "/employees/3.jpg",
  "/employees/4.jpg",
  "/employees/5.png",
  "/employees/7.jpg",
  "/employees/8.jpg",
  "/employees/9.jpg",
  "/employees/10.jpg",
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % employeePhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + employeePhotos.length) % employeePhotos.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % employeePhotos.length);
  };

  return (
    <section id="about" className="scroll-mt-24 py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Left: Photo */}
          <div className="relative rounded-lg border border-border bg-white p-2 shadow-sm">
            <div className="h-56 w-full overflow-hidden rounded-md bg-white lg:h-72">
              <img
                key={activeIndex}
                src={employeePhotos[activeIndex]}
                alt="PRIMA Solution team"
                className="h-full w-full animate-in fade-in object-contain duration-700"
              />
            </div>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-3 leading-tight">
              Who we are
            </h2>
            <h3 className="mb-4 font-poppins text-sm font-semibold tracking-[0.12em] text-gold md:text-base">
              Engineering Expertise | Construction Excellence
            </h3>
            <div className="w-16 h-1 bg-gold mb-4" />

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                PRIMA Solution Development and Construction Corp. specializes in telecom infrastructure, structural engineering, forensic investigation, retrofitting, and design-build construction.
              </p>
              <p>
                Since 2021, we have delivered innovative, safe, and reliable solutions for more than 350 structural assessments and 120+ construction projects nationwide. Our success is built on a growing team of 30+ in-house employees and 120+ skilled labor workforce, strengthened by long-standing partnerships with trusted suppliers and allied firms.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-12 text-center font-poppins text-3xl font-bold text-dark md:text-4xl">
            Our Journey
          </h3>

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute left-[16.667%] right-0 top-5 hidden border-t-2 border-gold md:block" />
            <ArrowRight
              className="absolute right-[-0.5rem] top-3 hidden h-5 w-5 text-gold md:block"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
              <article className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.85)]">
                  <span className="h-4 w-4 rounded-full bg-gold" />
                </div>
                <p className="mt-4 font-poppins text-3xl font-bold text-gold">2021</p>
                <div className="mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                  <DraftingCompass className="h-8 w-8 text-charcoal" aria-hidden="true" />
                </div>
                <h4 className="mt-4 font-poppins text-lg font-semibold text-dark">Started</h4>
                <p className="mt-1 max-w-[12rem] text-sm leading-relaxed text-gray-700">
                  as a design-focused engineering consultancy
                </p>
              </article>

              <article className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.85)]">
                  <span className="h-4 w-4 rounded-full bg-gold" />
                </div>
                <p className="mt-4 font-poppins text-3xl font-bold text-gold">2024</p>
                <div className="mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                  <Construction className="h-8 w-8 text-charcoal" aria-hidden="true" />
                </div>
                <h4 className="mt-4 font-poppins text-lg font-semibold text-dark">Expanded</h4>
                <p className="mt-1 max-w-[12rem] text-sm leading-relaxed text-gray-700">
                  into construction operations
                </p>
              </article>

              <article className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.85)]">
                  <span className="h-4 w-4 rounded-full bg-gold" />
                </div>
                <p className="mt-4 font-poppins text-3xl font-bold text-gold">2026</p>
                <div className="mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                  <Building2 className="h-8 w-8 text-charcoal" aria-hidden="true" />
                </div>
                <h4 className="mt-4 font-poppins text-lg font-semibold text-dark">Leading</h4>
                <p className="mt-1 max-w-[12rem] text-sm leading-relaxed text-gray-700">
                  established engineering construction company
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
