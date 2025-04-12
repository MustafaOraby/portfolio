import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [state, handleSubmit] = useForm("meoavega"); // ← استخدم ID الخاص بك من Formspree

  function copyEmail() {
    const email = "your.email@example.com"; // ✉️ ضع بريدك هنا
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  }

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex justify-center items-center py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors"
    >
      <div className="w-full mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary dark:text-secondary">
          {t("contact.title")}
        </h2>

        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
          {t("contact.description")}
        </p>

        {state.succeeded && (
          <div className="mb-6 text-green-600 font-semibold">
            ✅ {t("contact.success") || "تم الإرسال بنجاح!"}
          </div>
        )}

        {!state.succeeded && (
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-full">
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder={t("contact.name")}
              className="p-3 rounded-lg w-full md:w-1/2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 focus:border-blue-500 dark:focus:border-secondary focus:outline-none"
            />
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder={t("contact.email")}
              className="p-3 rounded-lg w-full md:w-1/2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 focus:border-blue-500 dark:focus:border-secondary focus:outline-none"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
            <textarea
              id="message"
              name="message"
              required
              placeholder={t("contact.message")}
              className="p-3 rounded-lg w-full md:w-1/2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 focus:border-blue-500 dark:focus:border-secondary focus:outline-none"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm"
            />

            <div className="flex mt-5 flex-row items-center justify-center gap-4 w-full h-10">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-primary dark:bg-secondary text-white hover:bg-white hover:text-primary dark:hover:text-secondary hover:font-bold hover:border-2 duration-400 transition-all cursor-pointer px-6 rounded-lg h-full"
              >
                {state.submitting
                  ? t("contact.submitting") || "جارٍ الإرسال..."
                  : t("contact.submit") || "إرسال"}
              </button>

              <div className="relative h-full">
                {copied && (
                  <div className="absolute -top-7 left-1/2 w-full transform -translate-x-1/2 bg-green-500 text-white rounded-lg shadow-md transition-opacity duration-300 px-2 text-sm">
                    ✅ {t("contact.copied")}
                  </div>
                )}
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-sm md:text-base bg-primary dark:bg-secondary text-white hover:bg-white hover:text-primary dark:hover:text-secondary hover:font-bold hover:border-2 h-full font-semibold px-2 rounded-lg transition-all cursor-pointer"
                >
                  {t("contact.myEmail")} 📋
                </button>
              </div>

              <a
                className="bg-primary dark:bg-secondary text-white hover:bg-white hover:text-primary dark:hover:text-secondary hover:font-bold hover:border-2 duration-400 transition-all cursor-pointer w-10 h-full rounded-full flex justify-center items-center"
                href="https://www.linkedin.com/in/mustafa-mohamed-oraby/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                className="w-10 bg-primary dark:bg-secondary text-white hover:bg-white hover:text-primary dark:hover:text-secondary hover:font-bold hover:border-2 duration-400 transition-all cursor-pointer h-full rounded-full flex justify-center items-center"
                href="https://github.com/MustafaOraby"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
