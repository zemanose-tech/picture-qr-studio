import { InquiryModal } from "@/components/InquiryModal";
import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { getContactHelpTranslation } from "@/lib/translations";

const ContactHelpSection = () => {
  const { language } = useLanguage();
  const contactCopy = getContactHelpTranslation(language);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const renderStackedLabel = (text: string) =>
    text.split("\n").map((line, index, arr) => (
      <span key={`${line}-${index}`}>
        {line}
        {index !== arr.length - 1 && <br />}
      </span>
    ));

  return (
    <section className="bg-white px-6 py-16">
      {/* Student Athlete Portrait Placeholder */}

      <h2 className="text-4xl font-bold text-primary mb-12 text-center">
        {contactCopy.title}
      </h2>

      <div className="flex justify-center space-x-12">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-center hover:opacity-80 transition-opacity"
        >
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary text-xs">✉️</span>
            </div>
          </div>
          <p className="text-primary font-bold text-sm">{renderStackedLabel(contactCopy.consultationCta)}</p>
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
          <p className="text-primary font-bold text-sm">{renderStackedLabel(contactCopy.chatCta)}</p>
        </a>
      </div>
      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        inquiryType={contactCopy.inquiryType}
      />
    </section>
  );
};

export default ContactHelpSection;
