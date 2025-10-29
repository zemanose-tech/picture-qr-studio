import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logoWhite from "@/assets/sportsacademy-logo-white.png";
import { InquiryModal } from "@/components/InquiryModal";
import { useLanguage } from "@/hooks/use-language";
import { getHeaderTranslation } from "@/lib/translations";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnCampusOpen, setIsOnCampusOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = getHeaderTranslation(language);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logoWhite} alt={t.logoAlt} className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group" onMouseEnter={() => setIsOnCampusOpen(true)} onMouseLeave={() => setIsOnCampusOpen(false)}>
            <button className="text-white hover:text-white/80 transition-colors flex items-center gap-1">
              {t.onCampus} <ChevronDown className="w-4 h-4" />
            </button>
            {isOnCampusOpen && <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-48 z-50">
                <Link to="/facilities" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  {t.facilities}
                </Link>
                <Link to="/camps" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  {t.camps}
                </Link>
                <Link to="/boarding" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  {t.boarding}
                </Link>
                <Link to="/sports" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  {t.sports}
                </Link>
                <Link to="/aboutus" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  {t.aboutUs}
                </Link>
              </div>}
          </div>
          <button onClick={() => setIsModalOpen(true)} className="text-white hover:text-white/80 transition-colors">
            {t.contact}
          </button>
          <Button variant="secondary" size="sm" onClick={toggleLanguage}>
            {t.languageToggle}
          </Button>

        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="absolute top-full left-0 right-0 bg-primary md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <Link to="/" className="text-white hover:text-white/80 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t.home}
              </Link>
              <Link to="/facilities" className="text-white hover:text-white/80 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t.facilities}
              </Link>
              <Link to="/camps" className="text-white hover:text-white/80 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t.camps}
              </Link>
              <Link to="/boarding" className="text-white hover:text-white/80 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t.boarding}
              </Link>
              <Link to="/sports" className="text-white hover:text-white/80 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t.sports}
              </Link>
              <button onClick={() => {
            setIsMenuOpen(false);
            setIsModalOpen(true);
          }} className="text-white hover:text-white/80 transition-colors text-left">
                {t.contact}
              </button>
              <Button variant="outline" onClick={() => {
            toggleLanguage();
            setIsMenuOpen(false);
          }}>
                {t.languageToggle}
              </Button>

            </nav>
          </div>}
      </div>

      {/* Inquiry Modal */}
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} inquiryType={t.generalInquiry} />
    </header>;
};

export default Header;
