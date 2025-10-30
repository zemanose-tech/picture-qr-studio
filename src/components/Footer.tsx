import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import imgLogo from "@/assets/IMG_Gladys_white_transparent.png";
import { InquiryModal } from "@/components/InquiryModal";
import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { getFooterTranslation } from "@/lib/translations";
const Footer = () => {
  const { language } = useLanguage();
  const footerCopy = getFooterTranslation(language);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={imgLogo} alt="IMG Academy - Gladys de Loaiza Authorized Representative" className="w-32 h-32 object-contain" />
              <div>
                <h3 className="text-xl font-bold">{footerCopy.tagline}</h3>
                <p className="text-xs text-primary-foreground/80">Global Referral Program Member of IMG Academy</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              {footerCopy.description}
            </p>
            <div className="flex space-x-3">
              
              
              
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{footerCopy.quickLinksTitle}</h4>
            <ul className="space-y-2 text-sm">
              <a href="/" className="text-primary-foreground/80 hover:text-accent transition-colors">{footerCopy.quickLinks.home}</a><li />
              <Link to="/camps" className="text-primary-foreground/80 hover:text-accent transition-colors">{footerCopy.quickLinks.camps}</Link><li />
              <Link to="/boarding" className="text-primary-foreground/80 hover:text-accent transition-colors">{footerCopy.quickLinks.boarding}</Link><li />
              <Link to="/facilities" className="text-primary-foreground/80 hover:text-accent transition-colors">{footerCopy.quickLinks.facilities}</Link><li />
              <Link to="/sports" className="text-primary-foreground/80 hover:text-accent transition-colors">{footerCopy.quickLinks.sports}</Link><li />
              <Link to="/aboutus" className="text-primary-foreground/80 hover:text-accent transition-colors">{footerCopy.quickLinks.aboutUs}</Link><li />
              <li><button onClick={() => setIsModalOpen(true)} className="text-primary-foreground/80 hover:text-accent transition-colors text-left">{footerCopy.quickLinks.contact}</button></li>
            </ul>
          </div>

          {/* Programs */}
          

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{footerCopy.contactTitle}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                <span className="text-primary-foreground/80">{footerCopy.contactEmail}</span>
              </div>

            </div>


          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            <p>&copy; 2025 IMG Academy. {footerCopy.rightsReserved}</p>
            <p>{footerCopy.authorized}</p>
          </div>

          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy"
              className="text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {footerCopy.privacyPolicy}
            </Link>
          </div>

        </div>

        <div className="mt-4 pt-4 border-t border-white/20 text-center">
          <p className="text-xs text-primary-foreground/60">
            {footerCopy.disclaimer.beforeLink}
            <a href="https://www.imgacademy.com" className="text-accent hover:underline">{footerCopy.disclaimer.linkLabel}</a>
            {footerCopy.disclaimer.afterLink}
          </p>
        </div>
      </div>

      {/* Inquiry Modal */}
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} inquiryType={footerCopy.inquiryType} />
    </footer>;
};
export default Footer;
