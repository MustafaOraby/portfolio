import React from "react";

const Card = ({ laptopImgSrc, phoneImgSrc, title, description, techStack }) => {
  return (
    <div className="  relative w-[300px] h-[200px]  lg:w-[600px] m-5  lg:h-[400px]  cursor-pointer rounded-[10px] flex items-center justify-center overflow-hidden perspective-[1000px] shadow-[0_0_0_5px_#ffffff80] transition-all duration-[600ms] ease-[cubic-bezier(.175,.885,.32,1.275)] hover:scale-[1.05] hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)] group">
      <div className="flex items-center justify-center">
        <div className="w-[70%] flex items-center justify-center">
          <img className="w-full p-1" src={laptopImgSrc} />
        </div>
        <div className="w-[25%] flex items-center justify-center">
          <img className="w-[75%]" src={phoneImgSrc} />
        </div>
      </div>
      {/* Content */}
      <div className="absolute inset-0 p-[20px] bg-white/90 dark:bg-gray-800/90 rounded-2xl border-4  dark:border-secondary border-primary rotate-x-[-90deg] origin-bottom transition-all duration-[900ms] ease-[cubic-bezier(.175,.885,.32,1.275)] group-hover:rotate-x-0">
        <h3 className="m-0 sm:text-[10px]  xl:text-[24px] text-primary dark:text-secondary font-bold">
          {title}
        </h3>
        <p className="mt-[10px] text-[12px] xl:text-[18px] text-black dark:text-white  xl:leading-[3]">
          {description}
        </p>
        {techStack && (
          <div className="items-center justify-around mt-[10px] xl:text-[28px] text-black dark:text-white flex flex-wrap gap-2">
            {Object.values(techStack).map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
