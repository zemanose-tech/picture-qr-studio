import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceCalculator from "@/components/PriceCalculator";
import { Link } from "react-router-dom";
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import tennisImage from "@/assets/tennis-facilities.jpg";
import golfImage from "@/assets/golf-facilities.jpg";
import footballImage from "@/assets/football-facilities.jpg";
import basketballImage from "@/assets/basketball-facilities.jpg";
import baseballImage from "@/assets/baseball-facilities.jpg";
import soccerImage from "@/assets/soccer-facilities.jpg";
import lacrosseImage from "@/assets/lacrosse-facilities.jpg";
import trackImage from "@/assets/track-facilities.jpg";
import volleyballImage from "@/assets/volleyball-facilities.jpg";
import performanceImage from "@/assets/performance-facilities.jpg";
import softballImage from "@/assets/softball-facilities.jpg";
import adultsImage from "@/assets/adults-facilities.jpg";
import { useLanguage } from "@/hooks/use-language";
import { getSportsPageTranslation } from "@/lib/translations";

const sportImages: Record<string, string> = {
  tennis: tennisImage,
  golf: golfImage,
  soccer: soccerImage,
  basketball: basketballImage,
  volleyball: volleyballImage,
  track: trackImage,
  performance: performanceImage,
  football: footballImage,
  baseball: baseballImage,
  softball: softballImage,
  lacrosse: lacrosseImage,
  adults: adultsImage,
};
const Sports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
  const sportsCopy = getSportsPageTranslation(language);

  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {sportsCopy.hero.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {sportsCopy.hero.description}
            </p>
            
            {/* Sport Selection Dropdown Style */}
            <div className="mt-8 max-w-2xl mx-auto">
              
            </div>
          </div>
        </section>

        {/* Sports Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sportsCopy.sports.map(sport => {
                const image = sportImages[sport.id];
                const href = sport.id === "adults" ? "/adult-programs" : `/sport/${sport.id}`;
                return <Card key={sport.id} className="group hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={image}
                      alt={sport.imageAlt}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary text-white">
                      {sport.name}
                    </Badge>
                  </div>
                    <CardHeader>
                      <CardTitle className="text-primary">{sport.name}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {sport.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>

                    <Link to={href}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        {sport.buttonLabel}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>;
              })}
            </div>
          </div>
        </section>

        {/* Price Calculator Section */}
        

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-img-blue to-img-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {sportsCopy.cta.title}
            </h2>
            <p className="text-xl text-img-white/90 mb-8 max-w-2xl mx-auto">
              {sportsCopy.cta.description}
            </p>
            <Button
              size="lg"
              className="bg-img-white text-img-blue hover:bg-img-white/90 font-bold px-8"
              onClick={() => setIsModalOpen(true)}
            >
              {sportsCopy.cta.button}
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>;
};
export default Sports;