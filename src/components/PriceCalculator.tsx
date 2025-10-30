import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign, Percent, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";
import { getPriceCalculatorTranslation } from "@/lib/translations";

const PriceCalculator = () => {
  const { language } = useLanguage();
  const calculatorCopy = getPriceCalculatorTranslation(language);

  const [selectedSport, setSelectedSport] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [duration, setDuration] = useState([12]);
  const [showResults, setShowResults] = useState(false);

  const calculatePrice = () => {
    const sport = calculatorCopy.sports.find((item) => item.id === selectedSport);
    const program = calculatorCopy.programs.find((item) => item.id === selectedProgram);
    const region = calculatorCopy.regions.find((item) => item.id === selectedRegion);

    if (!sport || !program || !region) {
      return null;
    }

    const durationMonths = duration[0];
    let totalPrice = sport.basePrice * program.multiplier;

    if (selectedProgram !== "boarding") {
      totalPrice = (totalPrice / 12) * durationMonths;
    }

    const discountAmount = totalPrice * (region.discount / 100);
    const finalPrice = totalPrice - discountAmount;

    return {
      originalPrice: totalPrice,
      discountAmount,
      finalPrice,
      discountPercent: region.discount,
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const resetCalculator = () => {
    setSelectedSport("");
    setSelectedProgram("");
    setSelectedRegion("");
    setDuration([12]);
    setShowResults(false);
  };

  const priceResult = calculatePrice();
  const canCalculate = Boolean(priceResult);
  const durationUnit =
    duration[0] === 1 ? calculatorCopy.duration.unitSingular : calculatorCopy.duration.unitPlural;
  const durationLabel = calculatorCopy.duration.label
    .replace("{{count}}", String(duration[0]))
    .replace("{{unit}}", durationUnit);

  const formatCurrency = (value: number) => value.toLocaleString();

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-img-blue/10 rounded-full flex items-center justify-center">
            <Calculator className="w-6 h-6 text-img-blue" />
          </div>
        </div>
        <CardTitle className="text-2xl text-img-blue">{calculatorCopy.title}</CardTitle>
        <CardDescription>{calculatorCopy.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">{calculatorCopy.fields.sportLabel}</label>
              <Select value={selectedSport} onValueChange={setSelectedSport}>
                <SelectTrigger>
                  <SelectValue placeholder={calculatorCopy.fields.sportPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {calculatorCopy.sports.map((sport) => (
                    <SelectItem key={sport.id} value={sport.id}>
                      {sport.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">{calculatorCopy.fields.programLabel}</label>
              <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                <SelectTrigger>
                  <SelectValue placeholder={calculatorCopy.fields.programPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {calculatorCopy.programs.map((program) => (
                    <SelectItem key={program.id} value={program.id}>
                      {program.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">{calculatorCopy.fields.regionLabel}</label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder={calculatorCopy.fields.regionPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {calculatorCopy.regions.map((region) => (
                    <SelectItem key={region.id} value={region.id}>
                      {calculatorCopy.fields.regionOption
                        .replace("{{name}}", region.name)
                        .replace("{{discount}}", String(region.discount))}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedProgram && selectedProgram !== "boarding" && (
              <div>
                <label className="text-sm font-medium mb-2 block">{durationLabel}</label>
                <Slider
                  value={duration}
                  onValueChange={setDuration}
                  min={1}
                  max={12}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{calculatorCopy.duration.minLabel}</span>
                  <span>{calculatorCopy.duration.maxLabel}</span>
                </div>
              </div>
            )}

            <Button
              onClick={handleCalculate}
              disabled={!selectedSport || !selectedProgram || !selectedRegion}
              className="w-full bg-img-blue hover:bg-img-blue-dark"
            >
              <Calculator className="w-4 h-4 mr-2" />
              {calculatorCopy.buttons.calculate}
            </Button>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            {showResults && canCalculate && priceResult ? (
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 mb-4">
                  <Star className="w-4 h-4 mr-1" />
                  {calculatorCopy.results.badge}
                </Badge>

                <Card className="border-2 border-img-blue/20">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{calculatorCopy.results.baseLabel}</span>
                        <span className="font-medium">${formatCurrency(priceResult.originalPrice)}</span>
                      </div>

                      <div className="flex justify-between items-center text-green-600">
                        <span className="text-sm flex items-center">
                          <Percent className="w-4 h-4 mr-1" />
                          {calculatorCopy.results.discountLabel.replace(
                            "{{percent}}",
                            String(priceResult.discountPercent)
                          )}
                        </span>
                        <span className="font-medium">-${formatCurrency(priceResult.discountAmount)}</span>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-img-blue flex items-center">
                            <DollarSign className="w-5 h-5 mr-1" />
                            {calculatorCopy.results.finalLabel}
                          </span>
                          <span className="text-2xl font-bold text-img-blue">
                            ${formatCurrency(priceResult.finalPrice)}
                          </span>
                        </div>
                      </div>

                      <div className="bg-img-blue/5 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>{calculatorCopy.results.includesTitle}</strong>
                        </p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {calculatorCopy.results.includesItems.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-3">
                  <Button onClick={resetCalculator} variant="outline" className="flex-1">
                    {calculatorCopy.buttons.reset}
                  </Button>
                  <Link to="/contact" className="flex-1">
                    <Button className="w-full bg-img-blue hover:bg-img-blue-dark">
                      {calculatorCopy.buttons.contact}
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-12">
                  <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">{calculatorCopy.emptyState}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {showResults && (
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">{calculatorCopy.note}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;
