import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";
import { getAthleticsTranslation } from "@/lib/translations";

const AthleticsSection = () => {
  const { language } = useLanguage();
  const athleticsCopy = getAthleticsTranslation(language);

  return (
    <section className="bg-background px-6 py-16">
      <div className="bg-muted h-64 mb-8 flex items-center justify-center rounded-lg">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">{athleticsCopy.placeholderTitle}</p>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-primary mb-8">{athleticsCopy.title}</h2>
      <p className="text-foreground text-lg leading-relaxed mb-8">
        {athleticsCopy.description}
      </p>
      <Button asChild>
        <Link to="/sports">{athleticsCopy.cta}</Link>
      </Button>
    </section>
  );
};

export default AthleticsSection;
