"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import PrimaryButton from "@/components/ui/PrimaryButton";

const navLinks = [
  { href: "/home", label: "Inicio" },
  { href: "/about-me", label: "Sobre mí" },
  { href: "/skills", label: "Habilidades" },
  { href: "/projects", label: "Proyectos" },
  { href: "/experience", label: "Experiencia" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-transparent">
      {/* Contenedor centrado, mismo ancho que el hero */}
      <div className="pointer-events-none pt-4">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            pointer-events-auto
            mx-auto
            flex
            max-w-6xl
            items-center
            justify-between
            rounded-full
            bg-white/80
            px-6
            py-2
            shadow-md
            shadow-slate-300/40
            backdrop-blur
          "
        >
          {/* Logo */}
          <a
            href="/home"
            className="text-sm md:text-base font-extrabold tracking-[0.28em] text-indigo-500 transition hover:text-indigo-600"
          >
            JAVIER
          </a>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative text-slate-500 hover:text-slate-900 transition-colors
                               after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                               after:bg-gradient-to-r after:from-indigo-500 after:to-sky-400
                               after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <PrimaryButton href="#about-me">Contacto</PrimaryButton>
          </div>

          {/* Botón hamburguesa */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {/* Icono hamburguesa animado */}
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </motion.nav>
      </div>

      {/* Menú móvil desplegable con mismo ancho que el hero */}
      <motion.div
        initial={false}
        animate={
          isOpen
            ? { opacity: 1, y: 0, pointerEvents: "auto" }
            : { opacity: 0, y: -8, pointerEvents: "none" }
        }
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          md:hidden
          absolute
          left-0
          right-0
          top-16
        "
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-white/95 shadow-lg shadow-slate-300/60 backdrop-blur px-5 py-3">
            <ul className="flex flex-col gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-2 py-2 text-slate-700 hover:bg-slate-100 hover:text-indigo-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 mt-1 border-t border-slate-100">
                <PrimaryButton href="#about-me">Conóceme</PrimaryButton>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
