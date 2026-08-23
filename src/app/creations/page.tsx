import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SitePreviewMock from "@/components/SitePreviewMock";
import { CREATIONS } from "@/data/creations";

export const metadata: Metadata = {
  title: "Nos créations — Synergy Solutions",
  description: "Les sites réalisés par Synergy Solutions pour ses clients — sur mesure, du premier pixel au dernier.",
};

export default function Creations() {
  return (
    <>
      <Nav />
      <main className="flex-1 pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mono-tag mb-3 text-[11px] text-[var(--cyan)]">Nos créations</p>
          <h1 className="max-w-xl text-4xl md:text-5xl">
            Chaque client, <span className="accent-serif gradient-text">un site qui ne ressemble à aucun autre.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--text-dim)]">
            Pas de thème réutilisé d&apos;un client à l&apos;autre — chaque identité, chaque palette,
            chaque typographie est construite pour l&apos;activité qu&apos;elle représente.
          </p>

          <div className="mt-16 space-y-16">
            {CREATIONS.map((c, i) => (
              <div
                key={c.slug}
                className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <SitePreviewMock creation={c} tall />

                <div>
                  <p className="mono-tag text-[10px] text-[var(--text-faint)]">{c.domain}</p>
                  <h2 className="mt-2 text-3xl">{c.name}</h2>
                  <p className="mt-2 text-[15px] text-[var(--cyan)]">{c.tagline}</p>
                  <p className="mt-4 max-w-md text-[14px] leading-relaxed text-[var(--text-dim)]">
                    {c.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.stack.map((s) => (
                      <span
                        key={s}
                        className="mono-tag rounded-full border border-[var(--line)] px-2.5 py-1 text-[9px] text-[var(--text-faint)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    {c.status === "soon" ? (
                      <span className="mono-tag inline-block rounded-full border border-[var(--line)] px-3 py-1.5 text-[10px] text-[var(--text-faint)]">
                        Ouverture prochaine
                      </span>
                    ) : (
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                        Visiter {c.domain}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 border-t border-[var(--line)] pt-10 text-center">
            <p className="text-[15px] text-[var(--text-dim)]">Votre projet pourrait être le prochain.</p>
            <a href="/#contact" className="btn btn--primary mt-5">
              Demander un devis
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
