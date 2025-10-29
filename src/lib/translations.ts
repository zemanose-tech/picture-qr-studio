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

type TranslationMap<T> = Record<SupportedLanguage, T>;

type HeroTranslation = {
  welcome: string;
  transformTitleLines: string[];
  descriptionSegments: string[];
  statistics: Array<{ value: string; description: string }>;
};

type AcademicExcellenceTranslation = {
  title: string;
  paragraphs: string[];
  highlights: Array<{ title: string; description: string }>;
};

type AthleticsTranslation = {
  placeholderTitle: string;
  placeholderSubtitle: string;
  title: string;
  description: string;
  cta: string;
};

type InstallationsTranslation = {
  title: string;
  description: string;
  cta: string;
  carouselAltPrefix: string;
};

type RichTextToken = string | { type: "underline"; text: string };

type PersonalDevelopmentTranslation = {
  titleLines: string[];
  descriptionSegments: RichTextToken[][];
  cta: string;
};

type FooterTranslation = {
  tagline: string;
  description: string;
  quickLinksTitle: string;
  quickLinks: {
    home: string;
    camps: string;
    boarding: string;
    facilities: string;
    sports: string;
    aboutUs: string;
    contact: string;
  };
  contactTitle: string;
  contactEmail: string;
  rightsReserved: string;
  authorized: string;
  privacyPolicy: string;
  disclaimer: {
    beforeLink: string;
    linkLabel: string;
    afterLink: string;
  };
  inquiryType: string;
};

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

export const heroTranslations: TranslationMap<HeroTranslation> = {
  es: {
    welcome: "Bienvenidos a",
    transformTitleLines: ["¡CON IMG", "TRANSFORMA", "TU POTENCIAL!"],
    descriptionSegments: [
      "En IMG Academy, reunimos a estudiantes-atletas apasionados con entrenadores y profesores de clase mundial, creando un entorno único donde el talento se transforma en resultados.",
      "Aquí, cada meta cuenta y cada logro se apoya con una atención personalizada, gracias a nuestra proporción de 4 miembros del personal por cada estudiante.",
    ],
    statistics: [
      {
        value: "31.000",
        description:
          "estudiantes-atletas de IMG Academy y NCSA que ingresan a universidades cada año",
      },
      {
        value: "25",
        description:
          "% de los equipos universitarios de primer año cuentan con atletas de IMG Academy y NCSA",
      },
      {
        value: "78",
        description:
          "% de los programas universitarios y más de 40.000 entrenadores reclutan a través de NCSA",
      },
      {
        value: "150",
        description:
          "estudiantes de IMG Academy seleccionados por ligas profesionales en los últimos 10 años",
      },
      {
        value: "300",
        description:
          "compromisos universitarios de atletas de IMG Academy para la promoción 2025",
      },
      {
        value: "100",
        description: "% tasa de graduación de IMG Academy",
      },
    ],
  },
  en: {
    welcome: "Welcome to",
    transformTitleLines: ["WITH IMG", "TRANSFORM", "YOUR POTENTIAL!"],
    descriptionSegments: [
      "At IMG Academy, we bring together passionate student-athletes with world-class coaches and teachers, creating a unique environment where talent turns into results.",
      "Here, every goal matters and every achievement is supported with personalised attention, thanks to our 4-to-1 staff-to-student ratio.",
    ],
    statistics: [
      {
        value: "31,000",
        description:
          "IMG Academy and NCSA student-athletes matriculate to college each year",
      },
      {
        value: "25",
        description:
          "% of first-year collegiate teams include IMG Academy and NCSA athletes",
      },
      {
        value: "78",
        description:
          "% of college programmes and more than 40,000 coaches recruit through NCSA",
      },
      {
        value: "150",
        description:
          "IMG Academy students drafted by professional leagues in the past 10 years",
      },
      {
        value: "300",
        description:
          "college commitments from IMG Academy athletes for the Class of 2025",
      },
      {
        value: "100",
        description: "percent IMG Academy graduation rate",
      },
    ],
  },
};

export const academicExcellenceTranslations: TranslationMap<AcademicExcellenceTranslation> = {
  es: {
    title: "EXCELENCIA ACADÉMICA",
    paragraphs: [
      "Para que los estudiantes-atletas prosperen en las aulas universitarias del siglo XXI y más allá, deben estar equipados con un conjunto de habilidades que encarne los mandatos de un mundo cambiante.",
      "IMG Academy emplea las mejores prácticas que reflejan la investigación actual de aprendizaje efectivo a través de la integración estratégica de la alfabetización informacional y un plan de instrucción y currículo que dicta la inclusión de tareas de pensamiento complejas y rigurosas.",
    ],
    highlights: [
      {
        title: "Aprendizaje del Siglo XXI",
        description: "Metodologías modernas que preparan para el éxito universitario",
      },
      {
        title: "Pensamiento Crítico",
        description: "Desarrollo de habilidades analíticas y de resolución de problemas",
      },
      {
        title: "Alfabetización Informacional",
        description: "Competencias digitales para un mundo conectado",
      },
    ],
  },
  en: {
    title: "ACADEMIC EXCELLENCE",
    paragraphs: [
      "For student-athletes to thrive in 21st-century university classrooms and beyond, they must be equipped with a skill set that embraces the demands of a changing world.",
      "IMG Academy employs best practices that reflect current research on effective learning through the strategic integration of information literacy and a curriculum plan that includes complex, rigorous thinking tasks.",
    ],
    highlights: [
      {
        title: "21st Century Learning",
        description: "Modern methodologies that prepare students for collegiate success",
      },
      {
        title: "Critical Thinking",
        description: "Development of analytical and problem-solving skills",
      },
      {
        title: "Information Literacy",
        description: "Digital competencies for a connected world",
      },
    ],
  },
};

export const athleticsTranslations: TranslationMap<AthleticsTranslation> = {
  es: {
    placeholderTitle: "Athletics Placeholder",
    placeholderSubtitle: "(Coach teaching leadership)",
    title: "ATHLETICS",
    description: "Athletic excellence through world-class training and facilities.",
    cta: "Saber Más",
  },
  en: {
    placeholderTitle: "Athletics Placeholder",
    placeholderSubtitle: "(Coach teaching leadership)",
    title: "ATHLETICS",
    description: "Athletic excellence through world-class training and facilities.",
    cta: "Learn More",
  },
};

export const installationsTranslations: TranslationMap<InstallationsTranslation> = {
  es: {
    title: "INSTALACIONES DE CLASE MUNDIAL",
    description:
      "Nuestras instalaciones deportivas y académicas están diseñadas para inspirar la excelencia. Con más de 600 acres de campus, ofrecemos las mejores facilidades deportivas del mundo, desde campos profesionales hasta centros de alto rendimiento equipados con la tecnología más avanzada para el desarrollo atlético integral.",
    cta: "Saber Más",
    carouselAltPrefix: "Instalaciones IMG Academy",
  },
  en: {
    title: "WORLD-CLASS FACILITIES",
    description:
      "Our athletic and academic facilities are designed to inspire excellence. With more than 600 acres of campus, we offer the best sports amenities in the world, from professional fields to high-performance centres equipped with the most advanced technology for holistic athletic development.",
    cta: "Learn More",
    carouselAltPrefix: "IMG Academy Facilities",
  },
};

export const personalDevelopmentTranslations: TranslationMap<PersonalDevelopmentTranslation> = {
  es: {
    titleLines: ["DESARROLLO", "PERSONAL"],
    descriptionSegments: [
      [
        "Las llamadas habilidades \"intangibles\" como liderazgo, comunicación, manejo de la adversidad, confianza y enfoque son críticas para el éxito en todos los aspectos de la vida.",
      ],
      [
        "Pero, ¿con qué frecuencia los estudiantes-atletas son ",
        { type: "underline", text: "enseñados" },
        " intencionalmente cómo mejorar estas habilidades? En IMG Academy, tenemos más de 100 entrenadores con educación y experiencia en todas las facetas del desarrollo personal, con clases específicas y programas de entrenamiento implementados como parte de la experiencia de desarrollo general.",
      ],
    ],
    cta: "Saber Más",
  },
  en: {
    titleLines: ["PERSONAL", "DEVELOPMENT"],
    descriptionSegments: [
      [
        "So-called \"intangible\" skills like leadership, communication, resilience, confidence, and focus are critical to success in every area of life.",
      ],
      [
        "But how often are student-athletes intentionally ",
        { type: "underline", text: "taught" },
        " to strengthen these skills? At IMG Academy, more than 100 coaches with education and experience in every facet of personal development lead dedicated classes and training programmes as part of the overall development experience.",
      ],
    ],
    cta: "Learn More",
  },
};

export const footerTranslations: TranslationMap<FooterTranslation> = {
  es: {
    tagline: "SPORTS ACADEMY",
    description:
      "Líder mundial en educación deportiva con presencia en Latinoamérica. Desarrollamos atletas de élite y estudiantes excepcionales desde 1978.",
    quickLinksTitle: "Enlaces rápidos",
    quickLinks: {
      home: "Inicio",
      camps: "Camps",
      boarding: "Internado",
      facilities: "Instalaciones",
      sports: "Deportes",
      aboutUs: "Quienes Somos",
      contact: "Contacto",
    },
    contactTitle: "Contacto directo",
    contactEmail: "comercial@sportsacademy.co",
    rightsReserved: "Todos los derechos reservados.",
    authorized:
      "Representante autorizado para Latinoamérica - Programa de Referencias Global",
    privacyPolicy: "Política de Privacidad",
    disclaimer: {
      beforeLink:
        "Esta página es operada por un representante autorizado del Programa de Referencias Global de IMG Academy. Para información oficial, visita ",
      linkLabel: "www.imgacademy.com",
      afterLink: "",
    },
    inquiryType: "Contacto General",
  },
  en: {
    tagline: "SPORTS ACADEMY",
    description:
      "World leader in sports education with a presence across Latin America. We have developed elite athletes and exceptional students since 1978.",
    quickLinksTitle: "Quick Links",
    quickLinks: {
      home: "Home",
      camps: "Camps",
      boarding: "Boarding",
      facilities: "Facilities",
      sports: "Sports",
      aboutUs: "About Us",
      contact: "Contact",
    },
    contactTitle: "Direct contact",
    contactEmail: "comercial@sportsacademy.co",
    rightsReserved: "All rights reserved.",
    authorized:
      "Authorized representative for Latin America - Global Referral Program",
    privacyPolicy: "Privacy Policy",
    disclaimer: {
      beforeLink:
        "This page is operated by an authorized representative of IMG Academy's Global Referral Program. For official information, visit ",
      linkLabel: "www.imgacademy.com",
      afterLink: "",
    },
    inquiryType: "General Inquiry",
  },
};

export const getHeroTranslation = (language: SupportedLanguage) =>
  heroTranslations[language];

export const getAcademicExcellenceTranslation = (language: SupportedLanguage) =>
  academicExcellenceTranslations[language];

export const getAthleticsTranslation = (language: SupportedLanguage) =>
  athleticsTranslations[language];

export const getInstallationsTranslation = (language: SupportedLanguage) =>
  installationsTranslations[language];

export const getPersonalDevelopmentTranslation = (language: SupportedLanguage) =>
  personalDevelopmentTranslations[language];

export const getFooterTranslation = (language: SupportedLanguage) =>
  footerTranslations[language];
