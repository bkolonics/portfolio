import github_logo from "../assets/github_logo.svg";
import { Link } from "react-scroll";
import { FiMoon, FiSun } from "react-icons/fi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useState } from "react";
import { IconContext } from "react-icons";
import { useTranslation } from "react-i18next";

function ToggleDarkMode() {
  document.documentElement.classList.toggle("dark");
}

function ToggleButton() {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  console.log(darkMode);
  return (
    <>
      {darkMode ? (
        <FiSun
          onClick={() => {
            ToggleDarkMode();
            setDarkMode(false);
            localStorage.theme = "light";
          }}
        />
      ) : (
        <FiMoon
          onClick={() => {
            ToggleDarkMode();
            setDarkMode(true);
            localStorage.theme = "dark";
          }}
        />
      )}
    </>
  );
}

function ToggleLanguage() {
  const { i18n } = useTranslation();
  return (
    <button
      onClick={() => {
        i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
      }}
    >
      {i18n.language === "en" ? "FR" : "EN"}
    </button>
  );
}


export function Navbar() {
    return (
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a href="#" className="lg:text-5xl text-3xl text-Glaucous px-2">
            Bence Kolonics
          </a>
          <button className="text-lg text-Glaucous px-2 sm:hidden">
            <ToggleButton />
          </button>
          <button className="text-lg text-Glaucous px-2 sm:hidden">
            <ToggleLanguage></ToggleLanguage>
          </button>
        </div>
        <div className="flex sm:gap-5 justify-evenly">
          <div className="text-lg text-Glaucous hidden sm:block">
            <ToggleLanguage></ToggleLanguage>
          </div>
          <button className="text-lg text-Glaucous hidden sm:block">
            <ToggleButton />
          </button>
          <a href="#" className="text-lg text-Glaucous">
            Resume
          </a>
          <Link
            href=""
            className="text-lg text-Glaucous"
            to="timeline"
            spy={true}
            smooth={true}
            duration={500}
          >
            Timeline
          </Link>
          <Link
            href=""
            className="text-lg text-Glaucous"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <a href="#" className="fill-Glaucous">
            <IconContext.Provider
              value={{ size: "30px", className: "fill-Glaucous" }}
            >
              <BsGithub />
            </IconContext.Provider>
          </a>
          <a href="#" className="fill-Glaucous">
            <IconContext.Provider
              value={{ size: "30px", className: "fill-Glaucous" }}
            >
              <BsLinkedin />
            </IconContext.Provider>
          </a>
        </div>
      </nav>
    );
}