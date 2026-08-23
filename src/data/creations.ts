export interface Creation {
  slug: string;
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "live" | "soon";
  palette: {
    bg: string;
    text: string;
    accent: string;
    accent2: string;
  };
}

export const CREATIONS: Creation[] = [
  {
    slug: "reliana-beaute",
    name: "Réliana B.",
    domain: "relianab.fr",
    url: "https://relianab.fr",
    tagline: "Massage & rituel du monde",
    description:
      "Site vitrine pour une praticienne en massages bien-être et rituels du monde à Salon-de-Provence, également formatrice (Kansa Wand & Mushroom). Réservation via Fresha, univers chaleureux ivoire et or patiné.",
    stack: ["Next.js", "Framer Motion", "Sur mesure"],
    status: "live",
    palette: { bg: "#f6efe0", text: "#20283a", accent: "#c9a15a", accent2: "#7c8a6b" },
  },
  {
    slug: "ms-grossiste-esthetique",
    name: "MS Grossiste Esthétique",
    domain: "msgrossisteesthetique.com",
    url: "https://msgrossisteesthetique.com",
    tagline: "Grossiste esthétique professionnel",
    description:
      "Boutique en ligne pour un grossiste esthétique (cils, ongles, soin, maquillage, matériel institut) réservée aux professionnelles, avec catalogue par catégories et prix pro masqués aux visiteurs.",
    stack: ["Next.js", "Espace pro", "Sur mesure"],
    status: "soon",
    palette: { bg: "#fbf2f6", text: "#1b1620", accent: "#b96c9e", accent2: "#e7c8d6" },
  },
];
