import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "522482084481";
  const message = "Hola, me gustaría agendar una cita en Rian Automotriz.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="whatsapp-tooltip">¡Agenda por WhatsApp!</span>
    </a>
  );
};

export default WhatsAppButton;
