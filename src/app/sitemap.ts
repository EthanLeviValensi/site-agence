import type { MetadataRoute } from "next";

const BASE_URL = "https://synergysolutions.fr";

// Dates de dernière modification réelle du contenu (pas la date du build :
// Google ignore un lastmod qui change à chaque déploiement). À mettre à jour
// quand le contenu d'une page change vraiment.
const PAGES: { path: string; lastModified: string }[] = [
  { path: "", lastModified: "2026-09-20" },
  { path: "/creations", lastModified: "2026-08-23" },
  { path: "/bookflow", lastModified: "2026-09-18" },
  { path: "/bookflow/conditions", lastModified: "2026-09-18" },
  { path: "/bookflow/confidentialite", lastModified: "2026-09-23" },
  { path: "/sauvegardes", lastModified: "2026-07-07" },
  { path: "/confidentialite", lastModified: "2026-09-18" },
  { path: "/cgv", lastModified: "2026-07-16" },
  { path: "/mentions-legales", lastModified: "2026-07-07" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
  }));
}
