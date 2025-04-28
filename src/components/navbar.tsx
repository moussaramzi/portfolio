import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-10 transition-all duration-300 ${
        scrolled 
          ? "bg-opacity-70 backdrop-blur-md shadow-md" 
          : "bg-blue-500"
      }`}
    >
      <div className="mx-[20%] flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold text-white">
          <a href="/" className="hover:text-white transition-colors">MyPortfolio</a>
        </div>
        <ul className="flex space-x-6">
          <li><a href="#about" className="text-white transition-colors font-medium">About</a></li>
          <li><a href="#projects" className="text-white transition-colors font-medium">Projects</a></li>
          <li><a href="#contact" className="text-white transition-colors font-medium">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;