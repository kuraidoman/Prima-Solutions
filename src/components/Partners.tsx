const partners = [
  {
    name: "Alliance Towers",
    logo: "AllianceTowers.png",
  },
  {
    name: "GRAAR",
    logo: "graar.png",
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
    name: "Edge Point",
    logo: "EdgePoint.png",
  },
  {
    name: "First Beacon Construction & Development Corporation",
    logo: "FirstBeacon.png",
  },
  {
    name: "Frontier Towers",
    logo: "FrontierTowers.png",
  },
  {
    name: "Infra Towers Philippines",
    logo: "Infra.png",
  },
  {
    name: "LDIC",
    logo: "LDIC.jpg",
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
  {
    name: "Whitestone",
    logo: "Whitestone.png",
  },
];

const Partners = () => {
  return (
    <section className="py-4 bg-white overflow-hidden">
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
              className="flex items-center justify-center mx-8 min-w-[200px] h-28 rounded-lg bg-white px-6"
            >
              <div className="flex items-center justify-center w-full h-full py-2">
                <img
                  src={`/partners/${partner.logo}`}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
              <span className="sr-only">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
