import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";
import { useLanguage } from "@/hooks/use-language";
import { getInquiryModalTranslation } from "@/lib/translations";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiryType?: string;
}

const countries = [
  { code: "CL", flag: "🇨🇱", phoneCode: "+56" },
  { code: "CO", flag: "🇨🇴", phoneCode: "+57" },
  { code: "CR", flag: "🇨🇷", phoneCode: "+506" },
  { code: "EC", flag: "🇪🇨", phoneCode: "+593" },
  { code: "SV", flag: "🇸🇻", phoneCode: "+503" },
  { code: "AE", flag: "🇦🇪", phoneCode: "+971" },
  { code: "ES", flag: "🇪🇸", phoneCode: "+34" },
  { code: "US", flag: "🇺🇸", phoneCode: "+1" },
  { code: "GT", flag: "🇬🇹", phoneCode: "+502" },
  { code: "HN", flag: "🇭🇳", phoneCode: "+504" },
  { code: "JO", flag: "🇯🇴", phoneCode: "+962" },
  { code: "MX", flag: "🇲🇽", phoneCode: "+52" },
  { code: "NI", flag: "🇳🇮", phoneCode: "+505" },
  { code: "PA", flag: "🇵🇦", phoneCode: "+507" },
  { code: "PE", flag: "🇵🇪", phoneCode: "+51" },
  { code: "PT", flag: "🇵🇹", phoneCode: "+351" },
  { code: "CH", flag: "🇨🇭", phoneCode: "+41" },
  { code: "TT", flag: "🇹🇹", phoneCode: "+1-868" },
  { code: "OTHER", flag: "🌍", phoneCode: "" },
];

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  inquiryType,
}) => {
  const { language } = useLanguage();
  const inquiryCopy = getInquiryModalTranslation(language);
  const effectiveInquiryType = inquiryType ?? inquiryCopy.defaultInquiryType;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phoneCode: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleCountryChange = (countryCode: string) => {
    const country = countries.find((c) => c.code === countryCode);
    setFormData((prev) => ({
      ...prev,
      country: countryCode,
      phoneCode: country?.phoneCode || "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const selectedCountryName =
        inquiryCopy.countries[formData.country as keyof typeof inquiryCopy.countries] ||
        inquiryCopy.countries.OTHER;

      const { error } = await supabase.functions.invoke("send-inquiry-email", {
        body: {
          name: formData.name,
          email: formData.email,
          country: selectedCountryName,
          phoneCode: formData.phoneCode,
          phone: formData.phone,
          message: formData.message,
          inquiryType: effectiveInquiryType,
        },
      });

      if (error) throw error;

      toast({
        title: inquiryCopy.toasts.successTitle,
        description: inquiryCopy.toasts.successDescription,
      });

      setFormData({ name: "", email: "", country: "", phoneCode: "", phone: "", message: "" });
      onClose();
    } catch (err) {
      console.error("Error sending inquiry:", err);
      toast({
        title: inquiryCopy.toasts.errorTitle,
        description: inquiryCopy.toasts.errorDescription,
        variant: "destructive",
      });
    }
  };

  const selectedCountry = countries.find((c) => c.code === formData.country);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-6">
            {effectiveInquiryType}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                {inquiryCopy.contactInfo.title}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-background rounded-md">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  <div>
                    <a
                      href="https://wa.me/34619463416"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      <p className="font-medium">{inquiryCopy.contactInfo.whatsapp}</p>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-background rounded-md">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">{inquiryCopy.contactInfo.emailLabel}</p>
                    <a
                      href="mailto:comercial@sportsacademy.co"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {inquiryCopy.contactInfo.emailValue}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{inquiryCopy.form.nameLabel}</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{inquiryCopy.form.emailLabel}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">{inquiryCopy.form.countryLabel}</Label>
                <Select value={formData.country} onValueChange={handleCountryChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder={inquiryCopy.form.countryPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        <div className="flex items-center gap-2">
                          <span>{country.flag}</span>
                          <span>
                            {inquiryCopy.countries[country.code as keyof typeof inquiryCopy.countries] ||
                              inquiryCopy.countries.OTHER}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{inquiryCopy.form.phoneLabel}</Label>
                <div className="flex gap-2">
                  <div className="w-24">
                    <Input
                      value={formData.phoneCode}
                      placeholder={inquiryCopy.form.phoneCodePlaceholder}
                      readOnly={formData.country !== "OTHER"}
                      onChange={(e) =>
                        formData.country === "OTHER" &&
                        setFormData((prev) => ({ ...prev, phoneCode: e.target.value }))
                      }
                    />
                  </div>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder={inquiryCopy.form.phonePlaceholder}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{inquiryCopy.form.messageLabel}</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder={inquiryCopy.form.messagePlaceholder}
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                  {inquiryCopy.form.cancel}
                </Button>
                <Button type="submit" className="flex-1">
                  {inquiryCopy.form.submit}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
