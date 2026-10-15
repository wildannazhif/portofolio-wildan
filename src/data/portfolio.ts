/**
 * Single source of truth for the portfolio content.
 * Preserved 1:1 from the previous React version (v1), with two fixes:
 * - email is now a real address (v1 stored a Gmail-compose URL as the email)
 * - social links are full https:// URLs (v1 stored bare domains)
 */

export const profile = {
  name: "Wildan Nazhif Irsyadi",
  shortName: "Wildan Nazhif I.",
  title: "Statistics Undergraduate & Data Analyst",
  email: "wildannazhifirsyadi@gmail.com",
  location: "Kab. Bekasi, Indonesia",
  linkedin: "https://linkedin.com/in/wildannazh",
  github: "https://github.com/wildannazhif",
  resume:
    "https://drive.google.com/file/d/1U06eRLSGCqX0cWurjsCUDs6D8E20swqE/view?usp=sharing",
  summary:
    "Wildan is a dedicated Statistics undergraduate at Institut Teknologi Sepuluh Nopember (ITS) with a specialized focus on data analysis, statistical modeling, and quantitative processing. He possesses robust technical proficiency in R, Python, SPSS, and Excel, with hands-on experience in data cleaning, exploratory data analysis (EDA), and regression. Known for his detail-oriented approach and strong problem-solving abilities, Wildan is committed to producing structured analytical reports that drive data-informed decision-making.",
} as const;

export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  accent: string;
  description: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    company: "PT PAL Indonesia",
    location: "Surabaya, Indonesia",
    role: "Quality Assurance Intern",
    period: "Dec 2025 – Present",
    accent: "#2563eb",
    description:
      "PT PAL Indonesia is a company that produced Indonesia's main defence systems, particularly in the field of marine engineering technology manufacturing. The existence of PT PAL itself supports the development of the national marine industry.",
    achievements: [
      "Developed a comprehensive monitoring dashboard and database managing over 500 measuring instruments and welding machines at PT PAL to streamline recalibration scheduling.",
    ],
  },
  {
    company: "Dinas Koperasi dan Usaha Mikro",
    location: "Sidoarjo, Indonesia",
    role: "Surveyor",
    period: "Aug 2024 – Present",
    accent: "#059669",
    description:
      "Dinas Koperasi dan Usaha Mikro, Sidoarjo Regency Regional government agency responsible for empowering and supervising local cooperatives and micro-enterprises.",
    achievements: [
      "Conducted field surveys and data collection for over 150 MSMEs (UMKM) throughout Sidoarjo.",
    ],
  },
  {
    company: "IBSI Education",
    location: "East Java",
    role: "Tutor",
    period: "Aug 2023",
    accent: "#4f46e5",
    description:
      "IBSI Education A leading private tutoring institution in East Java (Surabaya, Sidoarjo, Gresik, Malang) with over 100 active tutors.",
    achievements: [
      "Conducted private home tutoring sessions for 3+ students for one semester.",
    ],
  },
  {
    company: "Kementrian Agama Kabupaten Bekasi",
    location: "Bekasi, Indonesia",
    role: "Data Management Intern",
    period: "Jan 2025 – Feb 2025",
    accent: "#d97706",
    description:
      "Ministry of Religious Affairs, Bekasi Regency Government regional office responsible for overseeing religious education, worship infrastructure, and marriage administration services.",
    achievements: [
      "Executed data cleansing and validation for 2,200+ mosques and 2,227 Majlis Taklim in Bekasi Regency.",
      "Developed a Python and Streamlit dashboard to visualize marriage trends based on 2020–2024 data.",
    ],
  },
];

export type Education = {
  institution: string;
  location: string;
  degree: string;
  period: string;
  gpa?: string;
  accent: string;
  highlights: string[];
};

export const education: Education[] = [
  {
    institution: "Institut Teknologi Sepuluh Nopember",
    location: "Surabaya, Indonesia",
    degree: "Bachelor of Statistics",
    period: "Aug 2022 – Sep 2026 (Expected)",
    gpa: "3.36/4.00",
    accent: "#9333ea",
    highlights: [
      "Awardee Ministry of Religion Achievement Santri Scholarship 2022",
      "Representing ITS in the Satria Data Competition in the Big Data Category (BDC) held by PUSPRESNAS (Pusat Prestasi Nasional)",
    ],
  },
  {
    institution: "MA Attaqwa Putra",
    location: "Bekasi, Indonesia",
    degree: "Senior High School, Science major",
    period: "Jun 2019 – Jun 2022",
    accent: "#0284c7",
    highlights: [
      "Rank 1 Parallel in MA Attaqwa Putra 2019-2022",
      "Realistic Reasoning Mathematics Final Participants (MNR) 2021",
    ],
  },
];

export type Organisation = {
  name: string;
  role: string;
  period: string;
  accent: string;
  description: string;
  achievements: string[];
};

export const organisations: Organisation[] = [
  {
    name: "CSSMoRA ITS",
    role: "President",
    period: "Oct 2024 – Oct 2025",
    accent: "#f43f5e",
    description:
      "CSSMoRA ITS (Community of Santri Scholars of Ministry of Religious Affairs) is an organization for high-achieving students awarded the PBSB scholarship by the Ministry of Religious Affairs RI.",
    achievements: [
      "Led 112 scholarship recipients, overseeing the execution of 30 strategic programs focusing on academic, religious, and social development.",
      "Managed an organizational budget of IDR 61.8 million with full transparency and accountability.",
      "Initiated a strategic community service project benefiting Pondok Pesantren Matholi’ul Anwar Simo, Lamongan.",
    ],
  },
  {
    name: "HIMASTA ITS",
    role: "Staff of Communication & Information Dept",
    period: "Jan 2024 – Jan 2025",
    accent: "#2563eb",
    description:
      "HIMASTA ITS (Himpunan Mahasiswa Statistika) The official student association for Statistics majors at ITS, focusing on professional and academic development.",
    achievements: [
      "Project Lead for Basic Media Schooling (BMS), a design and media training program.",
      "Produced the Annual Magazine and managed the official website to maintain information flow and documentation.",
    ],
  },
  {
    name: "FORSIS ITS",
    role: "Vice Chairman",
    period: "Jan 2024 – May 2025",
    accent: "#059669",
    description:
      "FORSIS ITS (Forum Studi Islam Statistika) is Islamic Study Forum of the Statistics Department ITS.",
    achievements: [
      "Oversaw the performance of 36 committee members across 4 distinct departments within the Statistics Department's Islamic forum.",
    ],
  },
  {
    name: "JMMI ITS",
    role: "Head of Business & Entrepreneurship Department",
    period: "Jan 2023 – Jan 2025",
    accent: "#d97706",
    description:
      "JMMI ITS (Jamaah Masjid Manarul Ilmi) The central Islamic student organization at ITS established in 1989, focusing on spiritual development and community service.",
    achievements: [
      "Directed strategies for financial sustainability through the development of creative business units.",
      "Launched 'GIFT,' a digital fundraising platform designed to streamline donations and sustain the organization's advocacy programs.",
    ],
  },
  {
    name: "Pekan Raya Statistika ITS",
    role: "Expert Staff of Conference Subject Data Analysis Competition",
    period: "Feb 2024 – Oct 2024",
    accent: "#4f46e5",
    description:
      "PRS (Pekan Raya Statistika) is an annual competition organised by the ITS Statistics Department. This event is divided into two events, namely STATION (Statistics Competition) for high school students and DAC (Data Analyst Competition) for university students.",
    achievements: [
      "Created data analysis case studies for a Southeast Asian-level competition (Data Analysis Competition).",
    ],
  },
];

export type Project = { year: string; title: string; method: string };

export const projects: Project[] = [
  { year: "2024", title: "Forecasting Apple Stock Prices", method: "ARIMA and Multi-Input Transfer Function Models" },
  { year: "2024", title: "Computation of Occupancy Matrix", method: "Continuous Time Markov Chains Using the Uniformization Algorithm" },
  { year: "2024", title: "Survival Analysis of Lung Cancer Patients", method: "Cox Proportional Hazards Model" },
  { year: "2024", title: "Handling Heteroscedasticity", method: "Indonesia's Economic Growth Model Using Weighted Least Squares" },
  { year: "2024", title: "Relational Database System", method: "E-Commerce Transaction Management" },
  { year: "2023", title: "Multistage Cluster Sampling Design", method: "Estimating Contraceptive Prevalence in East Java" },
  { year: "2025", title: "FINAIlytics Interactive Dashboard", method: "Personal Financial Asset Analysis" },
  { year: "2025", title: "ITS Student Readiness Analysis", method: "Behavior Towards the 2029 Plastic-Free Policy" },
  { year: "2024", title: "Modeling Criminality Factors", method: "Nonparametric Truncated Spline Regression" },
];

export const skills = {
  hard: ["Python", "R Studio", "Tableau", "Looker Studio", "Power BI", "Minitab", "SPSS", "ExtendSim", "MySQL", "Microsoft Office"],
  soft: ["Team Work", "Hard Working", "Communication", "Time Management", "Problem Solving", "Organization Skill"],
  achievements: [
    "Dicoding Midyear Scholarship module (2024): Completed courses in Git, Google Cloud, Programming Logic, Software Development, Data Visualization, and Project Management.",
  ],
  interests: ["EDA", "Statistical Modeling", "Machine Learning", "Deep Learning", "Survival Analysis", "Forecast"],
} as const;

export const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#leadership", label: "Leadership" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
] as const;
