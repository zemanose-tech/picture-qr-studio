import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import SportImageCarousel from "@/components/SportImageCarousel";
import { InquiryModal } from "@/components/InquiryModal";
import { useLanguage } from "@/hooks/use-language";
import { getSportDetailTranslation } from "@/lib/translations";
const SportDetail = () => {
  const { sportId } = useParams<{ sportId: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState("");
  const { language } = useLanguage();
  const sportCopy = getSportDetailTranslation(language);
  console.log("SportId from URL:", sportId);
  console.log("Available sports:", Object.keys(sportCopy.programs));
  const sport = sportId
    ? sportCopy.programs[sportId as keyof typeof sportCopy.programs]
    : undefined;
  console.log("Found sport:", sport);
  if (!sportId || !sport) {
    const message = sportCopy.notFound.replace(
      "{{sportId}}",
      sportId ?? ""
    );
    return <div>{message}</div>;
  }

  const isVolleyball = sportId === "volleyball";

  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Image Carousel Hero Section */}
        {!isVolleyball && (
        <section className="relative py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link
                to="/sports"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {sportCopy.backLabel}
              </Link>
            </div>
            <SportImageCarousel
              sportName={sport.name}
              altPrefix={sport.carouselAltPrefix}
            />
          </div>
        </section>
        )}
        {isVolleyball && (
        <section className="relative overflow-hidden">
          <div className="aspect-video w-full">
            <div className="mb-6">
              <Link
                to="/sports"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {sportCopy.backLabel}
              </Link>
            </div>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3J_aX6At-fQ?autoplay=1&mute=0&loop=1&controls=0&playlist=3J_aX6At-fQ&modestbranding=1&rel=0&showinfo=0"
              title={sport.videoTitle ?? "IMG Academy Volleyball"}
              allow="autoplay; encrypted-media"
              allowFullScreen/>
          </div>
        </section>
        )}


        {/* Main Hero Section */}
        <section className="relative py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize">
                {sport.name}
              </h1>
              
              
            </div>
            
          </div>
        </div>
      </section>

        {/* Sport Description Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div className="text-foreground leading-relaxed space-y-6">
                  {sport.description.split('\n\n').map((paragraph, index) => {
                    // Check if paragraph contains bullet points
                    if (paragraph.includes('•')) {
                      const lines = paragraph.split('\n');
                      const textBeforeBullets = lines.filter(line => !line.trim().startsWith('•')).join('\n');
                      const bulletPoints = lines.filter(line => line.trim().startsWith('•'));
                      
                      return (
                        <div key={index}>
                          {textBeforeBullets && (
                            <p className="text-lg text-muted-foreground mb-4">
                              {textBeforeBullets}
                            </p>
                          )}
                          <ul className="space-y-2 ml-4">
                            {bulletPoints.map((bullet, bulletIndex) => (
                              <li key={bulletIndex} className="text-lg text-muted-foreground flex items-start">
                                <span className="text-primary mr-3">•</span>
                                <span>{bullet.replace('•', '').trim()}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    
                    return (
                      <p key={index} className="text-lg text-muted-foreground">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                {sportCopy.inquiry.titleTemplate.replace("{{sport}}", sport.name)}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {sportCopy.inquiry.description}
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
                onClick={() => {
                  setInquiryType(
                    sportCopy.inquiry.inquiryTypeTemplate.replace(
                      "{{sport}}",
                      sport.name
                    )
                  );
                  setIsModalOpen(true);
                }}
              >
                {sportCopy.inquiry.button}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} inquiryType={inquiryType} />

      <Footer />
    </div>;
};
export default SportDetail;