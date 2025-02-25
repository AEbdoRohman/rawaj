import { useState, useEffect } from "react";

import DesktopNavigation from "./navBar/DesktopNavigation";
import MobileNavigation from "./navBar/MobileNavigation";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50  transition-all  border-b border-gray-300
     bg-white shadow-sm text-black py-4 md:py-3
          
      `}
    >
      <div className="container mx-auto flex items-center justify-between  px-4 md:px-8">
        {/* Logo and Language Switcher */}
        <div className="flex items-center ">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-20" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNavigation />

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-primary focus:outline-none ${
            isMenuOpen ? "hidden" : ""
          }`}
          onClick={toggleMenu}
        >
          <FaBars size={30} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
        toggleDropdown={toggleDropdown}
        isDropdownOpen={isDropdownOpen}
      />
    </header>
  );
};

export default Header;
