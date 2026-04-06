import { Building, FileText, TowerControl } from "lucide-react";

const features = [
  {
    icon: Building,
    title: "Real Estate & Commercial Design",
    description:
      "Comprehensive design and construction services for commercial buildings, offices, and retail spaces.",
  },
  {
    icon: FileText,
    title: "Structural Investigation & Retrofitting",
    description:
      "In-depth structural assessments and retrofitting solutions to ensure safety and compliance.",
  },
  {
    icon: TowerControl,
    title: "Telecom Tower Infrastructure",
    description:
      "Design, construction, and maintenance of telecom tower structures with cutting-edge engineering.",
  },
];

const Features = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">
          Our Core Services
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Delivering excellence across multiple disciplines of engineering and construction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-lg p-8 border-2 border-border hover:border-gold transition-colors duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6 group-hover:bg-gold/10 transition-colors">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-poppins text-xl font-semibold text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
