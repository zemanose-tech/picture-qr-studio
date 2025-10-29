import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { getLoyaltyBenefitsTranslation } from "@/lib/translations";

const LoyaltyBenefitsSection = () => {
  const { language } = useLanguage();
  const loyaltyCopy = getLoyaltyBenefitsTranslation(language);

  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {loyaltyCopy.badge}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-primary">
            {loyaltyCopy.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {loyaltyCopy.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {loyaltyCopy.cards.map((card, index) => (
            <Card key={index} className="h-full border-border/60">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>{card.description}</p>
                {card.items && (
                  <ul className="space-y-2 list-disc list-inside text-sm">
                    {card.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          {loyaltyCopy.note}
        </p>
      </div>
    </section>
  );
};

export default LoyaltyBenefitsSection;
