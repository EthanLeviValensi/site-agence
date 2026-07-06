import TicketRail from "./TicketRail";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--panel-line)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--amber), transparent 70%)" }}
      />
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:py-28">
        <div>
          <p className="mono-tag mb-6 text-[11px] text-[var(--amber)]">Agence web &amp; KDS — Restauration</p>
          <h1 className="text-4xl font-semibold leading-[1.08] md:text-5xl">
            Le téléphone sonne.
            <br />
            La commande, elle,{" "}
            <span className="text-[var(--mint)]">ne se perd jamais.</span>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--text-dim)]">
            Site vitrine, commande en ligne et écran de cuisine — pensés comme un seul système pour les
            restaurants qui tournent à plein régime en service.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn--primary">
              Demander un devis
            </a>
            <a href="#process" className="btn btn--ghost">
              Voir comment ça marche
            </a>
          </div>
        </div>

        <TicketRail />
      </div>

      <div className="border-t border-[var(--panel-line)] bg-[var(--panel)]/60">
        <p className="mono-tag mx-auto max-w-6xl px-6 py-3 text-center text-[10px] text-[var(--text-dim)] md:text-left">
          Comptoir · Cuisine · Livraison — synchronisés en temps réel
        </p>
      </div>
    </section>
  );
}
