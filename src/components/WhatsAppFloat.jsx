import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const phoneNumber = "917671842805"; // 🔴 change to your WhatsApp number
  const message = "Hello JBR Digital Solutions, I would like to know more.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex items-center justify-center
                 w-14 h-14 rounded-full bg-green-500 text-white
                 shadow-lg hover:bg-green-600 transition-all duration-300
                 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppFloat;
