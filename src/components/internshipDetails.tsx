import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function InternshipDetail() {
  const { t } = useTranslation("internship");
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const section = document.getElementById("internship");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const openImage = (src: string): void => setModalImage(src);
  const closeImage = () => setModalImage(null);

  const consultantImages = [
    {
      src: "/internship/strobbo-consultant-detail.png",
      caption: t("internship.details.consultantImage1"),
    },
    {
      src: "/internship/strobbo-login-logs.png",
      caption: t("internship.details.consultantImage2"),
    },
    {
      src: "/internship/strobbo-tenant-logs.png",
      caption: t("internship.details.consultantImage3"),
    },
    {
      src: "/internship/strobbo-tenant-consultants.png",
      caption: t("internship.details.consultantImage4"),
    },
  ];

  return (
    <div className="max-w-4xl py-9 my-9 mx-auto px-4 relative">
      <button
        onClick={handleBack}
        className="text-blue-500 underline mb-4 inline-block cursor-pointer"
      >
        &larr; {t("internship.details.back")}
      </button>
      <h1 className="text-4xl font-bold mb-4">{t("internship.title")}</h1>

      {/* Consultant Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">
          {t("internship.details.consultantManagement")}
        </h2>
        <p className="text-lg  leading-relaxed mb-4">
          {t("internship.details.consultantManagementP1")}
        </p>
        <p className="text-lg  leading-relaxed mb-4">
          {t("internship.details.consultantManagementP2")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
          {consultantImages.map(({ src, caption }, index) => (
            <div key={index} className="relative group">
              <img
                src={src}
                alt={caption}
                onClick={() => openImage(src)}
                className="w-full h-auto aspect-video object-cover rounded-xl shadow-lg transition-transform group-hover:scale-105 cursor-pointer"
              />
              <button
                onClick={() => openImage(src)}
                className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:scale-110 transition-transform cursor-pointer"
                aria-label={t("internship.details.enlargeImage")}
              >
                🔍
              </button>
              <p className="text-sm  mt-2 italic text-center">{caption}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          {t("internship.details.frontendBackendNote")}
        </p>
      </section>

      {/* Audit logging */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">
          {t("internship.details.auditLogging")}
        </h2>
        <p className="text-lg  leading-relaxed mb-4">
          {t("internship.details.auditLoggingP1")}
        </p>
        <p className="text-lg leading-relaxed mb-4">
          {t("internship.details.auditLoggingP2")}
        </p>
        <div className="relative group">
          <img
            src="/internship/strobbo-audit-logging.png"
            onClick={() => openImage("/internship/strobbo-audit-logging.png")}
            alt={t("internship.details.auditLoggingImage")}
            className="w-full rounded-xl shadow-lg my-6 cursor-pointer transition-transform group-hover:scale-105"
          />
          <button
            onClick={() => openImage("/internship/strobbo-audit-logging.png")}
            className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:scale-105 transition-transform cursor-pointer"
            aria-label={t("internship.details.enlargeImage")}
          >
            🔍
          </button>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          {t("internship.details.frontendBackendNote")}
        </p>
      </section>

      {/* Tenant Switch */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">
          {t("internship.details.tenantSwitching")}
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          {t("internship.details.tenantSwitchingP1")}
        </p>
        <div className="relative group">
          <img
            src="/internship/strobbo-switch-tenant.png"
            alt={t("internship.details.tenantSwitchingImage")}
            onClick={() => openImage("/internship/strobbo-switch-tenant.png")}
            className="w-full rounded-xl shadow-lg my-6 cursor-pointer transition-transform group-hover:scale-105"
          />
          <button
            onClick={() => openImage("/internship/strobbo-switch-tenant.png")}
            className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:scale-105 transition-transform cursor-pointer"
            aria-label={t("internship.details.enlargeImage")}
          >
            🔍
          </button>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          {t("internship.details.frontendBackendNote")}
        </p>
      </section>

      {/* Dashboard */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">
          {t("internship.details.dashboardInsights")}
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          {t("internship.details.dashboardInsightsP1")}
        </p>
        <div className="relative group">
          <img
            src="/internship/strobbo-dashboard.png"
            alt={t("internship.details.dashboardInsightsImage")}
            onClick={() => openImage("internship/strobbo-dashboard.png")}
            className="w-full rounded-xl shadow-lg my-6 cursor-pointer transition-transform group-hover:scale-105"
          />
          <button
            onClick={() => openImage("/internship/strobbo-dashboard.png")}
            className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:scale-105 transition-transform cursor-pointer"
            aria-label={t("internship.details.enlargeImage")}
          >
            🔍
          </button>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          {t("internship.details.frontendBackendNote")}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">
          {t("internship.details.moreInfoTitle")}
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          {t("internship.details.moreInfo")}
        </p>

        {/* Documents */}
        <div className="mb-8 flex flex-wrap gap-4">
          {[
            { label: "Project Plan", file: "projectPlan.pdf" },
            { label: t("internship.realization"), file: "assessment.pdf" },
            { label: t("internship.reflection"), file: "reflectie.pdf" },
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
      </section>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-xl text-white bg-black bg-opacity-50 rounded-full p-0 hover:bg-opacity-80 transition cursor-pointer"
              aria-label={t("internship.details.closeImage") || "Close"}
              style={{ zIndex: 10 }}
            >
              ✖
            </button>
            <img
              src={modalImage}
              alt={t("internship.details.enlargeImage")}
              className="max-w-[95vw] max-h-[80vh] w-auto h-auto rounded-lg shadow-lg m-2"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
