import { useLanguage } from "@/hooks/use-language";
import { getAcademicsTranslation } from "@/lib/translations";

const AcademicsSection = () => {
  const { language } = useLanguage();
  const academicsCopy = getAcademicsTranslation(language);

  return (
    <section className="bg-white px-6 py-16">
      {/* Image Placeholder */}
      <div className="bg-gray-400 h-64 mb-8 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p className="text-sm">{academicsCopy.placeholderTitle}</p>
          <p className="text-xs">{academicsCopy.placeholderSubtitle}</p>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-primary mb-8">{academicsCopy.title}</h2>

      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        {academicsCopy.description}
      </p>

      <div className="flex flex-col gap-4">
        <button className="bg-gray-200 text-primary px-8 py-4 rounded-full font-semibold">
          {academicsCopy.buttons.learnMore}
        </button>
        <button className="bg-gray-200 text-primary px-8 py-4 rounded-full font-semibold">
          {academicsCopy.buttons.viewProfile}
        </button>
      </div>
    </section>
  );
};

export default AcademicsSection;
