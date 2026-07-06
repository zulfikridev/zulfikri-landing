export const CANDIDATE = {
  name: "Zulfikri Md Zin",
  role: "Software Engineer",
  tagline: "Building Scalable Enterprise Systems That Drive Business Impact",
  subTagline:
    "6 years engineering financial, healthcare, and travel platforms with .NET & Angular/React. Clean Architecture. Production-grade.",
  email: "zulfikrisbn@gmail.com",
  phone: "+6017-7576014",
  location: "Johor, Malaysia (UTC+8)",
  linkedin: "https://www.linkedin.com/in/zulfikrizin/",
  github: "https://github.com/zulfikridev",
  available: true,
  yearsExperience: 6,
};

export const STATS = [
  { label: "Years of Experience", value: "6", suffix: "" },
  { label: "Enterprise Systems Built", value: "10+", suffix: "" },
  { label: "Industries Served", value: "3", suffix: "" },
  { label: "Stack Depth", value: "Full", suffix: "" },
];

export const INDUSTRIES = [
  { name: "Financial Services", icon: "💳", color: "text-emerald-400" },
  { name: "Healthcare", icon: "🏥", color: "text-blue-400" },
  { name: "Travel & Hospitality", icon: "✈️", color: "text-purple-400" },
];

export const PROJECTS = [
  {
    id: "reconciliation",
    title: "Findroid Recon — Financial Reconciliation Engine",
    company: "Etiqa Insurance",
    industry: "Finance",
    industryColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    problem:
      "Etiqa Insurance was running end-of-day reconciliation manually — a 4-hour error-prone process involving multiple data sources, leading to overnight delays and occasional financial discrepancies.",
    solution:
      "Architected and built a fully automated reconciliation engine using .NET 8 and Clean Architecture, with a React 18 SPA dashboard using Ant Design for real-time monitoring. Implemented balance sheet reconciliation modules with automated exception escalation workflows compliant with financial regulations.",
    impact: [
      "Reduced reconciliation processing time from 4 hours to under 30 minutes (87% improvement)",
      "Eliminated manual data entry errors — achieving 99.98% accuracy",
      "Automated exception handling reduced finance team workload by 60%",
      "Production deployments on IIS using a recreate strategy, aligned with tier-3 system maintenance windows",
    ],
    tech: ["Clean Architecture", ".NET 8", "React 18", "Ant Design", "EF Core", "SQL Server", "Stored Procedure", "Git"],
    highlight: "87% faster processing",
  },
  {
    id: "booking",
    title: "Booking Management System",
    company: "Travel Prologue Pte Ltd",
    industry: "Travel",
    industryColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    problem:
      "A travel company was managing bookings, payments, and client integrations through disconnected tools and manual spreadsheets — leading to delayed financial reports, reconciliation errors, and poor visibility into booking operations.",
    solution:
      "Developed and maintained management reporting module with client API integration. Maintained and supported the existing booking system using MVC Architecture on .NET 3.5, with Azure DevOps for CI/CD and ADO.Net for data access.",
    impact: [
      "Consolidated 3 client API integrations into a single admin portal — reduced operational overhead by 50%",
      "Automated financial reconciliation for bookings, cutting month-end closing from 3 days to 4 hours",
      "Centralized booking management eliminated duplicate entries and reduced data discrepancies by 90%",
      "Real-time payment status tracking improved dispute resolution turnaround by 40%",
    ],
    tech: ["MVC Architecture", ".NET 3.5", "Azure DevOps", "ADO.Net", "Bootstrap", "SQL Server", "Stored Procedure", "Git"],
    highlight: "50% less operational overhead",
  },
  {
    id: "healthcare",
    title: "e-Clinic System & BP Billing System",
    company: "Ali Health Sdn. Bhd. (BP Healthcare)",
    industry: "Healthcare",
    industryColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    problem:
      "A healthcare network was managing patient records across 3 clinics using disconnected spreadsheets and paper forms, leading to duplicate records, medication errors, and audit compliance failures.",
    solution:
      "Reverse-engineered a legacy FoxPro application into a .NET Core 3.1 web application using Clean Architecture and CQRS. Built Angular SPA with SignalR Core for real-time features, NSwag for API client generation, and a separate BP Billing System with Angular Material. Covered full lifecycle from requirement gathering to development, testing, and support.",
    impact: [
      "Unified patient records across all clinics — eliminated duplicate record instances",
      "Audit compliance rate reached 100% — passed regulatory review on first submission",
      "Appointment scheduling efficiency improved by 50% through automated slot management",
      "Medication error incidents reduced by 70% via prescription validation workflows",
    ],
    tech: ["Clean Architecture", ".NET Core 3.1", "Angular 8+", "SignalR Core", "EF Core", "NSwag", "CQRS", "SQL Server", "Stored Procedure", "Angular Material", "TypeScript", "Git"],
    highlight: "100% audit compliance",
  },
];

export const SKILLS = {
  backend: [
    { name: ".NET 8 / ASP.NET Core", level: 95 },
    { name: "ASP.NET Framework", level: 82 },
    { name: "C#", level: 95 },
    { name: "LINQ", level: 90 },
    { name: "Entity Framework Core", level: 90 },
    { name: "MVC", level: 88 },
    { name: "SQL Server", level: 88 },
    { name: "SignalR Core", level: 75 },
  ],
  frontend: [
    { name: "Angular 17+", level: 92 },
    { name: "React 18", level: 80 },
    { name: "TypeScript", level: 90 },
    { name: "Angular Material", level: 88 },
    { name: "Ant Design", level: 78 },
    { name: "HTML / CSS", level: 88 },
    { name: "JSON", level: 90 },
  ],
  architecture: [
    { name: "Clean Architecture", level: 92 },
    { name: "CQRS", level: 88 },
    { name: "MVC Architecture", level: 85 },
    { name: "SPA Architecture", level: 90 },
    { name: "NSwag / OpenAPI", level: 85 },
  ],
  tools: [
    { name: "Azure DevOps", level: 85 },
    { name: "Git", level: 90 },
    { name: "ADO.Net", level: 82 },
    { name: "Stored Procedure", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "Agile / Scrum", level: 82 },
  ],
};

export const ARCHITECTURE_PRINCIPLES = [
  {
    title: "Clean Architecture",
    icon: "🏛️",
    description:
      "Strict separation of concerns: Domain → Application → Infrastructure → Presentation. Business logic is framework-agnostic, testable, and immune to external changes.",
    benefit: "Systems that survive tech stack changes",
  },
  {
    title: "CQRS Pattern",
    icon: "⚡",
    description:
      "Command Query Responsibility Segregation using MediatR. Reads and writes are completely decoupled, enabling independent scaling, optimized query models, and clear audit trails.",
    benefit: "10× easier to reason about system state",
  },
  {
    title: "Domain-Driven Design",
    icon: "🎯",
    description:
      "Business language modeled directly in code. Aggregates, value objects, and domain events that make complex business rules explicit, not buried in service classes.",
    benefit: "Code that business stakeholders can validate",
  },
  {
    title: "Scalable API Design",
    icon: "📡",
    description:
      "RESTful APIs with OpenAPI/NSwag contracts, versioning, pagination, and consistent error responses. Auto-generated TypeScript clients eliminate drift between frontend and backend.",
    benefit: "Zero contract mismatches in production",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor in Computer Science, Data Comm & Networking",
    institution: "Universiti Teknologi Mara (UiTM)",
    period: "2016 - 2019",
    cgpa: "3.15",
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Universiti Teknologi Mara (UiTM)",
    period: "2014 - 2016",
    cgpa: "3.00",
  },
];

export const LANGUAGES = [
  {
    name: "English",
    proficiency: "Good in speaking and writing",
    certification: "MUET Band 4",
  },
  {
    name: "Malay",
    proficiency: "Good in speaking and writing",
    certification: "",
  },
];
