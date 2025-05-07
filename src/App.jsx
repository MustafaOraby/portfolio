import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLanguage } from "react-icons/md";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  // Load the i18n configuration
  const { t } = useTranslation();
  // Initialize i18n for translations
  const { i18n } = useTranslation();
  // Load the dark mode preference from localStorage on page load
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    }
    // fallback: use system preferences
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Update class on the HTML element and localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="min-h-screen bg-background text-text dark:bg-background-dark dark:text-text-dark ">
      <header className="  flex  flex-col md:flex-row justify-between items-center  gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2">
    <div className="fixed bottom-5 right-5 z-50  group transition duration-300">
          <button
            onClick={toggleDarkMode}
            className="hover:bg-primary-dark hover:shadow-lg p-2 md:p-3 border-primary border-2 bg-white dark:bg-primary  text-white rounded-full cursor-pointer flex items-center gap-2"
          >
            {darkMode ? (
              <div className="flex   items-center gap-2  transition duration-300 cursor-pointer">
                <span className="fixed bottom-15 right-5 hidden group-hover:block transition duration-300 bg-info/30 text-black dark:text-white   mb-3 p-2 rounded-lg">
                  {t("theme.light")}
                </span>
                <MdDarkMode className="text-sm md:text-xl text-primary dark:text-white " />
              </div>
            ) : (
              <div className="flex   items-center gap-2  transition duration-300 cursor-pointer">
                <span className="fixed bottom-15 right-5 hidden group-hover:block transition duration-300 bg-info/30   mb-3 p-2 rounded-lg text-black dark:text-white">
                  {t("theme.dark")}
                </span>
                <MdLightMode className="text-sm md:text-xl text-primary dark:text-white" />
              </div>
            )}
          </button>
          </div>
          <div className="fixed bottom-5 left-5 z-50  group transition duration-300">
            <span className=" fixed bottom-15 left-5 hidden group-hover:block transition duration-300 bg-info/30   mb-3 p-2 rounded-lg">
              {i18n.language === "ar"
                ? "Change language to English"
                : "تغيير اللغة الى العربية"}
            </span>
            <button
              onClick={toggleLang}
              className=" hover:bg-primary-dark hover:shadow-lg p-2 md:p-3 border-primary border-2 bg-white dark:bg-primary  text-white rounded-full cursor-pointer flex items-center gap-2  "
            >
              <MdOutlineLanguage className="text-sm md:text-xl text-primary dark:text-white " />
            </button>
          </div>
        </div>
      </header>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />

    {/* <Certificates />  */}
      <Experience />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
