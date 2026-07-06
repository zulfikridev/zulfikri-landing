import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const siteUrl = "https://zulfikri.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zulfikri Md Zin — Full Stack .NET & Angular Engineer",
    template: "%s | Zulfikri Md Zin",
  },
  description:
    "Senior Full Stack Engineer with 6+ years building enterprise financial, healthcare, and travel systems using .NET 8, Angular, and Clean Architecture. Open to new opportunities.",
  keywords: [
    "Full Stack Developer Malaysia",
    ".NET Angular Developer",
    "Software Engineer for hire",
    "ASP.NET Core Developer",
    "Enterprise Software Engineer",
    "Clean Architecture .NET",
    "Angular Developer Malaysia",
    "Full Stack Engineer for hire",
    ".NET Developer for hire",
    "Software Engineer Malaysia",
  ],
  authors: [{ name: "Zulfikri Md Zin", url: siteUrl }],
  creator: "Zulfikri Md Zin",
  publisher: "Zulfikri Md Zin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Zulfikri Md Zin — Full Stack .NET & Angular Engineer",
    description:
      "Senior Full Stack Engineer with 6+ years building enterprise financial, healthcare, and travel systems. Open to new opportunities.",
    siteName: "Zulfikri Md Zin",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zulfikri Md Zin — Full Stack .NET & Angular Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zulfikri Md Zin — Full Stack .NET & Angular Engineer",
    description:
      "Senior Full Stack Engineer with 6+ years building enterprise financial, healthcare, and travel systems. Open to new opportunities.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Zulfikri Md Zin",
              url: siteUrl,
              jobTitle: "Full Stack Software Engineer",
              description:
                "Senior Full Stack Engineer specializing in .NET, Angular, and enterprise systems architecture with 6+ years of experience.",
              email: "zulfikrisbn@gmail.com",
              telephone: "+60177576014",
              address: {
                "@type": "PostalAddress",
                addressCountry: "MY",
                addressRegion: "Malaysia",
              },
              knowsAbout: [
                ".NET 8",
                "ASP.NET Core",
                "Angular",
                "Entity Framework Core",
                "Clean Architecture",
                "CQRS",
                "SQL Server",
                "Azure DevOps",
                "TypeScript",
                "REST APIs",
              ],
              sameAs: [
                "https://linkedin.com/in/zulfikri-md-zin",
                "https://github.com/zulfikri",
              ],
            }),
          }}
        />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme-preference');var d=t==='dark'||(!t||t==='system')&&window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <ThemeProvider>
          <div className="noise-overlay" aria-hidden="true" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
