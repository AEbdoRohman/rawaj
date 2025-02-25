import { Link } from "react-router-dom";

const DesktopNavigation = () => {
  return (
    <nav className="hidden md:flex items-center gap-6 text-2xl">
      <Link to="/" className="hover:text-primary transition">
        الرئيسية
      </Link>
      <a
        href="#how_use"
        className="hover:text-primary transition duration-500 ease-in-out"
      >
        من نحن
      </a>
      <a
        href="#services"
        className="hover:text-primary transition duration-500 ease-in-out"
      >
        خدماتنا
      </a>

      <Link
        to="/contactUs"
        className="hover:text-primary transition duration-500 ease-in-out"
      >
        تواصل معنا
      </Link>
    </nav>
  );
};

export default DesktopNavigation;
