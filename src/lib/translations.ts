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
