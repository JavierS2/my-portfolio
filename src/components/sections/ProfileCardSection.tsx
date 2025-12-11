"use client";

import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import DownloadCvButton from "@/components/ui/DownloadCvButton";
import { motion, type Variants } from "framer-motion";

// === Variants IGUALES a los del Hero ===
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

export default function ProfileCardSection() {
  return (
    <section
      className="hero-bg min-h-screen flex items-center justify-center px-4 py-10"
      id="perfil"
    >
      <motion.div
        className="max-w-5xl w-full"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Tarjeta principal */}
        <motion.div
          variants={item}
          className="mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10 rounded-[32px] bg-white/90 shadow-[0_40px_80px_rgba(15,23,42,0.16)] px-6 py-8 md:px-12 md:py-12"
        >
          {/* Columna foto */}
          <motion.div
            variants={item}
            className="w-full md:w-[40%] flex flex-col items-center justify-center"
          >
            <div className="relative">
              {/* Contenedor de la foto */}
              <motion.div
                variants={item}
                className="overflow-hidden rounded-3xl bg-slate-100 shadow-[0_24px_40px_rgba(15,23,42,0.15)]"
              >
                <Image
                  src="/profile.jpg"
                  alt="Foto de Javier Santodomingo"
                  width={320}
                  height={380}
                  className="h-auto w-full object-cover"
                />
              </motion.div>

              {/* Barrita redes */}
              <motion.div
                variants={item}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2"
              >
                <div className="flex gap-4 rounded-full bg-white px-5 py-3 shadow-[0_18px_30px_rgba(15,23,42,0.18)]">
                  <button className="h-8 w-8 rounded-full bg-indigo-50 text-[13px] font-semibold text-indigo-500 flex items-center justify-center hover:bg-indigo-100 transition">
                    f
                  </button>
                  <button className="h-8 w-8 rounded-full bg-indigo-50 text-[13px] font-semibold text-indigo-500 flex items-center justify-center hover:bg-indigo-100 transition">
                    ig
                  </button>
                  <button className="h-8 w-8 rounded-full bg-indigo-500 text-[13px] font-semibold text-white flex items-center justify-center hover:bg-indigo-600 transition">
                    in
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Columna texto */}
          <motion.div
            variants={item}
            className="w-full md:w-[60%] flex flex-col justify-center gap-6 mt-10 md:mt-0"
          >
            <motion.div variants={item} className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-500">
                Hola, soy Javier
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                I am Professional User
                <br />
                Experience Designer
              </h2>
            </motion.div>

            <motion.div
              variants={item}
              className="space-y-3 text-sm md:text-[15px] text-slate-600 leading-relaxed"
            >
              <p>
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences.
              </p>
              <p>
                I design and develop services for customers specializing
                creating stylish, modern websites, web services.
              </p>
            </motion.div>

            {/* Botones */}
            <motion.div variants={item} className="mt-2 flex flex-wrap gap-3">
              <PrimaryButton href="#proyectos">Mis proyectos</PrimaryButton>
              <DownloadCvButton href="/cv/javier-santodomingo.pdf">
                Descargar CV
              </DownloadCvButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
