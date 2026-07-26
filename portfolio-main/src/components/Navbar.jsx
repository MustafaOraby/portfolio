import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "/src/assets/logo.png"
const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t("navbar.about"), to: "about" },
    { name: t("navbar.projects"), to: "projects" },
    { name: t("navbar.skills"), to: "skills" },
    { name: t("navbar.certificates"), to: "certificates" },
    { name: t("navbar.experience"), to: "experience" },
    { name: t("navbar.contact"), to: "contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col items-center justify-center transition-colors">
      {/* Logo */}
      <a href="#hero" className="fixed top-0 left-0 z-50 p-5">
        <img
          src={Logo}
          alt="Logo"
          className=" w-30 p-2 md:w-50   md:px-5 fixed top-1 left-0"
        />
      </a>

      {/* Main Nav Bar */}
      <div className="hidden lg:flex py-2 px-5   rounded-4xl border-2 bg-background/85 dark:bg-background-dark border-white dark:border-secondary justify-center items-center fixed top-4 left-1/2 transform -translate-x-1/2 transition-colors z-50">
        <ul className="flex text-base   text-primary dark:text-secondary gap-2 ">
          {navLinks.map((link) => (
            <li key={link.to}
            className="">
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={400}
                offset={-100}
                activeClass="active-link"
                className="cursor-pointer text-[12px] px-2  xl:text-base xl:px-4 py-1 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-800"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Burger Icon for Small Screens */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMenu}
          className="text-primary dark:text-secondary text-2xl md:text-3xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden fixed top-10 left-4 right-4 z-40 bg-background/95 dark:bg-background-dark rounded-xl shadow-xl p-5 transition-all duration-500 ease-in-out transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-1 text-center text-primary dark:text-secondary">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={400}
                offset={-100}
                onClick={() => setIsOpen(false)} // Close on click
                className=" cursor-pointer p-1 text-[13px] rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-800"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
