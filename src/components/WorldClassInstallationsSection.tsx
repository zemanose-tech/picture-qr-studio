import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";
import { useLanguage } from "@/hooks/use-language";
import { getInstallationsTranslation } from "@/lib/translations";

const WorldClassInstallationsSection = () => {
  const { language } = useLanguage();
  const installationsCopy = getInstallationsTranslation(language);
  const instalacionesImages = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    image: `/carousel_images/instalaciones_carousel/${i + 1}.jpg`,
    alt: `${installationsCopy.carouselAltPrefix} ${i + 1}`,
  }));

  return (
    <section className="bg-muted px-6 py-16">
      <div className="mb-8">
        <AutoScrollCarousel images={instalacionesImages} height="h-80" />
      </div>

      <h2 className="text-4xl font-bold text-primary mb-8">{installationsCopy.title}</h2>

      <p className="text-foreground text-lg leading-relaxed mb-8">
        {installationsCopy.description}
      </p>

      <Button asChild>
        <Link to="/facilities">{installationsCopy.cta}</Link>
      </Button>
    </section>
  );
};

export default WorldClassInstallationsSection;