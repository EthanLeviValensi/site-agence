const POINTS = [
  {
    title: "Hébergement & sauvegardes inclus",
    desc: "Vos données sont sauvegardées automatiquement, tous les jours, hors site.",
  },
  {
    title: "Sur mesure, pas un template",
    desc: "Chaque site et chaque écran cuisine est construit pour votre établissement, pas adapté d'un modèle générique.",
  },
  {
    title: "Un seul interlocuteur",
    desc: "Du site à la cuisine, vous parlez à la même personne du premier échange au support.",
  },
  {
    title: "Sans engagement long",
    desc: "On construit une relation dans la durée, pas un contrat qui vous enferme.",
  },
];

export default function WhyUs() {
  return (
    <section id="pourquoi" className="border-b border-[var(--panel-line)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mono-tag mb-3 text-[11px] text-[var(--amber)]">Pourquoi nous</p>
        <h2 className="max-w-lg text-3xl font-semibold leading-tight md:text-4xl">
          Pourquoi Synergy Solutions.
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {POINTS.map((p) => (
            <div key={p.title} className="flex gap-4 border-t border-[var(--panel-line)] pt-5">
              <span className="status-dot mt-2 shrink-0 bg-[var(--mint)]" />
              <div>
                <h3 className="text-[16px] font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--text-dim)]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
