import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    title: "Vineyard Dasma Cavite Project",
    location: "Dasmariñas, Cavite",
    image: "/projects/46.png",
  },
  {
    title: "Castillejos Commons Mall",
    location: "Castillejos, Zambales",
    image: "/projects/40.png",
  },
  {
    title: "Telecommunication CME Construction",
    location: "Nationwide, Philippines",
    image: "/projects/57.png",
  },
  {
    title: "Various Engineering Designs",
    location: "Structural & Design Consultancy",
    image: "/projects/19.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 bg-charcoal py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 grid grid-cols-1 items-center gap-4 sm:grid-cols-3">
          <div className="hidden sm:block" />
          <div className="text-center">
            <span className="font-poppins text-3xl md:text-4xl font-bold text-center mb-2 text-white">
              Featured Projects
            </span>
            <div className="mx-auto mt-2 h-1 w-16 bg-gold" />
          </div>
          <div className="flex justify-center sm:justify-end">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-charcoal shadow-sm transition hover:border-gold hover:text-gold"
            >
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              to="/projects"
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-poppins text-base font-bold leading-snug text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-white/70">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
