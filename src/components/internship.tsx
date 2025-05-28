import { Link } from "react-router-dom";

export default function Internship() {
  return (
    <section
      id="internship"
      className="py-16 my-16 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
          {/* Logo */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src="/strobbo-logo.webp"
              alt="Company Logo"
              className="w-80 h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3">
            <h2 className="text-5xl font-bold mb-6 text-blue-700 dark:text-blue-400 tracking-tight">
              Internship @ Strobbo
            </h2>

            <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              During my internship at{" "}
              <span className="font-semibold">Strobbo</span>, I focused on
              backend development to improve both the internal tooling and the
              main application. One of my main tasks was enabling full
              consultant management within the internal tools — including
              creating consultants, assigning them to clients, modifying access
              rights, and revoking access when needed. On the application side,
              I implemented audit logging to track which consultant performed
              which actions, and developed a feature that allows users to switch
              between clients without logging out. At the end of the internship,
              I also contributed to the creation of a dashboard in the internal
              tooling, which presents key data through various charts and
              visualizations to support better internal decision-making.
            </p>

            {/* Documents */}
            <div className="mb-8 flex flex-wrap gap-4">
              {[
                { label: "Internship Report", file: "projectPlan.pdf" },
                { label: "Assessment", file: "assessment.pdf" },
                { label: "Certificate", file: "certificate.pdf" },
              ].map((doc) => (
                <a
                  key={doc.label}
                  href={`/documents/${doc.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 shadow-sm hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900 transition"
                >
                  📄 {doc.label}
                </a>
              ))}
            </div>

            {/* More Info */}
            <Link
              to="/projects/internship"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-md font-semibold shadow-md transition duration-300"
            >
              Learn more about my internship →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
