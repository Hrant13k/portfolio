import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://hrantkarapetyan.dev";
const description =
  "Hrant Karapetyan — Full-Stack Software Engineer in Yerevan building complete products end to end, with a UI/UX design background that shapes how he engineers.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Hrant Karapetyan",
    "Full-Stack Engineer",
    "Software Engineer",
    "React",
    "Node.js",
    "TypeScript",
    "UI/UX",
    "Yerevan",
    "Armenia",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: { "@type": "PostalAddress", addressLocality: "Yerevan", addressCountry: "Armenia" },
  url: siteUrl,
  knowsAbout: ["Full-Stack Development", "React", "Node.js", "TypeScript", "UI/UX Design"],
  sameAs: [profile.github, profile.linkedin, profile.behance],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}
    >
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
