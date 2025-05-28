import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation("contact");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const now = new Date();
      const formattedTime = now.toLocaleString("nl-NL", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Amsterdam",
      });

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
  
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: formattedTime,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email sent successfully:", result);
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      setError(
        "Er is een fout opgetreden bij het verzenden van je bericht. Probeer het opnieuw."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", message: "" });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <section
      id="contact"
      className="py-16 my-20 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 max-w-2xl border-2 border-gray-200 dark:border-gray-700 rounded-xl dark:shadow shadow-2xl p-8">
        <h2 className="text-4xl font-bold mb-6 text-center ">
          {t("contact.title")}
        </h2>
        <p className="text-center mb-10">{t("contact.subtitle")}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              {t("contact.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium ">
              {t("contact.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium "
            >
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-2xl transition-colors duration-300 shadow-md disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Verzenden...
              </>
            ) : (
              t("contact.send")
            )}
          </button>
        </form>

        {/* Success Toast */}
        {submitted && (
          <div className="fixed top-20 right-4 z-50 animate-fade-in-down">
            <div className="relative bg-white dark:bg-gray-900 border-l-4 border-green-600 text-green-700 dark:text-green-400 px-6 py-4 rounded-xl shadow-lg min-w-[250px]">
              <div className="font-semibold text-green-700 dark:text-green-300">
                {t("contact.success.title")}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                {t("contact.success.description")}
              </p>
              <div className="absolute bottom-0 left-0 h-1 bg-green-600 animate-progress-bar w-full rounded-b-xl" />
            </div>
          </div>
        )}

        {/* Error Toast */}
        {error && (
          <div className="fixed top-20 right-4 z-50 animate-fade-in-down">
            <div className="relative bg-white dark:bg-gray-900 border-l-4 border-red-600 text-red-700 dark:text-red-400 px-6 py-4 rounded-xl shadow-lg min-w-[250px]">
              <div className="font-semibold text-red-700 dark:text-red-300">
                {t("contact.error.title")}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                {t("contact.error.description")}
              </p>
              <div className="absolute bottom-0 left-0 h-1 bg-red-600 animate-progress-bar w-full rounded-b-xl" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
