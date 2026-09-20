import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page introuvable — Synergy Solutions",
  description: "Cette page n'existe pas ou a été déplacée. Retrouvez nos services, nos créations et BookFlow.",
  robots: { index: false },
};

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/creations", label: "Nos créations" },
  { href: "/bookflow", label: "BookFlow" },
  { href: "/#contact", label: "Demander un devis" },
];

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 items-center pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-2xl px-6">
          <p className="mono-tag mb-3 text-[11px] text-[var(--cyan)]">Erreur 404</p>
          <h1 className="text-4xl md:text-5xl">
            Cette page <span className="accent-serif gradient-text">n&apos;existe pas.</span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[var(--text-dim)]">
            Le lien est peut-être ancien, ou l&apos;adresse mal saisie. Voici où aller :
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {LINKS.map((l, i) => (
              <a key={l.href} href={l.href} className={i === 0 ? "btn btn--primary" : "btn btn--ghost"}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
