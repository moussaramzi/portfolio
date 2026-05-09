"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./data/projectsData";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Projects() {
  const { t } = useTranslation(["projects"]);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <section id="projects" className="py-20 scroll-mt-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">{t("htitle")}</h2>

      <div className="flex flex-col md:flex-row border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-xl max-w-7xl mx-auto">

        {/* ── Left: project list ── */}
        <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#181818]">
          {projects.map((project, i) => (
            <button
              key={project.id}
              onClick={() => setActiveIndex(i)}
              className={`w-full text-left flex items-start gap-4 px-6 py-6 border-l-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0 transition-all duration-200
                ${i === activeIndex
                  ? "border-l-blue-500 bg-blue-50 dark:bg-blue-950/40"
                  : "border-l-transparent hover:bg-gray-100 dark:hover:bg-gray-800/50"
                }`}
            >
              <span
                className={`text-xs font-bold tabular-nums mt-0.5 shrink-0 ${
                  i === activeIndex ? "text-blue-500" : "text-gray-400"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1 min-w-0">
                <span
                  className={`text-base font-semibold truncate ${
                    i === activeIndex
                      ? "text-blue-500"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {t(project.titleKey)}
                </span>
                <span className="text-xs text-gray-400 truncate">
                  {project.technologies?.slice(0, 3).map((tech) => tech.alt).join(" · ")}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* ── Right: preview ── */}
        <div className="md:w-2/3 bg-white dark:bg-[#1c1c1c] flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full"
            >
              <img
                src={active.image}
                alt={t(active.titleKey)}
                className="w-full object-cover max-h-72 md:max-h-[26rem]"
              />

              <div className="p-8 flex flex-col gap-5 flex-1">
                <h3 className="text-2xl font-bold">{t(active.titleKey)}</h3>

                {active.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {active.technologies.map((tech) => (
                      <span
                        key={tech.alt}
                        className="flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded-full px-3 py-1 text-xs font-medium"
                      >
                        <img src={tech.src} alt={tech.alt} className="w-4 h-4" />
                        {tech.alt}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t(active.descriptionKey)}
                </p>

                <button
                  onClick={() => navigate(active.link)}
                  className="mt-auto self-start bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer"
                >
                  {t("view")} →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
