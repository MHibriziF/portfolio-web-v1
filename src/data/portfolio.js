// Single source of truth for every section's content, kept in sync with
// CV_MuhammadHibriziFarghana.pdf. Update here, not inside the components.

export const profile = {
  name: "Muhammad Hibrizi Farghana",
  tagline: "Backend, Mobile & AI-Integrated Application Developer",
  location: "Depok, Indonesia",
  email: "hibrizifarghana@gmail.com",
  summary:
    "I am an Information Systems undergraduate at Universitas Indonesia (GPA 3.79/4.00) with hands-on experience in backend, mobile, and AI-integrated application development using Flutter, Django, Spring Boot, and FastAPI. I enjoy building scalable backend systems, wiring up external services and APIs, and shipping apps powered by LLMs and real-time AI. Outside of code, I love teaching, mentoring, and watching anime.",
};

export const education = [
  {
    org: "Universitas Indonesia",
    logo: "/makara-ui.png",
    role: "Bachelor of Information Systems",
    period: "Jul 2023 — Present",
    place: "Depok, Indonesia",
    points: [
      "CGPA: 3.79 / 4.00",
      "Relevant coursework: Data Structures and Algorithms, Databases, Security-Driven Software Development, Enterprise Application Development",
    ],
  },
  {
    org: "SMAN 3 Kota Jambi",
    logo: "/logo-netco.jpeg",
    role: "Math and Science",
    period: "Jul 2020 — Jun 2023",
    place: "Jambi, Indonesia",
    points: [
      "Ranked 7th in the 2022 Jambi City Informatics Olympiad (Puspresnas SIMT)",
      "Netco Informatics Olympiad Team, English Club",
    ],
  },
];

export const experience = [
  {
    org: "APAX Media Pte Ltd (Iyagi)",
    logo: "/iyagi_logo.jpeg",
    role: "Tech Development",
    period: "Jun 2026 — Present",
    place: "Singapore — Remote",
    points: [
      "Engineered a video transcoding microservice that processes uploaded videos into HLS/DASH streaming formats with multiple quality variants for adaptive delivery.",
      "Implemented CDN-based video delivery to improve media distribution and playback performance.",
      "Diagnosed and resolved playback and streaming issues across transcoding, manifests, media segments, and client-side players.",
      "Built and maintained features for the Iyagi Flutter app and the React partner portal, integrating REST APIs and reusable UI components.",
      "Collaborated with designers, backend engineers, and product stakeholders to ship features and fix production issues.",
    ],
  },
  {
    org: "RISTEK Fasilkom UI",
    logo: "/logo_ristek.png",
    role: "Lead of Mobile Development SIG",
    period: "Mar 2026 — Present",
    place: "Depok, Indonesia",
    points: [
      "Contributed to INAGRICHAT, an AI-powered avatar chatbot for farmers, building the Flutter frontend with the Product, Design, Data Science, and Web SIGs.",
      "Coordinated with the Data Science and Web teams to integrate the mobile app with AI and backend services.",
      "Led technical mentoring sessions on Flutter — widget composition, StatefulWidget lifecycle, rebuild behavior, UI architecture, and performance.",
      "Mentored members 1-on-1 on Flutter engineering, debugging, and maintainable application design.",
    ],
  },
  {
    org: "Bekerdja.id",
    logo: "/bekerdja.jpeg",
    role: "Full-stack Developer",
    period: "Feb 2026 — May 2026",
    place: "Jakarta, Indonesia — Remote",
    points: [
      "Integrated Groq LLM APIs into WIRA (WhatsApp Intelligent Recruitment Assistant) to automate candidate screening and interview scheduling over WhatsApp.",
      "Built AI-assisted workflows that analyze recruiter and candidate chat history and classify candidate interest using prompt-engineered LLM responses.",
    ],
  },
  {
    org: "RISTEK Fasilkom UI",
    logo: "/logo_ristek.png",
    role: "Member of Mobile Development SIG",
    period: "Mar 2025 — Feb 2026",
    place: "Depok, Indonesia",
    points: [
      "Explored core Flutter concepts: widgets, state management, clean architecture, and API integration.",
      "Built a movie-themed app on the TMDB API with authentication, movie data retrieval, and personalized user features.",
    ],
  },
  {
    // Not on the CV — sourced from LinkedIn. All four courses are folded into
    // one entry so the timeline does not repeat the same org four times.
    org: "Faculty of Computer Science, Universitas Indonesia",
    logo: "/makara-ui.png",
    role: "Teaching Assistant",
    period: "Aug 2024 — Present",
    place: "Depok, Indonesia",
    points: [
      {
        label: "Enterprise Application Programming (Aug 2026 — Present)",
        text: "Supporting students in building scalable enterprise systems with Spring Boot — layered architecture, design patterns, containerization, Git workflows, deployment, and JVM monitoring.",
      },
      {
        label: "Databases (Jul 2025 — Dec 2025)",
        text: "Designed original DDL/DML quizzes and PostgreSQL assignments on complex query writing (SELECT, JOIN, filtering, grouping), and graded EERD, EER-to-relational mapping, relational algebra, triggers, and PL/pgSQL work.",
      },
      {
        label: "Introduction to Computer Architecture (Jan 2025 — Jun 2025)",
        text: "Designed AVR lab problems to build up low-level programming and critical thinking, and evaluated 200+ assignment and lab submissions with written feedback.",
      },
      {
        label: "Discrete Mathematics 1 (Aug 2024 — Dec 2024)",
        text: "Assisted 200+ students with mathematical logic, proof techniques, sets, functions, and combinatorics; wrote original practice problems, graded 80+ submissions, and supervised quizzes.",
      },
    ],
  },
];

export const projects = [
  {
    id: "sifpi",
    name: "SIFPI",
    subtitle: "Sistem Informasi Fasilitasi Proyek Infrastruktur",
    context: "Infrastructure Project Facilitation Office (IPFO) — Kemenkoinfra",
    role: "Lead Programmer",
    stack: [
      "Spring Boot",
      "Java",
      "Next.js",
      "PostgreSQL",
      "Cloudflare R2",
      "Cloudflare Turnstile",
      "Railway",
      "CI/CD",
    ],
    points: [
      "Led a 5-person development team as lead programmer, delivering the platform for IPFO as the project client with Spring Boot and Next.js.",
      "Directed backend engineering practices — database indexing, caching, pagination, and access/refresh token authentication — to improve scalability, performance, and security.",
      "Integrated Cloudflare Turnstile and Cloudflare R2 for bot protection and scalable object storage, and built CI/CD pipelines for automated deployment to Railway.",
      "Engineered an asynchronous bulk upload system in Java with concurrent image downloading, background job processing, and polling-based status tracking APIs.",
      "Leveraged AI-assisted development workflows with tools such as Claude Code to speed up implementation and debugging.",
    ],
    // Client project — no public screenshots.
    images: [],
  },
  {
    id: "inagrichat",
    name: "INAGRICHAT",
    subtitle: "AI Avatar Chatbot for Farmers",
    context: "RISTEK Project",
    role: "Mobile & Backend Developer",
    stack: ["Flutter", "FastAPI", "Python", "LiveKit", "LLM APIs"],
    points: [
      "Developed an AI-powered chatbot for farmers with FastAPI and Flutter, giving conversational access to agricultural information from a mobile app.",
      "Integrated the backend with an LLM-based AI service to process user queries and generate context-aware agricultural responses.",
      "Integrated LiveKit for real-time communication between users and an AI avatar, enabling interactive voice conversations.",
      "Designed backend APIs and service integrations coordinating LLM inference, conversational state, and real-time avatar communication.",
    ],
    images: [
      "/projects/inagrichat/inagrichat-1.jpeg",
      "/projects/inagrichat/inagrichat-2.jpeg",
      "/projects/inagrichat/inagrichat-3.jpeg",
    ],
  },
  {
    id: "food-reg",
    name: "Food-Reg",
    subtitle: "Food Recognition App",
    context: "Dicoding Final Project — Machine Learning Applications for Flutter",
    role: "Solo Developer",
    stack: [
      "Flutter",
      "Dart",
      "Google ML Kit",
      "TensorFlow Lite",
      "Firebase ML",
    ],
    points: [
      "Built a Flutter food recognition app as the final project for the Dicoding Machine Learning Applications for Flutter course, using Google ML Kit and TensorFlow Lite.",
      "Implemented image classification through both on-device inference and Firebase-hosted models, recognizing food locally and through remotely deployed models.",
    ],
    images: [
      "/projects/foodreg/foodreg-1.jpeg",
      "/projects/foodreg/foodreg-2.jpeg",
      "/projects/foodreg/foodreg-3.jpeg",
      "/projects/foodreg/foodreg-4.jpeg",
      "/projects/foodreg/foodreg-5.jpeg",
    ],
  },
  {
    id: "movie-app",
    name: "TMDB MovieApp",
    subtitle: "Cross-platform Movie Companion",
    context: "Solo Project",
    role: "Solo Developer",
    stack: ["Flutter", "Dart", "REST API", "TMDB API"],
    points: [
      "Designed and developed a cross-platform movie application independently using Flutter and the TMDB REST APIs.",
      "Implemented authentication, movie discovery, search, favorites, watchlist, and pagination for an efficient and responsive experience.",
    ],
    images: [
      "/projects/movie-app/movapp-1.png",
      "/projects/movie-app/movapp-2.png",
      "/projects/movie-app/movapp-3.png",
    ],
  },
];

export const skills = [
  {
    label: "Frameworks",
    items: ["Flutter", "Spring Boot", "Django", "FastAPI", "Next.js", "Nuxt"],
  },
  {
    label: "Languages & Tools",
    items: ["Java", "Dart", "Python", "TypeScript", "PostgreSQL", "Git", "AWS"],
  },
  {
    label: "Soft Skills",
    items: ["Teaching", "Mentoring", "Presentation", "Communication"],
  },
  {
    label: "Interests",
    items: [
      "Mobile Development",
      "Backend Development",
      "Frontend Development",
    ],
  },
];

export const certifications = [
  {
    name: "Machine Learning Applications for Flutter",
    issuer: "Dicoding",
    details: "TensorFlow Lite, ML Kit, on-device ML",
  },
  {
    name: "Google Cloud Basics",
    issuer: "Dicoding",
    details: "Google Cloud Platform, Compute Engine, Cloud Storage, IAM",
  },
];

export const socials = [
  {
    href: "https://github.com/MHibriziF/",
    img: "/github.png",
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/muhammad-hibrizi-farghana/",
    img: "/linkedin.png",
    alt: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/mhibrizifarghana/",
    img: "/instagram.png",
    alt: "Instagram",
  },
];
