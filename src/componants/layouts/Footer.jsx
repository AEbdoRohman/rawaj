import {
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="contact"
      className=" bg-[#E5E7EB] px-4 md:px-0 pt-8 md:pt-16 pb-6 mt-8"
    >
      <div className="container mx-auto py-6px-2 md:px-0 z-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-4 md:gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex justify-center md:justify-start ">
              <img src="/logo.png" alt="Logo" className="w-28" />
            </div>
            <p className="text-main_text mx-6 md:mx-2 text-center md:text-right">
              رواج هي شركة سعودية متخصصة في تقديم استراتيجيات تسويقية مخصصة،
              تسعى لخلق تجربة مستخدم مميزة عبر حلول مبتكرة وتفاعل سريع مع
              التطورات الرقمية.
            </p>
          </div>
          {/* Quick Links */}
          <div className="">
            <h3 className="text-3xl text-secondary_text text-center font-semibold mb-4">
              روابط مهمة
            </h3>
            <div className="flex flex-col items-center  mt-6">
              <Link
                to="/"
                className="mb-4 text-xl font-bold text-main_text hover:text-gray-600 transition-colors duration-300 ease-in-out"
              >
                الرئيسية
              </Link>
              <a
                href="#how_use"
                className="mb-4 text-xl font-bold text-main_text hover:text-gray-600 transition-colors duration-300 ease-in-out"
              >
                من نحن
              </a>
              <a
                href="#services"
                className="mb-4 text-xl font-bold text-main_text hover:text-gray-600 transition-colors duration-300 ease-in-out"
              >
                خدماتنا
              </a>

              <Link
                to="/contactUs"
                className="mb-4 text-xl font-bold text-main_text hover:text-gray-600 transition-colors duration-300 ease-in-out"
              >
                تواصل معنا
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="">
            <h3 className="text-3xl text-secondary_text font-semibold mb-4">
              تواصل معنا
            </h3>
            <div className="flex flex-col  mt-6">
              <a
                href="https://maps.app.goo.gl/9KNt1KRFamdP3zjo8"
                target="_blank"
                className="flex items-center mb-4 text-main_text hover:text-gray-600 transition-colors duration-300 ease-in-out"
              >
                <FaLocationDot size={22} />
                <span className="mr-2 text-lg font-bold">
                  خميس مشيط _ الحزام الدائري _ حي الجامعيين
                </span>
              </a>
              <a
                href="https://wa.me/966544293033"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mb-4 text-main_text hover:text-gray-600 transition-colors duration-300 ease-in-out"
              >
                <FaWhatsapp size={22} />
                <span className="mr-2 text-xl font-bold"> 0544293033</span>
              </a>

              <a
                href="mailto:rawahworld0@gmail.com"
                className="flex items-center mb-4 text-main_text hover:text-gray-600 transition-colors duration-300 ease-in-out"
              >
                <FaEnvelope size={22} />
                <span className="mr-2 text-lg font-bold">
                  Rawahworld0@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Social Media */}
        <div className="flex gap-2 justify-center mt-4 md:mt-8">
          <a
            href="https://www.tiktok.com/@rawaj_world"
            target="_blank"
            className="text-main_text hover:text-white p-2 hover:bg-primary rounded-full transition-colors duration-500 ease-in-out"
          >
            <FaTiktok size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/world-rawaj-163b4324b/"
            target="_blank"
            className="text-main_text hover:text-white p-2 hover:bg-primary rounded-full transition-colors duration-500 ease-in-out"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://x.com/rawaj_world"
            target="_blank"
            className="text-main_text hover:text-white p-2 hover:bg-primary rounded-full transition-colors duration-500 ease-in-out"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/rawaj_world/"
            target="_blank"
            className="text-main_text hover:text-white p-2 hover:bg-primary rounded-full transition-colors duration-500 ease-in-out"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 mb-8 text-center">
          <p className="text-main_text  text-xl md:text-2xl">
            {" "}
            جميع الحقوق محفوظة{" "}
            <a
              href="https://mostaql.com/u/AbdElrohmaan"
              className="text-main_text  font-bold hover:text-primary transition-colors duration-300 ease-in-out"
            >
              Ojemy-Tech
            </a>
            &copy; 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
