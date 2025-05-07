import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Certicate1 from "../assets/certificat/wxora.jpg";
import Certicate2 from "../assets/certificat/udemy.jpg";
import Certicate3 from "../assets/certificat/udemy2.jpg";
import Certicate4 from "../assets/certificat/iti-mongo.jpg";


const Certificates = () => {
  const { t } = useTranslation();

  const certificates = [Certicate1, Certicate2, Certicate3, Certicate4];

  return (
    <section
      id="certificates"
      className="min-h-screen py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-primary dark:text-secondary">
          {t("certificates.title")}
        </h2>
        <p className="text-sm md:text-xl">{t("certificates.description")}</p>

        <div className="flex flex-col items-center">
          {certificates.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.97 }}
              className="md:w-[500px] m-8 md:m-10 bg-[#f2f2f2] cursor-pointer rounded-[10px] flex items-center justify-center overflow-hidden perspective-[1000px] shadow-[0_0_0_5px_#ffffff80] transition-all duration-[600ms] ease-[cubic-bezier(.175,.885,.32,1.275)]"
            >
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="w-full rounded-[10px] p-3 transition-transform duration-300 transform"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
