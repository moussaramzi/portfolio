"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "project1",
    title: "SocialApp",
    description: "A full-featured social media app built with React Native and Firebase.",
    image: "/projects/socialapp.png",
    link: "/projects/socialapp"
  },
  {
    id: "project2",
    title: "TaskFlow",
    description: "Kanban-style productivity app using Angular and Laravel backend.",
    image: "/projects/taskflow.png",
    link: "/projects/taskflow"
  },
  {
    id: "project3",
    title: "E-Shop",
    description: "A sleek eCommerce platform using Next.js, Tailwind CSS, and Stripe.",
    image: "/projects/eshop.png",
    link: "/projects/eshop"
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.9 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-[1.02] flex flex-col group"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        </div>
        <a href={project.link}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block text-center bg-blue-600 text-white py-2 px-4 rounded-xl transition-colors duration-300 hover:bg-blue-500 mt-auto"
          >
            View Project
          </motion.div>
        </a>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20  text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
