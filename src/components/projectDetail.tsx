import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "./data/projectsData";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);
  const navigate = useNavigate();
  const { t } = useTranslation(["projects", "tech"]);

  const [isDark, setIsDark] = useState(
    () =>
      typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark")
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
        <Link to="/" className="text-blue-500 underline">
          Back to Home
        </Link>
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
    <div className="max-w-4xl mx-auto py-16 px-4">
      <button
        onClick={handleBack}
        className="text-blue-500 underline mb-4 inline-block cursor-pointer"
      >
        &larr; Back to Projects
      </button>
      <h1 className="text-4xl font-bold mb-4">
        {t(project.titleKey, { ns: "projects" })}
      </h1>
      <img src={project.image} className="w-full rounded-xl mb-6" />
      {project.technologies && (
        <div>
          <h2 className="text-3xl mb-4">Technologies Used</h2>
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
                    className="w-12 h-12 object-contain rounded-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {project.id === "project4" && (
        <section className="mb-12 mt-6">
          <h2 className="text-3xl ">
            {t("project4.aboutTitle", { ns: "projects" })}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: t("project4.about", { ns: "projects" }),
            }}
          />
          <h3 className="text-2xl font-semibold mt-6 ">
            {t("project4.hardwareTitle", { ns: "projects" })}
          </h3>
          <p>{t("project4.hardware1", { ns: "projects" })}</p>
          <p>{t("project4.hardware2", { ns: "projects" })}</p>
          <h3 className="text-2xl font-semibold mt-6 ">
            {t("project4.webappTitle", { ns: "projects" })}
          </h3>
          <p>{t("project4.webapp1", { ns: "projects" })}</p>
          <p>{t("project4.webapp2", { ns: "projects" })}</p>
          <h3 className="text-2xl font-semibold mt-6 ">
            {t("project4.contributionTitle", { ns: "projects" })}
          </h3>
          <p>{t("project4.contribution1", { ns: "projects" })}</p>
          <p>{t("project4.contribution2", { ns: "projects" })}</p>
          <p>{t("project4.contribution3", { ns: "projects" })}</p>
          <div className="mb-6 mt-6">
            <a
              href="https://github.com/louis-hertleer/BeeSafeS3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 shadow-sm hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900 transition"
            >
              {t("project4.github", { ns: "projects" })}
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
