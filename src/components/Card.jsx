import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Card = ({ laptopImgSrc, phoneImgSrc, title, description, techStack, LiveDemoLink }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="relative w-[300px] h-[200px] lg:w-[600px] m-5 lg:h-[400px]  rounded-[10px] flex items-center justify-center overflow-hidden perspective-[1000px] shadow-[0_0_0_5px_#ffffff80] transition-all duration-[600ms] ease-[cubic-bezier(.175,.885,.32,1.275)] group"
    >
      <div className="flex items-center justify-center">
        <div className="w-[70%] flex items-center justify-center">
          <img className="w-full p-1" src={laptopImgSrc} alt="Project Laptop" />
        </div>
        <div className="w-[25%] flex items-center justify-center">
          <img className="w-[75%]" src={phoneImgSrc} alt="Project Mobile" />
        </div>
      </div>

      {/* Content */}
      <div className=" flex justify-center items-center flex-col absolute inset-0 p-[20px] bg-white/90 dark:bg-gray-800/90 rounded-2xl border-4 dark:border-secondary border-primary rotate-x-[-90deg] origin-bottom transition-all duration-[900ms] ease-[cubic-bezier(.175,.885,.32,1.275)] group-focus:rotate-x-0 group-hover:rotate-x-0">
        <h3 className="m-0 sm:text-[10px] xl:text-[24px] text-primary dark:text-secondary font-bold">
          {title}
        </h3>
        <p className="mt-[10px] text-[12px] xl:text-[18px] text-black dark:text-white xl:leading-[3]">
          {description}
        </p>
        {techStack && (
          <div className="items-center justify-around mt-[10px] xl:text-[28px] text-black dark:text-white flex flex-wrap gap-2">
            {Object.values(techStack).map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        )}
        <div className="mt-[20px] w-[100px] h-[30px] flex justify-center items-center  rounded-xl border-2 "><a target="_blank" href={LiveDemoLink} className=" cursor-pointer font-semibold">{t("projects.liveDemo")}</a></div>
      </div>
    </motion.div>
  );
};

export default Card;
