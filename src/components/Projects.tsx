import { projects } from "@/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-charcoal-foreground text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-charcoal-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          A showcase of our completed and ongoing construction projects.
        </p>

        <div className="max-w-4xl mx-auto px-12">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full md:w-1/2 text-charcoal-foreground">
                      <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="font-poppins text-2xl font-bold mt-2 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-charcoal-foreground/80 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-charcoal-foreground border-charcoal-foreground/30 hover:bg-charcoal-foreground/10" />
            <CarouselNext className="text-charcoal-foreground border-charcoal-foreground/30 hover:bg-charcoal-foreground/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
