import type { SupportedLanguage } from "@/contexts/LanguageContext";

type HeaderTranslationKeys =
  | "logoAlt"
  | "onCampus"
  | "facilities"
  | "camps"
  | "boarding"
  | "sports"
  | "aboutUs"
  | "contact"
  | "home"
  | "generalInquiry"
  | "languageToggle";

type TranslationSection<T extends string> = Record<SupportedLanguage, Record<T, string>>;

export const headerTranslations: TranslationSection<HeaderTranslationKeys> = {
  es: {
    logoAlt: "IMG Academy",
    onCampus: "En Campus",
    facilities: "Instalaciones",
    camps: "Camps",
    boarding: "Internados",
    sports: "Deportes",
    aboutUs: "Quienes Somos",
    contact: "Contacto",
    home: "Inicio",
    generalInquiry: "Contacto General",
    languageToggle: "EN",
  },
  en: {
    logoAlt: "IMG Academy",
    onCampus: "On Campus",
    facilities: "Facilities",
    camps: "Camps",
    boarding: "Boarding",
    sports: "Sports",
    aboutUs: "About Us",
    contact: "Contact",
    home: "Home",
    generalInquiry: "General Inquiry",
    languageToggle: "ES",
  },
};

export const getHeaderTranslation = (language: SupportedLanguage) =>
  headerTranslations[language];
