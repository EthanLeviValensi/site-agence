import CodeMorph from "./CodeMorph";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-40 md:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[900px] -translate-x-1/2 opacity-30 blur-[120px]"
        style={{ background: "var(--grad-signature)" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1.05fr_1fr] md:items-center">
        <div>
          <p className="mono-tag mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-[10px] text-[var(--text-dim)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" />
            E-commerce · KDS · Sites · CRM — sur demande
          </p>
          <h1 className="text-[2.75rem] leading-[1.05] md:text-6xl">
            On ne configure pas
            <br />
            un thème. <span className="accent-serif gradient-text">On code</span> votre
            <br />
            logiciel.
          </h1>
          <p className="mt-7 max-w-md text-[16px] leading-relaxed text-[var(--text-dim)]">
            Boutiques en ligne, écrans de cuisine, sites vitrines, CRM — chaque projet est écrit
            sur mesure, sans WordPress ni modules payants. Résultat : un outil qui vous ressemble,
            et qui coûte moins cher à faire vivre.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/#contact" className="btn btn--primary">
              Demander un devis
            </a>
            <a href="/#kds" className="btn btn--ghost">
              Voir une démo
            </a>
          </div>
        </div>

        <CodeMorph />
      </div>
    </section>
  );
}
