export const CANDIDATE = {
  name: "Zulfikri Md Zin",
  role: "Full Stack Software Engineer",
  tagline: "Building Scalable Enterprise Systems That Drive Business Impact",
  subTagline:
    "6+ years engineering financial, healthcare, and travel platforms with .NET & Angular. Clean Architecture. Production-grade. Remote-ready.",
  email: "zulfikrisbn@gmail.com",
  phone: "+6017-7576014",
  location: "Malaysia (UTC+8)",
  linkedin: "https://linkedin.com/in/zulfikri-md-zin",
  github: "https://github.com/zulfikri",
  available: true,
  yearsExperience: 6,
};

export const STATS = [
  { label: "Years of Experience", value: "6+", suffix: "" },
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
    title: "Financial Reconciliation Engine",
    industry: "Finance",
    industryColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    problem:
      "A financial services firm was running end-of-day reconciliation manually — a 4-hour error-prone process involving multiple data sources, leading to overnight delays and occasional financial discrepancies.",
    solution:
      "Architected and built a fully automated reconciliation engine using .NET 8 and CQRS. Implemented parallel processing pipelines to ingest and cross-validate transaction data from multiple banking APIs, with real-time discrepancy detection and automated exception escalation workflows.",
    impact: [
      "Reduced reconciliation processing time from 4 hours to under 30 minutes (87% improvement)",
      "Eliminated manual data entry errors — achieving 99.98% accuracy",
      "Automated exception handling reduced finance team workload by 60%",
      "Zero downtime deployments via blue-green deployment strategy on Azure",
    ],
    tech: [".NET 8", "ASP.NET Core", "CQRS", "EF Core", "SQL Server", "Azure DevOps", "Angular"],
    highlight: "87% faster processing",
  },
  {
    id: "booking",
    title: "Travel Booking & Reservation Platform",
    industry: "Travel",
    industryColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    problem:
      "A travel company's legacy monolithic booking system was causing frequent timeouts during peak load, cart abandonment due to slow availability checks, and revenue loss from failed reservation confirmations.",
    solution:
      "Led full-stack redesign from monolith to modular Clean Architecture. Built a reactive Angular SPA with real-time availability, multi-currency pricing engine, and a .NET Core backend handling concurrent booking requests with optimistic concurrency control and distributed caching.",
    impact: [
      "Reduced average booking completion time from 45s to under 8s (82% faster)",
      "System throughput increased to handle 3× concurrent users with no degradation",
      "Cart abandonment dropped by 35% after performance improvements",
      "Payment success rate improved to 99.2% with retry orchestration",
    ],
    tech: [".NET 8", "Angular", "SQL Server", "Redis Cache", "REST APIs", "Clean Architecture"],
    highlight: "82% faster bookings",
  },
  {
    id: "healthcare",
    title: "Healthcare Patient Management System",
    industry: "Healthcare",
    industryColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    problem:
      "A healthcare network was managing patient records across 3 clinics using disconnected spreadsheets and paper forms, leading to duplicate records, medication errors, and audit compliance failures.",
    solution:
      "Built an enterprise-grade patient management system with Angular-based SPA, role-based access control (RBAC), complete audit trail logging, and a .NET Core API following CQRS and Domain-Driven Design principles. Implemented HL7-compatible data structures for interoperability.",
    impact: [
      "Unified patient records across all clinics — eliminated duplicate record instances",
      "Audit compliance rate reached 100% — passed regulatory review on first submission",
      "Appointment scheduling efficiency improved by 50% through automated slot management",
      "Medication error incidents reduced by 70% via prescription validation workflows",
    ],
    tech: [".NET 8", "Angular", "EF Core", "SQL Server", "RBAC", "DDD", "CQRS"],
    highlight: "100% audit compliance",
  },
];

export const SKILLS = {
  backend: [
    { name: ".NET 8 / ASP.NET Core", level: 95 },
    { name: "Entity Framework Core", level: 90 },
    { name: "C#", level: 95 },
    { name: "REST API Design", level: 92 },
    { name: "SQL Server", level: 88 },
    { name: "SignalR", level: 75 },
  ],
  frontend: [
    { name: "Angular (v17+)", level: 92 },
    { name: "TypeScript", level: 90 },
    { name: "RxJS", level: 85 },
    { name: "Angular Material", level: 88 },
    { name: "React", level: 70 },
    { name: "HTML5 / CSS3", level: 88 },
  ],
  architecture: [
    { name: "Clean Architecture", level: 92 },
    { name: "CQRS + MediatR", level: 90 },
    { name: "Domain-Driven Design", level: 82 },
    { name: "Microservices", level: 78 },
    { name: "SPA Architecture", level: 90 },
    { name: "RESTful Design", level: 92 },
  ],
  tools: [
    { name: "Azure DevOps", level: 85 },
    { name: "Git / GitHub", level: 90 },
    { name: "Docker", level: 72 },
    { name: "Postman / Swagger", level: 90 },
    { name: "NSwag / OpenAPI", level: 85 },
    { name: "CI/CD Pipelines", level: 80 },
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
