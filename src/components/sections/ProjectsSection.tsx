"use client";

import { motion, type Variants } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";

import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiFramer,
} from "react-icons/si";

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const projects = [
  {
    id: 1,
    type: "Full Stack",
    title: "Product Admin Dashboard",
    description:
      "Panel administrativo con autenticación, roles y visualización de métricas en tiempo real.",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926",
    technologies: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: 2,
    type: "Full Stack",
    title: "Analytics Platform",
    description:
      "Dashboard moderno enfocado en rendimiento y arquitectura escalable.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    id: 3,
    type: "Frontend",
    title: "UI Dashboard",
    description:
      "Interfaz moderna, responsive y animada con enfoque en UX.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="hero-bg py-28">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Proyectos
          </h2>
          <p className="text-sm md:text-[15px] text-slate-600">
            Proyectos desarrollados con tecnologías modernas y buenas prácticas.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
