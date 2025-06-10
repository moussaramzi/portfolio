import { useState, useEffect, useRef } from "react";
import { Settings, Sun, Moon } from "lucide-react";
import LanguageSwitcher from "./languageSwitcher";
import { useTranslation } from "react-i18next";

const SettingsPopup = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation(["setting"]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const storedPreference = localStorage.getItem("darkMode");
    const systemPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    let initialDarkMode = false;

    if (storedPreference !== null) {
      initialDarkMode = storedPreference === "true";
    } else {
      initialDarkMode = systemPrefersDark;
    }

    setDarkMode(initialDarkMode);
    if (initialDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const togglePopup = () => setOpen(!open);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  const positionClass = isMobile
    ? "fixed bottom-4 left-4"
    : "fixed bottom-4 right-4";
  const transformOrigin = isMobile ? "bottom left" : "bottom right";
  const clipPath = open
    ? isMobile
      ? "polygon(24px 100%, 100% 100%, 100% 0, 0 0, 0 calc(100% - 24px))"
      : "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)"
    : "none";

  return (
    <div className={`${positionClass} z-50`} ref={popupRef}>
      <button
        onClick={togglePopup}
        className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md hover:bg-blue-600 transition-all duration-300 z-10 relative"
        aria-label="Settings"
      >
        <Settings size={24} />
      </button>

      {/* Popup box */}
      <div
        className={`
          absolute ${isMobile ? "bottom-0 left-0" : "bottom-0 right-0 "}
          transition-transform transition-opacity duration-300 ease-out 
          ${
            open
              ? "scale-100 opacity-100 pointer-events-auto "
              : "scale-75 opacity-0 pointer-events-none"
          }
        `}
        style={{
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
          borderRadius: "0.75rem",
          backgroundColor: darkMode ? "#32343a" : "#d1d5db",
          color: darkMode ? "#F0F8FF" : "#242424",
          clipPath,
          transformOrigin,
          padding: "1rem",
          width: "16rem",
        }}
      >
        {/* Content */}
        <div className="flex flex-col space-y-4 pb-14">
          <div className="flex items-center justify-between  ">
            <span className="text-sm ">{t("setting.language")}</span>
            <LanguageSwitcher />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm  ">{t("setting.theme")}</span>
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center dark:bg-gray-200 bg-gray-700 rounded-full transition-all"
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPopup;
