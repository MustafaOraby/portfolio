import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Wxora",
    role: "Web Development Training",
    date: "9/2023 - 10/2023",
    description: "experience.wxoraDescription",
    technologies: "HTML, CSS, JS, TS, React.JS, Node.JS, Express, MongoDB",
    certificate: "/certificate.jpg",
  },
  {
    company: "Smart Lines",
    role: "Web Development Freelance",
    date: "9/2022 - 9/2023",
    description: "experience.smartLinesDescription",
    technologies: "HTML, CSS, JS",
  },
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-6 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary dark:text-secondary">
          {t("experience.title")}
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
          {t("experience.description")}
        </p>

        <ul className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 2, type:"spring", delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow border-2 border-gray-300 dark:border-gray-600"
            >
              <h3 className="text-2xl font-semibold ">
                {exp.role} - <span className="text-primary dark:text-secondary">{exp.company}</span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.date}</p>
              <p className="text-md text-gray-700 dark:text-gray-200 mb-2">
                {t(exp.description)}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                {exp.technologies}
              </p>

              {exp.certificate && (
                <motion.img
                  src={exp.certificate}
                  alt="Certificate"
                  className="mt-4 rounded-md w-full sm:w-1/2 mx-auto opacity-0 hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.05 }}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
