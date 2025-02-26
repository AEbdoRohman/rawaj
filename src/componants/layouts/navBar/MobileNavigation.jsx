/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MobileNavigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  // scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // navigate to section
  const handleNavigation = (sectionId) => {
    setIsMenuOpen(false); // Close the menu

    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  return (
    <nav
      className={`md:hidden fixed top-0 left-0 w-10/12 h-screen text-white bg-black opacity-90 transition-transform duration-500 ease-in-out ${
        isMenuOpen ? "translate-x-0 pt-12" : "-translate-x-full"
      }`}
    >
      <div>
        <span className="text-white absolute top-4 right-4 cursor-pointer">
          <IoClose size={35} onClick={() => setIsMenuOpen(false)} />
        </span>

        <ul className="text-xl flex flex-col items-center gap-6 pt-16">
          <li>
            <Link
              to="/"
              className="text-white hover:text-secondary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
          </li>
          <li>
            <button
              className="text-white hover:text-secondary transition"
              onClick={() => handleNavigation("how_use")}
            >
              من نحن
            </button>
          </li>
          <li>
            <button
              className="text-white hover:text-secondary transition"
              onClick={() => handleNavigation("services")}
            >
              خدماتنا
            </button>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-white hover:text-secondary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              مشاريعنا
            </Link>
          </li>
          <li>
            <Link
              to="/contactUs"
              className="text-white hover:text-secondary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              تواصل معنا
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavigation;
