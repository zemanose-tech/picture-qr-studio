import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import tennisImage from "@/assets/tennis-facilities.jpg";
import golfImage from "@/assets/golf-facilities.jpg";
import footballImage from "@/assets/football-facilities.jpg";
import basketballImage from "@/assets/basketball-facilities.jpg";
import baseballImage from "@/assets/baseball-facilities.jpg";
import soccerImage from "@/assets/soccer-facilities.jpg";
import { useLanguage } from "@/hooks/use-language";
import { getSportsCarouselTranslation } from "@/lib/translations";

const SportsCarouselSection = () => {
  const { language } = useLanguage();
  const sportsCarouselCopy = getSportsCarouselTranslation(language);
  const featuredSports = sportsCarouselCopy.sports.map((sport) => ({
    ...sport,
    image:
      sport.id === "tennis"
        ? tennisImage
        : sport.id === "golf"
        ? golfImage
        : sport.id === "football"
        ? footballImage
        : sport.id === "basketball"
        ? basketballImage
        : sport.id === "baseball"
        ? baseballImage
        : soccerImage,
  }));

  return (
    <section className="bg-white px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-primary mb-4">
          {sportsCarouselCopy.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {sportsCarouselCopy.description}
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
            {featuredSports.map((sport) => (
              <CarouselItem key={sport.id} className="pl-1 sm:pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={sport.image} 
                      alt={sport.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-2">{sport.name}</h3>
                      {/*<p className="text-sm text-white/90 line-clamp-2">{sport.description}</p>*/}
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>

      <div className="text-center mt-8">
        <Link to="/sports">
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold text-lg">
            {sportsCarouselCopy.button}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default SportsCarouselSection;