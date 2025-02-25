import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const UpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`up-down-animation fixed bottom-6 left-6 bg-main_text text-white p-2 rounded-full transition-opacity duration-300 cursor-pointer z-50 ${
        showButton ? "opacity-100" : "opacity-0"
      } `}
      onClick={scrollToTop}
    >
      <MdKeyboardDoubleArrowUp size={24} />
    </div>
  );
};

export default UpButton;
