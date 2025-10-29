import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";
import { useLanguage } from "@/hooks/use-language";
import { getBoardingTranslation } from "@/lib/translations";

const BoardingSchoolSection = () => {
  const { language } = useLanguage();
  const boardingCopy = getBoardingTranslation(language);
  const internadoImages = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    image: `/carousel_images/internado_carousel/${i + 1}.jpg`,
    alt: `${boardingCopy.carouselAltPrefix} ${i + 1}`,
  }));

  return (
    <section className="bg-muted px-6 py-16">
      <div className="mb-8">
        <AutoScrollCarousel images={internadoImages} height="h-80" />
      </div>

      <h2 className="text-4xl font-bold text-primary mb-8">{boardingCopy.title}</h2>

      <p className="text-foreground text-lg leading-relaxed mb-8">{boardingCopy.description}</p>

      <Button asChild>
        <Link to="/boarding">{boardingCopy.cta}</Link>
      </Button>
    </section>
  );
};

export default BoardingSchoolSection;
