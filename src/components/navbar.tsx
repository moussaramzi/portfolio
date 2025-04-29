import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation("navbar");

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    if (!menuVisible) {
      setMenuVisible(true);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        setMenuOpen(true); // Trigger transition on next frame
      });
    } else {
      setMenuOpen(false); // Trigger slide-out
      document.body.style.overflow = "auto";
      setTimeout(() => {
        setMenuVisible(false); // Unmount after transition
      }, 400); // Match transition duration
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full transition-none duration-0 ${
        menuVisible
          ? "bg-blue-500 shadow-md z-30"
          : scrolled
          ? "bg-blue-500/80 backdrop-blur-md shadow-md z-10"
          : "bg-blue-500 z-10"
      }`}
    >
      <div className="mx-[5%] md:mx-[10%] lg:mx-[20%] flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold text-white">
          <a href="/" className="hover:text-white transition-colors">
            MyPortfolio
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none z-40 relative"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#about" className="text-white transition-colors font-medium">
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white transition-colors font-medium">
              {t("navbar.projects")}
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white transition-colors font-medium">
              {t("navbar.contact")}
            </a>
          </li>
        </ul>
      </div>

      {menuVisible && (
        <>
          <div
            className={`fixed top-0 right-0 w-64 h-full bg-blue-500 shadow-lg transform transition-transform duration-400 ease-in-out md:hidden z-30 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col pt-20 px-6">
              <ul className="space-y-6">
                <li>
                  <a
                    href="#about"
                    onClick={toggleMenu}
                    className="text-white font-medium text-lg block py-2"
                  >
                    {t("navbar.about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={toggleMenu}
                    className="text-white font-medium text-lg block py-2"
                  >
                    {t("navbar.projects")}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={toggleMenu}
                    className="text-white font-medium text-lg block py-2"
                  >
                    {t("navbar.contact")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="fixed inset-0 backdrop-blur-sm bg-white/10 md:hidden z-20 transition-opacity duration-400"
            onClick={toggleMenu}
          ></div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
