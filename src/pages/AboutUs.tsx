import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import imgLogo from "@/assets/IMG_Gladys_white_transparent.png";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";
import { ArrowLeft, Users, Trophy, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryModal } from "@/components/InquiryModal";
import { useLanguage } from "@/hooks/use-language";
import { getAboutUsTranslation } from "@/lib/translations";

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
  const aboutCopy = getAboutUsTranslation(language);
  const internadoImages = Array.from({
    length: 14
  }, (_, i) => ({
    id: i + 1,
    image: `/carousel_images/internado_carousel/${i + 1}.jpg`,
    alt: `IMG Academy Internado ${i + 1}`
  }));
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      <br />
      <br />
      <br />
      <main>
        <div className="mb-6 ml-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {aboutCopy.backLabel}
          </Link>
        </div>
      

        {/* Hero Title Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center justify-center space-x-12">
              <img 
                src={imgLogo} 
                alt="IMG Academy - Gladys de Loaiza Authorized Representative" 
                className="w-44 h-44 object-contain"
              />
              <span>{aboutCopy.heroTitle}</span>
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              {aboutCopy.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

    </div>;
};

export default AboutUs;
