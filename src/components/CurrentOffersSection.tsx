import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { getCurrentOffersTranslation } from "@/lib/translations";

const CurrentOffersSection = () => {
  const { language } = useLanguage();
  const currentOffersCopy = getCurrentOffersTranslation(language);

  return (
    <section className="bg-white px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-primary mb-4">
          {currentOffersCopy.title}
        </h2>
      </div>

      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">{currentOffersCopy.card.heading}</h3>
              <h4 className="text-xl font-bold">{currentOffersCopy.card.subheading}</h4>
            </div>
            {/* Image placeholder */}
            <div className="w-24 h-24 bg-gray-400 rounded"></div>
          </div>

          <p className="text-lg mb-6">{currentOffersCopy.card.description}</p>

          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">
            {currentOffersCopy.card.button}
          </Button>
        </div>
      </Card>

      {/* Additional image placeholder */}
      <div className="mt-8">
        <div className="w-full h-64 bg-gray-400 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-600">
            <p className="text-sm">{currentOffersCopy.placeholder.title}</p>
            <p className="text-xs">{currentOffersCopy.placeholder.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentOffersSection;