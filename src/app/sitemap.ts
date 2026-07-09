import type { MetadataRoute } from "next";

const BASE_URL = "https://synergysolutions.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/sauvegardes", "/mentions-legales", "/confidentialite", "/cgv"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
