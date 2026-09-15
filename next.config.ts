import type { NextConfig } from "next";

// BookFlow : /admin du site relayé vers l'admin BookFlow centralisé.
// Activé uniquement si BOOKFLOW_TENANT_SLUG est défini (variable posée à
// l'activation de BookFlow, lue au build) — sans elle, aucune règle, le site
// reste strictement inchangé. Le slug est figé au build, jamais choisi par le
// visiteur : un /admin de CE site ne peut atteindre qu'un seul établissement.
const BOOKFLOW_ADMIN_URL = process.env.BOOKFLOW_ADMIN_URL || "https://admin-bookflow.synergysolutions.fr";
const TENANT_SLUG = process.env.BOOKFLOW_TENANT_SLUG?.trim();

const nextConfig: NextConfig = {
  async rewrites() {
    if (!TENANT_SLUG || !/^[a-z0-9][a-z0-9-]{1,48}[a-z0-9]$/.test(TENANT_SLUG)) return [];
    return [
      { source: "/admin", destination: `${BOOKFLOW_ADMIN_URL}/t/${TENANT_SLUG}` },
      { source: "/admin/:path*", destination: `${BOOKFLOW_ADMIN_URL}/t/${TENANT_SLUG}/:path*` },
      // Miroir /t/<slug> : l'admin BookFlow appelle ses propres routes en
      // chemin absolu (/t/<slug>/api/...), qui arrivent donc sur ce domaine.
      { source: `/t/:tenant(${TENANT_SLUG})`, destination: `${BOOKFLOW_ADMIN_URL}/t/${TENANT_SLUG}` },
      { source: `/t/:tenant(${TENANT_SLUG})/:path*`, destination: `${BOOKFLOW_ADMIN_URL}/t/${TENANT_SLUG}/:path*` },
    ];
  },
};

export default nextConfig;
