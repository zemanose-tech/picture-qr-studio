import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { getCampComparisonTranslation } from "@/lib/translations";

const columnHeaders = [
  {
    containerClass: "bg-gray-100",
    barClass: "bg-gray-300",
    textClass: "text-gray-700",
    lines: ["IMG ACADEMY", "CAMP"],
  },
  {
    containerClass: "bg-blue-400",
    barClass: "bg-blue-500",
    textClass: "text-white",
    lines: ["TOTAL ATHLETE", "CAMP"],
  },
  {
    containerClass: "bg-blue-600",
    barClass: "bg-blue-700",
    textClass: "text-white",
    lines: ["BREAKTHROUGH", "CAMP"],
  },
  {
    containerClass: "bg-lime-400",
    barClass: "bg-lime-500",
    textClass: "text-gray-800",
    lines: ["GAME CHANGER", "CAMP"],
  },
];

const columnBackgrounds = ["bg-gray-100", "bg-blue-400", "bg-blue-600", "bg-lime-400"];
const columnIconColors = ["text-blue-600", "text-white", "text-white", "text-gray-800"];

const CampComparisonSection = () => {
  const { language } = useLanguage();
  const comparisonCopy = getCampComparisonTranslation(language);

  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Introduction Text */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {comparisonCopy.intro}
          </p>
        </div>

        {/* Help Choosing Section */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardContent className="text-center py-8">
            <h2 className="text-3xl font-bold text-primary mb-4">{comparisonCopy.helpTitle}</h2>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header */}
              <div className="grid grid-cols-5 gap-0">
                <div className="p-4" />
                {columnHeaders.map((column, index) => (
                  <div key={index} className={`text-center ${column.containerClass} p-4`}>
                    <div className={`${column.barClass} h-3 mb-3 rounded`} />
                    <h3 className={`font-bold text-sm ${column.textClass}`}>
                      {column.lines.map((line, lineIndex) => (
                        <span key={line}>
                          {line}
                          {lineIndex < column.lines.length - 1 && <br />}
                        </span>
                      ))}
                    </h3>
                  </div>
                ))}
              </div>

              {comparisonCopy.sections.map((section, sectionIndex) =>
                section.rows.map((row, rowIndex) => {
                  const isHeader = row.kind === "header";
                  const iconSize = isHeader ? "w-6 h-6" : "w-5 h-5";

                  return (
                    <div key={`${sectionIndex}-${rowIndex}`} className="grid grid-cols-5 gap-0 border-t">
                      <div
                        className={
                          isHeader
                            ? "flex items-center p-4 bg-gray-50"
                            : "p-4 text-sm text-gray-700 bg-gray-50"
                        }
                      >
                        {isHeader ? (
                          <div>
                            <div className="font-bold text-blue-600 text-sm mb-1">{row.title}</div>
                            {row.subtitle && (
                              <div className="text-xs text-gray-600">{row.subtitle}</div>
                            )}
                          </div>
                        ) : (
                          row.label
                        )}
                      </div>
                      {row.checks.map((hasCheck, columnIndex) => (
                        <div
                          key={columnIndex}
                          className={`${columnBackgrounds[columnIndex]} text-center p-4 flex items-center justify-center`}
                        >
                          {hasCheck ? (
                            <Check
                              className={`${iconSize} ${columnIconColors[columnIndex]}`}
                            />
                          ) : null}
                        </div>
                      ))}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Pricing Blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* IMG Academy Camp */}

          {/* Total Athlete Camp */}

          {/* Breakthrough Camp */}

          {/* Game Changer Camp */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-lime-400 overflow-hidden" />
        </div>
      </div>
    </section>
  );
};

export default CampComparisonSection;
