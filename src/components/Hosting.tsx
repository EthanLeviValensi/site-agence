const WORDPRESS_LINES = [
  { label: "Thème premium", value: "89 €" },
  { label: "Plugin e-commerce / an", value: "249 €" },
  { label: "Plugin sécurité / an", value: "79 €" },
  { label: "Hébergement mutualisé", value: "144 €/an" },
  { label: "Maintenance mensuelle", value: "720 €/an" },
];

const INCLUDED = [
  "Code sur mesure — aucune licence, aucun plugin",
  "Hébergement facturé à prix coûtant, sans marge cachée",
  "Sauvegardes automatiques, tous les jours",
  "SSL, mises à jour et maintenance inclus",
];

export default function Hosting() {
  return (
    <section id="hebergement" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mono-tag mb-3 text-[11px] text-[var(--cyan)]">Hébergement &amp; tarifs</p>
        <h2 className="max-w-xl text-4xl md:text-5xl">
          Moins cher, <span className="accent-serif gradient-text">parce que tout est codé.</span>
        </h2>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--text-dim)]">
          Pas de WordPress, pas de thème à licence, pas de plugin qui se facture chaque mois. Le
          sur-mesure a un coût de départ, mais aucun péage ensuite — et l&apos;hébergement est inclus,
          facturé au prix réel du serveur.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="card p-7 opacity-80">
            <span className="mono-tag text-[10px] text-[var(--text-faint)]">Le combo classique</span>
            <h3 className="mt-2 text-xl">Site WordPress + plugins</h3>
            <div className="mt-5 space-y-3 border-t border-[var(--line)] pt-5">
              {WORDPRESS_LINES.map((l) => (
                <div key={l.label} className="flex items-center justify-between text-[13px]">
                  <span className="text-[var(--text-dim)]">{l.label}</span>
                  <span className="mono-tag text-[12px] text-[var(--text-faint)]">{l.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4">
              <span className="text-[13px] text-[var(--text-dim)]">Total 1ʳᵉ année</span>
              <span className="mono-tag text-[15px] text-[var(--text-faint)] line-through decoration-2">
                ≈ 1 280 €
              </span>
            </div>
            <p className="mono-tag mt-3 text-[9px] text-[var(--text-faint)]">
              Exemple type — coûts réels variables selon les plugins choisis.
            </p>
          </div>

          <div className="card relative overflow-hidden border-[var(--violet-soft)] p-7">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--grad-signature)" }}
            />
            <span className="mono-tag text-[10px] text-[var(--cyan)]">Synergy Solutions</span>
            <h3 className="mt-2 text-xl">Un logiciel sur mesure</h3>
            <ul className="mt-5 space-y-3 border-t border-[var(--line)] pt-5">
              {INCLUDED.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-[13px] text-[var(--text-dim)]">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cyan)]" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4">
              <span className="text-[13px] text-[var(--text-dim)]">Hébergement</span>
              <span className="mono-tag text-[13px] text-[var(--cyan)]">quelques €/mois</span>
            </div>
            <a href="#contact" className="btn btn--primary mt-6 w-full">
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
