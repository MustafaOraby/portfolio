import { useTranslation } from "react-i18next";
import Card from "./Card";
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaBootstrap, FaCss3 } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

import { IoLogoCss3, IoLogoGithub } from "react-icons/io";
import { BiLogoTypescript, BiLogoRedux } from "react-icons/bi";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GiGearStickPattern } from "react-icons/gi";
const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-background dark:bg-background-dark "
    >
      <div className="max-w-4xl mx-auto text-center flex items-center flex-col">
        <h2 className="text-3xl font-bold mb-6 text-primary dark:text-secondary">
          {t("projects.title")}
        </h2>
        <p>{t("projects.description")}</p>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {/* Replace with your project cards */}
          <Card
            laptopImgSrc="/src/assets/projectsImg/storeLaptopSizeImg.png"
            phoneImgSrc="/src/assets/projectsImg/storeMobileSizeImg.png"
            title={t("projects.project1.title")}
            description={t("projects.project1.description")}
            techStack={{
              tech1: <FaReact />,
              tech2: <BiLogoRedux />,
              tech3: <IoLogoFirebase />,
              tech4: <RiTailwindCssFill />,
            }}
          />
          <Card
            laptopImgSrc="/src/assets/projectsImg/quranLaptopSizeImg.png"
            phoneImgSrc="/src/assets/projectsImg/quranMobileSizeImg.png"
            title={t("projects.project2.title")}
            description={t("projects.project2.description")}
            techStack={{
              tech1: <FaHtml5 />,
              tech2: <RiTailwindCssFill />,
              tech3: <SiNextdotjs />,
              tech4: <BiLogoTypescript/>,
            }}
          />
          <Card
            laptopImgSrc="/src/assets/projectsImg/movieLaptopSizeImg.png"
            phoneImgSrc="/src/assets/projectsImg/movieMobileSizeImg.png"
            title={t("projects.project3.title")}
            description={t("projects.project3.description")}
            techStack={{
              tech1: <FaHtml5 />,
              tech2: <FaCss3 />,
              tech3: <FaReact />,
              tech4: <FaBootstrap />,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
