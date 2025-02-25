import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <div>
      <div className="arrow-animation fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full cursor-pointer z-50">
        <a
          href="https://wa.me/966544293033"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>
    </div>
  );
};

export default WhatsappButton;
