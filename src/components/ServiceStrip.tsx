import { Building2, RadioTower, PencilRuler } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Commercial & Industrial Construction",
    description: "Quality builds that stand the test of time.",
    image: "/services/design_services.png",
  },
  {
    icon: RadioTower,
    title: "Telecom Infrastructure",
    description: "Design, build, and maintain telecom towers nationwide.",
    image: "/services/tower_services.png",
  },
  {
    icon: PencilRuler,
    title: "Engineering & Design",
    description: "Structural design, BIM modeling, and permit documentation.",
    image: "/services/structural_analysis.png",
  },
];

const ServiceStrip = () => {
  return (
    <section className="relative flex w-full flex-col overflow-hidden md:flex-row">
      <div className="absolute inset-x-0 top-0 z-20 h-1 bg-gold" />
      {highlights.map((item) => (
        <div
          key={item.title}
          className="group relative h-[220px] flex-1 overflow-hidden md:h-[260px]"
        >
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/70 to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-end gap-2 p-6 md:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold text-gold">
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="max-w-xs font-poppins text-lg font-bold uppercase leading-snug text-white md:text-xl">
              {item.title}
            </h3>
            <p className="max-w-xs text-sm text-white/80">{item.description}</p>
            <div className="mt-1 h-1 w-10 bg-gold" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceStrip;
