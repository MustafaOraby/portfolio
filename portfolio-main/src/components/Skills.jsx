import { useTranslation } from "react-i18next";
/* eslint-disable no-unused-vars */

import { motion } from "framer-motion"; // ← استدعاء framer-motion
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { IoLogoCss3, IoLogoGithub } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GiGearStickPattern } from "react-icons/gi";

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
  {
    name: "Design Patterns",
    icon: GiGearStickPattern,
    color: "text-[#f05032]",
  },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-primary dark:text-secondary">
          {t("skills.title")}
        </h2>
        <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 mb-8">
          {t("skills.description")}
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 text-sm md:text-xl relative">
          {TechSkills.map((skill, index) => (
            <motion.li
              key={skill.name}
              className={`cursor-pointer m-1 bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-lg p-3 md:p-4 shadow-md hover:scale-105 transition-transform duration-300 ${
                index === TechSkills.length - 1
                  ? "col-span-2 md:col-span-4"
                  : ""
              }`}
              initial={{ opacity: 0, scale: 0, y: 200 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.05, delay: index * 0.06 }}
            >
              <div className=" flex items-center justify-between  md:gap-2">
                <skill.icon className={ ` mx-2 text-2xl md:text-4xl ${skill.color}`} />
                <span>{skill.name}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
