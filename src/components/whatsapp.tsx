import whatsappImage from "./../assets/images/whatsapp-svg.svg";
import { motion } from "framer-motion";

export const WhatsappLink = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 bg-white p-2 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
    >
      <a
        href="https://wa.me/2347010698493?text=Hi%20there!%20I%20saw%20your%20website%20and%20I'm%20interested."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappImage} alt="Chat on WhatsApp" className="w-15 " />
      </a>
    </motion.div>
  );
};
