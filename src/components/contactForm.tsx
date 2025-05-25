import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation("contact");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

  return (
    <section
      id="contact"
      className="py-16 my-20 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 max-w-2xl border-2 border-gray-200 dark:border-gray-700 rounded-xl dark:shadow shadow-2xl   p-8">
        <h2 className="text-4xl font-bold mb-6 text-center ">
          {t("contact.title")}
        </h2>
        <p className="text-center  mb-10">{t("contact.subtitle")}</p>

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
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
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
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
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
              className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-2xl transition-colors duration-300 shadow-md"
          >
            {t("contact.send")}
          </button>
        </form>

        {/* Toast Notification */}
        {submitted && (
          <div className="fixed top-20 right-4 z-50 animate-fade-in-down">
            <div className="relative bg-white dark:bg-gray-900 border-l-4 border-blue-600 text-green-700 dark:text-green-400 px-6 py-4 rounded-xl shadow-lg min-w-[250px]">
              <div className="font-semibold text-green-700 dark:text-green-300">
                ✅ Bericht verzonden!
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                Ik neem zo snel mogelijk contact met je op.
              </p>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-blue-600 animate-progress-bar w-full rounded-b-xl" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
