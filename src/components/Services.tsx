const SERVICES = [
  {
    ref: "REF. SITE",
    title: "Site vitrine",
    desc: "Un site rapide et sur mesure qui donne envie de pousser la porte : carte, horaires, avis, réservation.",
  },
  {
    ref: "REF. CMD",
    title: "Commande en ligne",
    desc: "Un tunnel de commande simple pour vos clients, connecté directement à la cuisine — plus un appel manqué qui devient une commande perdue.",
  },
  {
    ref: "REF. KDS",
    title: "Écran cuisine (KDS)",
    desc: "Les commandes s'affichent en cuisine en temps réel, triées et chronométrées — sans ticket papier qui se perd dans le rush.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-[var(--panel-line)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mono-tag mb-3 text-[11px] text-[var(--amber)]">Ce qu&apos;on construit</p>
        <h2 className="max-w-lg text-3xl font-semibold leading-tight md:text-4xl">
          Trois pièces, un seul système.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.ref} className="card p-6">
              <span className="mono-tag text-[10px] text-[var(--text-dim)]">{s.ref}</span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-dim)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
