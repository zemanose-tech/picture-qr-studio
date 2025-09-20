import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InquiryModal } from "@/components/InquiryModal";
import { useState } from "react";

const ContactHelpSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <section className="bg-white px-6 py-16">
      {/* Student Athlete Portrait Placeholder */}
      

      <h2 className="text-4xl font-bold text-primary mb-12 text-center">
        ¿NECESITAS MÁS AYUDA?
      </h2>

      <div className="flex justify-center space-x-12">
        <button onClick={() => setIsModalOpen(true)} className="text-center hover:opacity-80 transition-opacity">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary text-xs">✉️</span>
            </div>
          </div>
          <p className="text-primary font-bold text-sm">SOLICITAR<br />CONSULTA</p>
        </button>

        <a 
          href="https://wa.me/34619463416" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-center hover:opacity-80 transition-opacity"
        >
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary text-xs">💬</span>
            </div>
          </div>
          <p className="text-primary font-bold text-sm">CHATEAR<br />CON NOSOTROS</p>
        </a>
      </div>
      {/* Inquiry Modal */}
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} inquiryType="Contacto General" />
    </section>;
};
export default ContactHelpSection;