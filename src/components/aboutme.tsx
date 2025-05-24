import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t, i18n } = useTranslation("about");

    const cvHref = i18n.language === "en" ? "/CV-EN.pdf" : "/CV.pdf";

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex justify-center">
          <img
            src="/profile.webp"
            alt="Profile"
            className="w-68 h-68 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">{t("about.title")}</h2>
          <p className="text-lg  max-w-xl mx-auto md:mx-0">
            {t("about.description")}
          </p>
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left text-blue-600 ">
              {t("about.course.title")}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-lg ">
              <li>
                <strong>{t("about.course.thomasmore")}: </strong> <br />
                Thomas More
                
              </li>
              <li>
                <strong>{t("about.course.college")}:  </strong> <br />
                Sint-Jan Berchmanscollege
                
              </li>
            </ul>

          <div className="mt-8 text-center md:text-left">
              <a
                href={cvHref}
                target="_blank"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300"
              >
                {t("about.download")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
