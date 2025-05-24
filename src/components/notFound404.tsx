import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound404() {
  const { t } = useTranslation("error");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br ">
      <div className="text-9xl font-extrabold mb-4 animate-bounce">404</div>
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{t("404.title")}</h1>
      <p className="mb-8 text-lg md:text-xl max-w-md text-center">
        {t("404.message1")}<br />
        {t("404.message2")}<br />
        {t("404.message3")}
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300"
      >
        {t("404.button")}
      </Link>
    </div>
  );
}