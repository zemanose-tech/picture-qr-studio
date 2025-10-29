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
