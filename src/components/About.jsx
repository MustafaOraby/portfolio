import { useTranslation } from "react-i18next";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoCss3, IoLogoGithub } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GiGearStickPattern } from "react-icons/gi";

const About = () => {
  const { t } = useTranslation();

  const skills = [
    { icon: FaHtml5, color: "#e34c26" },
    { icon: IoLogoCss3, color: "#97cd5d" },
    { icon: FaJs, color: "#f7df1e" },
    { icon: BiLogoTypescript, color: "#007acc" },
    { icon: FaReact, color: "#61dbfb" },
    { icon: SiNextdotjs, color: "#000000" },
    { icon: FaNodeJs, color: "#8cc84b" },
    { icon: SiExpress, color: "#000000" },
    { icon: FaBootstrap, color: "#563d7c" },
    { icon: RiTailwindCssFill, color: "#38bdf8" },
    { icon: SiMongodb, color: "#47a248" },
    { icon: IoLogoGithub, color: "#181717" },
    { icon: GiGearStickPattern, color: "#f05032" },
  ];

  return (
    <section
      id="about"
      className="flex justify-center items-center py-20 px-6 bg-white dark:bg-gray-800 transition-colors min-h-screen"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary dark:text-secondary">
          {t("about.title")}
        </h2>
        <p className="text-xl leading-loose text-center text-gray-700 dark:text-gray-300">
          {t("about.description")}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
          {skills.map(({ icon: Icon, color }, index) => (
            <Icon
              key={index}
              className="text-4xl hover:scale-110 transition-transform duration-300 cursor-pointer"
              style={{ color }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
