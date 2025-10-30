import { useLanguage } from "@/hooks/use-language";
import { getAcademicExcellenceTranslation } from "@/lib/translations";

const AcademicExcellenceSection = () => {
  const { language } = useLanguage();
  const academicCopy = getAcademicExcellenceTranslation(language);
  const highlightIcons = ["🎓", "💡", "📚"];
  return (
    <section className="bg-primary text-primary-foreground px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6">{academicCopy.title}</h2>
          <div className="bg-primary-foreground/10 rounded-lg p-8">
            {academicCopy.paragraphs.map((paragraph, index) => (
              <p key={`academic-paragraph-${index}`} className="text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {academicCopy.highlights.map((highlight, index) => (
            <div key={`academic-highlight-${highlight.title}`} className="bg-primary-foreground/10 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">{highlightIcons[index] ?? ""}</div>
              <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
              <p className="text-sm opacity-90">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicExcellenceSection;