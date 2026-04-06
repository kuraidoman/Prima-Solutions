const partnerNames = [
  "BuildTech Co.",
  "SteelWorks Inc.",
  "MetroDesign",
  "UrbanCore",
  "TelcoStruct",
  "AsiaCement",
  "PrimePower",
  "GreenBuild",
  "FoundationPro",
];

const Partners = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-charcoal text-center mb-2">
          Our Partners
        </h2>
        <p className="text-muted-foreground text-center">
          Trusted by industry leaders across the Philippines.
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-ticker w-max">
          {[...partnerNames, ...partnerNames].map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 min-w-[160px] h-20 rounded-lg border border-border bg-card px-6 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <span className="font-poppins font-semibold text-muted-foreground hover:text-charcoal transition-colors text-sm">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
