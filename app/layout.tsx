import type { Metadata, Viewport } from "next";
import { Kanit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://reuben-fernandes.xyz";
const SITE_NAME = "Reuben Chagas Fernandes";
const SITE_TITLE = "Reuben Chagas Fernandes | Full Stack Developer from Goa";
const SITE_DESCRIPTION =
  "Reuben Chagas Fernandes is a full-stack developer from Goa, India, specializing in React, Next.js, Flutter, Node.js, Python, and AI/LLM research. Available for freelance and full-time roles.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFE0D0" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0C0C" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Reuben Chagas Fernandes",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Reuben Chagas Fernandes",
    "Reuben Fernandes",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Flutter Developer",
    "AI Developer",
    "LLM Engineer",
    "Konkani AI",
    "Goa Developer",
    "India Developer",
    "Software Engineer Goa",
    "Hire Full Stack Developer India",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  category: "Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@18reuchagas",
    site: "@18reuchagas",
  },
  verification: {
    // Add Google Search Console verification token here when you set it up:
    // google: "your-google-verification-code",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: SITE_NAME,
  alternateName: "Reuben Fernandes",
  jobTitle: "Full Stack Developer",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  email: "mailto:18reuchagasfernandes@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/reuben-chagas-fernandes/",
    "https://x.com/18reuchagas",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Goa",
    addressCountry: "IN",
  },
  nationality: {
    "@type": "Country",
    name: "India",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Flutter",
    "Node.js",
    "Python",
    "TypeScript",
    "Large Language Models",
    "Artificial Intelligence",
    "Konkani Language Technology",
    "Full Stack Development",
    "Web Development",
    "UI/UX Design",
  ],
  knowsLanguage: ["English", "Konkani", "Hindi"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-US",
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: `${SITE_NAME} — Full Stack Development`,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  description:
    "Full-stack web and mobile development services: React, Next.js, Flutter, Node.js, Python, and AI/LLM integration.",
  provider: { "@id": `${SITE_URL}/#person` },
  areaServed: { "@type": "Country", name: "Worldwide" },
  serviceType: ["Web Development", "Mobile App Development", "AI Integration"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
