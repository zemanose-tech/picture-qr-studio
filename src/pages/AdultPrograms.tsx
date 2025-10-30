import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { InquiryModal } from "@/components/InquiryModal";
import SportImageCarousel from "@/components/SportImageCarousel";
import { useLanguage } from "@/hooks/use-language";
import { getAdultProgramsTranslation } from "@/lib/translations";

const AdultPrograms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
  const adultCopy = getAdultProgramsTranslation(language);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {adultCopy.hero.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              {adultCopy.hero.subtitle}
            </p>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-8">
          <SportImageCarousel
            sportName={adultCopy.carouselName}
            altPrefix={adultCopy.carouselAltPrefix}
          />
        </section>

        {/* Program Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {adultCopy.description.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("**") && paragraph.includes(":**")) {
                  const title = paragraph.replace(/\*\*/g, "").replace(":", "");
                  return (
                    <h3 key={index} className="text-2xl font-bold text-primary mt-8 mb-4">
                      {title}
                    </h3>
                  );
                }

                if (paragraph.startsWith("• **")) {
                  return (
                    <div key={index} className="mb-4">
                      {paragraph.split("\n").map((line, lineIndex) => {
                        if (line.startsWith("• **")) {
                          const parts = line.split("**: ");
                          const title = parts[0].replace("• **", "");
                          const content = parts[1] || "";
                          return (
                            <div key={lineIndex} className="mb-3">
                              <span className="font-bold text-primary">• {title}: </span>
                              <span className="text-gray-700">{content}</span>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  );
                }

                if (paragraph.startsWith("- ")) {
                  return (
                    <div key={index} className="ml-4 mb-2">
                      {paragraph.split("\n").map((line, lineIndex) => {
                        if (line.startsWith("- ")) {
                          return (
                            <div key={lineIndex} className="mb-1">
                              <span className="text-primary">• </span>
                              <span className="text-gray-700">{line.replace("- ", "")}</span>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  );
                }

                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </section>

        {/* Inquiry Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              {adultCopy.inquiry.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {adultCopy.inquiry.description}
            </p>
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              {adultCopy.inquiry.button}
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        inquiryType={adultCopy.inquiry.inquiryType}
      />
    </div>
  );
};

export default AdultPrograms;
