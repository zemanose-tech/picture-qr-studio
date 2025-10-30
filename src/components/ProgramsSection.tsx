import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, GraduationCap, Calendar, MapPin } from "lucide-react";
import { InquiryModal } from "@/components/InquiryModal";
import { useLanguage } from "@/hooks/use-language";
import { getProgramsTranslation } from "@/lib/translations";

const ProgramsSection = () => {
  const { language } = useLanguage();
  const programsCopy = getProgramsTranslation(language);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

  return (
    <section id="programas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-img-gray text-primary">{programsCopy.badge}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {programsCopy.heading.prefix}{" "}
            <span className="text-primary">{programsCopy.heading.highlight}</span>
            {programsCopy.heading.suffix && <>{" "}{programsCopy.heading.suffix}</>}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {programsCopy.description}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programsCopy.cards.map((program, index) => (
            <Card
              key={`${program.title}-${index}`}
              className="relative shadow-card hover:shadow-elegant transition-shadow duration-300 border-0"
            >
              {program.highlight && (
                <div className="absolute -top-3 left-6">
                  <Badge className="bg-accent text-accent-foreground">{program.highlight}</Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Trophy className="w-8 h-8 text-primary" />
                  <Badge variant="outline" className="text-sm">
                    {program.age}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{program.title}</CardTitle>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Duration */}
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{program.duration}</span>
                  </div>

                  {/* Sports Available */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{programsCopy.labels.sports}</h4>
                    <div className="flex flex-wrap gap-1">
                      {program.sports.map((sport, sportIndex) => (
                        <Badge key={`${program.title}-sport-${sportIndex}`} variant="secondary" className="text-xs">
                          {sport}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{programsCopy.labels.includes}</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, featureIndex) => (
                        <li key={`${program.title}-feature-${featureIndex}`} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full mt-6 bg-primary hover:bg-primary/90"
                    onClick={() => {
                      setSelectedProgram(program.title);
                      setIsModalOpen(true);
                    }}
                  >
                    {programsCopy.ctaButton}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-img-gray rounded-lg p-8">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-foreground">{programsCopy.bottomCta.heading}</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {programsCopy.bottomCta.description}
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() => {
              setSelectedProgram(programsCopy.customInquiryLabel);
              setIsModalOpen(true);
            }}
          >
            <MapPin className="w-5 h-5 mr-2" />
            {programsCopy.bottomCta.button}
          </Button>
        </div>
      </div>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        inquiryType={`${programsCopy.inquiryPrefix} ${selectedProgram}`.trim()}
      />
    </section>
  );
};

export default ProgramsSection;
