const partners = [
  {
    name: "Alliance Towers",
    logo: "AllianceTowers.png",
  },
  {
    name: "ALT Global Solutions, Inc.",
    logo: "AltGlobal.png",
  },
  {
    name: "CEEC",
    logo: "CEDC.png",
  },
  {
    name: "Comm Trend Construction Corporation",
    logo: "CommTrend.png",
  },
  {
    name: "DITO Telecommunity",
    logo: "DITO.png",
  },
  {
    name: "Edge Point",
    logo: "EdgePoint.png",
  },
  {
    name: "Frontier Towers",
    logo: "FrontierTowers.png",
  },
  {
    name: "Globe",
    logo: "Globe.png",
  },
  {
    name: "LDIC",
    logo: "LDIC.png",
  },
  {
    name: "Lines + Edges",
    logo: "LinesEdges.png",
  },
  {
    name: "Peri-Peri",
    logo: "PeriPeri.png",
  },
  {
    name: "Philipps Technical Consultants Corp.",
    logo: "Philipps.png",
  },
  {
    name: "Philtower MDIC",
    logo: "Philtower.png",
  },
  {
    name: "Radiance Solar Solutions Inc.",
    logo: "RadianceSolarSolutions.png",
  },
  {
    name: "Shakey's Pizza Parlor",
    logo: "Shakeys.png",
  },
  {
    name: "Smart",
    logo: "Smart.png",
  },
  {
    name: "SMS Global Technologies Inc.",
    logo: "SMS.png",
  },
  {
    name: "Sumisetsu Philippines, Inc.",
    logo: "Sumisetsu.png",
  },
  {
    name: "Tektonbilt Construction",
    logo: "Tektonbilt.png",
  },
  {
    name: "Tiger Infrastructure",
    logo: "TigerInfra.png",
  },
  {
    name: "Uanjelle Land Inc.",
    logo: "Uanjelle.png",
  },
];

const Partners = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-charcoal text-center mb-2">
          Our Partners
        </h2>
        <p className="text-muted-foreground text-center">
          By choosing us, you gain a trusted partner dedicated to bringing your projects to life with excellence and innovation.
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-ticker w-max">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 min-w-[200px] h-28 rounded-lg border border-border bg-white px-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-center justify-center w-full h-full py-2">
                <img
                  src={`/partners/${partner.logo}`}
                  alt={partner.name}
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
              <span className="sr-only">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-b from-transparent via-dark/75 to-dark backdrop-blur-[2px] md:h-10" />
    </section>
  );
};

export default Partners;
