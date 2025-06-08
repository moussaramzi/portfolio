"use client";

import { motion } from "framer-motion";
import { projects } from "./data/projectsData";
import { useTranslation } from "react-i18next";

interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  link: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useTranslation(["projects"]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="sticky top-32 w-full"
      style={{
        zIndex: index + 1,
        marginTop: index === 0 ? "0" : "80px",
      }}
    >
      <a
        href={project.link}
        className="block text-white rounded-2xl shadow-xl w-full max-w-5xl mx-auto relative overflow-hidden group cursor-pointer min-h-[500px] h-[500px]"
      >
        <div className="p-6 bg-[#242424] rounded-t-2xl">
          <h3 className="text-2xl font-semibold">{t(project.titleKey)}</h3>
        </div>
        <div className="relative w-full h-full">
          <img
            src={project.image}
            alt={t(project.titleKey)}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Description for mobile (bottom) */}
          <div className="md:hidden p-6 bg-gray-800/90 absolute bottom-0 left-0 w-full z-10">
            <p className="text-gray-200 text-sm mb-2">
              {t(project.descriptionKey)}
            </p>
            <span className="inline-block bg-blue-600 text-white py-2 px-4 rounded-xl">
              View Project
            </span>
          </div>

          {/* Description for desktop */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-0 group-hover:w-1/3 bg-gray-500/80 bg-opacity-70 transition-all duration-300 ease-in-out flex items-center justify-center z-20">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full h-full flex flex-col items-center justify-center p-0 group-hover:p-6">
              <p className="text-gray-200 text-sm mb-4">
                {t(project.descriptionKey)}
              </p>
              <span className="inline-block bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-500 transition-colors ">
                {t("view")}
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useTranslation(["projects"]);

  return (
    <section id="projects" className="relative pt-32 scroll-mt-20">
      <h2 className="text-4xl font-bold text-center mb-20 top-16 sticky  py-2 ">
        {t("htitle")}
      </h2>

      <div className="relative flex flex-col items-center">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
