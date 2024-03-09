import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = 6266302210;
  const openWhatsApp = () => {
    // Replace 'your_number' with your actual WhatsApp number including country code
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank");
  };

  return <FaWhatsapp onClick={openWhatsApp} className="cursor-pointer iconsOpacity" />;
};

export default WhatsAppButton;
