import { useLanguage } from "@/hooks/use-language";
import { getSportsEducationTranslation } from "@/lib/translations";

const SportsEducationSection = () => {
  const { language } = useLanguage();
  const sportsEducationCopy = getSportsEducationTranslation(language);

  return (
    <section className="bg-primary text-white px-6 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">
        {sportsEducationCopy.titleLines[0]}
        <br />
        {sportsEducationCopy.titleLines[1]}
      </h2>

      <p className="text-lg leading-relaxed mb-12">{sportsEducationCopy.description}</p>

      {/* Award Badge Placeholder */}
      <div className="flex justify-center"></div>
    </section>
  );
};

export default SportsEducationSection;