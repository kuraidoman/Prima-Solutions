import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  LayoutGrid,
  Home,
  Paintbrush,
  Building2,
  Landmark,
  Leaf,
  Building,
  Ruler,
  Warehouse,
  BedDouble,
  RadioTower,
  ClipboardList,
  Server,
  MapPinned,
  ZoomIn,
  ZoomOut,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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

const categoryIconRules: [RegExp, LucideIcon][] = [
  [/residential/i, Home],
  [/fitout/i, Paintbrush],
  [/mall/i, Building2],
  [/commercial/i, Landmark],
  [/sustainab/i, Leaf],
  [/real estate|housing/i, Building],
  [/structural/i, Ruler],
  [/warehouse/i, Warehouse],
  [/airbnb/i, BedDouble],
  [/tower/i, RadioTower],
  [/saq|tssr|site solutioning|cd creation/i, ClipboardList],
  [/build to suite|bts/i, Building2],
  [/colocation/i, Server],
];

const getCategoryIcon = (category: string): LucideIcon => {
  if (category === "All") return LayoutGrid;
  const match = categoryIconRules.find(([pattern]) => pattern.test(category));
  return match ? match[1] : ClipboardList;
};

const ProjectsPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxProjectId, setLightboxProjectId] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [carouselApis, setCarouselApis] = useState<Record<string, CarouselApi | null>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedMap, setSelectedMap] = useState<"design" | "implementation">("design");
  const [mapPanelOpen, setMapPanelOpen] = useState(true);
  const [mapScale, setMapScale] = useState(1);
  const [mapOffset, setMapOffset] = useState({ x: 0, y: 0 });
  const [isMapDragging, setIsMapDragging] = useState(false);
  const [mapDragStart, setMapDragStart] = useState<{ x: number; y: number } | null>(null);
  const [mapDragOrigin, setMapDragOrigin] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    setMapScale(1);
    setMapOffset({ x: 0, y: 0 });
  }, [selectedMap]);

  const zoomMap = (direction: "in" | "out") => {
    setMapScale((current) => {
      const next = direction === "in" ? current + 0.2 : current - 0.2;
      return Math.min(2.5, Math.max(0.75, Number(next.toFixed(2))));
    });
  };

  const handleMapPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsMapDragging(true);
    setMapDragStart({ x: event.clientX, y: event.clientY });
    setMapDragOrigin(mapOffset);
  };

  const handleMapPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isMapDragging || !mapDragStart) return;

    const deltaX = event.clientX - mapDragStart.x;
    const deltaY = event.clientY - mapDragStart.y;

    setMapOffset({
      x: mapDragOrigin.x + deltaX,
      y: mapDragOrigin.y + deltaY,
    });
  };

  const handleMapPointerUp = () => {
    setIsMapDragging(false);
    setMapDragStart(null);
  };

  const renderMapPanel = () => (
    <Collapsible
      open={mapPanelOpen}
      onOpenChange={setMapPanelOpen}
      className={`flex max-h-[calc(100vh-160px)] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 ease-out ${
        mapPanelOpen ? "w-full max-w-[360px]" : "w-14 max-w-14"
      }`}
    >
      <div className="flex items-stretch border-b border-border">
        <div className={`flex-1 p-4 sm:p-6 ${mapPanelOpen ? "block" : "hidden"}`}>
          <div className="flex items-center gap-2 text-sm font-semibold text-charcoal">
            <MapPinned className="h-4 w-4 text-gold" />
            Site map overview
          </div>
        </div>

        <CollapsibleTrigger
          aria-label={mapPanelOpen ? "Collapse map panel" : "Expand map panel"}
          className="group flex w-14 items-center justify-center border-l border-border bg-white text-charcoal transition hover:border-gold hover:text-gold"
        >
          <ChevronDown className="h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className={mapPanelOpen ? "block flex-1 overflow-y-auto overscroll-contain p-3 sm:p-4" : "hidden"}>
        <div className="flex flex-col gap-3">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Use the buttons to switch between design and implementation locations. Drag inside the map area and use zoom to inspect the pins.
          </p>

          <div className="grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setSelectedMap("design")}
              className={`rounded-xl border px-3 py-2 text-xs font-semibold transition sm:text-sm ${
                selectedMap === "design"
                  ? "border-gold bg-gold/10 text-charcoal"
                  : "border-border bg-white text-muted-foreground hover:border-gold hover:text-charcoal"
              }`}
            >
              Design Map
            </button>
            <button
              type="button"
              onClick={() => setSelectedMap("implementation")}
              className={`rounded-xl border px-3 py-2 text-xs font-semibold transition sm:text-sm ${
                selectedMap === "implementation"
                  ? "border-gold bg-gold/10 text-charcoal"
                  : "border-border bg-white text-muted-foreground hover:border-gold hover:text-charcoal"
              }`}
            >
              Implementation Map
            </button>
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => zoomMap("out")}
              aria-label="Zoom out"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-charcoal transition hover:border-gold hover:text-gold"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => zoomMap("in")}
              aria-label="Zoom in"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-charcoal transition hover:border-gold hover:text-gold"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
          </div>

          <div className="relative h-[42vh] min-h-[300px] overflow-hidden rounded-3xl border border-border bg-slate-100 p-2 sm:min-h-[360px] sm:h-[48vh]">
            <div
              className={`flex h-full w-full items-center justify-center ${isMapDragging ? "cursor-grabbing" : "cursor-grab"} select-none touch-none`}
              onPointerDown={handleMapPointerDown}
              onPointerMove={handleMapPointerMove}
              onPointerUp={handleMapPointerUp}
              onPointerCancel={handleMapPointerUp}
              onPointerLeave={handleMapPointerUp}
            >
              <img
                src={selectedMap === "design" ? "/design_map.png" : "/implem_map.png"}
                alt={selectedMap === "design" ? "Design map showing design site locations" : "Implementation map showing implementation site locations"}
                className="max-h-full max-w-full select-none object-contain"
                loading="lazy"
                draggable={false}
                style={{
                  transform: `translate(${mapOffset.x}px, ${mapOffset.y}px) scale(${mapScale})`,
                  transformOrigin: "center center",
                }}
              />
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {selectedMap === "design"
              ? "This map highlights the locations where PRIMA has successfully delivered engineering design services across the Philippines."
              : "This map highlights the locations where PRIMA has successfully delivered construction services across the Philippines. "}
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );

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
              Project Portfolio
            </h1>
            <p className="mt-4 text-muted-foreground mx-auto max-w-2xl leading-relaxed">
              Explore our completed projects that showcase our expertise
            </p>
          </div>
        </section>

        <section className="border-t border-border py-16">
          <div className="container mx-auto px-4">
            <div
              className="grid gap-8 lg:transition-[grid-template-columns] lg:duration-300 lg:ease-out"
              style={{
                gridTemplateColumns: mapPanelOpen
                  ? "280px minmax(0,1fr) 360px"
                  : "280px minmax(0,1fr) 56px",
              }}
            >
              <aside className="hidden lg:block">
                <div className="sticky top-28 flex h-[calc(100vh-140px)] flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-charcoal">Filter by category</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Select a category to view matching projects.
                    </p>
                  </div>

                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <div className="space-y-2">
                      {categories.map((category) => {
                        const Icon = getCategoryIcon(category);
                        return (
                          <button
                            key={category}
                            type="button"
                            onClick={() => setSelectedCategory(category)}
                            className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                              selectedCategory === category
                                ? "bg-charcoal text-white"
                                : "bg-white text-charcoal hover:bg-slate-100"
                            }`}
                          >
                            <Icon className="h-4 w-4 shrink-0" />
                            {category}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </aside>

              <div>
                <div className="mb-6 flex flex-wrap gap-3 lg:hidden">
                  {categories.map((category) => {
                    const Icon = getCategoryIcon(category);
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                          selectedCategory === category
                            ? "border-charcoal bg-charcoal text-white"
                            : "border-border bg-white text-charcoal hover:border-charcoal"
                        }`}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        {category}
                      </button>
                    );
                  })}
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

              <aside className="hidden lg:block">
                <div className="sticky top-28 ml-auto w-full" style={{ maxWidth: mapPanelOpen ? "360px" : "56px" }}>
                  {renderMapPanel()}
                </div>
              </aside>
            </div>

            <div className="mt-8 lg:hidden">{renderMapPanel()}</div>
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
