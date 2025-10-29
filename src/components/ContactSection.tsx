import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, Calendar } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { getContactTranslation } from "@/lib/translations";

const ContactSection = () => {
  const { language } = useLanguage();
  const contactCopy = getContactTranslation(language);

  return (
    <section id="contacto" className="py-20 bg-img-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <MessageCircle className="w-4 h-4 mr-2" />
            {contactCopy.badge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {contactCopy.heading.pre}{" "}
            <span className="text-primary">{contactCopy.heading.highlight}</span>
            {contactCopy.heading.post ? <>{" "}{contactCopy.heading.post}</> : null}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {contactCopy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Personal Representative Card */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{contactCopy.representativeCard.title}</CardTitle>
                    <CardDescription>{contactCopy.representativeCard.subtitle}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{contactCopy.representativeCard.body}</p>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="text-sm text-foreground font-semibold">
                      {contactCopy.representativeCard.guarantee}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{contactCopy.methods.phone.title}</h3>
                      <p className="text-sm text-muted-foreground">{contactCopy.methods.phone.availability}</p>
                    </div>
                  </div>
                  <p className="text-primary font-semibold">{contactCopy.methods.phone.number}</p>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {contactCopy.methods.phone.button}
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{contactCopy.methods.email.title}</h3>
                      <p className="text-sm text-muted-foreground">{contactCopy.methods.email.availability}</p>
                    </div>
                  </div>
                  <p className="text-primary font-semibold">{contactCopy.methods.email.address}</p>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    <Mail className="w-4 h-4 mr-2" />
                    {contactCopy.methods.email.button}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Office Hours & Coverage */}
            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-foreground">{contactCopy.hours.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-2">{contactCopy.hours.weekdays.label}</p>
                    {contactCopy.hours.weekdays.schedules.map((schedule, index) => (
                      <p key={`weekday-${index}`} className="text-muted-foreground">
                        {schedule}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">{contactCopy.hours.saturday.label}</p>
                    {contactCopy.hours.saturday.schedules.map((schedule, index) => (
                      <p key={`saturday-${index}`} className="text-muted-foreground">
                        {schedule}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-accent mr-2" />
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">{contactCopy.hours.coverage.label}</span> {contactCopy.hours.coverage.regions}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">{contactCopy.form.title}</CardTitle>
              <CardDescription>{contactCopy.form.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{contactCopy.form.fields.firstName.label}</Label>
                  <Input id="firstName" placeholder={contactCopy.form.fields.firstName.placeholder} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{contactCopy.form.fields.lastName.label}</Label>
                  <Input id="lastName" placeholder={contactCopy.form.fields.lastName.placeholder} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{contactCopy.form.fields.email.label}</Label>
                  <Input id="email" type="email" placeholder={contactCopy.form.fields.email.placeholder} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{contactCopy.form.fields.phone.label}</Label>
                  <Input id="phone" placeholder={contactCopy.form.fields.phone.placeholder} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">{contactCopy.form.fields.country.label}</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={contactCopy.form.fields.country.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {contactCopy.form.fields.country.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">{contactCopy.form.fields.age.label}</Label>
                  <Input id="age" placeholder={contactCopy.form.fields.age.placeholder} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="program">{contactCopy.form.fields.program.label}</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={contactCopy.form.fields.program.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {contactCopy.form.fields.program.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sport">{contactCopy.form.fields.sport.label}</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={contactCopy.form.fields.sport.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {contactCopy.form.fields.sport.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{contactCopy.form.fields.message.label}</Label>
                <Textarea
                  id="message"
                  placeholder={contactCopy.form.fields.message.placeholder}
                  rows={4}
                />
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Send className="w-5 h-5 mr-2" />
                  {contactCopy.form.submitButton}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {contactCopy.form.consent.text}
                    <br />
                    <span className="text-accent font-semibold">{contactCopy.form.consent.highlight}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule Call CTA */}
        <div className="mt-16 bg-gradient-hero rounded-lg p-8 text-center text-white">
          <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">{contactCopy.scheduleCta.title}</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">{contactCopy.scheduleCta.description}</p>
          <Button variant="secondary" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Calendar className="w-5 h-5 mr-2" />
            {contactCopy.scheduleCta.button}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;