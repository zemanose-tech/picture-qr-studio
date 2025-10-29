import { useLanguage } from "@/hooks/use-language";
import { getPersonalDevelopmentTranslation } from "@/lib/translations";

const PersonalDevelopmentSection = () => {
  const { language } = useLanguage();
  const personalDevelopmentCopy = getPersonalDevelopmentTranslation(language);
  return (
    <section className="bg-white px-6 py-16">
      {/* Leadership Image Placeholder */}
      <div className="bg-gray-400 h-64 mb-8 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p className="text-sm">Leadership Workshop Placeholder</p>
          <p className="text-xs">(Coach teaching leadership)</p>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-primary mb-8">
        {personalDevelopmentCopy.titleLines.map((line, index) => (
          <span key={`${line}-${index}`}>
            {line}
            {index !== personalDevelopmentCopy.titleLines.length - 1 && <br />}
          </span>
        ))}
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        {personalDevelopmentCopy.descriptionSegments.map((segment, index) => (
          <span key={`paragraph-${index}`}>
            {segment.map((token, tokenIndex) => {
              if (typeof token === "string") {
                return <span key={`token-${index}-${tokenIndex}`}>{token}</span>;
              }

              return (
                <span
                  key={`token-${index}-${tokenIndex}`}
                  className="underline"
                >
                  {token.text}
                </span>
              );
            })}
            {index !== personalDevelopmentCopy.descriptionSegments.length - 1 && (
              <>
                <br />
                <br />
              </>
            )}
          </span>
        ))}
      </p>

      <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold">
        {personalDevelopmentCopy.cta}
      </button>
    </section>
  );
};

export default PersonalDevelopmentSection;