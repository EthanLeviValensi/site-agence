import { CREATIONS } from "@/data/creations";
import SitePreviewMock from "./SitePreviewMock";

export default function Creations() {
  return (
    <section id="creations" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mono-tag mb-3 text-[11px] text-[var(--cyan)]">Nos créations</p>
            <h2 className="max-w-lg text-4xl md:text-5xl">
              Pas des maquettes. <span className="accent-serif gradient-text">De vrais sites.</span>
            </h2>
          </div>
          <a
            href="/creations"
            className="text-[13px] text-[var(--text-dim)] underline decoration-dotted underline-offset-2 hover:text-[var(--text)]"
          >
            Voir toutes nos créations
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CREATIONS.map((c) => (
            <a
              key={c.slug}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group overflow-hidden p-5 transition-colors hover:border-[var(--violet-soft)]"
            >
              <SitePreviewMock creation={c} />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-[14px] text-[var(--text)]">{c.name}</p>
                  <p className="mt-0.5 text-[12px] text-[var(--text-dim)]">{c.domain}</p>
                </div>
                {c.status === "soon" ? (
                  <span className="mono-tag rounded-full border border-[var(--line)] px-2.5 py-1 text-[9px] text-[var(--text-faint)]">
                    Bientôt
                  </span>
                ) : (
                  <span className="text-[12px] text-[var(--cyan)] transition-transform group-hover:translate-x-0.5">
                    Visiter →
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
