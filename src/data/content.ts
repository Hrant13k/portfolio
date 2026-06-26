/**
 * Single source of truth for all portfolio content.
 * Extracted and structured from Hrant Karapetyan's CV.
 */

export const profile = {
  name: "Hrant Karapetyan",
  firstName: "Hrant",
  lastName: "Karapetyan",
  role: "Full-Stack Software Engineer",
  location: "Yerevan, Armenia",
  email: "hrantk1313@gmail.com",
  phone: "+374-43-23-30-23",
  phoneHref: "+37443233023",
  github: "https://github.com/Hrant13k",
  githubHandle: "Hrant13k",
  linkedin: "https://www.linkedin.com/in/hrantk13/",
  linkedinHandle: "in/hrantk13",
  cv: "/hrant-karapetyan-cv.pdf",
  // The core narrative — engineer first, designer-minded throughout.
  tagline:
    "I build complete products — engineering the systems and shaping the experiences people actually use.",
  summary:
    "Full-stack engineer who ships interactive, user-centric web applications end to end. A background designing in Figma means I think in systems and flows, not just code — bridging high-fidelity interfaces with scalable architecture so the product feels as good as it performs.",
} as const;

export const stats = [
  { value: "5+", label: "International clients shipped for" },
  { value: "2+", label: "Years building for the web" },
  { value: "4", label: "Roles across engineering & design" },
] as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

// Reverse-chronological, framed as engineering-led work with product/UX depth.
export const experience: Experience[] = [
  {
    company: "Fiverr",
    role: "Freelance Full-Stack Engineer",
    period: "Mar 2026 — Present",
    type: "Freelance",
    summary:
      "Architecting and deploying secure, highly-available web applications for a global client base.",
    highlights: [
      "Engineered and deployed secure web applications for global clients on Linux environments with robust networking protocols to ensure high availability.",
      "Delivered high-performing full-stack solutions under tight constraints, integrating web-application security best practices to safeguard user data.",
    ],
    stack: ["Node.js", "React", "Linux", "REST APIs", "Security"],
  },
  {
    company: "Hooded Horse",
    role: "Mid Full-Stack Engineer",
    period: "Feb 2026 — May 2026",
    type: "Full-time",
    summary:
      "Owned core software infrastructure and web technologies, balancing system stability with end-user experience.",
    highlights: [
      "Spearheaded development of core software infrastructure and robust web technologies, optimizing system stability and application performance.",
      "Bridged full-stack development with interface design to build scalable internet software and seamless end-user experiences on the MEAN stack.",
    ],
    stack: ["MongoDB", "Express", "Angular", "Node.js"],
  },
  {
    company: "GSoftX",
    role: "Junior Web Developer",
    period: "Nov 2025 — Feb 2026",
    type: "Full-time",
    summary:
      "Built reusable, high-performance front-end components and translated complex design specs into shipped features.",
    highlights: [
      "Engineered and optimized modular front-end components on a modern stack, ensuring reusability and high performance across the GSoftX ecosystem.",
      "Translated complex design specifications into responsive, user-centric features alongside senior engineers.",
      "Championed code quality through peer reviews and industry-standard best practices for long-term scalability.",
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "Code Review"],
  },
  {
    company: "Upwork",
    role: "Freelance UI/UX Designer",
    period: "Feb 2024 — Jan 2025",
    type: "Freelance",
    summary:
      "Turned complex requirements into high-converting digital products for 5+ international clients — the design foundation behind how I build today.",
    highlights: [
      "Executed end-to-end web and mobile design strategies for 5+ international clients, transforming complex requirements into high-converting, intuitive products.",
      "Architected comprehensive design systems, interactive prototypes, and responsive mobile designs in Figma, grounded in user research.",
    ],
    stack: ["Figma", "Design Systems", "Prototyping", "User Research"],
  },
];

export type SkillGroup = {
  title: string;
  caption: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    caption: "Interfaces that feel inevitable.",
    skills: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / SASS"],
  },
  {
    title: "Backend & Tools",
    caption: "Systems built to hold up.",
    skills: ["Node.js", "SQL", "REST APIs", "Git", "Unix Shell (Bash)", "C", "Python"],
  },
  {
    title: "Design",
    caption: "The product thinking behind the code.",
    skills: ["Figma", "UI/UX Design Systems", "Prototyping", "User Research"],
  },
];

export const languages = [
  { name: "Armenian", level: "Native" },
  { name: "Russian", level: "C1" },
  { name: "English", level: "B2" },
] as const;

export type Education = {
  institution: string;
  program: string;
  period: string;
  kind: "education" | "certification";
  note?: string;
};

export const education: Education[] = [
  {
    institution: "Tumo Labs",
    program: "Full-Stack Development (GSL)",
    period: "2026 — Present",
    kind: "education",
    note: "Intensive, project-based engineering track.",
  },
  {
    institution: "Yerevan State University",
    program: "Cultural Studies, BA",
    period: "2022 — Present",
    kind: "education",
    note: "A humanities lens on how people and products meet.",
  },
  {
    institution: "The Odin Project",
    program: "Full-Stack JavaScript",
    period: "2023",
    kind: "certification",
  },
  {
    institution: "Armenian Code Academy",
    program: "UI/UX Design",
    period: "2023",
    kind: "certification",
  },
];

// What each capability area means in practice — used in the About/approach blocks.
export const principles = [
  {
    no: "01",
    title: "Build the whole product",
    body: "From data model to deployed interface — I own the path from problem to shipped, not just the slice in the middle.",
  },
  {
    no: "02",
    title: "Design is engineering's other half",
    body: "Years in Figma taught me to read a flow before I write a line. The result is software that's coherent end to end.",
  },
  {
    no: "03",
    title: "Performance is a feature",
    body: "Reusable components, security-first APIs, and stable infrastructure — quality the user feels even when they can't name it.",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Path", href: "#path" },
  { label: "Contact", href: "#contact" },
] as const;
