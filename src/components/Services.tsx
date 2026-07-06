const ITEMS = [
  {
    tag: "E-commerce",
    title: "Boutiques en ligne",
    desc: "Catalogue, panier, paiement — une boutique rapide et sur mesure, pas un thème générique surchargé de plugins.",
    span: "md:col-span-3 md:row-span-2",
  },
  {
    tag: "KDS",
    title: "Écrans de cuisine",
    desc: "De la borne de commande à l'impression, en temps réel.",
    span: "md:col-span-3",
  },
  {
    tag: "Sites",
    title: "Sites vitrines",
    desc: "Rapides, animés, pensés pour convertir.",
    span: "md:col-span-2",
  },
  {
    tag: "CRM & sur-mesure",
    title: "Vos outils métier",
    desc: "Gestion clients, facturation, tableaux de bord — tout ce qu'un logiciel maison peut faire pour vous.",
    span: "md:col-span-4",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mono-tag mb-3 text-[11px] text-[var(--cyan)]">Ce qu&apos;on construit</p>
        <h2 className="max-w-lg text-4xl md:text-5xl">
          Tout est <span className="accent-serif gradient-text">sur demande.</span>
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {ITEMS.map((item) => (
            <div
              key={item.tag}
              className={`card group relative overflow-hidden p-7 transition-colors hover:border-[var(--violet-soft)] ${item.span}`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ background: "var(--grad-signature)" }}
              />
              <span className="mono-tag text-[10px] text-[var(--text-faint)]">{item.tag}</span>
              <h3 className="mt-3 text-2xl">{item.title}</h3>
              <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-[var(--text-dim)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
