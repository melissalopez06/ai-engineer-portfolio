import { PLACEHOLDER } from "./site-config";

export type Locale = "es" | "en";

const sharedPlaceholders = {
  availabilityEs: "Disponible para oportunidades como AI Engineer",
  availabilityEn: "Available for AI Engineer opportunities",
  linkedinUrl: PLACEHOLDER + ": URL de LinkedIn",
  githubUrl: PLACEHOLDER + ": URL de GitHub",
  certName: PLACEHOLDER + ": nombre de la certificación",
  certIssuer: PLACEHOLDER + ": emisor",
  certDate: PLACEHOLDER + ": fecha",
  resumeloStart: PLACEHOLDER + ": fecha de inicio en Resumelo",
  tutorPeriod: PLACEHOLDER + ": período como tutor",
} as const;

export const translations = {
  es: {
    location: "Cali, Colombia",
    nav: {
      about: "Perfil",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Educación",
      certifications: "Certificaciones",
      contact: "Contacto",
      cta: "Contactar",
    },
    hero: {
      badge: sharedPlaceholders.availabilityEs,
      subtitle:
        "AI Engineer con experiencia en sistemas de IA listos para producción con Python, FastAPI y modelos de lenguaje. Diseño de pipelines LLM multi-paso con LangChain/LangGraph, prompt engineering con GPT-4o, APIs escalables y automatización.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactar",
      stats: {
        location: "Ubicación",
        languages: "Idiomas",
        languagesValue: "ES · EN · DE",
        education: "Formación",
        educationValue: "Química — Univ. del Valle",
      },
    },
    about: {
      label: "Perfil",
      title: "Resumen profesional",
      description: "Texto extraído del CV.",
      summary:
        "AI Engineer con experiencia en sistemas de IA listos para producción usando Python, FastAPI y modelos de lenguaje. Experiencia en diseño de pipelines LLM multi-paso con LangChain/LangGraph, prompt engineering con GPT-4o, y desarrollo de APIs escalables y flujos automatizados. Experiencia en parsing de PDF, web scraping, Docker, CI/CD e integraciones de APIs, con capacidad demostrada para traducir requisitos complejos en soluciones de IA confiables.",
      languagesTitle: "Idiomas",
      languages: [
        "Español (nativo)",
        "Inglés (avanzado)",
        "Alemán (intermedio)",
      ],
    },
    skills: {
      label: "Habilidades",
      title: "Habilidades técnicas",
      description: "Según la sección Skills del CV.",
      items: [
        { name: "Python", description: "" },
        {
          name: "LangChain & LangGraph",
          description: "Pipelines LLM multi-paso.",
        },
        {
          name: "OpenAI GPT-4o",
          description: "Prompt engineering, structured output.",
        },
        { name: "FastAPI", description: "" },
        { name: "MongoDB", description: "" },
        {
          name: "LLM Observability (Langfuse)",
          description: "",
        },
        { name: "PDF parsing (PyMuPDF)", description: "" },
        { name: "Web scraping (BeautifulSoup)", description: "" },
        {
          name: "Docker & CI/CD",
          description: "GitHub Actions.",
        },
        { name: "Stripe API integration", description: "" },
      ],
    },
    projects: {
      label: "Proyectos",
      title: "Proyectos",
      description: "Proyectos listados en el CV.",
      items: [
        {
          title: "Study Buddy App",
          tagline: "App iOS con LLMs en GCP",
          description:
            "App innovadora para iOS que mejora la experiencia de estudio usando LLMs. Alojada en Google Cloud Platform (GCP), con Cloud Vision para OCR, Palm para NLP, Google Cloud Text-to-Speech, Zilliz y Milvus para gestión de datos.",
          tech: [
            "GCP",
            "Cloud Vision",
            "Palm",
            "Text-to-Speech",
            "Zilliz",
            "Milvus",
            "LLMs",
          ],
          highlights: [] as string[],
        },
        {
          title: "Purificación de una fosfolipasa de veneno de serpiente",
          tagline: "Química / investigación",
          description:
            "Purificación de fosfolipasa A2 del veneno de Porthidium lansbergii lansbergii mediante HPLC en fase reversa. Análisis del espectro obtenido. Liofilización de la muestra como método de separación proteica.",
          tech: [] as string[],
          highlights: [] as string[],
        },
        {
          title: "Descongelado y manejo de células de cáncer de hígado",
          tagline: "Cultivo celular",
          description:
            "Descongelado de una línea celular hepática y seguimiento de su crecimiento mediante cambios de medio. Familiarización con protocolo en cabina de flujo laminar y condiciones estériles.",
          tech: [] as string[],
          highlights: [] as string[],
        },
        {
          title: "Evaluación del efecto biológico de una fosfolipasa en células tumorales",
          tagline: "Ensayos in vitro",
          description:
            "Ensayos in vitro para evaluar respuesta celular y viabilidad. Diseño experimental, cultivo celular y análisis de datos. Revisión bibliográfica para apoyar el proyecto.",
          tech: [] as string[],
          highlights: [] as string[],
        },
        {
          title: "Síntesis de una base de Schiff",
          tagline: "Química orgánica",
          description:
            "Síntesis de una base de Schiff con precursores orgánicos (aminas, bromo, yodo, benzaldehído). Caracterización con RMN, IR y cromatografía en capa delgada.",
          tech: [] as string[],
          highlights: [] as string[],
        },
      ],
    },
    experience: {
      label: "Experiencia",
      title: "Experiencia laboral",
      items: [
        {
          role: "Data Scientist",
          company: "Resumelo",
          period: "Actualidad",
          bullets: [
            "API REST en producción para personalización de CV y generación de solicitudes de empleo con FastAPI y Python.",
            "Pipelines LLM multi-paso con LangGraph (extraer vacante → adaptar CV → carta de presentación), con ejecución paralela de nodos para reducir latencia.",
            "Prompts de salida estructurada con GPT-4o para parsear PDFs de CV, extraer requisitos desde URLs y reescribir contenido con guardrails anti-alucinación.",
            "Sistema de changelog/diff que guarda el estado del CV antes de adaptar, permitiendo aceptar o descartar cambios generados por IA.",
            "Servicio containerizado con builds Docker multi-arquitectura (amd64/arm).",
            "Webhooks de Stripe para ciclo de suscripciones y JWT de Supabase para autenticación.",
          ],
          skills: [
            "Python",
            "FastAPI",
            "LangGraph",
            "GPT-4o",
            "Docker",
            "Stripe API",
            "Supabase JWT",
          ],
        },
        {
          role: "English Teacher",
          company: "Learn English",
          period: "Presente",
          bullets: [
            "Adaptación de estrategias pedagógicas a necesidades individuales, mejorando engagement y rendimiento.",
            "Desarrollo de comunicación, organización y mentoría aplicables a entornos académicos e investigación.",
            "Apoyo al progreso académico y personal con enfoque de escucha activa.",
          ],
          skills: [
            "Teaching",
            "Pedagogical Adaptability",
            "Active Listening",
            "Student Guidance",
          ],
        },
        {
          role: "Tutor de álgebra",
          company: "Independiente",
          period: "Experiencia independiente",
          bullets: [
            "Clases y tutorías de álgebra.",
            "Refuerzo teórico promoviendo autonomía y confianza académica en estudiantes universitarios.",
            "Adaptación y familiarización con otros programas de pregrado.",
          ],
          skills: ["Communication", "Organization", "Mentoring"],
        },
      ],
    },
    education: {
      label: "Educación",
      title: "Formación académica",
      items: [
        {
          degree: "Química",
          institution: "Universidad del Valle",
          period: "Nov 2025",
        },
      ],
    },
    certifications: {
      label: "Certificaciones",
      title: "Certificaciones",
      description:
        "Certificados disponibles para consulta.",
      items: [
        {
          name: "Certificado ACS",
          issuer: "ACS",
          date: "2024",
          url: "/certificates/certificado-acs.pdf",
          cta: "Ver certificado",
        },
        {
          name: "Certificado EIFA",
          issuer: "EIFA",
          date: "2024",
          url: "/certificates/certificado-eifa.pdf",
          cta: "Ver certificado",
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "Contacto",
      description: "Datos de contacto del CV.",
      email: "Email",
      phone: "Teléfono",
      linkedin: "LinkedIn",
      github: "GitHub",
      linkedinPlaceholder: sharedPlaceholders.linkedinUrl,
      githubPlaceholder: sharedPlaceholders.githubUrl,
      formNote:
        "Envía un mensaje con el formulario o tu cliente de correo. Opcional: NEXT_PUBLIC_FORMSPREE_ID en .env.local.",
      formNoteFile: "lib/site-config.ts",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      messageLabel: "Mensaje",
      messagePlaceholder: "Tu mensaje...",
      submit: "Enviar mensaje",
      submitMailto: "Enviar email",
    },
    footer: {
      built: "Portafolio con Next.js y Tailwind CSS.",
    },
    a11y: {
      navMain: "Principal",
      navMobile: "Móvil",
      navFooter: "Pie de página",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      themeLight: "Modo claro",
      themeDark: "Modo oscuro",
      langEs: "Español",
      langEn: "English",
    },
    meta: {
      description:
        "Laura Melissa López Sierra — AI Engineer. Python, FastAPI, LangGraph, GPT-4o, Docker. Cali, Colombia.",
      ogDescription:
        "Portafolio de Laura Melissa López Sierra, AI Engineer (CV).",
    },
  },
  en: {
    location: "Cali, Colombia",
    nav: {
      about: "Profile",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      badge: sharedPlaceholders.availabilityEn,
      subtitle:
        "AI Engineer with expertise in building production-ready AI systems using Python, FastAPI, and large language models. Skilled in designing multi-step LLM pipelines with LangChain/LangGraph, prompt engineering with GPT-4o, and developing scalable APIs and automated workflows.",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
      stats: {
        location: "Location",
        languages: "Languages",
        languagesValue: "ES · EN · DE",
        education: "Education",
        educationValue: "Chemistry — Univ. del Valle",
      },
    },
    about: {
      label: "Profile",
      title: "Professional summary",
      description: "Extracted from CV.",
      summary:
        "AI Engineer with expertise in building production-ready AI systems using Python, FastAPI, and large language models. Skilled in designing multi-step LLM pipelines with LangChain/LangGraph, prompt engineering with GPT-4o, and developing scalable APIs and automated workflows. Experienced in PDF parsing, web scraping, Docker, CI/CD, and API integrations, with a proven ability to translate complex requirements into reliable AI solutions.",
      languagesTitle: "Languages",
      languages: [
        "Spanish (Native)",
        "English (Advanced)",
        "German (Intermediate)",
      ],
    },
    skills: {
      label: "Skills",
      title: "Technical skills",
      description: "From the Skills section of the CV.",
      items: [
        { name: "Python", description: "" },
        {
          name: "LangChain & LangGraph",
          description: "Multi-step LLM pipelines.",
        },
        {
          name: "OpenAI GPT-4o",
          description: "Prompt engineering, structured output.",
        },
        { name: "FastAPI", description: "" },
        { name: "MongoDB", description: "" },
        { name: "LLM Observability (Langfuse)", description: "" },
        { name: "PDF parsing (PyMuPDF)", description: "" },
        { name: "Web scraping (BeautifulSoup)", description: "" },
        {
          name: "Docker & CI/CD",
          description: "GitHub Actions.",
        },
        { name: "Stripe API integration", description: "" },
      ],
    },
    projects: {
      label: "Projects",
      title: "Projects",
      description: "Projects listed on the CV.",
      items: [
        {
          title: "Study Buddy App",
          tagline: "iOS app with LLMs on GCP",
          description:
            "An innovative iOS app that improves students' studying experience using large language models (LLMs). Hosted on Google Cloud Platform (GCP), it features advanced tech like Cloud Vision for OCR, Palm for NLP, and Google Cloud Text to Speech, alongside Zilliz and Milvus for efficient data management.",
          tech: [
            "GCP",
            "Cloud Vision",
            "Palm",
            "Text-to-Speech",
            "Zilliz",
            "Milvus",
            "LLMs",
          ],
          highlights: [] as string[],
        },
        {
          title: "Purification of a phospholipase from snake venom",
          tagline: "Chemistry / research",
          description:
            "Purified phospholipase A2 from Porthidium lansbergii lansbergii venom using reverse-phase HPLC. Analyzed the spectrum obtained from HPLC. Lyophilized the sample as a protein separation method.",
          tech: [] as string[],
          highlights: [] as string[],
        },
        {
          title: "Thawing and handling of liver cancer cells",
          tagline: "Cell culture",
          description:
            "Thawed a hepatic cell line and monitored its growth through media changes. Became familiar with the protocol for working in a laminar flow hood and sterile conditions.",
          tech: [] as string[],
          highlights: [] as string[],
        },
        {
          title:
            "Evaluation of the biological effect of a phospholipase on tumor cells",
          tagline: "In vitro assays",
          description:
            "Performed in vitro assays to evaluate cellular response and viability. Developed skills in experimental design, cell culture, and data analysis. Researched the observed phenomena through scientific literature to support the project.",
          tech: [] as string[],
          highlights: [] as string[],
        },
        {
          title: "Synthesis of a Schiff base",
          tagline: "Organic chemistry",
          description:
            "Synthesized a Schiff base using organic precursors such as amines, bromine, iodine, and benzaldehyde. Characterized the product using NMR, IR, and thin-layer chromatography.",
          tech: [] as string[],
          highlights: [] as string[],
        },
      ],
    },
    experience: {
      label: "Experience",
      title: "Work experience",
      items: [
        {
          role: "Data Scientist",
          company: "Resumelo",
          period: "Current",
          bullets: [
            "Built a production-ready REST API for AI-powered resume tailoring and job application generation using FastAPI and Python.",
            "Designed and implemented multi-step LLM pipelines with LangGraph (extract job → tailor resume → generate cover letter), including parallel node execution to reduce latency.",
            "Engineered structured output prompts with GPT-4o to parse PDF resumes, extract job requirements from URLs, and rewrite resume content with strict anti-hallucination guardrails.",
            "Developed a changelog/diff system that snapshots resume state before tailoring, allowing users to accept or discard AI-generated changes.",
            "Containerized the service with multi-arch Docker builds (amd64/arm).",
            "Integrated Stripe webhooks for subscription lifecycle management and Supabase JWT for authentication.",
          ],
          skills: [
            "Python",
            "FastAPI",
            "LangGraph",
            "GPT-4o",
            "Docker",
            "Stripe API",
            "Supabase JWT",
          ],
        },
        {
          role: "English Teacher",
          company: "Learn English",
          period: "Present",
          bullets: [
            "Adaptation of pedagogical strategies to individual student needs, improving engagement and academic performance.",
            "Development of communication, organization, and mentoring skills applicable to academic and research environments.",
            "Academic and personal progress support with an active-listening approach.",
          ],
          skills: [
            "Teaching",
            "Pedagogical Adaptability",
            "Active Listening",
            "Student Guidance",
          ],
        },
        {
          role: "Algebra Tutor",
          company: "Independent",
          period: "Independent experience",
          bullets: [
            "Developed algebra lessons and tutoring sessions.",
            "Reinforced theoretical content while promoting autonomy and academic confidence in university students.",
            "Adapted to and became familiar with other undergraduate programs.",
          ],
          skills: ["Communication", "Organization", "Mentoring"],
        },
      ],
    },
    education: {
      label: "Education",
      title: "Education",
      items: [
        {
          degree: "Chemistry",
          institution: "Universidad del Valle",
          period: "Nov 2025",
        },
      ],
    },
    certifications: {
      label: "Certifications",
      title: "Certifications",
      description:
        "Certificates available for review.",
      items: [
        {
          name: "ACS Certificate",
          issuer: "ACS",
          date: "2024",
          url: "/certificates/certificado-acs.pdf",
          cta: "View certificate",
        },
        {
          name: "EIFA Certificate",
          issuer: "EIFA",
          date: "2024",
          url: "/certificates/certificado-eifa.pdf",
          cta: "View certificate",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Contact",
      description: "Contact details from the CV.",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
      linkedinPlaceholder: sharedPlaceholders.linkedinUrl,
      githubPlaceholder: sharedPlaceholders.githubUrl,
      formNote:
        "Send a message via the form or your mail client. Optional: NEXT_PUBLIC_FORMSPREE_ID in .env.local.",
      formNoteFile: "lib/site-config.ts",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      messageLabel: "Message",
      messagePlaceholder: "Your message...",
      submit: "Send message",
      submitMailto: "Send email",
    },
    footer: {
      built: "Portfolio built with Next.js and Tailwind CSS.",
    },
    a11y: {
      navMain: "Main",
      navMobile: "Mobile",
      navFooter: "Footer",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      themeLight: "Light mode",
      themeDark: "Dark mode",
      langEs: "Español",
      langEn: "English",
    },
    meta: {
      description:
        "Laura Melissa López Sierra — AI Engineer. Python, FastAPI, LangGraph, GPT-4o, Docker. Cali, Colombia.",
      ogDescription:
        "Portfolio of Laura Melissa López Sierra, AI Engineer (from CV).",
    },
  },
} as const;

export type Translation = (typeof translations)[Locale];
