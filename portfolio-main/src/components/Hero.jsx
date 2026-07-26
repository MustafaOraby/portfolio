// This component is a hero section that includes a rotating background, a profile image, and some text.
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MyPic from "../assets/profile.png"; // Assuming you have a profile image in this path
const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="  flex flex-col items-center justify-center h-screen text-center text-text dark:text-text-dark transition-colors"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] mb-4 md:mb-6"
      >
        {/* الخلفية الدوارة */}
        <div className="absolute inset-1 md:inset-0 rounded-full blur-sm  border-none shadow-[0px_-5px_20px_rgb(186,66,255),0px_5px_20px_rgb(0,225,255)] bg-[conic-gradient(at_top_left,_rgb(186,66,255)_35%,_rgb(0,225,255))]"></div>

        {/* الطبقة الداخلية الثابتة */}
        <div className="absolute inset-0 bg-background dark:bg-background-dark rounded-full blur-sm"></div>

        {/* صورة البروفايل */}
        <div className=" w-[100px] h-[100px] md:w-[150px] md:h-[150px] flex items-center justify-center relative z-10 rounded-full overflow-hidden border-2 md:border-4 border-white shadow-[0_0_25px_rgba(0,0,0,0.5)] dark:shadow-[0_0_25px_rgba(99,102,241,0.3)]">
          <motion.img
            src={MyPic}
            alt="My Profile Image"
            className=" w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </motion.div>

      <motion.h1
        className=" mt-10 md:mt-0 text-2xl md:text-4xl font-bold mb-2  text-primary dark:text-secondary"
        initial={{ y: -140, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {t("hero.greeting")}
      </motion.h1>

      <motion.p
        className=" mt-8 md:mt-10 text-md p-2 md:p-0 md:text-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {t("hero.intro")}
      </motion.p>
    </section>
  );
};

export default Hero;
