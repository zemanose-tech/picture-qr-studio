import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";
import { Button } from "@/components/ui/button";
import { InquiryModal } from "@/components/InquiryModal";
import { useLanguage } from "@/hooks/use-language";
import { getBoardingPageTranslation } from "@/lib/translations";
const Boarding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
  const boardingCopy = getBoardingPageTranslation(language);
  const internadoImages = Array.from({
    length: 14,
  }, (_, i) => ({
    id: i + 1,
    image: `/carousel_images/internado_carousel/${i + 1}.jpg`,
    alt: `${boardingCopy.carouselAltPrefix} ${i + 1}`,
  }));
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      <br />
      <br />
      <main>
        {/* Internado Carousel Header */}
        <section className="w-full overflow-hidden">
          <AutoScrollCarousel images={internadoImages} height="h-96" />
        </section>

        {/* Hero Title Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {boardingCopy.hero.lines[0]} <br />
              {boardingCopy.hero.lines[1]}
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              {boardingCopy.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-2xl font-bold text-center text-primary">
                  {boardingCopy.stat.prefix}{" "}
                  <span className="text-3xl text-primary">{boardingCopy.stat.value}</span>
                  {boardingCopy.stat.suffix}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              {boardingCopy.inquiry.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {boardingCopy.inquiry.description}
            </p>
            <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-primary hover:bg-primary/90 text-white px-8">
              {boardingCopy.inquiry.button}
            </Button>
          </div>
        </section>
      </main>
      <Footer />

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        inquiryType={boardingCopy.inquiry.inquiryType}
      />
    </div>;
};
export default Boarding;