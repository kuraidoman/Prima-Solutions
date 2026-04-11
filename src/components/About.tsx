// src/components/About.tsx
const About = () => {
  return (
    <section id="about" className="scroll-mt-28 py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">
          About Prima Solution
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Prima Solution Development and Construction Corp. is a full-service design and build firm 
          specializing in residential, commercial, and telecom projects. From concept to construction, 
          we deliver innovative, safe, and reliable solutions you can trust.
        </p>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Today, the company is supported by a growing team of 30+ in-house employees and a 120+ skilled labor workforce, strengthened by long-standing partnerships with trusted suppliers and allied firms. Our continued collaboration with these partners reflects our commitment to quality, reliability, and excellence in every project we deliver.
        </p>
        {/* Add your about content */}
      </div>
    </section>
  );
};

export default About;