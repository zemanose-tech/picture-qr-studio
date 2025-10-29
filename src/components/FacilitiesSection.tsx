import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Play, Camera, Zap } from "lucide-react";
import facilitiesImage from "@/assets/facilities.jpg";
import { useLanguage } from "@/hooks/use-language";
import { getFacilitiesTranslation } from "@/lib/translations";

const FacilitiesSection = () => {
  const { language } = useLanguage();
  const facilitiesCopy = getFacilitiesTranslation(language);

  return (
    <section id="instalaciones" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-img-gray text-primary">
            <MapPin className="w-4 h-4 mr-2" />
            {facilitiesCopy.badge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {facilitiesCopy.heading.pre}{" "}
            <span className="text-primary">{facilitiesCopy.heading.highlight}</span>
            <br />
            {facilitiesCopy.heading.post}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {facilitiesCopy.description}
          </p>
        </div>

        {/* Hero Image with Overlay */}
        <div className="relative mb-16 rounded-lg overflow-hidden shadow-elegant">
          <div 
            className="h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${facilitiesImage})` }}
          >
            <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white/90 text-primary hover:bg-white"
              >
                <Play className="w-6 h-6 mr-2" />
                {facilitiesCopy.heroButton}
              </Button>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {facilitiesCopy.facilities.map((facility, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {facilitiesCopy.facilityBadge}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{facility.title}</h3>
                <p className="text-muted-foreground mb-4">{facility.description}</p>
                
                <ul className="space-y-2">
                  {facility.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-hero rounded-lg p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{facilitiesCopy.stats.title}</h3>
            <p className="text-white/90 max-w-2xl mx-auto">{facilitiesCopy.stats.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {facilitiesCopy.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Virtual Tour */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-bold text-foreground">{facilitiesCopy.location.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{facilitiesCopy.location.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {facilitiesCopy.location.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    {bullet}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Camera className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-bold text-foreground">{facilitiesCopy.explore.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{facilitiesCopy.explore.description}</p>
              <div className="space-y-3">
                {facilitiesCopy.explore.actions.map((action, index) => (
                  <Button key={index} variant="outline" className="w-full justify-start">
                    {action.icon === "play" && <Play className="w-4 h-4 mr-2" />}
                    {action.icon === "camera" && <Camera className="w-4 h-4 mr-2" />}
                    {action.icon === "map" && <MapPin className="w-4 h-4 mr-2" />}
                    {action.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;