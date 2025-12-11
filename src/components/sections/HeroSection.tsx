"use client";
import { motion, type Variants } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Tag from "@/components/ui/Tag"

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

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-bg min-h-screen flex items-center pt-24 pb-20"
    >
      <motion.div
        className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Etiqueta superior */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-4 py-1"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-indigo-600">
            Perfil
          </span>
          <span className="text-[11px] font-semibold text-slate-700">
            Desarrollador Full Stack
          </span>
        </motion.div>

        {/* Nombre */}
        <motion.div
          variants={item}
          className="w-full flex flex-col items-center gap-3"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
            Javier Santodomingo
          </h1>
          <div className="h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400" />
        </motion.div>

        {/* Descripción */}
        <motion.p
          variants={item}
          className="max-w-2xl text-sm md:text-[15px] leading-relaxed text-slate-600"
        >
          Soy estudiante de <span className="font-semibold text-slate-900"> Ingeniería de Sistemas</span>{" "}  en la
          <span className="font-semibold text-slate-900"> Universidad del Magdalena, Santa Marta</span>{" "}
          en constante crecimiento. Me gusta resolver problemas, diseñar experiencias funcionales 
          y construir aplicaciones que combinen buen diseño con un rendimiento sólido.
        </motion.p>

        {/* CTA */}
        <motion.div variants={item} className="pt-2">
          <PrimaryButton href="/about-me">Conóceme</PrimaryButton>
        </motion.div>

        {/* Tags */}
        <motion.div
          variants={item}
          className="pt-6 flex flex-wrap justify-center gap-3 text-[12px] md:text-[13px]"
        >
          <Tag text="Disponible" />
          <Tag text="Construyendo interfaces modernas" icon="✦" />
          <Tag text="Next.js • Tailwind • React" icon="⚡" />
        </motion.div>
      </motion.div>
    </section>
  );
}
