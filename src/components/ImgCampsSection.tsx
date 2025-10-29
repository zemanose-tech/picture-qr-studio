import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";
import { useLanguage } from "@/hooks/use-language";
import { getImgCampsTranslation } from "@/lib/translations";

const ImgCampsSection = () => {
  const { language } = useLanguage();
  const campsCopy = getImgCampsTranslation(language);
  const campsCarouselImages = Array.from({
    length: 12
  }, (_, i) => ({
    id: i + 1,
    image: `/carousel_images/camps_carousel/${i + 1}.${i === 0 || i === 9 ? 'JPG' : 'jpg'}`,
    alt: `Camps Image ${i + 1}`
  }));
  const campImages = campsCopy.carouselLabels;
  return <section className="bg-background px-6 py-16">
      <AutoScrollCarousel images={campsCarouselImages} height="h-80" delay={3000} />
      <div className="mb-8">
        <Carousel className="w-full">
          <CarouselContent>
            {campImages.map(image => <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                
              </CarouselItem>)}
          </CarouselContent>
          
          
        </Carousel>
      </div>

      <h2 className="text-4xl font-bold text-primary mb-8">{campsCopy.heading}</h2>

      <p className="text-foreground text-lg leading-relaxed mb-8">{campsCopy.description}</p>

      <Button asChild>
        <Link to="/camps">{campsCopy.button}</Link>
      </Button>
    </section>;
};
export default ImgCampsSection;