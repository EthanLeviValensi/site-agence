import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://synergysolutions.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Synergy Solutions — Logiciels sur mesure : e-commerce, KDS, CRM",
  description:
    "Agence de développement sur mesure à Lançon-Provence : e-commerce, écrans de cuisine (KDS), sites vitrines, CRM. 100 % codé, zéro WordPress, zéro module payant.",
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Synergy Solutions",
  },
  twitter: { card: "summary_large_image" },
};

// Fiche d'entreprise pour Google. Volontairement sans adresse postale
// complète (voir mentions légales) : ville et zone couverte suffisent.
const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "Synergy Solutions",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.jpg`,
      image: `${SITE_URL}/opengraph-image`,
      description:
        "Agence de développement sur mesure : sites e-commerce, écrans de cuisine (KDS), sites vitrines, CRM et outils métier pour commerces et restaurants.",
      telephone: "+33768490580",
      email: "ethanlevivalensi@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lançon-Provence",
        postalCode: "13680",
        addressRegion: "Provence-Alpes-Côte d'Azur",
        addressCountry: "FR",
      },
      areaServed: [{ "@type": "AdministrativeArea", name: "Bouches-du-Rhône" }],
      founder: { "@type": "Person", name: "Ethan Levi Valensi" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Synergy Solutions",
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
