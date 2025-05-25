import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "./data/projectsData"; 
import { useTranslation } from "react-i18next";

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);
  const navigate = useNavigate();
  const { t } = useTranslation(["projects", "tech"]);

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
            {project.technologies.map((tech) => (
              <div key={tech.labelKey} className="flex flex-col items-center">
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="w-16 h-16 object-contain rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}