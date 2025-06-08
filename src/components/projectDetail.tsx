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
  const [modalImage, setModalImage] = useState<string | null>(null);

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
        &larr; {t("back")}
      </button>
      <h1 className="text-4xl font-bold mb-4">
        {t(project.titleKey, { ns: "projects" })}
      </h1>
      <div className="relative group mb-6">
        <img
          src={project.image}
          alt={t(project.titleKey, { ns: "projects" })}
          className="w-full rounded-xl shadow-lg cursor-pointer transition-transform group-hover:scale-105"
          onClick={() => setModalImage(project.image)}
        />
        <button
          onClick={() => setModalImage(project.image)}
          className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:scale-110 transition-transform cursor-pointer"
          aria-label="Enlarge image"
        >
          🔍
        </button>
      </div>
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt={t(project.titleKey, { ns: "projects" })}
            className="max-w-[95vw] max-h-[80vh] w-auto h-auto rounded-lg shadow-lg m-2"
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
      {project.technologies && (
        <div>
          <h2 className="text-3xl mb-4">{t("technologies")}</h2>
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
     {project.id === "pos" && (
        <section className="mb-12 mt-6">
          <h2 className="text-3xl ">
            {t("pos.aboutTitle", { ns: "projects" })}
          </h2>
          <p className="mb-4">
            {t("pos.about", { ns: "projects" })}
          </p>

          <h3 className="text-2xl font-semibold mt-6 ">
            {t("pos.selfserviceTitle", { ns: "projects" })}
          </h3>
          <p className="text-gray-800 dark:text-gray-200 mb-4">
            {t("pos.selfservice", { ns: "projects" })}
          </p>

          <h3 className="text-2xl font-semibold mt-6 ">
            {t("pos.techTitle", { ns: "projects" })}
          </h3>
          <p className="text-gray-800 dark:text-gray-200 mb-4">
            {t("pos.tech", { ns: "projects" })}
          </p>

          <h3 className="text-2xl font-semibold mt-6 ">
            {t("pos.adminTitle", { ns: "projects" })}
          </h3>
          <p className="text-gray-800 dark:text-gray-200">
            {t("pos.admin", { ns: "projects" })}
          </p>
          <div className="mt-6">
            <a
              href="https://github.com/moussaramzi/pos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 shadow-sm hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900 transition"
            >
              {t("pos.github", { ns: "projects" })}
            </a>
          </div>
        </section>
      )}
      {project.id === "recipe-microservice" && (
        <section className="mb-12 mt-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-3xl ">
              {t("recipe.aboutTitle", { ns: "projects" })}
            </h2>
            <p>{t("recipe.about", { ns: "projects" })}</p>

            <h3 className="text-2xl font-semibold mt-6 ">
              {t("recipe.microservicesTitle", { ns: "projects" })}
            </h3>
            <p>{t("recipe.microservices", { ns: "projects" })}</p>

            <h3 className="text-2xl font-semibold mt-6 ">
              {t("recipe.authTitle", { ns: "projects" })}
            </h3>
            <p>{t("recipe.auth", { ns: "projects" })}</p>

            <h3 className="text-2xl font-semibold mt-6 ">
              {t("recipe.frontendTitle", { ns: "projects" })}
            </h3>
            <p>{t("recipe.frontend", { ns: "projects" })}</p>

            <h3 className="text-2xl font-semibold mt-6 ">
              {t("recipe.internalTitle", { ns: "projects" })}
            </h3>
            <p>{t("recipe.internal", { ns: "projects" })}</p>

            <h3 className="text-2xl font-semibold mt-6 ">
              {t("recipe.resultTitle", { ns: "projects" })}
            </h3>
            <p>{t("recipe.result", { ns: "projects" })}</p>
          </div>
          <div className="mt-6">
            <a
              href="https://github.com/moussaramzi/recipe-microservice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 shadow-sm hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900 transition"
            >
              {t("recipe.github", { ns: "projects" })}
            </a>
          </div>
        </section>
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
