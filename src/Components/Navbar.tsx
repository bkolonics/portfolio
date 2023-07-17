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
  // console.log(darkMode);
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

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select
      id="noanimate"
      className="text-lg font-medium bg-Platinum dark:bg-Jet text-Glaucous form-control item"
      onChange={handleLanguageChange}
    >
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
}


export default function Navbar() {
   const { t } = useTranslation();
    return (
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a href="#" className="lg:text-5xl text-2xl text-Glaucous px-2">
            Bence Kolonics
          </a>
          <button className="text-lg text-Glaucous px-2 sm:hidden">
            <ToggleButton />
          </button>
          <a className="px-2 sm:hidden">
            <ToggleLanguage></ToggleLanguage>
          </a>
        </div>
        <div className="flex sm:gap-5 justify-evenly">
          <button className="hidden sm:block">
            <ToggleLanguage></ToggleLanguage>
          </button>
          <button className="text-lg text-Glaucous hidden sm:block">
            <ToggleButton />
          </button>
          <a href="#" className="text-lg text-Glaucous">
            {t("Resume")}
          </a>
          <Link
            href=""
            className="text-lg text-Glaucous"
            to="timeline"
            spy={true}
            smooth={true}
            duration={500}
          >
            {t("Timeline")}
          </Link>
          <Link
            href=""
            className="text-lg text-Glaucous"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            {t("Projects")}
          </Link>
          <a
            href="https://github.com/bkolonics/portfolio"
            className="fill-Glaucous"
          >
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