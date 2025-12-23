"use client";

import { motion, type Variants } from "framer-motion";
import { IconType } from "react-icons";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Tag from "@/components/ui/Tag";

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

interface Tech {
  name: string;
  icon: IconType;
}

interface ProjectCardProps {
  type: string;
  title: string;
  description: string;
  image: string;
  technologies: Tech[];
  href?: string;
}

export default function ProjectCard({
  type,
  title,
  description,
  image,
  technologies,
  href = "#",
}: ProjectCardProps) {
  return (
    <motion.article
      variants={item}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        {/* Project type */}
        <Tag text={type} />

        {/* Title & description */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-600">
            {description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-1">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
            >
              <tech.icon className="text-[13px]" />
              {tech.name}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-2">
          <PrimaryButton href={href}>
            Ver proyecto →
          </PrimaryButton>
        </div>
      </div>
    </motion.article>
  );
}
