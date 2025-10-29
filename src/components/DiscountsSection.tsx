import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Percent, Gift, Users, Clock, Star, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { getDiscountsTranslation } from "@/lib/translations";

const DiscountsSection = () => {
  const { language } = useLanguage();
  const discountsCopy = getDiscountsTranslation(language);

  return (
    <section id="descuentos" className="py-20 bg-img-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <Gift className="w-4 h-4 mr-2" />
            {discountsCopy.badge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {discountsCopy.heading.prefix && (
              <>
                {discountsCopy.heading.prefix}{" "}
              </>
            )}
            <span className="text-primary">{discountsCopy.heading.highlight}</span>
            <br />
            {discountsCopy.heading.suffix}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {discountsCopy.description}
          </p>
        </div>

        {/* Discount Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {discountsCopy.offers.map((offer, index) => (
            <Card key={index} className="relative overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 border-0">
              {/* Background Pattern */}
              <div className={`absolute inset-0 ${offer.bgColor} opacity-5`}></div>

              {/* Highlight Badge */}
              {offer.highlight && (
                <div className="absolute -top-3 left-6 z-10">
                  <Badge className="bg-accent text-accent-foreground">{offer.highlight}</Badge>
                </div>
              )}

              <CardHeader className="relative pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Percent className="w-8 h-8 text-primary" />
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{offer.discount}</div>
                    <div className="text-sm text-muted-foreground">OFF</div>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{offer.title}</CardTitle>
                <CardDescription className="text-base">{offer.description}</CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <div className="space-y-4">
                  {/* Valid Until */}
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {discountsCopy.labels.validUntil} {offer.validUntil}
                    </span>
                  </div>

                  {/* Conditions */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      {discountsCopy.labels.conditions}
                    </h4>
                    <ul className="space-y-1">
                      {offer.conditions.map((condition, conditionIndex) => (
                        <li key={conditionIndex} className="text-xs text-muted-foreground flex items-start">
                          <CheckCircle className="w-3 h-3 mr-2 mt-0.5 text-accent flex-shrink-0" />
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                    {discountsCopy.buttons.apply}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-background rounded-lg p-8 shadow-card">
          <div className="text-center mb-8">
            <Star className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-4">
              {discountsCopy.benefits.title}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {discountsCopy.benefits.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {discountsCopy.benefits.items.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Users className="w-5 h-5 mr-2" />
              {discountsCopy.benefits.ctaButton}
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 bg-gradient-hero rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            {discountsCopy.finalCta.title}
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            {discountsCopy.finalCta.description}
          </p>
          <Button variant="secondary" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            {discountsCopy.finalCta.button}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscountsSection;