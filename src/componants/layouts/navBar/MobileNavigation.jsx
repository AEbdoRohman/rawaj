import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

/* eslint-disable react/prop-types */
const MobileNavigation = ({ isMenuOpen, setIsMenuOpen, isScrolled }) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);
  return (
    <nav
      className={`md:hidden fixed top-0 left-0 w-full h-screen  shadow-md transition-transform duration-500 ease-in-out bg-black opacity-90 ${
        isMenuOpen ? "translate-y-0 pt-12" : "-translate-y-full"
      } ${isScrolled ? " text-white" : ""}
      }`}
    >
      <div>
        <span className="text-white absolute top-4 right-4 cursor-pointer">
          <IoClose size={35} onClick={() => setIsMenuOpen(false)} />
        </span>

        <ul className="text-xl flex flex-col items-center gap-6 pt-16">
          <li>
            <a
              href="/"
              className="text-white hover:text-secondary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              الصفحة الرئيسية
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-secondary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              عن الشركة
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-white hover:text-secondary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              تواصل معنا
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavigation;
