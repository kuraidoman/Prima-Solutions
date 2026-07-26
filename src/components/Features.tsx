import {
  Building2,
  MapPinned,
  SearchCheck,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: MapPinned,
    image: "/services/design_services.png",
    title: "Design & Build",
    items: [
      "Residential Buildings",
      "Industrial Facilities",
      "Project Management",
      "Fitouts Construction"
    ],
  },
  {
    icon: SearchCheck,
    image: "/services/structural_analysis.png",
    title: "Architectural Engineering Designs",
    items: [
      "Architectural design",
      "MEPFS design",
      "Design review and analysis",
    ],
  },
  {
    icon: Wrench,
    image: "/services/investigation_services.png",
    title: "Investigation & Assessment",
    items: [
      "Structural Investigation",
      "Condition Assessment",
      "NDT Testing (Rebound Hammer/Rebar Scanner)",
      "Retrofitting / Strengthening",
    ],
  },
  {
    icon: Building2,
    image: "/services/tower_services.png",
    title: "Telecom Infrastructure",
    items: [
      "Tower Design & Construction",
      "Tower Retrofits & Strengthening",
      "Site Development",
      "Steel Supply and Fabrication",
    ],
  },
];

const Features = () => {
  return (
    <section id="services" className="scroll-mt-28 bg-background py-20">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="mt-3 font-poppins text-4xl font-bold text-charcoal md:text-5xl">
            Our Core Services
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 bg-gold" />
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden border-b border-border bg-muted">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="relative px-5 pb-12 pt-8">
                <h3 className="min-h-14 font-poppins text-lg font-semibold leading-snug text-charcoal">
                  {service.title}
                </h3>
                <ul className="mt-1 space-y-2 text-sm text-charcoal/85">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
