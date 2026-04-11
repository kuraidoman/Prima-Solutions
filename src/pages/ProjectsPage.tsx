import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxProjectId, setLightboxProjectId] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [carouselApis, setCarouselApis] = useState<Record<string, CarouselApi | null>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const interval = window.setInterval(() => {
      Object.values(carouselApis).forEach((api) => api?.scrollNext());
    }, 3500);

    return () => window.clearInterval(interval);
  }, [carouselApis]);

  const setCarouselApi = (projectId: string) => (api: CarouselApi | null) => {
    setCarouselApis((prev) => ({ ...prev, [projectId]: api }));
  };

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    []
  );

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory),
    [selectedCategory]
  );

  const lightboxProject = projects.find((project) => project.id === lightboxProjectId);

  const openLightbox = (projectId: string, imageIndex: number) => {
    setLightboxProjectId(projectId);
    setLightboxIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showPrevious = () => {
    if (!lightboxProject) return;
    setLightboxIndex((current) =>
      current === 0 ? lightboxProject.images.length - 1 : current - 1
    );
  };

  const showNext = () => {
    if (!lightboxProject) return;
    setLightboxIndex((current) =>
      current === lightboxProject.images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <span className="text-gold text-large font-bold uppercase tracking-[0.35em]">
              Projects
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-charcoal">
              Browse Our Projects
            </h1>
            <p className="mt-4 text-muted-foreground mx-auto max-w-2xl leading-relaxed">
              Browse our projects and open each gallery for a closer look.
            </p>
          </div>
        </section>

        <section className="border-t border-border py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
              <aside className="hidden lg:block">
                {/* 1. Make the ASIDE sticky and lock it to the top */}
                <div className="sticky top-28 h-[calc(100vh-140px)] flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
                  
                  {/* Header Section (Stays put) */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-charcoal">Filter by category</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Select a category to view matching projects.
                    </p>
                  </div>

                  {/* 2. The scrollable button area */}
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          type="button"
                          onClick={() => setSelectedCategory(category)}
                          className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                            selectedCategory === category
                              ? "bg-charcoal text-white"
                              : "bg-white text-charcoal hover:bg-slate-100"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              <div>
                <div className="mb-6 flex flex-wrap gap-3 lg:hidden">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                        selectedCategory === category
                          ? "border-charcoal bg-charcoal text-white"
                          : "border-border bg-white text-charcoal hover:border-charcoal"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="space-y-8">
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                      <article
                        key={project.id}
                        className="rounded-3xl border border-border bg-card shadow-sm"
                      >
                        {/* We change the grid based on whether images exist */}
                        <div className={`grid gap-6 p-6 ${project.images.length > 0 ? "lg:grid-cols-[1fr_1fr]" : "grid-cols-1"} lg:items-start`}>
                          <div>
                            <p className="text-large font-bold uppercase tracking-[0.24em] text-gold">
                              {project.category}
                            </p>
                            <h3 className="mt-3 text-2xl font-semibold text-charcoal">
                              {project.title}
                            </h3>

                            {/* ADDITIONAL INFO SECTION */}
                            <div className="mt-4 space-y-2">
                              {project.address && (
                                <p className="text-sm text-muted-foreground">
                                  <strong className="text-charcoal font-semibold">Location:</strong> {project.address}
                                </p>
                              )}
                              {project.ownerContractor && (
                                <p className="text-sm text-muted-foreground">
                                  <strong className="text-charcoal font-semibold">Contractor/Owner:</strong> {project.ownerContractor}
                                </p>
                              )}
                              {project.description && (
                                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                                  {project.description}
                                </p>
                              )}
                            </div>

                            {/* Only show gallery button if images exist */}
                            {project.images.length > 1 && (
                              <div className="mt-7">
                                <button
                                  type="button"
                                  onClick={() => openLightbox(project.id, 0)}
                                  className="inline-flex items-center justify-center rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-charcoal transition hover:border-gold hover:text-charcoal"
                                >
                                  View full gallery
                                </button>
                              </div>
                            )}
                          </div>

                          {/* CAROUSEL SECTION (Only rendered if images exist) */}
                          {project.images.length > 0 && (
                            <div className="overflow-hidden rounded-3xl border border-border bg-slate-100">
                              <Carousel opts={{ loop: true }} setApi={setCarouselApi(project.id)}>
                                <CarouselContent>
                                  {project.images.map((image, index) => (
                                    <CarouselItem key={`${project.id}-${index}`}>
                                      <button
                                        type="button"
                                        onClick={() => openLightbox(project.id, index)}
                                        className="block h-56 w-full overflow-hidden rounded-3xl bg-slate-100"
                                      >
                                        <img
                                          src={image}
                                          alt={`${project.title} image ${index + 1}`}
                                          className="h-full w-full object-cover transition duration-200 hover:scale-105"
                                          loading="lazy"
                                        />
                                      </button>
                                    </CarouselItem>
                                  ))}
                                </CarouselContent>
                              </Carousel>
                            </div>
                          )}
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="rounded-3xl border border-border bg-card p-12 text-center text-muted-foreground">
                      No projects found yet.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="w-full max-w-4xl p-0 overflow-hidden bg-transparent shadow-none sm:rounded-none">
          {lightboxProject && (
            <div className="relative bg-white rounded-3xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-gold">
                    {lightboxProject.category}
                  </p>
                  <DialogTitle className="text-xl font-semibold text-charcoal">
                    {lightboxProject.title}
                  </DialogTitle>
                </div>
                <DialogClose className="rounded-full border border-border bg-white px-3 py-2 text-muted-foreground transition hover:border-gold hover:text-charcoal" />
              </div>

              <div className="relative bg-slate-950">
                <div className="mx-auto flex min-h-[50vh] max-h-[calc(100vh-220px)] items-center justify-center overflow-hidden px-4 py-6">
                  <img
                    src={lightboxProject.images[lightboxIndex]}
                    alt={`${lightboxProject.title} image ${lightboxIndex + 1}`}
                    className="max-h-[calc(100vh-260px)] max-w-full object-contain"
                  />
                </div>
                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition hover:bg-black/60"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition hover:bg-black/60"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-3 p-6">
                {lightboxProject.images.map((image, index) => (
                  <button
                    key={`${lightboxProject.id}-thumb-${index}`}
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    className={`overflow-hidden rounded-3xl border ${
                      index === lightboxIndex ? "border-gold" : "border-border"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${lightboxProject.title} thumb ${index + 1}`}
                      className="h-24 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
