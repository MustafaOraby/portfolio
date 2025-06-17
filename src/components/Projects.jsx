import { useTranslation } from "react-i18next";
import Card from "./Card";
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaBootstrap, FaCss3 } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoCss3, IoLogoGithub } from "react-icons/io";
import { BiLogoTypescript, BiLogoRedux } from "react-icons/bi";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GiGearStickPattern } from "react-icons/gi";
import { TbBrandVite } from "react-icons/tb";

import Prject1Img1 from "../assets/projectsImg/storeLaptopSizeImg.png";
import Prject1Img2 from "../assets/projectsImg/storeMobileSizeImg.png";
import Prject2Img1 from "../assets/projectsImg/quranspirit.labtop.png";
import Prject2Img2 from "../assets/projectsImg/quranspirit.mobile.png";
import Prject3Img1 from "../assets/projectsImg/movieLaptopSizeImg.png";
import Prject3Img2 from "../assets/projectsImg/movieMobileSizeImg.png";
import Prject4Img1 from "../assets/projectsImg/tictactoeLaptopSizeImg.png";
import Prject4Img2 from "../assets/projectsImg/tictactoeMobileSizeImg.png";
import Prject5Img1 from "../assets/projectsImg/portfolioLaptopSizeImg.png";
import Prject5Img2 from "../assets/projectsImg/portfolioMobileSizeImg.png";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-background dark:bg-background-dark "
    >
      <div className="max-w-4xl mx-auto text-center flex items-center flex-col">
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-primary dark:text-secondary">
          {t("projects.title")}
        </h2>
        <p className="text-sm md:text-xl">{t("projects.description")}</p>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {/* Replace with your project cards */}
          <Card
            laptopImgSrc={Prject2Img1}
            phoneImgSrc={Prject2Img2}
            title={t("projects.project2.title")}
            description={t("projects.project2.description")}
            techStack={{
              tech1: <FaHtml5 />,
              tech2: <FaCss3 />,
              tech3: <BiLogoTypescript/>,
              tech4: <RiTailwindCssFill />,
              tech5: <SiNextdotjs />,
            }}
            LiveDemoLink="https://quranspirit.vercel.app/"
          />
          <Card
            laptopImgSrc={Prject1Img1}
            phoneImgSrc={Prject1Img2}
            title={t("projects.project1.title")}
            description={t("projects.project1.description")}
            techStack={{
              tech1: <FaHtml5 />,
              tech2: <FaCss3 />,
              tech3: <FaJs />,
              tech4: <FaReact />,
              tech5: <BiLogoRedux />,
              tech6: <IoLogoFirebase />,
              tech7: <RiTailwindCssFill />,
            }}
            LiveDemoLink="https://obedient-straw.surge.sh/"
          />
         
          <Card
            laptopImgSrc={Prject3Img1}
            phoneImgSrc= {Prject3Img2}
            title={t("projects.project3.title")}
            description={t("projects.project3.description")}
            techStack={{
              tech1: <FaHtml5 />,
              tech2: <FaCss3 />,
              tech3: <FaJs />,
              tech4: <FaReact />,
              tech5: <FaBootstrap />,
            }}
            LiveDemoLink="https://flawless-history.surge.sh/"
          />
          <Card
            laptopImgSrc={Prject4Img1}
            phoneImgSrc= {Prject4Img2}
            title={t("projects.project4.title")}
            description={t("projects.project4.description")}
            techStack={{
              tech1: <FaHtml5 />,
              tech2: <FaCss3 />,

              tech3: <FaJs />,
              tech4: <FaReact />,
              
            }}
            LiveDemoLink="https://available-sheet.surge.sh/"
          />
          <Card
            laptopImgSrc={Prject5Img1}
            phoneImgSrc= {Prject5Img2}
            title={t("projects.project5.title")}
            description={t("projects.project5.description")}
            techStack={{
              tech1: <FaHtml5 />,
              tech2: <FaCss3 />,

              tech3: <FaJs />,
              tech4: <TbBrandVite />,
              
            }}
            LiveDemoLink="/"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
