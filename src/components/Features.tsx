import { Building, ClipboardCheck, Wrench, MapPinHouse } from "lucide-react";

const features = [
  {
    icon: Building,
    title: "Structural Design & Tower Construction",
    description: [
      { type: 'paragraph', text: 'Comprehensive engineering solutions for new developments, specialized in complex infrastructures from the ground up.' },
      { type: 'bullet', text: 'Telecom Tower Design and Build' },
      { type: 'bullet', text: 'Mid-rise to High-rise Building Design and Drawings' }
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Structural Forensic & Investigation",
    description: [
      { type: 'paragraph', text: 'Detailed assessment and documentation of existing structures to ensure safety, compliance, and accurate records.' },
      { type: 'bullet', text: 'Structural As-built and Investigation' },
      { type: 'bullet', text: 'Non-destructive Test (NDT) and Investigation' }
    ],
  },
  {
    icon: Wrench,
    title: "Retrofitting & Value Engineering",
    description: [
      { type: 'paragraph', text: 'Enhancing structural integrity and cost-efficiency through advanced engineering interventions and design optimization.' },
      { type: 'bullet', text: 'Structural Retrofitting Designs' },
      { type: 'bullet', text: 'Optimization and Value Engineering' }
    ],
  },
  {
    icon: MapPinHouse,
    title: "Geodetic & Surveying Services",
    description: [
      { type: 'paragraph', text: 'High-precision land and engineering surveys providing the essential data needed for accurate project planning.' },
      { type: 'bullet', text: 'Geodetic Services' }
    ],
  },
];

const Features = () => {
  return (
    <section id="services" className="scroll-mt-28 py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">
          Our Core Services
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Delivering excellence across multiple disciplines of engineering and construction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
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
              <div className="text-muted-foreground leading-relaxed">
                {feature.description.map((item, index) =>
                  item.type === 'paragraph' ? (
                    <p key={index} className="mb-2">{item.text}</p>
                  ) : (
                    <ul key={index} className="list-disc list-inside text-left mb-2">
                      <li>{item.text}</li>
                    </ul>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
