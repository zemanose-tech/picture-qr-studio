import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageSquare, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiryType?: string;
}
const countries = [{
  code: "CL",
  name: "Chile",
  flag: "🇨🇱",
  phoneCode: "+56"
}, {
  code: "CO",
  name: "Colombia",
  flag: "🇨🇴",
  phoneCode: "+57"
}, {
  code: "CR",
  name: "Costa Rica",
  flag: "🇨🇷",
  phoneCode: "+506"
}, {
  code: "EC",
  name: "Ecuador",
  flag: "🇪🇨",
  phoneCode: "+593"
}, {
  code: "SV",
  name: "El Salvador",
  flag: "🇸🇻",
  phoneCode: "+503"
}, {
  code: "AE",
  name: "Emiratos Árabes",
  flag: "🇦🇪",
  phoneCode: "+971"
}, {
  code: "ES",
  name: "España",
  flag: "🇪🇸",
  phoneCode: "+34"
}, {
  code: "US",
  name: "Estados Unidos",
  flag: "🇺🇸",
  phoneCode: "+1"
}, {
  code: "GT",
  name: "Guatemala",
  flag: "🇬🇹",
  phoneCode: "+502"
}, {
  code: "HN",
  name: "Honduras",
  flag: "🇭🇳",
  phoneCode: "+504"
}, {
  code: "JO",
  name: "Jordania",
  flag: "🇯🇴",
  phoneCode: "+962"
}, {
  code: "MX",
  name: "México",
  flag: "🇲🇽",
  phoneCode: "+52"
}, {
  code: "NI",
  name: "Nicaragua",
  flag: "🇳🇮",
  phoneCode: "+505"
}, {
  code: "PA",
  name: "Panamá",
  flag: "🇵🇦",
  phoneCode: "+507"
}, {
  code: "PE",
  name: "Perú",
  flag: "🇵🇪",
  phoneCode: "+51"
}, {
  code: "PT",
  name: "Portugal",
  flag: "🇵🇹",
  phoneCode: "+351"
}, {
  code: "CH",
  name: "Suiza",
  flag: "🇨🇭",
  phoneCode: "+41"
}, {
  code: "TT",
  name: "Trinidad y Tobago",
  flag: "🇹🇹",
  phoneCode: "+1-868"
}, {
  code: "OTHER",
  name: "Otro país",
  flag: "🌍",
  phoneCode: ""
}];
export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  inquiryType = "Consulta General"
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phoneCode: "",
    phone: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleCountryChange = (countryCode: string) => {
    const country = countries.find(c => c.code === countryCode);
    setFormData(prev => ({
      ...prev,
      country: countryCode,
      phoneCode: country?.phoneCode || ""
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const selectedCountryName =
        countries.find((c) => c.code === formData.country)?.name || "Otro país";

      // 💡 Call the Edge Function via Supabase SDK (no URL rewriting)
      const { error } = await supabase.functions.invoke("send-inquiry-email", {
        body: {
          name: formData.name,
          email: formData.email,
          country: selectedCountryName,
          phoneCode: formData.phoneCode,
          phone: formData.phone,
          message: formData.message,
          inquiryType,
        },
      });

      if (error) throw error;

      toast({
        title: "Consulta enviada",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      setFormData({ name: "", email: "", country: "", phoneCode: "", phone: "", message: "" });
      onClose();
    } catch (err) {
      console.error("Error sending inquiry:", err);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu consulta. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };
  const selectedCountry = countries.find(c => c.code === formData.country);
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-6">
            {inquiryType}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-background rounded-md">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  <div>
                    <a href="https://wa.me/34619463416" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
                      <p className="font-medium">WhatsApp</p>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-background rounded-md">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:comercial@sportsacademy.co" className="text-sm text-muted-foreground hover:text-primary">
                      comercial@sportsacademy.co
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
                <Label htmlFor="name">Nombre Completo *</Label>
                <Input id="name" value={formData.name} onChange={e => setFormData(prev => ({
                ...prev,
                name: e.target.value
              }))} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={formData.email} onChange={e => setFormData(prev => ({
                ...prev,
                email: e.target.value
              }))} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">País *</Label>
                <Select value={formData.country} onValueChange={handleCountryChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu país" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map(country => <SelectItem key={country.code} value={country.code}>
                        <div className="flex items-center gap-2">
                          <span>{country.flag}</span>
                          <span>{country.name}</span>
                        </div>
                      </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <div className="flex gap-2">
                  <div className="w-24">
                    <Input value={formData.phoneCode} placeholder="+57" readOnly={formData.country !== "OTHER"} onChange={e => formData.country === "OTHER" && setFormData(prev => ({
                    ...prev,
                    phoneCode: e.target.value
                  }))} />
                  </div>
                  <Input id="phone" value={formData.phone} onChange={e => setFormData(prev => ({
                  ...prev,
                  phone: e.target.value
                }))} placeholder="Número de teléfono" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje *</Label>
                <Textarea id="message" rows={4} value={formData.message} onChange={e => setFormData(prev => ({
                ...prev,
                message: e.target.value
              }))} placeholder="Cuéntanos más sobre tu consulta..." required />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                  Cancelar
                </Button>
                <Button type="submit" className="flex-1">
                  Enviar Consulta
                </Button>
              </div>
            </form>
          </div>
        </div>

        
      </DialogContent>
    </Dialog>;
};