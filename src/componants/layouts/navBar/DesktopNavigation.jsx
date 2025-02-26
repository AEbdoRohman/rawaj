import { Link, useLocation, useNavigate } from "react-router-dom";

const DesktopNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // navigate to section
  const handleNavigation = (sectionId) => {
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
    <nav className="hidden md:flex items-center gap-6 text-2xl">
      <Link to="/" className="hover:text-primary transition">
        الرئيسية
      </Link>
      <button
        onClick={() => handleNavigation("how_use")}
        className="hover:text-primary transition duration-500 ease-in-out"
      >
        من نحن
      </button>
      <button
        onClick={() => handleNavigation("services")}
        className="hover:text-primary transition duration-500 ease-in-out"
      >
        خدماتنا
      </button>
      <Link
        to="/projects"
        className="hover:text-primary transition duration-500 ease-in-out"
      >
        مشاريعنا
      </Link>
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
