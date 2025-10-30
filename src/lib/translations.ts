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

type DiscountOfferTranslation = {
  title: string;
  discount: string;
  description: string;
  validUntil: string;
  conditions: string[];
  highlight?: string;
  bgColor: string;
};

type DiscountsTranslation = {
  badge: string;
  heading: {
    prefix?: string;
    highlight: string;
    suffix: string;
  };
  description: string;
  offers: DiscountOfferTranslation[];
  labels: {
    validUntil: string;
    conditions: string;
  };
  buttons: {
    apply: string;
  };
  benefits: {
    title: string;
    description: string;
    items: string[];
    ctaButton: string;
  };
  finalCta: {
    title: string;
    description: string;
    button: string;
  };
};

type BookingInfoTranslation = {
  title: string;
  items: string[];
};

type FacilityTranslation = {
  title: string;
  description: string;
  features: string[];
};

type FacilitiesTranslation = {
  badge: string;
  heading: {
    pre: string;
    highlight: string;
    post: string;
  };
  description: string;
  heroButton: string;
  facilities: FacilityTranslation[];
  facilityBadge: string;
  stats: {
    title: string;
    description: string;
    items: Array<{ value: string; label: string }>;
  };
  location: {
    title: string;
    description: string;
    bullets: string[];
  };
  explore: {
    title: string;
    description: string;
    actions: Array<{
      icon: "play" | "camera" | "map";
      label: string;
    }>;
  };
};

type CampDetailsTranslation = {
  camps: Array<{
    title: string;
    subtitle: string;
    icon: string;
    iconSecond?: string;
    iconThird?: string;
    features: string[];
    description: string;
    campInfo?: string;
    bgColor: string;
  }>;
  buttonLabel: string;
  inquiryType: string;
};

type CampsPageTranslation = {
  heroTitle: [string, string];
};

type BenefitCardTranslation = {
  title: string;
  description: string;
  items?: string[];
};

type LoyaltyBenefitsTranslation = {
  badge: string;
  title: string;
  description: string;
  cards: BenefitCardTranslation[];
  note: string;
};

type GroupBenefitsTranslation = {
  badge: string;
  title: string;
  description: string;
  cards: BenefitCardTranslation[];
  support: {
    title: string;
    description: string;
  };
};

type SportsPageSportTranslation = {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  buttonLabel: string;
  imageAlt: string;
};

type SportsPageTranslation = {
  hero: {
    title: string;
    description: string;
  };
  sports: SportsPageSportTranslation[];
  cta: {
    title: string;
    description: string;
    button: string;
  };
};

type SportDetailProgramTranslation = {
  name: string;
  description: string;
  carouselAltPrefix: string;
  videoTitle?: string;
};

type SportDetailTranslation = {
  backLabel: string;
  notFound: string;
  inquiry: {
    titleTemplate: string;
    description: string;
    button: string;
    inquiryTypeTemplate: string;
  };
  programs: Record<string, SportDetailProgramTranslation>;
};

type AdultProgramsTranslation = {
  hero: {
    title: string;
    subtitle: string;
  };
  description: string;
  carouselName: string;
  carouselAltPrefix: string;
  inquiry: {
    title: string;
    description: string;
    button: string;
    inquiryType: string;
  };
};

type BoardingPageTranslation = {
  carouselAltPrefix: string;
  hero: {
    lines: [string, string];
  };
  paragraphs: string[];
  stat: {
    prefix: string;
    value: string;
    suffix: string;
  };
  inquiry: {
    title: string;
    description: string;
    button: string;
    inquiryType: string;
  };
};

type FacilitiesPageTranslation = {
  videoTitle: string;
  hero: {
    heading: string;
  };
  campusSection: {
    subtitle: string;
    paragraphs: string[];
    cards: Array<{ title: string; description: string }>;
    highlight: {
      title: string;
      description: string;
    };
  };
  carouselAltPrefix: string;
};

type FormattedTextToken =
  | { type: "text"; value: string }
  | { type: "strong"; value: string }
  | { type: "italic"; value: string }
  | { type: "link"; value: string; href: string; external?: boolean };

type StructuredParagraph = FormattedTextToken[];

type AboutUsTranslation = {
  backLabel: string;
  heroTitle: string;
  paragraphs: string[];
};

type PrivacyPolicyTranslation = {
  title: string;
  intro: StructuredParagraph;
  bulletPoints: StructuredParagraph[];
  withdrawal: StructuredParagraph;
  final: StructuredParagraph;
  backToHome: string;
};

type EnhancedContactFormTranslation = {
  badge: string;
  title: string;
  description: string;
  contactCard: {
    title: string;
    subtitle: string;
    phoneLabel: string;
    phoneValue: string;
    emailLabel: string;
    emailValue: string;
    locationLabel: string;
    locationValue: string;
    stats: Array<{ value: string; description: string }>;
  };
  form: {
    cardTitle: string;
    cardDescription: string;
    personalInfo: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      country: string;
      age: string;
      agePlaceholder: string;
      ageGroups: string[];
    };
    sports: {
      label: string;
      helper: string;
      options: Array<{ id: string; label: string }>;
    };
    programType: {
      label: string;
      options: Array<{ id: string; name: string; description: string }>;
    };
    experience: {
      label: string;
      placeholder: string;
      options: Array<{ id: string; label: string }>;
    };
    startDate: {
      label: string;
      placeholder: string;
      options: Array<{ id: string; label: string }>;
    };
    message: {
      label: string;
      placeholder: string;
    };
    consent: {
      parent: string;
      newsletter: string;
    };
    submit: {
      default: string;
      sending: string;
    };
  };
  toast: {
    successTitle: string;
    successDescription: string;
  };
};

type InquiryModalTranslation = {
  defaultInquiryType: string;
  contactInfo: {
    title: string;
    whatsapp: string;
    emailLabel: string;
    emailValue: string;
  };
  form: {
    nameLabel: string;
    emailLabel: string;
    countryLabel: string;
    countryPlaceholder: string;
    phoneLabel: string;
    phoneCodePlaceholder: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    cancel: string;
    submit: string;
  };
  toasts: {
    successTitle: string;
    successDescription: string;
    errorTitle: string;
    errorDescription: string;
  };
  countries: Record<string, string> & { OTHER: string };
};

type PriceCalculatorTranslation = {
  title: string;
  description: string;
  fields: {
    sportLabel: string;
    sportPlaceholder: string;
    programLabel: string;
    programPlaceholder: string;
    regionLabel: string;
    regionPlaceholder: string;
    regionOption: string;
  };
  duration: {
    label: string;
    unitSingular: string;
    unitPlural: string;
    minLabel: string;
    maxLabel: string;
  };
  buttons: {
    calculate: string;
    reset: string;
    contact: string;
  };
  emptyState: string;
  note: string;
  results: {
    badge: string;
    baseLabel: string;
    discountLabel: string;
    finalLabel: string;
    includesTitle: string;
    includesItems: string[];
  };
  sports: Array<{ id: string; label: string; basePrice: number }>;
  programs: Array<{ id: string; name: string; multiplier: number }>;
  regions: Array<{ id: string; name: string; discount: number }>;
};

type SportSelectionQuizTranslation = {
  questions: Array<{
    id: number;
    prompt: string;
    options: Array<{ id: string; label: string; sports: string[] }>;
  }>;
  progress: {
    badge: string;
    status: string;
  };
  navigation: {
    previous: string;
    next: string;
    results: string;
  };
  results: {
    title: string;
    description: string;
    bestBadge: string;
    optionLabel: string;
    detailsButton: string;
    restartButton: string;
    contactButton: string;
  };
  sportDetails: Record<string, { name: string }>;
};

type CampComparisonRow = {
  kind: "header" | "detail";
  title?: string;
  subtitle?: string;
  label?: string;
  checks: [boolean, boolean, boolean, boolean];
};

type CampComparisonTranslation = {
  intro: string;
  helpTitle: string;
  sections: Array<{
    rows: CampComparisonRow[];
  }>;
};

type AcademicsTranslation = {
  placeholderTitle: string;
  placeholderSubtitle: string;
  title: string;
  description: string;
  buttons: {
    learnMore: string;
    viewProfile: string;
  };
};

type ProgramCardTranslation = {
  title: string;
  description: string;
  duration: string;
  age: string;
  sports: string[];
  highlight?: string;
  features: string[];
};

type ProgramsTranslation = {
  badge: string;
  heading: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  description: string;
  cards: ProgramCardTranslation[];
  labels: {
    sports: string;
    includes: string;
  };
  ctaButton: string;
  bottomCta: {
    heading: string;
    description: string;
    button: string;
  };
  inquiryPrefix: string;
  customInquiryLabel: string;
};

type BoardingTranslation = {
  title: string;
  description: string;
  cta: string;
  carouselAltPrefix: string;
};

type ContactHelpTranslation = {
  title: string;
  consultationCta: string;
  chatCta: string;
  inquiryType: string;
};

type ContactTranslation = {
  badge: string;
  heading: {
    pre: string;
    highlight: string;
    post: string;
  };
  description: string;
  representativeCard: {
    title: string;
    subtitle: string;
    body: string;
    guarantee: string;
  };
  methods: {
    phone: {
      title: string;
      availability: string;
      button: string;
      number: string;
    };
    email: {
      title: string;
      availability: string;
      button: string;
      address: string;
    };
  };
  hours: {
    title: string;
    weekdays: {
      label: string;
      schedules: string[];
    };
    saturday: {
      label: string;
      schedules: string[];
    };
    coverage: {
      label: string;
      regions: string;
    };
  };
  form: {
    title: string;
    description: string;
    fields: {
      firstName: { label: string; placeholder: string };
      lastName: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      country: {
        label: string;
        placeholder: string;
        options: Array<{ value: string; label: string }>;
      };
      age: { label: string; placeholder: string };
      program: {
        label: string;
        placeholder: string;
        options: Array<{ value: string; label: string }>;
      };
      sport: {
        label: string;
        placeholder: string;
        options: Array<{ value: string; label: string }>;
      };
      message: { label: string; placeholder: string };
    };
    submitButton: string;
    consent: {
      text: string;
      highlight: string;
    };
  };
  scheduleCta: {
    title: string;
    description: string;
    button: string;
  };
};

type CurrentOffersTranslation = {
  title: string;
  card: {
    heading: string;
    subheading: string;
    description: string;
    button: string;
  };
  placeholder: {
    title: string;
    subtitle: string;
  };
};

type ImgCampsTranslation = {
  heading: string;
  description: string;
  button: string;
  carouselLabels: Array<{ id: number; label: string; emoji: string }>;
};

type SportsEducationTranslation = {
  titleLines: string[];
  description: string;
};

type SportsCarouselTranslation = {
  title: string;
  description: string;
  button: string;
  sports: Array<{ id: string; name: string; description: string }>;
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

export const academicsTranslations: TranslationMap<AcademicsTranslation> = {
  es: {
    placeholderTitle: "Classroom Image Placeholder",
    placeholderSubtitle: "(Students studying)",
    title: "ACADÉMICOS",
    description:
      "Para que los estudiantes-atletas prosperen en las aulas universitarias del siglo 21 y más allá, deben estar equipados con un conjunto de habilidades que encarne los mandatos de un mundo cambiante. IMG Academy emplea las mejores prácticas que reflejan la investigación actual de aprendizaje efectivo a través de la integración estratégica de la alfabetización informacional y un plan de instrucción y currículum que dicta la inclusión de tareas de pensamiento complejo y riguroso.",
    buttons: {
      learnMore: "Saber Más",
      viewProfile: "Ver Perfil Escolar",
    },
  },
  en: {
    placeholderTitle: "Classroom Image Placeholder",
    placeholderSubtitle: "(Students studying)",
    title: "ACADEMICS",
    description:
      "For student-athletes to thrive in 21st-century university classrooms and beyond, they must be equipped with a skill set that embodies the demands of a changing world. IMG Academy employs best practices that reflect current research on effective learning through the strategic integration of information literacy and an instructional plan that ensures the inclusion of rigorous, complex thinking tasks.",
    buttons: {
      learnMore: "Learn More",
      viewProfile: "View School Profile",
    },
  },
};

export const programsTranslations: TranslationMap<ProgramsTranslation> = {
  es: {
    badge: "Programas Disponibles",
    heading: {
      prefix: "Encuentra tu",
      highlight: "camino perfecto",
      suffix: "",
    },
    description:
      "Desde programas de internado completo hasta campamentos especializados, tenemos la opción perfecta para desarrollar tu potencial deportivo y académico.",
    cards: [
      {
        title: "Programa de Internado",
        description: "Combinación perfecta de excelencia académica y entrenamiento deportivo de élite",
        duration: "Año completo",
        age: "13-18 años",
        sports: ["Tenis", "Golf", "Fútbol", "Baloncesto", "Béisbol"],
        highlight: "Más popular",
        features: [
          "Alojamiento completo",
          "Entrenamiento profesional",
          "Educación universitaria preparatoria",
        ],
      },
      {
        title: "Campamentos de Verano",
        description: "Experiencia intensiva de entrenamiento durante las vacaciones escolares",
        duration: "1-4 semanas",
        age: "8-18 años",
        sports: ["Tenis", "Golf", "Fútbol", "Atletismo", "Natación"],
        highlight: "Ideal para principiantes",
        features: ["Flexible duración", "Todos los niveles", "Certificación internacional"],
      },
      {
        title: "Academias Universitarias",
        description: "Programa postgraduado para atletas de alto rendimiento",
        duration: "1-2 años",
        age: "18+ años",
        sports: ["Tenis profesional", "Golf profesional", "Desarrollo fitness"],
        highlight: "Nivel profesional",
        features: ["Entrenamiento profesional", "Networking internacional", "Oportunidades de carrera"],
      },
    ],
    labels: {
      sports: "Deportes disponibles:",
      includes: "Incluye:",
    },
    ctaButton: "Más información",
    bottomCta: {
      heading: "¿No estás seguro qué programa elegir?",
      description:
        "Nuestro equipo de admisiones en Latinoamérica te ayudará a encontrar el programa perfecto según tus objetivos deportivos, académicos y presupuesto.",
      button: "Consulta personalizada gratuita",
    },
    inquiryPrefix: "Información sobre",
    customInquiryLabel: "Consulta Personalizada",
  },
  en: {
    badge: "Available Programs",
    heading: {
      prefix: "Find your",
      highlight: "perfect path",
      suffix: "",
    },
    description:
      "From full boarding programmes to specialist camps, we have the ideal option to develop your athletic and academic potential.",
    cards: [
      {
        title: "Boarding Program",
        description: "The perfect blend of academic excellence and elite athletic training",
        duration: "Full year",
        age: "Ages 13-18",
        sports: ["Tennis", "Golf", "Soccer", "Basketball", "Baseball"],
        highlight: "Most popular",
        features: ["Full accommodation", "Professional coaching", "College-prep academics"],
      },
      {
        title: "Summer Camps",
        description: "Intensive training experience during school holidays",
        duration: "1-4 weeks",
        age: "Ages 8-18",
        sports: ["Tennis", "Golf", "Soccer", "Track & Field", "Swimming"],
        highlight: "Ideal for beginners",
        features: ["Flexible duration", "All skill levels", "International certification"],
      },
      {
        title: "University Prep Academies",
        description: "Postgraduate programme for high-performance athletes",
        duration: "1-2 years",
        age: "Ages 18+",
        sports: ["Professional tennis", "Professional golf", "Performance training"],
        highlight: "Professional level",
        features: ["Professional coaching", "International networking", "Career opportunities"],
      },
    ],
    labels: {
      sports: "Sports available:",
      includes: "Includes:",
    },
    ctaButton: "More information",
    bottomCta: {
      heading: "Not sure which program to choose?",
      description:
        "Our Latin America admissions team will help you find the perfect program based on your athletic, academic, and budget goals.",
      button: "Free personalized consultation",
    },
    inquiryPrefix: "Information about",
    customInquiryLabel: "Personalized Consultation",
  },
};

export const currentOffersTranslations: TranslationMap<CurrentOffersTranslation> = {
  es: {
    title: "OFERTAS ACTUALES DEL CAMPO",
    card: {
      heading: "IMG ACADEMY",
      subheading: "TARIFA DE RESIDENTE DE FLORIDA",
      description:
        "Los residentes de Florida pueden ahorrar 10% en campos juveniles entre 12/29/24 - 5/25/25 y 8/17/25 - 12/28/25.",
      button: "Reserva Tu Lugar",
    },
    placeholder: {
      title: "Imagen de Atletas Placeholder",
      subtitle: "(Equipo celebrando)",
    },
  },
  en: {
    title: "CURRENT CAMP OFFERS",
    card: {
      heading: "IMG ACADEMY",
      subheading: "FLORIDA RESIDENT RATE",
      description:
        "Florida residents can save 10% on youth camps between 12/29/24 - 5/25/25 and 8/17/25 - 12/28/25.",
      button: "Reserve Your Spot",
    },
    placeholder: {
      title: "Athlete Image Placeholder",
      subtitle: "(Team celebrating)",
    },
  },
};

export const imgCampsTranslations: TranslationMap<ImgCampsTranslation> = {
  es: {
    heading: "IMG CAMPS",
    description:
      "Los campamentos deportivos de IMG Academy brindan a los atletas la plataforma para maximizar su potencial, ofreciendo opciones de programación personalizables únicas para la edad, nivel de habilidad y objetivos deportivos de cada uno. Con programas disponibles durante todo el año, los campamentos de IMG permiten a los atletas acceder a entrenamientos que pueden mejorar su juego durante casi todos los periodos de descanso en sus calendarios escolares o deportivos.",
    button: "Saber Más",
    carouselLabels: [
      { id: 1, label: "Summer Camps", emoji: "⛺" },
      { id: 2, label: "Day Camps", emoji: "🌅" },
      { id: 3, label: "Sport Specific", emoji: "🏆" },
      { id: 4, label: "Multi-Sport", emoji: "🎯" },
      { id: 5, label: "Elite Training", emoji: "💪" },
    ],
  },
  en: {
    heading: "IMG CAMPS",
    description:
      "IMG Academy sports camps give athletes the platform to maximise their potential, offering unique customisable programming options tailored to each athlete's age, skill level, and sporting goals. With programmes available year-round, IMG camps allow athletes to access training that can elevate their game during nearly every break in their academic or athletic calendars.",
    button: "Learn More",
    carouselLabels: [
      { id: 1, label: "Summer Camps", emoji: "⛺" },
      { id: 2, label: "Day Camps", emoji: "🌅" },
      { id: 3, label: "Sport Specific", emoji: "🏆" },
      { id: 4, label: "Multi-Sport", emoji: "🎯" },
      { id: 5, label: "Elite Training", emoji: "💪" },
    ],
  },
};

export const sportsEducationTranslations: TranslationMap<SportsEducationTranslation> = {
  es: {
    titleLines: ["LA DIFERENCIA", "IMG ACADEMY"],
    description:
      "En IMG Academy, los estudiantes-atletas tienen la libertad de ser más. Más que un estudiante. Más que un atleta. Con un enfoque integral que combina lo académico, lo deportivo y el desarrollo personal, IMG Academy les permite explorar sus pasiones sin tener que sacrificar una por otra. Nuestra comunidad de profesores, entrenadores, especialistas y personal demuestra una experiencia inigualable en sus áreas, trabajando unidos con el mismo objetivo: crear un entorno donde los estudiantes-atletas puedan alcanzar su máximo potencial. A pesar de provenir de culturas y orígenes diversos, nuestra comunidad comparte un lazo de dedicación y una creencia inquebrantable que inspira, une y crea vínculos para toda la vida. Si eres un estudiante-atleta apasionado, con ganas de crecer y superarte, no encontrarás un lugar mejor en el mundo para cultivar tus sueños que IMG Academy.",
  },
  en: {
    titleLines: ["THE IMG ACADEMY", "DIFFERENCE"],
    description:
      "At IMG Academy, student-athletes have the freedom to be more. More than a student. More than an athlete. With a holistic approach that combines academics, sport, and personal development, IMG Academy lets them explore every passion without sacrificing one for the other. Our community of teachers, coaches, specialists, and staff bring unmatched expertise, working together with a single goal: creating an environment where student-athletes can reach their full potential. Though they come from diverse cultures and backgrounds, our community shares a dedication and unshakable belief that inspires, unites, and builds lifelong bonds. If you are a passionate student-athlete ready to grow and push yourself, there is no better place in the world to cultivate your dreams than IMG Academy.",
  },
};

export const sportsCarouselTranslations: TranslationMap<SportsCarouselTranslation> = {
  es: {
    title: "EXPLORA NUESTROS DEPORTES",
    description:
      "Descubre nuestra amplia gama de programas deportivos diseñados para desarrollar atletas de élite",
    button: "Ver Todos Los Deportes",
    sports: [
      {
        id: "tennis",
        name: "Tenis",
        description: "Programa de entrenamiento de élite en tenis con instalaciones de clase mundial",
      },
      {
        id: "golf",
        name: "Golf",
        description: "Campo de golf de 18 hoyos diseñado para el desarrollo integral del golfista",
      },
      {
        id: "football",
        name: "Fútbol Americano",
        description: "Entrenamiento completo para futuros atletas universitarios",
      },
      {
        id: "basketball",
        name: "Baloncesto",
        description: "Desarrollo de habilidades fundamentales y avanzadas del baloncesto",
      },
      {
        id: "baseball",
        name: "Béisbol",
        description: "Programa integral de béisbol con enfoque en todas las posiciones",
      },
      {
        id: "soccer",
        name: "Fútbol",
        description: "Entrenamiento técnico y táctico del fútbol moderno",
      },
    ],
  },
  en: {
    title: "EXPLORE OUR SPORTS",
    description:
      "Discover our wide range of sports programmes designed to develop elite athletes",
    button: "View All Sports",
    sports: [
      {
        id: "tennis",
        name: "Tennis",
        description: "Elite tennis training programme with world-class facilities",
      },
      {
        id: "golf",
        name: "Golf",
        description: "18-hole golf course designed for complete player development",
      },
      {
        id: "football",
        name: "American Football",
        description: "Comprehensive training for future collegiate athletes",
      },
      {
        id: "basketball",
        name: "Basketball",
        description: "Development of both fundamental and advanced basketball skills",
      },
      {
        id: "baseball",
        name: "Baseball",
        description: "Complete baseball programme with a focus on every position",
      },
      {
        id: "soccer",
        name: "Soccer",
        description: "Modern technical and tactical football training",
      },
    ],
  },
};

export const contactTranslations: TranslationMap<ContactTranslation> = {
  es: {
    badge: "Contacto Directo",
    heading: {
      pre: "Tu representante en",
      highlight: "Latinoamérica",
      post: "",
    },
    description:
      "Como parte del programa de referencias global de IMG Academy, te ofrecemos atención personalizada en español y soporte completo durante todo el proceso de admisión.",
    representativeCard: {
      title: "Tu representante personal",
      subtitle: "Especialista en admisiones para Latinoamérica",
      body:
        "Soy [Tu Nombre], representante oficial de IMG Academy para Colombia, España, Panamá y Costa Rica. Mi trabajo es hacer que tu proceso de admisión sea lo más sencillo posible.",
      guarantee: "✨ Garantía de respuesta en menos de 24 horas",
    },
    methods: {
      phone: {
        title: "Teléfono / WhatsApp",
        availability: "Disponible de 8:00 - 20:00",
        button: "Enviar WhatsApp",
        number: "+57 123 456 7890",
      },
      email: {
        title: "Email directo",
        availability: "Respuesta en 24h",
        button: "Enviar email",
        address: "admisiones.latam@imgacademy.com",
      },
    },
    hours: {
      title: "Horarios de atención",
      weekdays: {
        label: "Lunes - Viernes",
        schedules: [
          "8:00 AM - 8:00 PM (Hora Colombia)",
          "2:00 PM - 2:00 AM (Hora España)",
        ],
      },
      saturday: {
        label: "Sábados",
        schedules: [
          "9:00 AM - 2:00 PM (Hora Colombia)",
          "3:00 PM - 8:00 PM (Hora España)",
        ],
      },
      coverage: {
        label: "Cobertura:",
        regions: "Colombia, España, Panamá, Costa Rica",
      },
    },
    form: {
      title: "Solicita información personalizada",
      description:
        "Completa este formulario y te contactaremos en menos de 24 horas con información específica sobre programas, becas y descuentos disponibles.",
      fields: {
        firstName: { label: "Nombre *", placeholder: "Tu nombre" },
        lastName: { label: "Apellidos *", placeholder: "Tus apellidos" },
        email: { label: "Email *", placeholder: "tu@email.com" },
        phone: { label: "Teléfono / WhatsApp *", placeholder: "+57 123 456 7890" },
        country: {
          label: "País *",
          placeholder: "Selecciona tu país",
          options: [
            { value: "colombia", label: "Colombia" },
            { value: "spain", label: "España" },
            { value: "panama", label: "Panamá" },
            { value: "costa-rica", label: "Costa Rica" },
            { value: "other", label: "Otro país" },
          ],
        },
        age: { label: "Edad del estudiante", placeholder: "15 años" },
        program: {
          label: "Programa de interés",
          placeholder: "¿Qué programa te interesa?",
          options: [
            { value: "boarding", label: "Programa de Internado" },
            { value: "summer", label: "Campamentos de Verano" },
            { value: "university", label: "Academias Universitarias" },
            { value: "unsure", label: "No estoy seguro" },
          ],
        },
        sport: {
          label: "Principal deporte de interés",
          placeholder: "Selecciona el deporte principal",
          options: [
            { value: "tennis", label: "Tenis" },
            { value: "golf", label: "Golf" },
            { value: "soccer", label: "Fútbol" },
            { value: "basketball", label: "Baloncesto" },
            { value: "baseball", label: "Béisbol" },
            { value: "track", label: "Atletismo" },
            { value: "multiple", label: "Múltiples deportes" },
          ],
        },
        message: {
          label: "Mensaje adicional",
          placeholder:
            "Cuéntanos sobre tus objetivos deportivos y académicos, experiencia previa, preguntas específicas, etc.",
        },
      },
      submitButton: "Enviar solicitud de información",
      consent: {
        text: "Al enviar este formulario, aceptas que nos contactemos contigo sobre los programas de IMG Academy.",
        highlight: "Tu información está 100% protegida.",
      },
    },
    scheduleCta: {
      title: "¿Prefieres una llamada personal?",
      description:
        "Agenda una llamada gratuita de 30 minutos para resolver todas tus dudas y conocer en detalle los programas que mejor se adapten a tus objetivos.",
      button: "Agendar llamada gratuita",
    },
  },
  en: {
    badge: "Direct Contact",
    heading: {
      pre: "Your representative in",
      highlight: "Latin America",
      post: "",
    },
    description:
      "As part of IMG Academy's global referral programme, we provide personalised assistance in Spanish and full support throughout the admissions process.",
    representativeCard: {
      title: "Your personal representative",
      subtitle: "Admissions specialist for Latin America",
      body:
        "I'm [Your Name], the official IMG Academy representative for Colombia, Spain, Panama, and Costa Rica. My role is to make your admissions process as seamless as possible.",
      guarantee: "✨ Response guaranteed in under 24 hours",
    },
    methods: {
      phone: {
        title: "Phone / WhatsApp",
        availability: "Available from 8:00 - 20:00",
        button: "Send WhatsApp",
        number: "+57 123 456 7890",
      },
      email: {
        title: "Direct email",
        availability: "24h response",
        button: "Send email",
        address: "admisiones.latam@imgacademy.com",
      },
    },
    hours: {
      title: "Service hours",
      weekdays: {
        label: "Monday - Friday",
        schedules: [
          "8:00 AM - 8:00 PM (Colombia Time)",
          "2:00 PM - 2:00 AM (Spain Time)",
        ],
      },
      saturday: {
        label: "Saturdays",
        schedules: [
          "9:00 AM - 2:00 PM (Colombia Time)",
          "3:00 PM - 8:00 PM (Spain Time)",
        ],
      },
      coverage: {
        label: "Coverage:",
        regions: "Colombia, Spain, Panama, Costa Rica",
      },
    },
    form: {
      title: "Request personalised information",
      description:
        "Complete this form and we'll contact you within 24 hours with specific information about programmes, scholarships, and available discounts.",
      fields: {
        firstName: { label: "First name *", placeholder: "Your first name" },
        lastName: { label: "Last name *", placeholder: "Your last name" },
        email: { label: "Email *", placeholder: "your@email.com" },
        phone: { label: "Phone / WhatsApp *", placeholder: "+57 123 456 7890" },
        country: {
          label: "Country *",
          placeholder: "Select your country",
          options: [
            { value: "colombia", label: "Colombia" },
            { value: "spain", label: "Spain" },
            { value: "panama", label: "Panama" },
            { value: "costa-rica", label: "Costa Rica" },
            { value: "other", label: "Other country" },
          ],
        },
        age: { label: "Student age", placeholder: "15 years old" },
        program: {
          label: "Programme of interest",
          placeholder: "Which programme interests you?",
          options: [
            { value: "boarding", label: "Boarding Programme" },
            { value: "summer", label: "Summer Camps" },
            { value: "university", label: "University Academies" },
            { value: "unsure", label: "I'm not sure" },
          ],
        },
        sport: {
          label: "Primary sport of interest",
          placeholder: "Select the main sport",
          options: [
            { value: "tennis", label: "Tennis" },
            { value: "golf", label: "Golf" },
            { value: "soccer", label: "Soccer" },
            { value: "basketball", label: "Basketball" },
            { value: "baseball", label: "Baseball" },
            { value: "track", label: "Track & Field" },
            { value: "multiple", label: "Multiple sports" },
          ],
        },
        message: {
          label: "Additional message",
          placeholder:
            "Tell us about your athletic and academic goals, previous experience, specific questions, etc.",
        },
      },
      submitButton: "Send information request",
      consent: {
        text: "By submitting this form, you agree to be contacted about IMG Academy programmes.",
        highlight: "Your information is 100% protected.",
      },
    },
    scheduleCta: {
      title: "Prefer a personal call?",
      description:
        "Schedule a free 30-minute call to answer all your questions and learn more about the programmes that best fit your goals.",
      button: "Schedule a free call",
    },
  },
};

export const boardingTranslations: TranslationMap<BoardingTranslation> = {
  es: {
    title: "BOARDING SCHOOL",
    description:
      "Ninguna escuela en el mundo puede igualar a IMG Academy en cuanto a su programación y experiencia que prepara intencionalmente a los estudiantes-atletas para el éxito universitario y la vida más allá.",
    cta: "Saber Más",
    carouselAltPrefix: "IMG Academy Internado",
  },
  en: {
    title: "BOARDING SCHOOL",
    description:
      "No other school in the world matches IMG Academy's programming and experience designed to intentionally prepare student-athletes for college success and life beyond.",
    cta: "Learn More",
    carouselAltPrefix: "IMG Academy Boarding",
  },
};

export const contactHelpTranslations: TranslationMap<ContactHelpTranslation> = {
  es: {
    title: "¿NECESITAS MÁS AYUDA?",
    consultationCta: "SOLICITAR\nCONSULTA",
    chatCta: "CHATEAR\nCON NOSOTROS",
    inquiryType: "Contacto General",
  },
  en: {
    title: "NEED MORE HELP?",
    consultationCta: "REQUEST\nCONSULTATION",
    chatCta: "CHAT\nWITH US",
    inquiryType: "General Inquiry",
  },
};

export const discountsTranslations: TranslationMap<DiscountsTranslation> = {
  es: {
    badge: "Ofertas Exclusivas",
    heading: {
      prefix: "",
      highlight: "Descuentos especiales",
      suffix: "para Latinoamérica",
    },
    description:
      "Como parte del programa de referencias global de IMG Academy, ofrecemos descuentos exclusivos y beneficios adicionales para estudiantes de nuestra región.",
    offers: [
      {
        title: "Descuento Latinoamérica",
        discount: "15%",
        description:
          "Descuento exclusivo para estudiantes de Colombia, España, Panamá y Costa Rica",
        validUntil: "31 de Marzo, 2025",
        conditions: [
          "Aplicable a todos los programas",
          "Válido para nuevos estudiantes",
          "No acumulable con otras ofertas",
        ],
        highlight: "Más popular",
        bgColor: "bg-gradient-hero",
      },
      {
        title: "Hermanos/Familia",
        discount: "20%",
        description:
          "Descuento adicional cuando dos o más hermanos se inscriben en el mismo año",
        validUntil: "Todo el año",
        conditions: [
          "Mínimo 2 hermanos",
          "Inscripción simultánea",
          "Aplicable al segundo hermano en adelante",
        ],
        highlight: "Ahorro familiar",
        bgColor: "bg-gradient-accent",
      },
      {
        title: "Inscripción Temprana",
        discount: "10%",
        description:
          "Reserva tu lugar con anticipación y obtén un descuento adicional",
        validUntil: "15 de Febrero, 2025",
        conditions: [
          "Reserva antes del 15 de febrero",
          "Pago del 50% al momento de reserva",
          "Para programas de verano 2025",
        ],
        highlight: "Tiempo limitado",
        bgColor: "bg-primary",
      },
    ],
    labels: {
      validUntil: "Válido hasta:",
      conditions: "Condiciones:",
    },
    buttons: {
      apply: "Aplicar descuento",
    },
    benefits: {
      title: "Beneficios adicionales incluidos",
      description:
        "Además de los descuentos, como parte de nuestro programa regional recibes estos beneficios sin costo adicional:",
      items: [
        "Proceso de admisión sin costo adicional",
        "Asesoría personalizada en español",
        "Soporte durante todo el proceso",
        "Conexión directa con familias latinoamericanas",
        "Asistencia con visas y documentación",
        "Seguimiento académico y deportivo continuo",
      ],
      ctaButton: "Solicitar información completa",
    },
    finalCta: {
      title: "¿Listo para comenzar tu aventura en IMG Academy?",
      description:
        "Contáctanos hoy mismo para una consulta personalizada gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos deportivos y académicos con los mejores descuentos disponibles.",
      button: "Contactar ahora",
    },
  },
  en: {
    badge: "Exclusive Offers",
    heading: {
      prefix: "",
      highlight: "Special discounts",
      suffix: "for Latin America",
    },
    description:
      "As part of IMG Academy's global referral programme, we provide exclusive discounts and additional benefits for students from our region.",
    offers: [
      {
        title: "Latin America Discount",
        discount: "15%",
        description:
          "Exclusive discount for students from Colombia, Spain, Panama, and Costa Rica",
        validUntil: "March 31, 2025",
        conditions: [
          "Applicable to all programmes",
          "Valid for new students",
          "Cannot be combined with other offers",
        ],
        highlight: "Most popular",
        bgColor: "bg-gradient-hero",
      },
      {
        title: "Siblings/Family",
        discount: "20%",
        description:
          "Additional discount when two or more siblings enrol in the same year",
        validUntil: "All year",
        conditions: [
          "Minimum of two siblings",
          "Simultaneous enrolment",
          "Applies to the second sibling onward",
        ],
        highlight: "Family savings",
        bgColor: "bg-gradient-accent",
      },
      {
        title: "Early Registration",
        discount: "10%",
        description: "Reserve your spot early and receive an additional discount",
        validUntil: "February 15, 2025",
        conditions: [
          "Book before 15 February",
          "50% payment required at reservation",
          "For summer 2025 programmes",
        ],
        highlight: "Limited time",
        bgColor: "bg-primary",
      },
    ],
    labels: {
      validUntil: "Valid until:",
      conditions: "Conditions:",
    },
    buttons: {
      apply: "Apply discount",
    },
    benefits: {
      title: "Additional benefits included",
      description:
        "Beyond the discounts, our regional programme includes these complimentary benefits:",
      items: [
        "Admissions process without extra fees",
        "Personalised support in Spanish",
        "Guidance throughout the entire process",
        "Direct connection with Latin American families",
        "Visa and documentation assistance",
        "Ongoing academic and athletic follow-up",
      ],
      ctaButton: "Request complete information",
    },
    finalCta: {
      title: "Ready to begin your IMG Academy adventure?",
      description:
        "Contact us today for a free personalised consultation and discover how we can help you reach your athletic and academic goals with the best available discounts.",
      button: "Contact now",
    },
  },
};

export const bookingInfoTranslations: TranslationMap<BookingInfoTranslation> = {
  es: {
    title: "LO QUE LAS FAMILIAS DEBEN SABER ANTES DE RESERVAR",
    items: [
      "El registro del campo cierra 10 días antes del inicio de cada campo.",
      "El check-in del campo es el domingo, y el check-out es el sábado (excepto para algunos campos de vacaciones y torneos).",
      "Los campos están disponibles durante todo el año, siendo enero-marzo, junio-agosto y diciembre los meses más populares entre los atletas. Es importante reservar con al menos 6 meses de anticipación para asegurar tu lugar y garantizar disponibilidad.",
      "Los campistas pueden extender su estadía en el campo mientras estén en el campus, pendiente de disponibilidad de internado y entrenamiento deportivo.",
      "Los precios pueden aumentar mientras más cerca esté la fecha de reserva, así que reserva temprano para ahorrar.",
      "Los campistas de múltiples semanas típicamente reservan una de nuestras excursiones supervisadas fuera del campus para relajarse y disfrutar tiempo con otros campistas en algunas de nuestras atracciones locales.",
      "Opciones de campo reembolsables están disponibles. Si compras un paquete reembolsable, IMGA reembolsará la cantidad que pagaste para comprar el paquete, menos una tarifa de servicio igual al 2.5% del monto total pagado por dicho paquete, siempre que canceles el paquete al menos 48 horas antes de tu fecha programada original de llegada.",
    ],
  },
  en: {
    title: "WHAT FAMILIES SHOULD KNOW BEFORE BOOKING",
    items: [
      "Camp registration closes 10 days before each start date.",
      "Camp check-in is on Sunday and check-out is on Saturday (except for select holiday camps and tournaments).",
      "Camps run year-round, with January-March, June-August, and December being the most popular months. Reserve at least 6 months in advance to secure your spot and ensure availability.",
      "Campers can extend their stay while on campus, subject to boarding and training availability.",
      "Prices may increase as the start date approaches, so book early to save.",
      "Multi-week campers often join our supervised off-campus excursions to relax and enjoy time with other campers at local attractions.",
      "Refundable camp options are available. If you purchase a refundable package, IMG will refund the amount you paid minus a service fee equal to 2.5% of the total amount paid, provided you cancel at least 48 hours before your original arrival date.",
    ],
  },
};

export const facilitiesTranslations: TranslationMap<FacilitiesTranslation> = {
  es: {
    badge: "Instalaciones de Clase Mundial",
    heading: {
      pre: "Entrena en las",
      highlight: "mejores instalaciones",
      post: "del mundo",
    },
    description:
      "IMG Academy cuenta con más de 600 acres de instalaciones deportivas y académicas de última generación en Bradenton, Florida, diseñadas para maximizar el potencial de cada estudiante-atleta.",
    heroButton: "Tour virtual de las instalaciones",
    facilities: [
      {
        title: "Centro de Tenis",
        description: "55 canchas de tenis de superficie múltiple",
        features: [
          "Canchas Hard Court",
          "Canchas de Arcilla",
          "Iluminación LED",
          "Sistema de video análisis",
        ],
      },
      {
        title: "Campos de Golf",
        description: "18 hoyos de campeonato diseñados por profesionales",
        features: [
          "Campo regulación PGA",
          "Driving range cubierto",
          "Putting greens",
          "Simuladores indoor",
        ],
      },
      {
        title: "Instalaciones de Fútbol",
        description: "Múltiples campos de entrenamiento de clase mundial",
        features: [
          "Césped natural y artificial",
          "Sistema de riego automatizado",
          "Iluminación profesional",
          "Áreas de recuperación",
        ],
      },
      {
        title: "Centro Académico",
        description: "Aulas equipadas con tecnología de punta",
        features: [
          "Aulas inteligentes",
          "Laboratorios de ciencias",
          "Biblioteca digital",
          "Espacios de estudio",
        ],
      },
      {
        title: "Centro de Rendimiento",
        description: "Instalaciones de acondicionamiento físico de élite",
        features: [
          "Gimnasio de última generación",
          "Piscina olímpica",
          "Centro de rehabilitación",
          "Análisis biomecánico",
        ],
      },
      {
        title: "Residencias",
        description: "Alojamiento cómodo y seguro para estudiantes internacionales",
        features: [
          "Habitaciones modernas",
          "Áreas comunes",
          "Seguridad 24/7",
          "Servicio de comidas",
        ],
      },
    ],
    facilityBadge: "Élite",
    stats: {
      title: "Instalaciones en números",
      description:
        "Cada detalle de nuestras instalaciones ha sido diseñado pensando en la excelencia deportiva y académica.",
      items: [
        { value: "600+", label: "Acres de instalaciones" },
        { value: "55", label: "Canchas de tenis" },
        { value: "18", label: "Hoyos de golf" },
        { value: "24/7", label: "Acceso a instalaciones" },
      ],
    },
    location: {
      title: "Ubicación privilegiada",
      description:
        "Ubicada en Bradenton, Florida, IMG Academy se encuentra a solo 45 minutos del Aeropuerto Internacional de Tampa y a 1 hora de Orlando, ofreciendo fácil acceso desde cualquier parte del mundo.",
      bullets: [
        "Clima subtropical ideal para entrenar todo el año",
        "Cerca de aeropuertos internacionales",
        "Comunidad segura y amigable",
      ],
    },
    explore: {
      title: "Explora virtualmente",
      description:
        "Realiza un recorrido virtual por nuestras instalaciones desde la comodidad de tu hogar. Conoce cada detalle de lo que será tu nuevo hogar deportivo y académico.",
      actions: [
        { icon: "play", label: "Tour virtual 360°" },
        { icon: "camera", label: "Galería de fotos" },
        { icon: "map", label: "Mapa interactivo" },
      ],
    },
  },
  en: {
    badge: "World-Class Facilities",
    heading: {
      pre: "Train in the",
      highlight: "best facilities",
      post: "in the world",
    },
    description:
      "IMG Academy spans more than 600 acres of state-of-the-art athletic and academic facilities in Bradenton, Florida, all designed to maximise each student-athlete's potential.",
    heroButton: "Virtual facilities tour",
    facilities: [
      {
        title: "Tennis Center",
        description: "55 multi-surface tennis courts",
        features: [
          "Hard courts",
          "Clay courts",
          "LED lighting",
          "Video analysis system",
        ],
      },
      {
        title: "Golf Complex",
        description: "18-hole championship course designed by professionals",
        features: [
          "PGA-regulation course",
          "Covered driving range",
          "Putting greens",
          "Indoor simulators",
        ],
      },
      {
        title: "Soccer Facilities",
        description: "Multiple world-class training fields",
        features: [
          "Natural and artificial turf",
          "Automated irrigation system",
          "Professional lighting",
          "Recovery areas",
        ],
      },
      {
        title: "Academic Center",
        description: "Classrooms equipped with cutting-edge technology",
        features: [
          "Smart classrooms",
          "Science laboratories",
          "Digital library",
          "Study spaces",
        ],
      },
      {
        title: "Performance Center",
        description: "Elite strength and conditioning facilities",
        features: [
          "State-of-the-art gym",
          "Olympic-size pool",
          "Rehabilitation centre",
          "Biomechanical analysis",
        ],
      },
      {
        title: "Residences",
        description: "Comfortable and secure housing for international students",
        features: [
          "Modern rooms",
          "Common areas",
          "24/7 security",
          "Meal service",
        ],
      },
    ],
    facilityBadge: "Elite",
    stats: {
      title: "Facilities by the numbers",
      description:
        "Every detail of our campus is designed with athletic and academic excellence in mind.",
      items: [
        { value: "600+", label: "Acres of facilities" },
        { value: "55", label: "Tennis courts" },
        { value: "18", label: "Golf holes" },
        { value: "24/7", label: "Facility access" },
      ],
    },
    location: {
      title: "Prime location",
      description:
        "Located in Bradenton, Florida, IMG Academy is only 45 minutes from Tampa International Airport and 1 hour from Orlando, providing easy access from anywhere in the world.",
      bullets: [
        "Subtropical climate ideal for year-round training",
        "Close to international airports",
        "Safe and welcoming community",
      ],
    },
    explore: {
      title: "Explore virtually",
      description:
        "Take a virtual tour of our campus from the comfort of your home. Discover every detail of what will become your new athletic and academic home.",
      actions: [
        { icon: "play", label: "360° virtual tour" },
        { icon: "camera", label: "Photo gallery" },
        { icon: "map", label: "Interactive map" },
      ],
    },
  },
};

export const campDetailsTranslations: TranslationMap<CampDetailsTranslation> = {
  es: {
    camps: [
      {
        title: "IMG ACADEMY CAMP",
        subtitle: "Edades 13-18",
        icon: "🏃",
        features: [
          "CAMPOS DEPORTIVOS SEMANALES",
          "En nuestro campus ubicado en Bradenton, Florida",
        ],
        description:
          "La reconocida metodología de entrenamiento de IMG Academy combina instrucción deportiva de élite con trabajo en grupo de fuerza, velocidad y rendimiento mental.",
        campInfo:
          "Nuestro programa base que incluye entrenamientos deportivos especializados, sesiones de fuerza y acondicionamiento, desarrollo mental, y acceso completo a nuestras instalaciones de clase mundial. Incluye dos sesiones diarias de entrenamiento específico por deporte, desarrollo de habilidades técnicas y tácticas, y participación en juegos y competencias.",
        bgColor: "bg-gray-100",
      },
      {
        title: "TOTAL ATHLETE CAMP",
        subtitle: "Edades 13-18",
        icon: "🏃",
        iconSecond: "💪",
        features: [
          "ENTRENAMIENTO DE RENDIMIENTO",
          "Campo con un enfoque semanal de entrenamiento preseleccionado adicional",
        ],
        description:
          "Diseñado para atletas que buscan potenciar su fuerza, velocidad, resistencia mental u otras áreas clave de rendimiento. Cada semana eliges una especialización, con entrenamientos diarios.",
        bgColor: "bg-blue-400",
      },
      {
        title: "BREAKTHROUGH CAMP",
        subtitle: "Edades 13-18",
        icon: "🏃",
        iconSecond: "📋",
        features: [
          "ENTRENAMIENTO PERSONALIZADO",
          "Campo con una sesión diaria adicional de entrenamiento en un entorno más pequeño",
        ],
        description:
          "Pensado para atletas que desean un entrenamiento más personalizado y enfocado en perfeccionar aspectos específicos de su juego.",
        campInfo:
          "Experiencia premium con entrenamientos personalizados 1:1, análisis biomecánico detallado, plan de nutrición individualizado y seguimiento especializado. Los atletas reciben atención individualizada de nuestros entrenadores expertos para desarrollar técnicas específicas y corregir aspectos técnicos de su rendimiento deportivo.",
        bgColor: "bg-blue-600",
      },
      {
        title: "GAME CHANGER CAMP",
        subtitle: "Edades 13-18",
        icon: "🏃",
        iconSecond: "💪",
        iconThird: "📋",
        features: [
          "PAQUETE DE ENTRENAMIENTO DEFINITIVO",
          "Campo con entrenamiento de rendimiento adicional y sesiones de entrenamiento personalizado",
        ],
        description:
          "Creado para atletas que buscan la experiencia de entrenamiento definitiva para transformar todos los aspectos de su desarrollo y rendimiento.",
        campInfo:
          "Nuestra experiencia más exclusiva que combina entrenamientos con atletas profesionales, acceso VIP a instalaciones, sesiones de liderazgo ejecutivo y networking con scouts universitarios. Incluye todos los beneficios de los programas anteriores más oportunidades únicas de desarrollo profesional y conexiones en el mundo deportivo de élite.",
        bgColor: "bg-lime-400",
      },
    ],
    buttonLabel: "Contactar Ahora",
    inquiryType: "Reserva de Campo",
  },
  en: {
    camps: [
      {
        title: "IMG ACADEMY CAMP",
        subtitle: "Ages 13-18",
        icon: "🏃",
        features: [
          "WEEKLY SPORTS CAMPS",
          "On our campus in Bradenton, Florida",
        ],
        description:
          "IMG Academy's renowned training methodology blends elite sport instruction with group work focused on strength, speed, and mental performance.",
        campInfo:
          "Our core programme includes specialised sport training, strength and conditioning sessions, mental performance development, and full access to our world-class facilities. Athletes receive two sport-specific training sessions per day, technical and tactical skill development, and participate in games and competitions.",
        bgColor: "bg-gray-100",
      },
      {
        title: "TOTAL ATHLETE CAMP",
        subtitle: "Ages 13-18",
        icon: "🏃",
        iconSecond: "💪",
        features: [
          "PERFORMANCE TRAINING",
          "Camp with an additional preselected performance focus each week",
        ],
        description:
          "Designed for athletes who want to boost strength, speed, mental toughness, or other key performance areas. Each week you choose a specialisation with daily training.",
        bgColor: "bg-blue-400",
      },
      {
        title: "BREAKTHROUGH CAMP",
        subtitle: "Ages 13-18",
        icon: "🏃",
        iconSecond: "📋",
        features: [
          "PERSONALISED COACHING",
          "Camp with an additional daily training session in a smaller setting",
        ],
        description:
          "Ideal for athletes seeking more individualised training focused on refining specific aspects of their game.",
        campInfo:
          "A premium experience featuring 1:1 personalised sessions, detailed biomechanical analysis, tailored nutrition plans, and specialised follow-up. Athletes receive individual attention from expert coaches to build specific techniques and refine technical aspects of their performance.",
        bgColor: "bg-blue-600",
      },
      {
        title: "GAME CHANGER CAMP",
        subtitle: "Ages 13-18",
        icon: "🏃",
        iconSecond: "💪",
        iconThird: "📋",
        features: [
          "ULTIMATE TRAINING PACKAGE",
          "Camp with additional performance training and personalised coaching sessions",
        ],
        description:
          "Created for athletes who want the ultimate training experience to transform every aspect of their development and performance.",
        campInfo:
          "Our most exclusive experience combines training with professional athletes, VIP facility access, leadership sessions, and networking with university scouts. Includes all benefits of the previous programmes plus unique professional development opportunities and elite sports connections.",
        bgColor: "bg-lime-400",
      },
    ],
    buttonLabel: "Contact Now",
    inquiryType: "Camp Reservation",
  },
};

export const campsPageTranslations: TranslationMap<CampsPageTranslation> = {
  es: {
    heroTitle: ["Campamentos", "IMG Academy"],
  },
  en: {
    heroTitle: ["IMG Academy", "Camps"],
  },
};

export const loyaltyBenefitsTranslations: TranslationMap<LoyaltyBenefitsTranslation> = {
  es: {
    badge: "Programa de lealtad",
    title: "Beneficios para familias recurrentes",
    description:
      "Premiamos la confianza continua de las familias que regresan a IMG Academy año tras año.",
    cards: [
      {
        title: "Créditos acumulables",
        description:
          "Aprovecha descuentos progresivos en nuevas inscripciones cuando hermanos o temporadas adicionales se confirmen en el mismo año.",
        items: [
          "Aplica para campamentos y programas de internado",
          "Se puede transferir entre miembros de la misma familia",
        ],
      },
      {
        title: "Acceso preferencial",
        description:
          "Reserva con prioridad las fechas más solicitadas y asegura tu lugar en programas con cupo limitado.",
        items: [
          "Ventanas exclusivas de inscripción anticipada",
          "Recordatorios personalizados antes de abrir inscripciones",
        ],
      },
      {
        title: "Acompañamiento continuo",
        description:
          "Recibe seguimiento dedicado del mismo asesor para mantener la experiencia IMG sin complicaciones.",
        items: [
          "Actualizaciones sobre documentos y requisitos vigentes",
          "Coordinación directa con el equipo académico y deportivo",
        ],
      },
    ],
    note: "Aplican condiciones especiales para reservas confirmadas a partir de 2024.",
  },
  en: {
    badge: "Loyalty programme",
    title: "Benefits for returning families",
    description:
      "We reward the continued trust of families who come back to IMG Academy year after year.",
    cards: [
      {
        title: "Stackable credits",
        description:
          "Unlock progressive discounts on new registrations when siblings or additional weeks are confirmed within the same season.",
        items: [
          "Applies to camps and boarding programmes",
          "Transferable between members of the same family",
        ],
      },
      {
        title: "Priority access",
        description:
          "Secure the most sought-after dates first and guarantee spots in programmes with limited availability.",
        items: [
          "Exclusive early-enrolment windows",
          "Personalised reminders before enrolment opens",
        ],
      },
      {
        title: "Ongoing guidance",
        description:
          "Work with the same advisor every season to keep the IMG experience smooth and stress-free.",
        items: [
          "Updates on current documentation and requirements",
          "Direct coordination with the academic and athletics teams",
        ],
      },
    ],
    note: "Special conditions apply to reservations confirmed from 2024 onwards.",
  },
};

export const groupBenefitsTranslations: TranslationMap<GroupBenefitsTranslation> = {
  es: {
    badge: "Programas para grupos",
    title: "Ventajas para academias y equipos",
    description:
      "Diseñamos experiencias personalizadas para delegaciones deportivas, colegios y clubes que visitan IMG Academy juntos.",
    cards: [
      {
        title: "Descuentos escalonados",
        description:
          "Obtén tarifas preferenciales según el tamaño del grupo y la duración de la estadía.",
        items: [
          "Desde 8 participantes confirmados",
          "Opciones con pensión completa y transporte interno",
        ],
      },
      {
        title: "Programas a medida",
        description:
          "Creamos calendarios que combinan entrenamientos, talleres académicos y actividades de integración.",
        items: [
          "Evaluaciones físicas y mentales grupales",
          "Sesiones exclusivas con entrenadores principales",
        ],
      },
      {
        title: "Logística integral",
        description:
          "Coordinamos alojamiento, alimentación, transporte y seguros para que solo te enfoques en el rendimiento.",
        items: [
          "Soporte bilingüe 24/7 para delegaciones",
          "Planes especiales para acompañantes y staff técnico",
        ],
      },
    ],
    support: {
      title: "Contacta a nuestro equipo especializado",
      description:
        "Te guiaremos paso a paso para diseñar la experiencia ideal para tu grupo.",
    },
  },
  en: {
    badge: "Group programmes",
    title: "Advantages for academies and teams",
    description:
      "We customise experiences for sports delegations, schools, and clubs travelling together to IMG Academy.",
    cards: [
      {
        title: "Tiered discounts",
        description:
          "Access preferential rates based on group size and length of stay.",
        items: [
          "Available from 8 confirmed participants",
          "Full-board and on-campus transport options",
        ],
      },
      {
        title: "Tailored schedules",
        description:
          "Combine training sessions, academic workshops, and team-building activities in one bespoke plan.",
        items: [
          "Group physical and mental performance assessments",
          "Exclusive sessions with head coaches",
        ],
      },
      {
        title: "End-to-end logistics",
        description:
          "We coordinate housing, meals, transport, and insurance so you can focus solely on performance.",
        items: [
          "24/7 bilingual support for delegations",
          "Special arrangements for chaperones and staff",
        ],
      },
    ],
    support: {
      title: "Speak with our dedicated team",
      description:
        "We will guide you step by step to design the ideal experience for your group.",
    },
  },
};

export const sportsPageTranslations: TranslationMap<SportsPageTranslation> = {
  es: {
    hero: {
      title: "Programas Deportivos",
      description: "Elige un deporte para ver información detallada del programa",
    },
    sports: [
      {
        id: "tennis",
        name: "Tenis",
        description:
          "Programa de entrenamiento de élite en tenis con instalaciones de clase mundial",
        highlights: [
          "12 canchas de tenis",
          "Entrenadores profesionales",
          "Análisis de video",
          "Preparación física especializada",
        ],
        buttonLabel: "Ver Programa Completo",
        imageAlt: "Instalaciones de Tenis",
      },
      {
        id: "golf",
        name: "Golf",
        description:
          "Campo de golf de 18 hoyos diseñado para el desarrollo integral del golfista",
        highlights: [
          "Campo de 18 hoyos",
          "Driving range",
          "Putting green",
          "Short game area",
        ],
        buttonLabel: "Ver Programa Completo",
        imageAlt: "Instalaciones de Golf",
      },
      {
        id: "soccer",
        name: "Fútbol",
        description: "Entrenamiento técnico y táctico del fútbol moderno",
        highlights: [
          "Campos de césped natural",
          "Entrenamiento táctico",
          "Preparación física",
          "Scout universitario",
        ],
        buttonLabel: "Ver Programa Completo",
        imageAlt: "Instalaciones de Fútbol",
      },
      {
        id: "basketball",
        name: "Baloncesto",
        description:
          "Desarrollo de habilidades fundamentales y avanzadas del baloncesto",
        highlights: [
          "Gimnasios profesionales",
          "Entrenamiento individual",
          "Scrimmages competitivos",
          "Desarrollo mental",
        ],
        buttonLabel: "Ver Programa Completo",
        imageAlt: "Instalaciones de Baloncesto",
      },
      {
        id: "volleyball",
        name: "Voleibol",
        description:
          "Programa integral de voleibol con técnicas avanzadas y trabajo en equipo",
        highlights: [
          "Canchas cubiertas",
          "Entrenamiento técnico",
          "Trabajo en equipo",
          "Competencias universitarias",
        ],
        buttonLabel: "Ver Programa Completo",
        imageAlt: "Instalaciones de Voleibol",
      },
      {
        id: "track",
        name: "Atletismo",
        description:
          "Entrenamiento en pista y campo para todas las disciplinas",
        highlights: [
          "Pista de 400m",
          "Zona de saltos",
          "Lanzamientos",
          "Preparación olímpica",
        ],
        buttonLabel: "Ver Programa Completo",
        imageAlt: "Instalaciones de Atletismo",
      },
      {
        id: "performance",
        name: "Performance",
        description:
          "Entrenamiento de alto rendimiento para optimizar el desempeño atlético",
        highlights: [
          "Análisis biomecánico",
          "Preparación física",
          "Recuperación deportiva",
          "Nutrición especializada",
        ],
        buttonLabel: "Ver Programa Completo",
        imageAlt: "Instalaciones de Performance",
      },
      {
        id: "football",
        name: "Fútbol Americano",
        description:
          "Entrenamiento completo para futuros atletas universitarios",
        highlights: [
          "Campo de práctica",
          "Sala de pesas",
          "Análisis táctico",
          "Preparación para becas",
        ],
        buttonLabel: "Ver Programa Completo",
        imageAlt: "Instalaciones de Fútbol Americano",
      },
      {
        id: "baseball",
        name: "Béisbol",
        description:
          "Programa integral de béisbol con enfoque en todas las posiciones",
        highlights: [
          "Diamantes de práctica",
          "Jaulas de bateo",
          "Análisis biomecánico",
          "Desarrollo de lanzadores",
        ],
        buttonLabel: "Ver Programa Completo",
        imageAlt: "Instalaciones de Béisbol",
      },
      {
        id: "softball",
        name: "Softball",
        description:
          "Desarrollo completo en softball con enfoque en habilidades específicas",
        highlights: [
          "Diamantes especializados",
          "Técnica de bateo",
          "Pitcheo femenino",
          "Estrategia de juego",
        ],
        buttonLabel: "Ver Programa Completo",
        imageAlt: "Instalaciones de Softball",
      },
      {
        id: "lacrosse",
        name: "Lacrosse",
        description:
          "Desarrollo completo en lacrosse masculino y femenino",
        highlights: [
          "Campos especializados",
          "Técnica avanzada",
          "Estrategia de juego",
          "Preparación universitaria",
        ],
        buttonLabel: "Ver Programa Completo",
        imageAlt: "Instalaciones de Lacrosse",
      },
      {
        id: "adults",
        name: "Programas de Adultos",
        description:
          "Programas especializados para atletas adultos que buscan mejorar su rendimiento",
        highlights: [
          "Entrenamientos personalizados",
          "Flexibilidad de horarios",
          "Preparación física",
          "Programas corporativos",
        ],
        buttonLabel: "Ver Programa Completo",
        imageAlt: "Instalaciones de Programas de Adultos",
      },
    ],
    cta: {
      title: "¿Listo para Comenzar tu Camino?",
      description:
        "Contacta a nuestro representante en Latinoamérica para obtener información personalizada sobre nuestros programas deportivos.",
      button: "Contactar Ahora",
    },
  },
  en: {
    hero: {
      title: "Sports Programs",
      description: "Choose a sport to view detailed program information",
    },
    sports: [
      {
        id: "tennis",
        name: "Tennis",
        description:
          "Elite tennis training program with world-class facilities",
        highlights: [
          "12 tennis courts",
          "Professional coaches",
          "Video analysis",
          "Specialized physical training",
        ],
        buttonLabel: "View Full Program",
        imageAlt: "IMG Academy Tennis Facilities",
      },
      {
        id: "golf",
        name: "Golf",
        description:
          "18-hole golf course designed for complete player development",
        highlights: [
          "18-hole course",
          "Driving range",
          "Putting green",
          "Short game area",
        ],
        buttonLabel: "View Full Program",
        imageAlt: "IMG Academy Golf Facilities",
      },
      {
        id: "soccer",
        name: "Soccer",
        description:
          "Modern soccer training focused on technical and tactical excellence",
        highlights: [
          "Natural grass fields",
          "Tactical training",
          "Physical conditioning",
          "College scouting",
        ],
        buttonLabel: "View Full Program",
        imageAlt: "IMG Academy Soccer Facilities",
      },
      {
        id: "basketball",
        name: "Basketball",
        description:
          "Comprehensive basketball program with advanced skill development",
        highlights: [
          "Professional gyms",
          "Individual training",
          "Competitive scrimmages",
          "Mental development",
        ],
        buttonLabel: "View Full Program",
        imageAlt: "IMG Academy Basketball Facilities",
      },
      {
        id: "volleyball",
        name: "Volleyball",
        description:
          "Immersive volleyball program with advanced techniques and team play",
        highlights: [
          "Indoor courts",
          "Technical training",
          "Teamwork focus",
          "Collegiate competition",
        ],
        buttonLabel: "View Full Program",
        imageAlt: "IMG Academy Volleyball Facilities",
      },
      {
        id: "track",
        name: "Track & Field",
        description:
          "Track and field training for every discipline throughout the year",
        highlights: [
          "400m track",
          "Jump zones",
          "Throwing areas",
          "Olympic preparation",
        ],
        buttonLabel: "View Full Program",
        imageAlt: "IMG Academy Track & Field Facilities",
      },
      {
        id: "performance",
        name: "Performance",
        description:
          "High-performance training focused on complete athletic development",
        highlights: [
          "Biomechanical analysis",
          "Physical conditioning",
          "Sports recovery",
          "Specialized nutrition",
        ],
        buttonLabel: "View Full Program",
        imageAlt: "IMG Academy Performance Facilities",
      },
      {
        id: "football",
        name: "Football",
        description:
          "Complete American football training for future collegiate athletes",
        highlights: [
          "Practice field",
          "Weight room",
          "Tactical analysis",
          "Scholarship preparation",
        ],
        buttonLabel: "View Full Program",
        imageAlt: "IMG Academy Football Facilities",
      },
      {
        id: "baseball",
        name: "Baseball",
        description:
          "Comprehensive baseball program focused on every position",
        highlights: [
          "Practice diamonds",
          "Batting cages",
          "Biomechanical analysis",
          "Pitcher development",
        ],
        buttonLabel: "View Full Program",
        imageAlt: "IMG Academy Baseball Facilities",
      },
      {
        id: "softball",
        name: "Softball",
        description:
          "Complete softball development with position-specific focus",
        highlights: [
          "Specialized diamonds",
          "Hitting technique",
          "Female pitching",
          "Game strategy",
        ],
        buttonLabel: "View Full Program",
        imageAlt: "IMG Academy Softball Facilities",
      },
      {
        id: "lacrosse",
        name: "Lacrosse",
        description:
          "Elite lacrosse program combining individual skill and team strategy",
        highlights: [
          "Specialized fields",
          "Advanced technique",
          "Game strategy",
          "College preparation",
        ],
        buttonLabel: "View Full Program",
        imageAlt: "IMG Academy Lacrosse Facilities",
      },
      {
        id: "adults",
        name: "Adult Programs",
        description:
          "Specialized programs for adult athletes seeking to elevate performance",
        highlights: [
          "Personalized training",
          "Flexible schedules",
          "Physical conditioning",
          "Corporate programs",
        ],
        buttonLabel: "View Full Program",
        imageAlt: "IMG Academy Adult Programs Facilities",
      },
    ],
    cta: {
      title: "Ready to Start Your Journey?",
      description:
        "Contact our Latin America representative for personalized guidance on our sports programs.",
      button: "Contact Now",
    },
  },
};

export const sportDetailTranslations: TranslationMap<SportDetailTranslation> = {
  es: {
    backLabel: "Volver a Deportes",
    notFound: "Deporte no encontrado - SportId: {{sportId}}",
    inquiry: {
      titleTemplate: "¿Interesado en nuestro programa de {{sport}}?",
      description:
        "Obtén más información personalizada sobre nuestros campamentos y programas.",
      button: "Solicitar Más Información",
      inquiryTypeTemplate: "Información sobre {{sport}}",
    },
    programs: {
      tennis: {
        name: "Tenis",
        description: `El programa de tenis de IMG Academy se ha construido sobre más de 40 años de resultados comprobados, con un modelo de desarrollo inigualable que marcó el estándar para academias de tenis en todo el mundo.

La magnitud y profundidad de nuestro programa crean un entorno dinámico y completo, donde siempre encontrarás a otro jugador que te rete y eleve tu nivel, gracias a la diversidad de estilos de juego.

Cada día, los estudiantes-atletas reciben entrenamiento diseñado para avanzar en todas las áreas: técnica, táctica, preparación física y fortaleza mental.`,
        carouselAltPrefix: "Instalaciones de Tenis",
      },
      golf: {
        name: "Golf",
        description: `Los mejores golfistas del mundo saben que el verdadero potencial se alcanza con un desarrollo integral. Por eso, en IMG Academy ponemos el foco en los aspectos físicos, mentales, técnicos y en la estrategia de campo, lo que convierte a nuestros campamentos de golf en los mejores del país.

Con una metodología de instrucción probada, los golfistas de IMG Academy se convierten en jugadores más completos, seguros y competitivos.

Nuestros campamentos están dirigidos a jóvenes de 8 a 18 años, con programas personalizables para todos los niveles de habilidad y disponibilidad durante todo el año, adaptándose a tu calendario.`,
        carouselAltPrefix: "Instalaciones de Golf",
      },
      soccer: {
        name: "Fútbol",
        description: `Los campamentos de fútbol de IMG Academy son los mejores del país en entrenamiento y desarrollo. Con la instrucción experta de entrenadores de primer nivel y una metodología comprobada que ha formado a múltiples jugadores de la MLS y a innumerables atletas de División I, nuestros campamentos están diseñados para perfeccionar cada aspecto de tu juego.

Dirigidos a jóvenes de 10 a 18 años, los programas son totalmente personalizables y están disponibles durante todo el año, ajustándose a tu calendario y necesidades.`,
        carouselAltPrefix: "Instalaciones de Fútbol",
      },
      basketball: {
        name: "Baloncesto",
        description: `No importa tu nivel de habilidad, en IMG Academy encontrarás un campamento de baloncesto diseñado para alcanzar tus metas. Nuestros programas incluyen opciones de entrenamiento personalizado y especializaciones enfocadas en áreas clave como el rendimiento mental o el liderazgo.

Guiados por entrenadores de talla mundial, en un campus integral de primer nivel, los campamentos de baloncesto de IMG Academy combinan entrenamientos en grupo, trabajo de habilidades específicas por posición y escenarios de juego reales para llevar tu desempeño al siguiente nivel.`,
        carouselAltPrefix: "Instalaciones de Baloncesto",
      },
      volleyball: {
        name: "Voleibol",
        description: `Con más de 40 años de experiencia y una base de entrenamiento reconocida a nivel mundial, los campamentos de voleibol de IMG Academy ofrecen a cada atleta la oportunidad de alcanzar sus metas.

Diseñados para todos los niveles de habilidad, nuestros campamentos incluyen dos sesiones diarias en cancha y la opción de enfocarse en especializaciones clave como rendimiento mental o liderazgo.

Además, incorporan entrenamiento específico por posición y escenarios competitivos que preparan a los jugadores para destacar en la cancha y más allá.`,
        carouselAltPrefix: "Instalaciones de Voleibol",
        videoTitle: "IMG Academy Volleyball",
      },
      track: {
        name: "Atletismo",
        description: `El programa de atletismo de IMG Academy ofrece entrenamiento específico por disciplina para saltadores, velocistas, decatletas, vallistas, lanzadores, garrochistas y corredores de medio fondo, fondo y campo traviesa, siguiendo un calendario de competencia anual.

Con una metodología única y comprobada, basada en el desarrollo intencional de la capacidad de aprendizaje, la concentración y la resiliencia, cada estudiante-atleta fortalece sus habilidades y se siente preparado y seguro para rendir al máximo nivel.`,
        carouselAltPrefix: "Instalaciones de Atletismo",
      },
      performance: {
        name: "Performance",
        description: `El entrenamiento que realizas fuera de la cancha es tan importante como la práctica y la competencia. Por eso, los campamentos de Performance de IMG Academy se enfocan en el desarrollo integral del cuerpo y la mente, con entrenamientos en áreas clave como:

• Fuerza y potencia
• Velocidad y agilidad
• Confianza y liderazgo
• Prevención de lesiones (pre-hab)
• Nutrición
• ¡y mucho más!

Dirigidos a jóvenes de 12 a 18 años, estos campamentos están diseñados para todos los niveles de habilidad y te brindan la oportunidad de aprender directamente de líderes de talla mundial, que te ayudarán a convertirte en tu mejor versión cada día.

Disponibles durante todo el año, para adaptarse a tu calendario.`,
        carouselAltPrefix: "Instalaciones de Performance",
      },
      football: {
        name: "Fútbol Americano",
        description: `Hay una razón por la que el programa de fútbol americano de IMG Academy es reconocido como el mejor del país. Entrenadores de élite y una metodología de entrenamiento comprobada hacen posible que cada atleta maximice su potencial.

Este mismo enfoque convierte a los campamentos de fútbol americano de IMG en líderes de la industria para todas las posiciones, con un entrenamiento centrado en el desarrollo integral del jugador.

Dirigidos a jóvenes de 10 a 18 años, nuestros campamentos ofrecen programas personalizables para todos los niveles y están disponibles durante todo el año, adaptándose a tu calendario.`,
        carouselAltPrefix: "Instalaciones de Fútbol Americano",
      },
      baseball: {
        name: "Béisbol",
        description: `El programa de béisbol de IMG Academy ofrece una metodología integral para formar al estudiante-atleta completo. Los jugadores acceden a instalaciones y equipos de última generación, entrenadores inigualables, acompañamiento constante y una comunidad apasionada y motivadora.

Con múltiples equipos organizados por edad y nivel de habilidad, cada atleta comprometido encuentra la oportunidad perfecta para maximizar su potencial y llevar su juego al siguiente nivel.`,
        carouselAltPrefix: "Instalaciones de Béisbol",
      },
      softball: {
        name: "Softball",
        description: `¡Sé parte de nuestro año inaugural y vive la experiencia del innovador programa de sóftbol de IMG Academy!

Nuestro programa de sóftbol prioriza el desarrollo de cada estudiante-atleta, garantizando un crecimiento tanto integral como personalizado. Nuestros entrenadores expertos adaptan el entrenamiento a la posición, necesidades, objetivos y nivel actual de cada jugadora.

La progresión a lo largo del año refleja la de un programa profesional, lo que permite a las atletas enfocarse en lo que más importa en cada temporada y llegar confiadas y preparadas antes de competir a nivel universitario.`,
        carouselAltPrefix: "Instalaciones de Softball",
      },
      lacrosse: {
        name: "Lacrosse",
        description: `Los campamentos de lacrosse de IMG Academy representan el mejor programa de entrenamiento del país. Gracias a la combinación de entrenamiento específico por posición, conceptos de equipo aplicados en situaciones reales de juego y un enfoque integral de desarrollo, cada atleta encuentra aquí la oportunidad de llevar su rendimiento al máximo nivel.

Dirigidos a jóvenes de 10 a 18 años, nuestros campamentos ofrecen programas personalizables para todos los niveles de habilidad y están disponibles durante todo el año, adaptándose a tu calendario.`,
        carouselAltPrefix: "Instalaciones de Lacrosse",
      },
    },
  },
  en: {
    backLabel: "Back to Sports",
    notFound: "Sport not found - SportId: {{sportId}}",
    inquiry: {
      titleTemplate: "Interested in our {{sport}} program?",
      description:
        "Get personalized information about our camps and programs.",
      button: "Request More Information",
      inquiryTypeTemplate: "Information about {{sport}}",
    },
    programs: {
      tennis: {
        name: "Tennis",
        description: `IMG Academy's tennis program has been built over more than 40 years of proven results, with a development model that set the global standard for tennis academies.

The scale and depth of our program create a dynamic and complete environment where you'll always find another player who challenges and elevates your game thanks to the diversity of playing styles.

Every day, student-athletes receive coaching designed to advance every area: technical, tactical, physical preparation, and mental toughness.`,
        carouselAltPrefix: "IMG Academy Tennis Facilities",
      },
      golf: {
        name: "Golf",
        description: `The world's best golfers know that true potential is achieved through complete development. That's why IMG Academy focuses on the physical, mental, technical, and course strategy aspects that make our golf camps the best in the country.

With a proven instructional methodology, IMG Academy golfers become more complete, confident, and competitive players.

Our camps are designed for youth ages 8 to 18, with customizable programs for every skill level and year-round availability that adapts to your schedule.`,
        carouselAltPrefix: "IMG Academy Golf Facilities",
      },
      soccer: {
        name: "Soccer",
        description: `IMG Academy's soccer camps are the nation's best for training and development. Featuring expert coaching from top-level instructors and a proven methodology that has produced numerous MLS players and Division I athletes, our camps are designed to refine every aspect of your game.

Available for athletes ages 10 to 18, the programs are fully customizable and offered year-round to match your schedule and goals.`,
        carouselAltPrefix: "IMG Academy Soccer Facilities",
      },
      basketball: {
        name: "Basketball",
        description: `No matter your current level, IMG Academy has a basketball camp designed to help you reach your goals. Our programs include options for personalized training and specializations focused on key areas such as mental performance or leadership.

Guided by world-class coaches on a premier integrated campus, IMG Academy basketball camps combine group practices, position-specific skill work, and game scenarios to take your performance to the next level.`,
        carouselAltPrefix: "IMG Academy Basketball Facilities",
      },
      volleyball: {
        name: "Volleyball",
        description: `With more than 40 years of experience and a training foundation recognized worldwide, IMG Academy volleyball camps give every athlete the opportunity to reach their goals.

Designed for all skill levels, our camps include two on-court sessions per day and the ability to focus on key specializations such as mental performance or leadership.

They also incorporate position-specific training and competitive scenarios that prepare players to excel on the court and beyond.`,
        carouselAltPrefix: "IMG Academy Volleyball Facilities",
        videoTitle: "IMG Academy Volleyball",
      },
      track: {
        name: "Track & Field",
        description: `IMG Academy's track & field program provides discipline-specific training for jumpers, sprinters, decathletes, hurdlers, throwers, pole vaulters, and middle-distance, distance, and cross-country runners, following an annual competition calendar.

With a unique and proven methodology that develops learning capacity, focus, and resilience, every student-athlete strengthens their skills and feels prepared to perform at the highest level.`,
        carouselAltPrefix: "IMG Academy Track & Field Facilities",
      },
      performance: {
        name: "Performance",
        description: `The work you do off the field is just as important as practice and competition. That's why IMG Academy's Performance camps focus on holistic development of the body and mind, with training in key areas such as:

• Strength and power
• Speed and agility
• Confidence and leadership
• Injury prevention (pre-hab)
• Nutrition
• And much more!

Designed for athletes ages 12 to 18, these camps welcome every skill level and give you the opportunity to learn directly from world-leading experts who help you become your best version every day.

Available year-round to fit your schedule.`,
        carouselAltPrefix: "IMG Academy Performance Facilities",
      },
      football: {
        name: "Football",
        description: `There's a reason IMG Academy's football program is recognized as the nation's best. Elite coaches and a proven training methodology help every athlete maximize their potential.

That same approach makes IMG's football camps industry leaders for every position, with training focused on complete player development.

Designed for athletes ages 10 to 18, our camps offer customizable programs for all levels and are available year-round to fit your schedule.`,
        carouselAltPrefix: "IMG Academy Football Facilities",
      },
      baseball: {
        name: "Baseball",
        description: `IMG Academy's baseball program offers a comprehensive methodology to develop the complete student-athlete. Players gain access to state-of-the-art facilities and equipment, unmatched coaches, consistent support, and a passionate, motivating community.

With multiple teams organized by age and skill level, every committed athlete finds the perfect opportunity to maximize their potential and elevate their game.`,
        carouselAltPrefix: "IMG Academy Baseball Facilities",
      },
      softball: {
        name: "Softball",
        description: `Join our inaugural year and experience IMG Academy's innovative softball program!

Our softball program prioritizes the development of every student-athlete, ensuring both comprehensive and personalized growth. Expert coaches tailor training to each player's position, needs, goals, and current level.

The yearlong progression mirrors that of a professional program, allowing athletes to focus on what matters most in each season and arrive confident and prepared before competing at the collegiate level.`,
        carouselAltPrefix: "IMG Academy Softball Facilities",
      },
      lacrosse: {
        name: "Lacrosse",
        description: `IMG Academy's lacrosse camps represent the nation's premier training program. Combining position-specific instruction, team concepts applied in real game scenarios, and a holistic development focus, every athlete finds the opportunity to reach peak performance.

Designed for players ages 10 to 18, our camps offer customizable programs for every skill level and are available year-round to fit your schedule.`,
        carouselAltPrefix: "IMG Academy Lacrosse Facilities",
      },
    },
  },
};

export const adultProgramsTranslations: TranslationMap<AdultProgramsTranslation> = {
  es: {
    hero: {
      title: "Programas de Adultos",
      subtitle: "Entrenamiento de élite diseñado para atletas adultos",
    },
    description: `Los programas para adultos de IMG Academy están diseñados específicamente para atletas profesionales y aficionados que buscan mejorar su rendimiento deportivo en un ambiente de clase mundial.

Nuestros programas ofrecen la flexibilidad que necesitan los adultos trabajadores, con horarios adaptables y entrenamientos personalizados que se ajustan a sus objetivos específicos.

Con acceso a las mismas instalaciones de élite y entrenadores expertos que utilizan nuestros atletas juveniles, los participantes adultos pueden experimentar el entrenamiento de más alto nivel disponible.

**Características principales:**

• **Entrenamientos Personalizados**: Programas diseñados específicamente para las necesidades y objetivos de cada adulto

• **Flexibilidad de Horarios**: Opciones de entrenamiento que se adaptan a las responsabilidades profesionales y personales

• **Preparación Física Integral**: Enfoque holístico que incluye fuerza, acondicionamiento, nutrición y recuperación

• **Programas Corporativos**: Opciones especiales para empresas que buscan programas de bienestar para sus empleados

• **Instalaciones de Clase Mundial**: Acceso completo a todas las instalaciones deportivas de IMG Academy

• **Entrenadores Expertos**: Staff profesional con experiencia en entrenamiento de atletas de élite

**Deportes Disponibles:**
- Tenis
- Golf
- Fitness y Acondicionamiento
- Entrenamiento Funcional
- Programas de Rehabilitación
- Preparación Física General

Los programas están disponibles durante todo el año, con opciones de intensidad y duración variables para adaptarse a diferentes niveles de experiencia y disponibilidad de tiempo.`,
    carouselName: "Adultos",
    carouselAltPrefix: "Instalaciones de Programas de Adultos",
    inquiry: {
      title: "¿Interesado en Nuestros Programas para Adultos?",
      description:
        "Obtén más información personalizada sobre nuestros programas para adultos y cómo pueden ayudarte a alcanzar tus objetivos deportivos.",
      button: "Solicitar Más Información",
      inquiryType: "Programas de Adultos",
    },
  },
  en: {
    hero: {
      title: "Adult Programs",
      subtitle: "Elite training designed for adult athletes",
    },
    description: `IMG Academy's adult programs are designed specifically for professional and recreational athletes who want to enhance their performance in a world-class environment.

Our programs offer the flexibility that working adults need, with adaptable schedules and personalized training tailored to their specific goals.

With access to the same elite facilities and expert coaches as our youth athletes, adult participants experience the highest level of training available.

**Key Features:**

• **Personalized Training**: Programs designed specifically for each adult's needs and goals

• **Flexible Schedules**: Training options that adapt to professional and personal commitments

• **Comprehensive Physical Preparation**: A holistic focus that includes strength, conditioning, nutrition, and recovery

• **Corporate Programs**: Special options for companies seeking wellness solutions for their teams

• **World-Class Facilities**: Full access to every IMG Academy sports venue

• **Expert Coaches**: Professional staff with experience training elite athletes

**Available Sports:**
- Tennis
- Golf
- Fitness & Conditioning
- Functional Training
- Rehabilitation Programs
- General Physical Preparation

Programs are offered year-round with multiple intensity and duration options to match different experience levels and availability.`,
    carouselName: "Adult Programs",
    carouselAltPrefix: "Adult Programs Facilities",
    inquiry: {
      title: "Interested in Our Adult Programs?",
      description:
        "Get personalized details about our adult programs and how they can help you reach your athletic goals.",
      button: "Request More Information",
      inquiryType: "Adult Programs",
    },
  },
};

export const boardingPageTranslations: TranslationMap<BoardingPageTranslation> = {
  es: {
    carouselAltPrefix: "IMG Academy Internado",
    hero: {
      lines: ["IMG ACADEMY", "Donde el talento se convierte en éxito"],
    },
    paragraphs: [
      "IMG Academy es mucho más que un colegio preparatorio con opciones de internado y externado: es una institución dedicada a impulsar a los estudiantes-atletas hacia el éxito en la universidad, en su carrera y en la vida.",
      "Nuestro programa integral combina lo académico, lo deportivo y el desarrollo personal, ofreciendo una formación de excelencia que motiva y desafía a cada alumno en el aula, en el campo y fuera de él.",
      "Con un firme compromiso con la diversidad, reunimos a más de 1.500 estudiantes de 74 países, creando un entorno multicultural que enriquece el aprendizaje y fomenta la colaboración global. Los alumnos tienen acceso a una amplia gama de oportunidades: programas Honors, cursos Advanced Placement, doble titulación y 17 deportes de alto nivel.",
      "Nuestra metodología, basada en las mejores prácticas educativas y respaldada por investigaciones actuales, integra habilidades esenciales para el siglo XXI, alfabetización informacional y tareas de pensamiento complejo y riguroso, preparando a nuestros estudiantes para destacar en entornos universitarios y profesionales exigentes.",
    ],
    stat: {
      prefix: "El resultado:",
      value: "97%",
      suffix:
        " de nuestros alumnos participa activamente en deportes, reforzando nuestra visión de una educación integral que forma líderes, deportistas y personas con valores para toda la vida.",
    },
    inquiry: {
      title: "¿Interesado en Nuestro Programa de Internado?",
      description:
        "Obtén más información personalizada sobre nuestro programa de internado y cómo puede transformar el futuro de tu hijo.",
      button: "Solicitar Más Información",
      inquiryType: "Programa de Internado",
    },
  },
  en: {
    carouselAltPrefix: "IMG Academy Boarding",
    hero: {
      lines: ["IMG ACADEMY", "Where talent becomes success"],
    },
    paragraphs: [
      "IMG Academy is much more than a preparatory school with boarding and day options: it is an institution dedicated to propelling student-athletes toward success in college, their careers, and their lives.",
      "Our comprehensive program combines academics, athletics, and personal development, delivering an exceptional education that motivates and challenges every student in the classroom, on the field, and beyond.",
      "With a strong commitment to diversity, we bring together more than 1,500 students from 74 countries, creating a multicultural environment that enriches learning and encourages global collaboration. Students gain access to opportunities including Honors programs, Advanced Placement courses, dual diplomas, and 17 high-level sports.",
      "Our methodology, grounded in best educational practices and supported by current research, integrates essential 21st-century skills, information literacy, and complex, rigorous thinking tasks, preparing our students to excel in demanding university and professional settings.",
    ],
    stat: {
      prefix: "The result:",
      value: "97%",
      suffix:
        " of our students actively participate in sports, reinforcing our vision of a holistic education that develops leaders, athletes, and people of character for life.",
    },
    inquiry: {
      title: "Interested in Our Boarding Program?",
      description:
        "Receive personalized information about our boarding program and how it can transform your child's future.",
      button: "Request More Information",
      inquiryType: "Boarding Program",
    },
  },
};

export const facilitiesPageTranslations: TranslationMap<FacilitiesPageTranslation> = {
  es: {
    videoTitle: "IMG Academy Campus Tour",
    hero: {
      heading: "EL EPICENTRO DE LA EXCELENCIA DEPORTIVA",
    },
    campusSection: {
      subtitle: "Un Campus Sin Límites",
      paragraphs: [
        "Extendido a través de más de 600 acres en el corazón de Florida, IMG Academy representa la culminación de décadas de innovación en instalaciones deportivas. Cada centímetro de nuestro campus ha sido meticulosamente diseñado para desafiar los límites de lo posible.",
        "Desde campos que han sido testigos de récords mundiales hasta laboratorios que definen el futuro del rendimiento atlético, nuestras instalaciones no solo entrenan atletas: forjan leyendas.",
      ],
      cards: [
        {
          title: "Campos de Competición",
          description:
            "Superficies que cumplen con estándares de la FIFA, UEFA y organismos internacionales. Cada campo es una réplica exacta de los escenarios donde se definen los campeonatos mundiales.",
        },
        {
          title: "Ciencia del Rendimiento",
          description:
            "Laboratorios equipados con tecnología utilizada por equipos olímpicos. Análisis biomecánico, pruebas de VO2 máximo y sistemas de recuperación de vanguardia.",
        },
        {
          title: "Centros de Fuerza",
          description:
            "Gimnasios que rivalizan con los utilizados por atletas profesionales de la NFL, NBA y ligas europeas. Equipamiento exclusivo y programas personalizados.",
        },
      ],
      highlight: {
        title: "La Diferencia IMG",
        description:
          '"No es solo donde entrenas, es donde te transformas. Cada instalación, cada detalle, cada innovación está diseñada con un único propósito: <span class="font-bold">llevarte más allá de tus límites</span> y convertirte en el atleta que siempre soñaste ser."',
      },
    },
    carouselAltPrefix: "Instalaciones IMG Academy",
  },
  en: {
    videoTitle: "IMG Academy Campus Tour",
    hero: {
      heading: "THE EPICENTER OF SPORTS EXCELLENCE",
    },
    campusSection: {
      subtitle: "A Campus Without Limits",
      paragraphs: [
        "Stretching across more than 600 acres in the heart of Florida, IMG Academy represents the culmination of decades of innovation in sports facilities. Every inch of our campus has been meticulously designed to push the boundaries of what is possible.",
        "From fields that have witnessed world records to laboratories defining the future of athletic performance, our facilities don't just train athletes—they forge legends.",
      ],
      cards: [
        {
          title: "Competition Fields",
          description:
            "Surfaces that meet FIFA, UEFA, and international standards. Every field mirrors the venues where world championships are decided.",
        },
        {
          title: "Performance Science",
          description:
            "Laboratories equipped with technology used by Olympic teams. Biomechanical analysis, VO2 max testing, and state-of-the-art recovery systems.",
        },
        {
          title: "Strength Centers",
          description:
            "Gyms that rival those used by professional athletes in the NFL, NBA, and European leagues, featuring exclusive equipment and personalized programs.",
        },
      ],
      highlight: {
        title: "The IMG Difference",
        description:
          '"It\'s not just where you train, it\'s where you transform. Every facility, every detail, every innovation is designed with one purpose: <span class="font-bold">taking you beyond your limits</span> and shaping the athlete you\'ve always dreamed of becoming."',
      },
    },
    carouselAltPrefix: "IMG Academy Facilities",
  },
};

export const aboutUsTranslations: TranslationMap<AboutUsTranslation> = {
  es: {
    backLabel: "Volver",
    heroTitle: "¿QUIENES SOMOS?",
    paragraphs: [
      "En Sports Academy llevamos más de 40 años dedicados exclusivamente a un solo propósito: abrir las puertas de IMG Academy a jóvenes atletas de todo el mundo.",
      "Nuestra labor no termina con la admisión. Acompañamos a cada familia en todo el proceso, desde el primer contacto hasta la llegada al campus, y permanecemos siempre atentos durante su estancia para que los estudiantes atletas se sientan respaldados en todo momento.",
      "Somos un equipo internacional, con presencia en diferentes países, pero unidos por una misma misión: que cada niño y cada familia vivan la experiencia IMG con la tranquilidad de estar en manos expertas y cercanas.",
      "Sports Academy no es solo un puente hacia la mejor formación académica y deportiva, sino también un compañero de confianza en cada paso del camino.",
    ],
  },
  en: {
    backLabel: "Back",
    heroTitle: "WHO WE ARE?",
    paragraphs: [
      "For more than 40 years, Sports Academy has been dedicated to a single purpose: opening the doors of IMG Academy to young athletes from around the world.",
      "Our work doesn’t end with admission. We accompany every family throughout the entire process—from the first conversation to their arrival on campus—and remain attentive during their stay so student-athletes feel supported at all times.",
      "We are an international team present in multiple countries yet united by one mission: ensuring that every child and family experiences IMG with the confidence of being guided by expert, caring professionals.",
      "Sports Academy is not only a bridge to the finest academic and athletic training; it is also a trusted partner at every step of the journey.",
    ],
  },
};

export const privacyPolicyTranslations: TranslationMap<PrivacyPolicyTranslation> = {
  es: {
    title: "Política de Privacidad",
    intro: [
      { type: "text", value: "Al ingresar y enviar su información de contacto (nombre, email, etc.):" },
    ],
    bulletPoints: [
      [
        { type: "text", value: "Usted está aceptando recibir información acerca de los programas de " },
        { type: "strong", value: "IMG Academy" },
        { type: "text", value: " y otras comunicaciones de promociones y mercadeo desde " },
        { type: "strong", value: "IMG Academy LLC" },
        {
          type: "text",
          value:
            ". Esto nos permitirá comunicarnos con usted por email para enviarle información, noticias, productos, información de los programas, actualizaciones y ofertas especiales.",
        },
      ],
      [
        { type: "text", value: "Usted está aceptando que su información sea enviada a nuestro equipo en " },
        { type: "strong", value: "IMG Academy" },
        { type: "text", value: " ubicada en " },
        {
          type: "italic",
          value: "5650 Bollettieri Blvd., Bradenton FL 34210, Estados Unidos de América",
        },
        {
          type: "text",
          value:
            ". Al ingresar y enviar su información de contacto, usted admite la transferencia de esta a los Estados Unidos de América para los propósitos mencionados anteriormente.",
        },
      ],
      [
        {
          type: "text",
          value: "Para conocer más acerca de nuestra política de privacidad, por favor acceda a: ",
        },
        {
          type: "link",
          value: "www.imgacademy.com/privacy-policy",
          href: "https://www.imgacademy.com/privacy-policy",
          external: true,
        },
      ],
    ],
    withdrawal: [
      {
        type: "text",
        value: "Usted podrá retirar su consentimiento en cualquier momento presionando en el botón ",
      },
      { type: "italic", value: "“unsubscribe”" },
      {
        type: "text",
        value: " incluido en nuestros emails o enviando su petición al correo: ",
      },
      {
        type: "link",
        value: "info@imgacademy.com",
        href: "mailto:info@imgacademy.com",
      },
    ],
    final: [
      {
        type: "text",
        value:
          "Usted admite que ha leído cuidadosamente y entendido el contenido de esta aceptación y que a su voluntad está ingresando y enviando su información de contacto para los propósitos ya mencionados.",
      },
    ],
    backToHome: "← Volver al inicio",
  },
  en: {
    title: "Privacy Policy",
    intro: [
      {
        type: "text",
        value: "By submitting your contact information (name, email, etc.):",
      },
    ],
    bulletPoints: [
      [
        { type: "text", value: "You agree to receive information about " },
        { type: "strong", value: "IMG Academy" },
        { type: "text", value: " programmes and other promotional communications from " },
        { type: "strong", value: "IMG Academy LLC" },
        {
          type: "text",
          value:
            ". This allows us to contact you by email to share information, news, products, programme details, updates, and special offers.",
        },
      ],
      [
        { type: "text", value: "You agree that your information will be sent to our team at " },
        { type: "strong", value: "IMG Academy" },
        { type: "text", value: " located at " },
        {
          type: "italic",
          value: "5650 Bollettieri Blvd., Bradenton FL 34210, United States of America",
        },
        {
          type: "text",
          value:
            ". By submitting your contact information, you acknowledge the transfer of this data to the United States for the purposes mentioned above.",
        },
      ],
      [
        {
          type: "text",
          value: "To learn more about our privacy policy, please visit: ",
        },
        {
          type: "link",
          value: "www.imgacademy.com/privacy-policy",
          href: "https://www.imgacademy.com/privacy-policy",
          external: true,
        },
      ],
    ],
    withdrawal: [
      {
        type: "text",
        value: "You may withdraw your consent at any time by clicking the ",
      },
      { type: "italic", value: "“unsubscribe”" },
      {
        type: "text",
        value: " button included in our emails or by sending your request to: ",
      },
      {
        type: "link",
        value: "info@imgacademy.com",
        href: "mailto:info@imgacademy.com",
      },
    ],
    final: [
      {
        type: "text",
        value:
          "You acknowledge that you have carefully read and understood this consent and that you willingly submit your contact information for the purposes mentioned above.",
      },
    ],
    backToHome: "← Back to home",
  },
};

export const enhancedContactFormTranslations: TranslationMap<EnhancedContactFormTranslation> = {
  es: {
    badge: "CONTACTO PERSONALIZADO",
    title: "Comienza Tu Futuro Deportivo",
    description:
      "Nuestro representante en Latinoamérica está listo para ayudarte a dar el siguiente paso hacia la excelencia deportiva.",
    contactCard: {
      title: "Representante Oficial",
      subtitle: "IMG Academy Latinoamérica",
      phoneLabel: "Teléfono",
      phoneValue: "+57 123 456 7890",
      emailLabel: "Email",
      emailValue: "admisiones.latam@imgacademy.com",
      locationLabel: "Ubicación",
      locationValue: "Bradenton, Florida, USA",
      stats: [
        { value: "9 Deportes", description: "de Élite" },
        { value: "1200+", description: "Estudiantes" },
        { value: "25%", description: "NCAA D1" },
      ],
    },
    form: {
      cardTitle: "Solicitar Información Personalizada",
      cardDescription:
        "Completa este formulario y recibe información detallada sobre programas, precios y descuentos regionales.",
      personalInfo: {
        firstName: "Nombre *",
        lastName: "Apellido *",
        email: "Email *",
        phone: "Teléfono",
        country: "País *",
        age: "Edad del Estudiante *",
        agePlaceholder: "Selecciona edad",
        ageGroups: ["10-12 años", "13-15 años", "16-18 años", "19+ años"],
      },
      sports: {
        label: "Deportes de Interés *",
        helper: "Selecciona todos los deportes que te interesan",
        options: [
          { id: "tennis", label: "Tenis" },
          { id: "golf", label: "Golf" },
          { id: "football", label: "Fútbol Americano" },
          { id: "basketball", label: "Baloncesto" },
          { id: "baseball", label: "Béisbol" },
          { id: "soccer", label: "Fútbol" },
          { id: "lacrosse", label: "Lacrosse" },
          { id: "track", label: "Atletismo" },
          { id: "wrestling", label: "Lucha" },
        ],
      },
      programType: {
        label: "Tipo de Programa *",
        options: [
          { id: "boarding", name: "Programa de Internado", description: "Año académico completo" },
          { id: "day", name: "Programa de Día", description: "Solo entrenamientos" },
          { id: "camps", name: "Campamentos", description: "1-4 semanas" },
          { id: "online", name: "Entrenamiento Online", description: "Desde casa" },
        ],
      },
      experience: {
        label: "Nivel de Experiencia",
        placeholder: "Selecciona nivel",
        options: [
          { id: "beginner", label: "Principiante" },
          { id: "intermediate", label: "Intermedio" },
          { id: "advanced", label: "Avanzado" },
          { id: "elite", label: "Élite" },
        ],
      },
      startDate: {
        label: "Fecha de Inicio Deseada",
        placeholder: "Selecciona fecha",
        options: [
          { id: "fall2025", label: "Otoño 2025" },
          { id: "spring2026", label: "Primavera 2026" },
          { id: "summer2025", label: "Verano 2025" },
          { id: "flexible", label: "Flexible" },
        ],
      },
      message: {
        label: "Mensaje Adicional",
        placeholder:
          "Cuéntanos sobre tus objetivos deportivos, preguntas específicas, o cualquier información adicional...",
      },
      consent: {
        parent:
          "Confirmo que tengo autorización parental para solicitar información (requerido para menores de 18 años)*",
        newsletter:
          "Deseo recibir actualizaciones sobre programas, eventos y noticias de IMG Academy",
      },
      submit: {
        default: "Solicitar Información Gratuita",
        sending: "Enviando...",
      },
    },
    toast: {
      successTitle: "¡Solicitud Enviada!",
      successDescription: "Nuestro representante te contactará en las próximas 24 horas.",
    },
  },
  en: {
    badge: "PERSONALIZED CONTACT",
    title: "Start Your Sports Future",
    description:
      "Our Latin America representative is ready to help you take the next step toward athletic excellence.",
    contactCard: {
      title: "Official Representative",
      subtitle: "IMG Academy Latin America",
      phoneLabel: "Phone",
      phoneValue: "+57 123 456 7890",
      emailLabel: "Email",
      emailValue: "admisiones.latam@imgacademy.com",
      locationLabel: "Location",
      locationValue: "Bradenton, Florida, USA",
      stats: [
        { value: "9 Sports", description: "Elite" },
        { value: "1200+", description: "Students" },
        { value: "25%", description: "NCAA D1" },
      ],
    },
    form: {
      cardTitle: "Request Personalized Information",
      cardDescription:
        "Complete this form to receive detailed information about programs, pricing, and regional discounts.",
      personalInfo: {
        firstName: "First Name *",
        lastName: "Last Name *",
        email: "Email *",
        phone: "Phone",
        country: "Country *",
        age: "Student Age *",
        agePlaceholder: "Select age",
        ageGroups: ["10-12 years", "13-15 years", "16-18 years", "19+ years"],
      },
      sports: {
        label: "Sports of Interest *",
        helper: "Select all the sports you're interested in",
        options: [
          { id: "tennis", label: "Tennis" },
          { id: "golf", label: "Golf" },
          { id: "football", label: "American Football" },
          { id: "basketball", label: "Basketball" },
          { id: "baseball", label: "Baseball" },
          { id: "soccer", label: "Soccer" },
          { id: "lacrosse", label: "Lacrosse" },
          { id: "track", label: "Track & Field" },
          { id: "wrestling", label: "Wrestling" },
        ],
      },
      programType: {
        label: "Program Type *",
        options: [
          { id: "boarding", name: "Boarding Program", description: "Full academic year" },
          { id: "day", name: "Day Program", description: "Training only" },
          { id: "camps", name: "Camps", description: "1-4 weeks" },
          { id: "online", name: "Online Training", description: "From home" },
        ],
      },
      experience: {
        label: "Experience Level",
        placeholder: "Select level",
        options: [
          { id: "beginner", label: "Beginner" },
          { id: "intermediate", label: "Intermediate" },
          { id: "advanced", label: "Advanced" },
          { id: "elite", label: "Elite" },
        ],
      },
      startDate: {
        label: "Preferred Start Date",
        placeholder: "Select date",
        options: [
          { id: "fall2025", label: "Fall 2025" },
          { id: "spring2026", label: "Spring 2026" },
          { id: "summer2025", label: "Summer 2025" },
          { id: "flexible", label: "Flexible" },
        ],
      },
      message: {
        label: "Additional Message",
        placeholder:
          "Tell us about your athletic goals, specific questions, or any extra information...",
      },
      consent: {
        parent:
          "I confirm I have parental authorization to request information (required for students under 18).*",
        newsletter: "I'd like to receive updates about programs, events, and IMG Academy news.",
      },
      submit: {
        default: "Request Free Information",
        sending: "Sending...",
      },
    },
    toast: {
      successTitle: "Request Sent!",
      successDescription: "Our representative will contact you within the next 24 hours.",
    },
  },
};

export const inquiryModalTranslations: TranslationMap<InquiryModalTranslation> = {
  es: {
    defaultInquiryType: "Consulta General",
    contactInfo: {
      title: "Información de Contacto",
      whatsapp: "WhatsApp",
      emailLabel: "Email",
      emailValue: "comercial@sportsacademy.co",
    },
    form: {
      nameLabel: "Nombre Completo *",
      emailLabel: "Email *",
      countryLabel: "País *",
      countryPlaceholder: "Selecciona tu país",
      phoneLabel: "Teléfono",
      phoneCodePlaceholder: "+57",
      phonePlaceholder: "Número de teléfono",
      messageLabel: "Mensaje *",
      messagePlaceholder: "Cuéntanos más sobre tu consulta...",
      cancel: "Cancelar",
      submit: "Enviar Consulta",
    },
    toasts: {
      successTitle: "Consulta enviada",
      successDescription: "Nos pondremos en contacto contigo pronto.",
      errorTitle: "Error",
      errorDescription: "Hubo un problema al enviar tu consulta. Por favor, inténtalo de nuevo.",
    },
    countries: {
      CL: "Chile",
      CO: "Colombia",
      CR: "Costa Rica",
      EC: "Ecuador",
      SV: "El Salvador",
      AE: "Emiratos Árabes",
      ES: "España",
      US: "Estados Unidos",
      GT: "Guatemala",
      HN: "Honduras",
      JO: "Jordania",
      MX: "México",
      NI: "Nicaragua",
      PA: "Panamá",
      PE: "Perú",
      PT: "Portugal",
      CH: "Suiza",
      TT: "Trinidad y Tobago",
      OTHER: "Otro país",
    },
  },
  en: {
    defaultInquiryType: "General Inquiry",
    contactInfo: {
      title: "Contact Information",
      whatsapp: "WhatsApp",
      emailLabel: "Email",
      emailValue: "comercial@sportsacademy.co",
    },
    form: {
      nameLabel: "Full Name *",
      emailLabel: "Email *",
      countryLabel: "Country *",
      countryPlaceholder: "Select your country",
      phoneLabel: "Phone",
      phoneCodePlaceholder: "+57",
      phonePlaceholder: "Phone number",
      messageLabel: "Message *",
      messagePlaceholder: "Tell us more about your inquiry...",
      cancel: "Cancel",
      submit: "Send Inquiry",
    },
    toasts: {
      successTitle: "Inquiry sent",
      successDescription: "We will contact you shortly.",
      errorTitle: "Error",
      errorDescription: "We couldn't send your inquiry. Please try again.",
    },
    countries: {
      CL: "Chile",
      CO: "Colombia",
      CR: "Costa Rica",
      EC: "Ecuador",
      SV: "El Salvador",
      AE: "United Arab Emirates",
      ES: "Spain",
      US: "United States",
      GT: "Guatemala",
      HN: "Honduras",
      JO: "Jordan",
      MX: "Mexico",
      NI: "Nicaragua",
      PA: "Panama",
      PE: "Peru",
      PT: "Portugal",
      CH: "Switzerland",
      TT: "Trinidad and Tobago",
      OTHER: "Other country",
    },
  },
};

export const priceCalculatorTranslations: TranslationMap<PriceCalculatorTranslation> = {
  es: {
    title: "Calculadora de Precios",
    description:
      "Obtén una estimación personalizada de costos para tu programa deportivo con descuentos regionales incluidos",
    fields: {
      sportLabel: "Deporte de Interés",
      sportPlaceholder: "Selecciona un deporte",
      programLabel: "Tipo de Programa",
      programPlaceholder: "Selecciona tipo de programa",
      regionLabel: "País de Origen",
      regionPlaceholder: "Selecciona tu país",
      regionOption: "{{name}} - {{discount}}% descuento",
    },
    duration: {
      label: "Duración: {{count}} {{unit}}",
      unitSingular: "mes",
      unitPlural: "meses",
      minLabel: "1 mes",
      maxLabel: "12 meses",
    },
    buttons: {
      calculate: "Calcular Precio",
      reset: "Nueva Consulta",
      contact: "Solicitar Info",
    },
    emptyState: "Selecciona las opciones para ver tu estimación personalizada",
    note:
      "Nota: Esta es una estimación basada en precios estándar. Los costos finales pueden variar según factores adicionales como becas académicas, descuentos por hermanos, y promociones especiales. Contacta a nuestro representante para obtener una cotización oficial.",
    results: {
      badge: "Estimación Personalizada",
      baseLabel: "Precio Base:",
      discountLabel: "Descuento Regional ({{percent}}%):",
      finalLabel: "Precio Final:",
      includesTitle: "Incluye:",
      includesItems: [
        "Entrenamiento deportivo profesional",
        "Uso de instalaciones de élite",
        "Supervisión académica (programas de internado)",
        "Análisis de rendimiento",
        "Apoyo nutricional",
      ],
    },
    sports: [
      { id: "tennis", label: "Tenis", basePrice: 45000 },
      { id: "golf", label: "Golf", basePrice: 55000 },
      { id: "football", label: "Fútbol Americano", basePrice: 52000 },
      { id: "basketball", label: "Baloncesto", basePrice: 46000 },
      { id: "baseball", label: "Béisbol", basePrice: 47000 },
      { id: "soccer", label: "Fútbol", basePrice: 43000 },
      { id: "lacrosse", label: "Lacrosse", basePrice: 44000 },
      { id: "track", label: "Atletismo", basePrice: 41000 },
      { id: "wrestling", label: "Lucha", basePrice: 42000 },
    ],
    programs: [
      { id: "boarding", name: "Programa de Internado", multiplier: 1 },
      { id: "day", name: "Programa de Día", multiplier: 0.6 },
      { id: "camps", name: "Campamentos", multiplier: 0.15 },
      { id: "online", name: "Entrenamiento Online", multiplier: 0.05 },
    ],
    regions: [
      { id: "mexico", name: "México", discount: 15 },
      { id: "colombia", name: "Colombia", discount: 20 },
      { id: "brazil", name: "Brasil", discount: 18 },
      { id: "argentina", name: "Argentina", discount: 22 },
      { id: "chile", name: "Chile", discount: 17 },
      { id: "peru", name: "Perú", discount: 25 },
      { id: "other", name: "Otro País", discount: 10 },
    ],
  },
  en: {
    title: "Price Calculator",
    description:
      "Get a personalized cost estimate for your sports program including regional discounts.",
    fields: {
      sportLabel: "Sport of Interest",
      sportPlaceholder: "Select a sport",
      programLabel: "Program Type",
      programPlaceholder: "Select a program type",
      regionLabel: "Country of Origin",
      regionPlaceholder: "Select your country",
      regionOption: "{{name}} - {{discount}}% discount",
    },
    duration: {
      label: "Duration: {{count}} {{unit}}",
      unitSingular: "month",
      unitPlural: "months",
      minLabel: "1 month",
      maxLabel: "12 months",
    },
    buttons: {
      calculate: "Calculate Price",
      reset: "New Estimate",
      contact: "Request Info",
    },
    emptyState: "Choose your options to see your personalized estimate",
    note:
      "Note: This estimate is based on standard pricing. Final costs may vary depending on academic scholarships, sibling discounts, and special promotions. Contact our representative for an official quote.",
    results: {
      badge: "Personalized Estimate",
      baseLabel: "Base Price:",
      discountLabel: "Regional Discount ({{percent}}%):",
      finalLabel: "Final Price:",
      includesTitle: "Includes:",
      includesItems: [
        "Professional sports training",
        "Access to elite facilities",
        "Academic supervision (boarding programs)",
        "Performance analysis",
        "Nutritional support",
      ],
    },
    sports: [
      { id: "tennis", label: "Tennis", basePrice: 45000 },
      { id: "golf", label: "Golf", basePrice: 55000 },
      { id: "football", label: "American Football", basePrice: 52000 },
      { id: "basketball", label: "Basketball", basePrice: 46000 },
      { id: "baseball", label: "Baseball", basePrice: 47000 },
      { id: "soccer", label: "Soccer", basePrice: 43000 },
      { id: "lacrosse", label: "Lacrosse", basePrice: 44000 },
      { id: "track", label: "Track & Field", basePrice: 41000 },
      { id: "wrestling", label: "Wrestling", basePrice: 42000 },
    ],
    programs: [
      { id: "boarding", name: "Boarding Program", multiplier: 1 },
      { id: "day", name: "Day Program", multiplier: 0.6 },
      { id: "camps", name: "Camps", multiplier: 0.15 },
      { id: "online", name: "Online Training", multiplier: 0.05 },
    ],
    regions: [
      { id: "mexico", name: "Mexico", discount: 15 },
      { id: "colombia", name: "Colombia", discount: 20 },
      { id: "brazil", name: "Brazil", discount: 18 },
      { id: "argentina", name: "Argentina", discount: 22 },
      { id: "chile", name: "Chile", discount: 17 },
      { id: "peru", name: "Peru", discount: 25 },
      { id: "other", name: "Other Country", discount: 10 },
    ],
  },
};

export const sportSelectionQuizTranslations: TranslationMap<SportSelectionQuizTranslation> = {
  es: {
    questions: [
      {
        id: 1,
        prompt: "¿Cuál es tu nivel de experiencia deportiva?",
        options: [
          { id: "beginner", label: "Principiante", sports: ["tennis", "golf", "track"] },
          { id: "intermediate", label: "Intermedio", sports: ["basketball", "soccer", "baseball"] },
          { id: "advanced", label: "Avanzado", sports: ["football", "lacrosse", "wrestling"] },
        ],
      },
      {
        id: 2,
        prompt: "¿Prefieres deportes individuales o de equipo?",
        options: [
          { id: "individual", label: "Individual", sports: ["tennis", "golf", "track", "wrestling"] },
          { id: "team", label: "De equipo", sports: ["football", "basketball", "baseball", "soccer", "lacrosse"] },
        ],
      },
      {
        id: 3,
        prompt: "¿Qué tipo de entrenamiento prefieres?",
        options: [
          { id: "technical", label: "Técnico y preciso", sports: ["tennis", "golf", "baseball"] },
          { id: "physical", label: "Físico e intenso", sports: ["football", "wrestling", "track"] },
          { id: "tactical", label: "Táctico y estratégico", sports: ["basketball", "soccer", "lacrosse"] },
        ],
      },
    ],
    progress: {
      badge: "Pregunta {{current}} de {{total}}",
      status: "{{percent}}% completado",
    },
    navigation: {
      previous: "Anterior",
      next: "Siguiente",
      results: "Ver Resultados",
    },
    results: {
      title: "¡Tus Deportes Recomendados!",
      description: "Basado en tus respuestas, estos deportes son perfectos para ti:",
      bestBadge: "Mejor Opción",
      optionLabel: "Opción {{index}}",
      detailsButton: "Ver Detalles",
      restartButton: "Repetir Quiz",
      contactButton: "Hablar con Representante",
    },
    sportDetails: {
      tennis: { name: "Tenis" },
      golf: { name: "Golf" },
      football: { name: "Fútbol Americano" },
      basketball: { name: "Baloncesto" },
      baseball: { name: "Béisbol" },
      soccer: { name: "Fútbol" },
      lacrosse: { name: "Lacrosse" },
      track: { name: "Atletismo" },
      wrestling: { name: "Lucha" },
    },
  },
  en: {
    questions: [
      {
        id: 1,
        prompt: "What is your level of sports experience?",
        options: [
          { id: "beginner", label: "Beginner", sports: ["tennis", "golf", "track"] },
          { id: "intermediate", label: "Intermediate", sports: ["basketball", "soccer", "baseball"] },
          { id: "advanced", label: "Advanced", sports: ["football", "lacrosse", "wrestling"] },
        ],
      },
      {
        id: 2,
        prompt: "Do you prefer individual or team sports?",
        options: [
          { id: "individual", label: "Individual", sports: ["tennis", "golf", "track", "wrestling"] },
          { id: "team", label: "Team", sports: ["football", "basketball", "baseball", "soccer", "lacrosse"] },
        ],
      },
      {
        id: 3,
        prompt: "What type of training do you prefer?",
        options: [
          { id: "technical", label: "Technical and precise", sports: ["tennis", "golf", "baseball"] },
          { id: "physical", label: "Physical and intense", sports: ["football", "wrestling", "track"] },
          { id: "tactical", label: "Tactical and strategic", sports: ["basketball", "soccer", "lacrosse"] },
        ],
      },
    ],
    progress: {
      badge: "Question {{current}} of {{total}}",
      status: "{{percent}}% complete",
    },
    navigation: {
      previous: "Previous",
      next: "Next",
      results: "View Results",
    },
    results: {
      title: "Your Recommended Sports",
      description: "Based on your answers, these sports are a great fit for you:",
      bestBadge: "Top Choice",
      optionLabel: "Option {{index}}",
      detailsButton: "See Details",
      restartButton: "Restart Quiz",
      contactButton: "Speak with a Representative",
    },
    sportDetails: {
      tennis: { name: "Tennis" },
      golf: { name: "Golf" },
      football: { name: "American Football" },
      basketball: { name: "Basketball" },
      baseball: { name: "Baseball" },
      soccer: { name: "Soccer" },
      lacrosse: { name: "Lacrosse" },
      track: { name: "Track & Field" },
      wrestling: { name: "Wrestling" },
    },
  },
};

export const campComparisonTranslations: TranslationMap<CampComparisonTranslation> = {
  es: {
    intro:
      "Los campamentos de IMG Academy están diseñados para ofrecer una experiencia deportiva y educativa excepcional que desarrolla tanto las habilidades atléticas como el carácter personal de cada participante. Con instalaciones de clase mundial y entrenadores profesionales, nuestros programas combinan entrenamiento técnico avanzado, acondicionamiento físico y desarrollo mental para maximizar el potencial de cada atleta. Ofrecemos diferentes modalidades de campamentos:",
    helpTitle: "¿Necesitas Ayuda Eligiendo Tu Programa?",
    sections: [
      {
        rows: [
          {
            kind: "header",
            title: "CAMPOS DEPORTIVOS SEMANALES",
            subtitle: "En nuestro campus ubicado en Bradenton, Florida",
            checks: [true, true, true, true],
          },
          {
            kind: "detail",
            label: "Dos sesiones de entrenamiento específico por deporte (AM/PM) por día",
            checks: [true, true, true, true],
          },
          {
            kind: "detail",
            label: "Sesiones de fuerza y acondicionamiento, y rendimiento mental",
            checks: [true, true, true, true],
          },
          {
            kind: "detail",
            label: "Camiseta del Campo y Mochila",
            checks: [true, true, true, true],
          },
          {
            kind: "detail",
            label: "Membresía esencial IMG Academy+",
            checks: [true, true, true, true],
          },
        ],
      },
      {
        rows: [
          {
            kind: "header",
            title: "ENTRENAMIENTO DE RENDIMIENTO",
            subtitle:
              "Entrenamiento adicional en áreas preseleccionadas como fuerza, velocidad, resistencia mental u otras disciplinas de rendimiento",
            checks: [false, true, false, true],
          },
        ],
      },
      {
        rows: [
          {
            kind: "header",
            title: "ENTRENAMIENTO PERSONALIZADO",
            subtitle: "Instrucción adicional 1:1 o en grupos pequeños",
            checks: [false, false, true, true],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "IMG Academy camps are designed to deliver an exceptional sports and academic experience that develops both athletic skills and personal character for every participant. With world-class facilities and professional coaches, our programs combine advanced technical training, physical conditioning, and mental development to maximise each athlete's potential. We offer several camp formats:",
    helpTitle: "Need Help Choosing Your Program?",
    sections: [
      {
        rows: [
          {
            kind: "header",
            title: "WEEKLY SPORT CAMPS",
            subtitle: "On our campus located in Bradenton, Florida",
            checks: [true, true, true, true],
          },
          {
            kind: "detail",
            label: "Two sport-specific training sessions (AM/PM) per day",
            checks: [true, true, true, true],
          },
          {
            kind: "detail",
            label: "Strength & conditioning and mental performance sessions",
            checks: [true, true, true, true],
          },
          {
            kind: "detail",
            label: "Camp T-shirt and backpack",
            checks: [true, true, true, true],
          },
          {
            kind: "detail",
            label: "Essential IMG Academy+ membership",
            checks: [true, true, true, true],
          },
        ],
      },
      {
        rows: [
          {
            kind: "header",
            title: "PERFORMANCE TRAINING",
            subtitle:
              "Additional training in preselected areas such as strength, speed, mental resilience, or other performance disciplines",
            checks: [false, true, false, true],
          },
        ],
      },
      {
        rows: [
          {
            kind: "header",
            title: "PERSONALIZED COACHING",
            subtitle: "Additional 1:1 or small-group instruction",
            checks: [false, false, true, true],
          },
        ],
      },
    ],
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

export const getAcademicsTranslation = (language: SupportedLanguage) =>
  academicsTranslations[language];

export const getProgramsTranslation = (language: SupportedLanguage) =>
  programsTranslations[language];

export const getCurrentOffersTranslation = (language: SupportedLanguage) =>
  currentOffersTranslations[language];

export const getImgCampsTranslation = (language: SupportedLanguage) =>
  imgCampsTranslations[language];

export const getSportsEducationTranslation = (language: SupportedLanguage) =>
  sportsEducationTranslations[language];

export const getSportsCarouselTranslation = (language: SupportedLanguage) =>
  sportsCarouselTranslations[language];

export const getContactTranslation = (language: SupportedLanguage) =>
  contactTranslations[language];

export const getBoardingTranslation = (language: SupportedLanguage) =>
  boardingTranslations[language];

export const getContactHelpTranslation = (language: SupportedLanguage) =>
  contactHelpTranslations[language];

export const getInstallationsTranslation = (language: SupportedLanguage) =>
  installationsTranslations[language];

export const getPersonalDevelopmentTranslation = (language: SupportedLanguage) =>
  personalDevelopmentTranslations[language];

export const getFooterTranslation = (language: SupportedLanguage) =>
  footerTranslations[language];

export const getDiscountsTranslation = (language: SupportedLanguage) =>
  discountsTranslations[language];

export const getBookingInfoTranslation = (language: SupportedLanguage) =>
  bookingInfoTranslations[language];

export const getFacilitiesTranslation = (language: SupportedLanguage) =>
  facilitiesTranslations[language];

export const getCampDetailsTranslation = (language: SupportedLanguage) =>
  campDetailsTranslations[language];

export const getCampsPageTranslation = (language: SupportedLanguage) =>
  campsPageTranslations[language];

export const getLoyaltyBenefitsTranslation = (language: SupportedLanguage) =>
  loyaltyBenefitsTranslations[language];

export const getGroupBenefitsTranslation = (language: SupportedLanguage) =>
  groupBenefitsTranslations[language];

export const getEnhancedContactFormTranslation = (language: SupportedLanguage) =>
  enhancedContactFormTranslations[language];

export const getInquiryModalTranslation = (language: SupportedLanguage) =>
  inquiryModalTranslations[language];

export const getPriceCalculatorTranslation = (language: SupportedLanguage) =>
  priceCalculatorTranslations[language];

export const getSportSelectionQuizTranslation = (language: SupportedLanguage) =>
  sportSelectionQuizTranslations[language];

export const getCampComparisonTranslation = (language: SupportedLanguage) =>
  campComparisonTranslations[language];

export const getSportsPageTranslation = (language: SupportedLanguage) =>
  sportsPageTranslations[language];

export const getSportDetailTranslation = (language: SupportedLanguage) =>
  sportDetailTranslations[language];

export const getAdultProgramsTranslation = (language: SupportedLanguage) =>
  adultProgramsTranslations[language];

export const getBoardingPageTranslation = (language: SupportedLanguage) =>
  boardingPageTranslations[language];

export const getFacilitiesPageTranslation = (language: SupportedLanguage) =>
  facilitiesPageTranslations[language];

export const getAboutUsTranslation = (language: SupportedLanguage) =>
  aboutUsTranslations[language];

export const getPrivacyPolicyTranslation = (language: SupportedLanguage) =>
  privacyPolicyTranslations[language];

export type { FormattedTextToken };
