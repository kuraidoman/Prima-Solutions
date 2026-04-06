export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Commercial Fitouts",
    category: "Commercial",
    description:
      "Complete interior fitout solutions for offices, retail spaces, and commercial establishments with modern design standards.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Large-Scale Residential",
    category: "Residential",
    description:
      "High-rise and mid-rise residential developments built with quality craftsmanship and innovative engineering.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Tower Retrofitting",
    category: "Telecom",
    description:
      "Structural retrofitting and reinforcement of telecom towers to meet updated load and safety requirements.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80",
  },
];
