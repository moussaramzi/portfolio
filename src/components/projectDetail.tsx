import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "./data/projectsData"; 
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);
  const navigate = useNavigate();
  const { t } = useTranslation(["projects", "tech"]);

  const [isDark, setIsDark] = useState(() =>
    typeof window !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (typeof window === "undefined" || !document.documentElement) return;

    const updateDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateDark();

    const observer = new MutationObserver(updateDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!project) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="text-blue-500 underline">Back to Home</Link>
      </div>
    );
  }

  const handleBack = () => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <button
        onClick={handleBack}
        className="text-blue-500 underline mb-4 inline-block cursor-pointer"
      >
        &larr; Back to Projects
      </button>
      <h1 className="text-4xl font-bold mb-4">{t(project.titleKey, { ns: "projects" })}</h1>
      <img src={project.image}  className="w-full rounded-xl mb-6" />
      <p className="text-lg mb-4">{t(project.descriptionKey, { ns: "projects" })}</p>
      <p className=" mb-8">{t(project.detailsKey ?? "", { ns: "projects" })}</p>
      {project.technologies && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-6">
            {project.technologies.map((tech) => {
              let src = tech.src;
              if (tech.srcDark) {
                src = isDark ? tech.srcDark : tech.src;
              }
              return (
                <div key={tech.labelKey} className="flex flex-col items-center">
                  <img
                    src={src}
                    alt={tech.alt}
                    className="w-16 h-16 object-contain rounded-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {project.id === "project4" && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">
            {t("project4.title")}
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            BeeSafeS3 is a full-featured social media application developed as a group project with four other students. The main goal was to create a secure and user-friendly platform for sharing posts, connecting with friends, and managing personal profiles.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            My primary responsibility was building the core application and implementing the logic for various calculations, such as post analytics and user statistics. I focused on ensuring the app was robust, efficient, and easy to use, while also collaborating closely with my teammates on design and feature integration.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            The project was built using React Native for the frontend and Firebase for the backend, allowing for real-time updates and secure data storage.
          </p>
          <div className="mb-4">
            <a
              href="https://github.com/louis-hertleer/BeeSafeS3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 shadow-sm hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900 transition"
            >
              🐝 View GitHub Repository
            </a>
          </div>
        </section>
      )}
    </div>
  );
}