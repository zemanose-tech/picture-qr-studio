import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Send, Star, Trophy, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/use-language";
import { getEnhancedContactFormTranslation } from "@/lib/translations";

const statIcons = [Trophy, Users, Star] as const;

const EnhancedContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    age: "",
    sports: [] as string[],
    programType: "",
    experience: "",
    message: "",
    budget: "",
    startDate: "",
    parentConsent: false,
    newsletter: true
  });

  const { language } = useLanguage();
  const enhancedFormCopy = getEnhancedContactFormTranslation(language);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSportChange = (sportId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      sports: checked
        ? [...prev.sports, sportId]
        : prev.sports.filter(s => s !== sportId)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: enhancedFormCopy.toast.successTitle,
      description: enhancedFormCopy.toast.successDescription,
    });

    setIsSubmitting(false);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      age: "",
      sports: [],
      programType: "",
      experience: "",
      message: "",
      budget: "",
      startDate: "",
      parentConsent: false,
      newsletter: true
    });
  };

  return (
    <div className="py-20 bg-gradient-to-b from-img-white to-img-gray">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-img-blue text-white">{enhancedFormCopy.badge}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-img-blue mb-6">
            {enhancedFormCopy.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {enhancedFormCopy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-fit sticky top-8">
              <CardHeader>
                <CardTitle className="text-img-blue flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  {enhancedFormCopy.contactCard.title}
                </CardTitle>
                <CardDescription>{enhancedFormCopy.contactCard.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-img-blue/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-img-blue" />
                  </div>
                  <div>
                    <p className="font-medium">{enhancedFormCopy.contactCard.phoneLabel}</p>
                    <p className="text-sm text-gray-600">{enhancedFormCopy.contactCard.phoneValue}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-img-blue/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-img-blue" />
                  </div>
                  <div>
                    <p className="font-medium">{enhancedFormCopy.contactCard.emailLabel}</p>
                    <p className="text-sm text-gray-600">{enhancedFormCopy.contactCard.emailValue}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-img-blue/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-img-blue" />
                  </div>
                  <div>
                    <p className="font-medium">{enhancedFormCopy.contactCard.locationLabel}</p>
                    <p className="text-sm text-gray-600">{enhancedFormCopy.contactCard.locationValue}</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {enhancedFormCopy.contactCard.stats.map((stat, index) => {
                      const Icon = statIcons[index] ?? Star;

                      return (
                        <div key={stat.value}>
                          <div className="flex items-center justify-center mb-2">
                            <Icon className="w-6 h-6 text-img-blue" />
                          </div>
                          <p className="text-sm font-medium">{stat.value}</p>
                          <p className="text-xs text-gray-600">{stat.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-img-blue">{enhancedFormCopy.form.cardTitle}</CardTitle>
                <CardDescription>{enhancedFormCopy.form.cardDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">{enhancedFormCopy.form.personalInfo.firstName}</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{enhancedFormCopy.form.personalInfo.lastName}</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">{enhancedFormCopy.form.personalInfo.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">{enhancedFormCopy.form.personalInfo.phone}</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country">{enhancedFormCopy.form.personalInfo.country}</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="age">{enhancedFormCopy.form.personalInfo.age}</Label>
                      <Select value={formData.age} onValueChange={(value) => handleInputChange("age", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={enhancedFormCopy.form.personalInfo.agePlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {enhancedFormCopy.form.personalInfo.ageGroups.map((age) => (
                            <SelectItem key={age} value={age}>
                              {age}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Sports Interest */}
                  <div>
                    <Label className="text-base font-medium">{enhancedFormCopy.form.sports.label}</Label>
                    <p className="text-sm text-gray-600 mb-3">{enhancedFormCopy.form.sports.helper}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {enhancedFormCopy.form.sports.options.map((sport) => (
                        <div key={sport.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={sport.id}
                            checked={formData.sports.includes(sport.id)}
                            onCheckedChange={(checked) => handleSportChange(sport.id, !!checked)}
                          />
                          <Label htmlFor={sport.id} className="text-sm cursor-pointer">
                            {sport.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Program Type */}
                  <div>
                    <Label className="text-base font-medium">{enhancedFormCopy.form.programType.label}</Label>
                    <RadioGroup
                      value={formData.programType}
                      onValueChange={(value) => handleInputChange("programType", value)}
                      className="mt-2"
                    >
                      {enhancedFormCopy.form.programType.options.map((program) => (
                        <div key={program.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value={program.id} id={program.id} />
                          <div className="flex-1">
                            <Label htmlFor={program.id} className="font-medium cursor-pointer">
                              {program.name}
                            </Label>
                            <p className="text-sm text-gray-600">{program.description}</p>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Additional Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="experience">{enhancedFormCopy.form.experience.label}</Label>
                      <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={enhancedFormCopy.form.experience.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {enhancedFormCopy.form.experience.options.map((option) => (
                            <SelectItem key={option.id} value={option.id}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="startDate">{enhancedFormCopy.form.startDate.label}</Label>
                      <Select value={formData.startDate} onValueChange={(value) => handleInputChange("startDate", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={enhancedFormCopy.form.startDate.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {enhancedFormCopy.form.startDate.options.map((option) => (
                            <SelectItem key={option.id} value={option.id}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">{enhancedFormCopy.form.message.label}</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder={enhancedFormCopy.form.message.placeholder}
                      rows={4}
                    />
                  </div>

                  {/* Consent and Newsletter */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="parentConsent"
                        checked={formData.parentConsent}
                        onCheckedChange={(checked) => handleInputChange("parentConsent", !!checked)}
                        required
                      />
                      <Label htmlFor="parentConsent" className="text-sm">
                        {enhancedFormCopy.form.consent.parent}
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", !!checked)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        {enhancedFormCopy.form.consent.newsletter}
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-img-blue hover:bg-img-blue-dark text-white py-3 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      enhancedFormCopy.form.submit.sending
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {enhancedFormCopy.form.submit.default}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContactForm;
