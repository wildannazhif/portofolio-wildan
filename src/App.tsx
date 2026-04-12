/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Users, 
  Code2, 
  Trophy,
  ChevronRight,
  Download,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const userData = {
    name: "Wildan Nazhif Irsyadi",
    title: "Statistics Undergraduate & Data Analyst",
    email: "mail.google.com/mail/?view=cm&fs=1&to=wildannazhifirsyadi@gmail.com",
    location: "Kab. Bekasi, Indonesia",
    linkedin: "linkedin.com/in/wildannazh",
    github: "github.com/wildannazhif",
    summary: "Wildan is a dedicated Statistics undergraduate at Institut Teknologi Sepuluh Nopember (ITS) with a specialized focus on data analysis, statistical modeling, and quantitative processing. He possesses robust technical proficiency in R, Python, SPSS, and Excel, with hands-on experience in data cleaning, exploratory data analysis (EDA), and regression. Known for his detail-oriented approach and strong problem-solving abilities, Wildan is committed to producing structured analytical reports that drive data-informed decision-making.",
    experiences: [
      {
        company: "PT PAL Indonesia",
        location: "Surabaya, Indonesia",
        role: "Quality Assurance Intern",
        period: "Dec 2025 - Present",
        color: "from-blue-500 to-cyan-400",
        description: "PT PAL Indonesia is a company that produced Indonesia's main defence systems, particularly in the field of marine engineering technology manufacturing. The existence of PT PAL itself supports the development of the national marine industry.",
        achievements: [
          "Developed a comprehensive monitoring dashboard and database managing over 500 measuring instruments and welding machines at PT PAL to streamline recalibration scheduling."
        ]
      },
      {
        company: "Dinas Koperasi dan Usaha Mikro",
        location: "Sidoarjo, Indonesia",
        role: "Surveyor",
        period: "Aug 2024 - Present",
        color: "from-emerald-500 to-teal-400",
        description: "Dinas Koperasi dan Usaha Mikro, Sidoarjo Regency Regional government agency responsible for empowering and supervising local cooperatives and micro-enterprises.",
        achievements: [
          "Conducted field surveys and data collection for over 150 MSMEs (UMKM) throughout Sidoarjo."
        ]
      },
      {
        company: "IBSI Education",
        location: "East Java",
        role: "Tutor",
        period: "Aug 2023",
        color: "from-indigo-500 to-purple-400",
        description: "IBSI Education A leading private tutoring institution in East Java (Surabaya, Sidoarjo, Gresik, Malang) with over 100 active tutors.",
        achievements: [
          "Conducted private home tutoring sessions for 3+ students for one semester."
        ]
      },
      {
        company: "Kementrian Agama Kabupaten Bekasi",
        location: "Bekasi, Indonesia",
        role: "Data Management Intern",
        period: "Jan 2025 - Feb 2025",
        color: "from-orange-500 to-amber-400",
        description: "Ministry of Religious Affairs, Bekasi Regency Government regional office responsible for overseeing religious education, worship infrastructure, and marriage administration services.",
        achievements: [
          "Executed data cleansing and validation for 2,200+ mosques and 2,227 Majlis Taklim in Bekasi Regency.",
          "Developed a Python and Streamlit dashboard to visualize marriage trends based on 2020–2024 data."
        ]
      }
    ],
    education: [
      {
        institution: "Institut Teknologi Sepuluh Nopember",
        location: "Surabaya, Indonesia",
        degree: "Bachelor of Statistics",
        period: "Aug 2022 - Sep 2026 (Expected)",
        gpa: "3.36/4.00",
        color: "from-violet-600 to-fuchsia-500",
        highlights: [
          "Awardee Ministry of Religion Achievement Santri Scholarship 2022",
          "Representing ITS in the Satria Data Competition in the Big Data Category (BDC) held by PUSPRESNAS (Pusat Prestasi Nasional)"
        ]
      },
      {
        institution: "MA Attaqwa Putra",
        location: "Bekasi, Indonesia",
        degree: "Senior High School, Science major",
        period: "Jun 2019 - Jun 2022",
        color: "from-sky-600 to-blue-500",
        highlights: [
          "Rank 1 Parallel in MA Attaqwa Putra 2019-2022",
          "Realistic Reasoning Mathematics Final Participants (MNR) 2021"
        ]
      }
    ],
    organisations: [
      {
        name: "CSSMoRA ITS",
        location: "Surabaya, Indonesia",
        role: "President",
        period: "Oct 2024 - Oct 2025",
        color: "bg-rose-500",
        description: "CSSMoRA ITS (Community of Santri Scholars of Ministry of Religious Affairs) is an organization for high-achieving students awarded the PBSB scholarship by the Ministry of Religious Affairs RI.",
        achievements: [
          "Led 112 scholarship recipients, overseeing the execution of 30 strategic programs focusing on academic, religious, and social development.",
          "Managed an organizational budget of IDR 61.8 million with full transparency and accountability.",
          "Initiated a strategic community service project benefiting Pondok Pesantren Matholi’ul Anwar Simo, Lamongan."
        ]
      },
      {
        name: "HIMASTA ITS",
        location: "Surabaya, Indonesia",
        role: "Staff of Communication & Information Dept",
        period: "Jan 2024 - Jan 2025",
        color: "bg-blue-500",
        description: "HIMASTA ITS (Himpunan Mahasiswa Statistika) The official student association for Statistics majors at ITS, focusing on professional and academic development.",
        achievements: [
          "Project Lead for Basic Media Schooling (BMS), a design and media training program.",
          "Produced the Annual Magazine and managed the official website to maintain information flow and documentation."
        ]
      },
      {
        name: "FORSIS ITS",
        location: "Surabaya, Indonesia",
        role: "Vice Chairman",
        period: "Jan 2024 - May 2025",
        color: "bg-emerald-500",
        description: "FORSIS ITS (Forum Studi Islam Statistika) is Islamic Study Forum of the Statistics Department ITS.",
        achievements: [
          "Oversaw the performance of 36 committee members across 4 distinct departments within the Statistics Department's Islamic forum."
        ]
      },
      {
        name: "JMMI ITS",
        location: "Surabaya, Indonesia",
        role: "Head of Business & Entrepreneurship Department",
        period: "Jan 2023 - Jan 2025",
        color: "bg-amber-500",
        description: "JMMI ITS (Jamaah Masjid Manarul Ilmi) The central Islamic student organization at ITS established in 1989, focusing on spiritual development and community service.",
        achievements: [
          "Directed strategies for financial sustainability through the development of creative business units.",
          "Launched 'GIFT,' a digital fundraising platform designed to streamline donations and sustain the organization's advocacy programs."
        ]
      },
      {
        name: "Pekan Raya Statistika ITS",
        location: "Surabaya, Indonesia",
        role: "Expert Staff of Conference Subject Data Analysis Competition",
        period: "Feb 2024 - Oct 2024",
        color: "bg-indigo-500",
        description: "PRS (Pekan Raya Statistika) is an annual competition organised by the ITS Statistics Department. This event is divided into two events, namely STATION (Statistics Competition) for high school students and DAC (Data Analyst Competition) for university students.",
        achievements: [
          "Created data analysis case studies for a Southeast Asian-level competition (Data Analysis Competition)."
        ]
      }
    ],
    skills: {
      hard: [
        { name: "Python", color: "bg-blue-100 text-blue-700 border-blue-200" },
        { name: "R Studio", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
        { name: "Tableau", color: "bg-orange-100 text-orange-700 border-orange-200" },
        { name: "Looker Studio", color: "bg-purple-100 text-purple-700 border-purple-200" },
        { name: "Power BI", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
        { name: "Minitab", color: "bg-slate-100 text-slate-700 border-slate-200" },
        { name: "SPSS", color: "bg-red-100 text-red-700 border-red-200" },
        { name: "ExtendSim", color: "bg-pink-100 text-pink-700 border-pink-200" },
        { name: "MySQL", color: "bg-cyan-100 text-cyan-700 border-cyan-200" },
        { name: "Microsoft Office", color: "bg-emerald-100 text-emerald-700 border-emerald-200" }
      ],
      soft: ["Team Work", "Hard Working", "Communication", "Time Management", "Problem Solving", "Organization Skill"],
      achievements: [
        "Dicoding Midyear Scholarship module (2024): Completed courses in Git, Google Cloud, Programming Logic, Software Development, Data Visualization, and Project Management."
      ],
      interests: ["EDA", "Statistical Modeling", "Machine Learning", "Deep Learning", "Survival Analysis", "Forecast"]
    },
    projects: [
      {
        year: "2024",
        title: "Forecasting Apple Stock Prices",
        method: "ARIMA and Multi-Input Transfer Function Models",
        gradient: "from-blue-600 to-indigo-600"
      },
      {
        year: "2024",
        title: "Computation of Occupancy Matrix",
        method: "Continuous Time Markov Chains Using the Uniformization Algorithm",
        gradient: "from-purple-600 to-pink-600"
      },
      {
        year: "2024",
        title: "Survival Analysis of Lung Cancer Patients",
        method: "Cox Proportional Hazards Model",
        gradient: "from-emerald-600 to-teal-600"
      },
      {
        year: "2024",
        title: "Handling Heteroscedasticity",
        method: "Indonesia's Economic Growth Model Using Weighted Least Squares",
        gradient: "from-orange-600 to-amber-600"
      },
      {
        year: "2024",
        title: "Relational Database System",
        method: "E-Commerce Transaction Management",
        gradient: "from-cyan-600 to-blue-600"
      },
      {
        year: "2023",
        title: "Multistage Cluster Sampling Design",
        method: "Estimating Contraceptive Prevalence in East Java",
        gradient: "from-rose-600 to-pink-600"
      },
      {
        year: "2025",
        title: "FINAIlytics Interactive Dashboard",
        method: "Personal Financial Asset Analysis",
        gradient: "from-indigo-600 to-violet-600"
      },
      {
        year: "2025",
        title: "ITS Student Readiness Analysis",
        method: "Behavior Towards the 2029 Plastic-Free Policy",
        gradient: "from-teal-600 to-emerald-600"
      },
      {
        year: "2024",
        title: "Modeling Criminality Factors",
        method: "Nonparametric Truncated Spline Regression",
        gradient: "from-slate-600 to-slate-800"
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-[#fafafa] text-foreground selection:bg-indigo-500 selection:text-white">
      {/* Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-[120px]" />
        <div className="absolute -right-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-rose-200/20 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[20%] h-[400px] w-[400px] rounded-full bg-emerald-200/20 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/60 backdrop-blur-xl transition-all duration-300">
        <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12 lg:px-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white font-black text-xl shadow-lg shadow-indigo-200">W</div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tighter">Wildan Nazhif I.</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">Statistics</span>
            </div>
          </motion.div>
          
          <div className="hidden items-center gap-1 rounded-full bg-slate-100/50 p-1.5 backdrop-blur-md md:flex">
            {["Experience", "Education", "Skills", "Projects"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-5 py-2 text-sm font-bold text-slate-600 transition-all hover:bg-white hover:text-indigo-600 hover:shadow-sm"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full md:hidden">
              <Sparkles className="h-5 w-5 text-indigo-600" />
            </Button>
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-6 font-bold shadow-lg shadow-indigo-200" asChild>
              <a href="https://drive.google.com/file/d/1U06eRLSGCqX0cWurjsCUDs6D8E20swqE/view?usp=sharing" target="_blank" rel="noreferrer">
                Resume
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 md:px-12 lg:px-20 lg:py-20">
        {/* Hero Section */}
        <section className="mb-32 grid gap-16 lg:grid-cols-[1fr_400px] lg:items-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 border border-indigo-100">
                <Sparkles className="h-3.5 w-3.5" />
                Available for hire
              </div>
              <h1 className="text-6xl font-black tracking-tight md:text-8xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 bg-clip-text text-transparent leading-[1.1]">
                {userData.name}
              </h1>
              <p className="max-w-xl text-xl font-medium text-slate-600 md:text-2xl">
                {userData.title}
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-indigo-600 px-10 hover:bg-indigo-700 shadow-xl shadow-indigo-200 text-base font-bold tracking-tight" asChild>
                <a href={`https://${userData.email}`} target="_blank" rel="noreferrer">
                  Get in Touch
                </a>
              </Button>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200" asChild>
                  <a href={`https://${userData.linkedin}`} target="_blank" rel="noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-slate-200 hover:bg-slate-100" asChild>
                  <a href={`https://${userData.github}`} target="_blank" rel="noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col gap-4 text-sm font-medium text-slate-500 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                  <MapPin className="h-4 w-4" />
                </div>
                {userData.location}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative z-10 h-72 w-72 overflow-hidden rounded-[2.5rem] border-[12px] border-white bg-white shadow-2xl md:h-96 md:w-96">
              <img 
                src="/1766358560221.jpg" 
                alt={userData.name}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/wildan/800/800";
                }}
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-rose-500/20 blur-3xl" />
            <div className="absolute -right-4 bottom-10 z-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl">
              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-4xl rounded-[2rem] bg-indigo-600 p-8 text-white shadow-2xl shadow-indigo-200 md:p-12"
          >
            <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-indigo-600 shadow-lg">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="mb-6 text-sm font-black uppercase tracking-[0.2em] opacity-70">Professional Summary</h2>
            <p className="text-xl font-medium leading-relaxed md:text-2xl md:leading-loose">
              {userData.summary}
            </p>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-40 scroll-mt-24">
          <div className="mb-16 flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl font-black tracking-tight">Experience</h2>
              <div className="h-1.5 w-20 rounded-full bg-indigo-600" />
            </div>
          </div>
          <div className="grid gap-8">
            {userData.experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-none bg-white/60 shadow-xl shadow-slate-200/50 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-2xl">
                  <div className={`absolute left-0 top-0 h-full w-2 bg-gradient-to-b ${exp.color}`} />
                  <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl font-bold">{exp.role}</CardTitle>
                      <div className="flex flex-wrap items-center gap-2 text-base font-bold text-indigo-600">
                        {exp.company}
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                        <span className="text-slate-500 font-medium">{exp.location}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit bg-slate-100 font-mono text-xs font-bold text-slate-600">
                      {exp.period}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-base leading-relaxed text-slate-600">{exp.description}</p>
                    <div className="space-y-3">
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-3 rounded-xl bg-slate-50/50 p-4 border border-slate-100">
                          <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${exp.color} text-white`}>
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-sm font-medium text-slate-700">{ach}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Organisations */}
        <div className="mb-40 grid gap-16 lg:grid-cols-2">
          {/* Education */}
          <section id="education" className="scroll-mt-24">
            <div className="mb-12 space-y-2">
              <h2 className="text-4xl font-black tracking-tight">Education</h2>
              <div className="h-1.5 w-20 rounded-full bg-rose-500" />
            </div>
            <div className="space-y-8">
              {userData.education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group relative rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/50 transition-all hover:shadow-xl"
                >
                  <div className={`absolute -left-3 top-8 h-12 w-1.5 rounded-full bg-gradient-to-b ${edu.color}`} />
                  <div className="mb-4 flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">{edu.institution}</h3>
                      <p className="font-bold text-rose-600">{edu.degree}</p>
                    </div>
                    {edu.gpa && (
                      <div className="rounded-xl bg-rose-50 px-3 py-1 text-sm font-black text-rose-600">
                        GPA {edu.gpa}
                      </div>
                    )}
                  </div>
                  <p className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">{edu.period} • {edu.location}</p>
                  <ul className="space-y-3">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Organisations */}
          <section>
            <div className="mb-12 space-y-2">
              <h2 className="text-4xl font-black tracking-tight">Leadership</h2>
              <div className="h-1.5 w-20 rounded-full bg-emerald-500" />
            </div>
            <div className="space-y-6">
              {userData.organisations.map((org, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-slate-100 bg-white/40 p-6 backdrop-blur-sm transition-all hover:bg-white"
                >
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-xl ${org.color} flex items-center justify-center text-white`}>
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold">{org.name}</h3>
                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{org.role}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-400">{org.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {org.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Projects Section */}
        <section id="projects" className="mb-40 scroll-mt-24">
          <div className="mb-12 space-y-2">
            <h2 className="text-4xl font-black tracking-tight">Key Projects</h2>
            <div className="h-1.5 w-20 rounded-full bg-amber-500" />
          </div>
          <div className="grid gap-3">
            {userData.projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white/50 p-5 transition-all hover:bg-white hover:shadow-xl sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="flex items-start gap-4 sm:items-center">
                  <div className={`mt-1.5 h-3 w-3 shrink-0 rounded-full bg-gradient-to-br ${project.gradient} sm:mt-0`} />
                  <div className="space-y-0.5">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors leading-tight">{project.title}</h3>
                    <p className="text-xs font-medium text-slate-500">{project.method}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-6 sm:justify-end">
                  <span className="font-mono text-xs font-black text-slate-300">{project.year}</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-40 scroll-mt-24">
          <div className="rounded-[2.5rem] bg-slate-900 p-10 text-white shadow-2xl">
            <div className="mb-10 space-y-2">
              <h2 className="text-3xl font-black tracking-tight">Skill Set & Achievements</h2>
              <div className="h-1 w-12 rounded-full bg-indigo-500" />
            </div>
            
            <div className="grid gap-12 lg:grid-cols-3">
              <div>
                <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400">Technical Stack</h3>
                <div className="flex flex-wrap gap-2.5">
                  {userData.skills.hard.map((skill) => (
                    <Badge key={skill.name} className={`${skill.color} border-none px-3 py-1 text-[11px] font-bold rounded-lg`}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400">Achievements</h3>
                <ul className="space-y-4">
                  {userData.skills.achievements.map((ach, i) => (
                    <li key={i} className="text-sm font-medium text-slate-300 leading-relaxed flex gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {userData.skills.soft.map((skill) => (
                      <div key={skill} className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 border border-white/10">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400">Interests</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-indigo-400">
                    {userData.skills.interests.map(i => (
                      <span key={i} className="hover:text-white transition-colors cursor-default">#{i}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative mt-20 overflow-hidden border-t border-slate-200 bg-white py-20">
        <div className="container mx-auto px-6 text-center md:px-12 lg:px-20">
          <div className="mb-8 flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-indigo-50 hover:text-indigo-600" asChild>
              <a href={`https://${userData.linkedin}`} target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100" asChild>
              <a href={`https://${userData.github}`} target="_blank" rel="noreferrer"><Github className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-rose-50 hover:text-rose-600" asChild>
              <a href={`mailto:${userData.email}`}><Mail className="h-5 w-5" /></a>
            </Button>
          </div>
          <p className="text-sm font-bold text-slate-400">
            Designed & Built by Wildan Nazhif Irsyadi
          </p>
          <p className="mt-2 text-xs font-medium text-slate-300 uppercase tracking-widest">
            © {new Date().getFullYear()} • Statistics & Data Science
          </p>
        </div>
      </footer>
    </div>
  );
}
