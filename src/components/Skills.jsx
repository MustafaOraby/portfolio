import { useTranslation } from "react-i18next";
/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaBootstrap, FaPython } from "react-icons/fa";
import { IoLogoCss3, IoLogoGithub } from "react-icons/io";
import { BiLogoTypescript, BiLogoFlask } from "react-icons/bi";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const TechSkills = [
  { name: "HTML", icon: FaHtml5, color: "text-[#e34c26]" },
  { name: "CSS", icon: IoLogoCss3, color: "text-[#97cd5d]" },
  { name: "JavaScript", icon: FaJs, color: "text-[#f7df1e]" },
  { name: "TypeScript", icon: BiLogoTypescript, color: "text-[#007acc]" },
  { name: "React", icon: FaReact, color: "text-[#61dbfb]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-[#000000]" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#8cc84b]" },
  { name: "Express.js", icon: SiExpress, color: "text-[#000000]" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-[#563d7c]" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-[#38bdf8]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47a248]" },
  { name: "GitHub", icon: IoLogoGithub, color: "text-[#181717]" },
  { name: "Python", icon: FaPython, color: "text-[#356c99]" },
  { name: "Flask", icon: BiLogoFlask, color: "text-[#ffffff]" }, // تم تعديل الأيقونة أيضاً لـ BiLogoFlask
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-primary dark:text-secondary">
          {t("skills.title")}
        </h2>
        <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 mb-8">
          {t("skills.description")}
        </p>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-5xl mx-auto">
          {TechSkills.map((skill, index) => (
            <motion.li
              key={skill.name}
          
              className="cursor-pointer bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 flex-grow w-[calc(100%-0.5rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-1rem)]"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
<div className="flex items-center justify-between md:justify-center gap-3 w-full  px-16 md:px-0">
  <skill.icon className={`text-xl  sm:text-2xl md:text-3xl shrink-0 ${skill.color}`} />
  <span className="font-medium text-xs sm:text-sm md:text-base whitespace-nowrap text-gray-800 dark:text-gray-200">
    {skill.name}
  </span>
</div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;