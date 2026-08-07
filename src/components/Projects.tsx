import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const featuredProjects = [
  {
    title: "Vineyard Dasma Cavite Project",
    category: "Residential Project",
    location: "Dasmariñas, Cavite",
    image: "/Residence.jpg",
    targetTitle: "Vineyard Residences",
  },
  {
    title: "Castillejos Commons Mall",
    category: "Commercial Project",
    location: "Castillejos, Zambales",
    image: "/Commercial.jpg",
    targetTitle: "Castillejos Commons Mall - Zambales Project",
  },
  {
    title: "Dinadiawan Aurora Telecom Tower",
    category: "Telecommunications Project",
    location: "Dinadiawan, Aurora",
    image: "/Telecomms.jpg",
    targetTitle: "Dinadiawan Aurora Telecom Tower",
  },
  {
    title: "4PH Pambansang Pabahay Design Project",
    category: "Design Projects",
    location: "Gamu, Isabela",
    image: "/4PH.jpg",
    targetTitle: "4PH Pambansang Pabahay Design Project",
  },
];

const getProjectHref = (project: { targetTitle?: string; href?: string }) => {
  if (project.href) return project.href;

  if (!project.targetTitle) return "/projects";

  const matchedProject = projects.find((item) => item.title === project.targetTitle);
  return matchedProject ? `/projects#${matchedProject.id}` : "/projects";
};

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 relative overflow-hidden bg-charcoal py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/footer_up.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/70" />

      <div className="container relative z-10 mx-auto px-4">
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
            <div key={project.title}>
              <Link
                to={getProjectHref(project)}
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
              <p className="mt-3 text-center font-poppins text-sm font-bold uppercase tracking-wider text-gold">
                {project.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
