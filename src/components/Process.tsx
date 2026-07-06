const STEPS = [
  {
    n: "01",
    title: "Échange",
    desc: "On parle de votre établissement, de votre rythme de service, de ce qui vous fait perdre du temps aujourd'hui.",
  },
  {
    n: "02",
    title: "Conception",
    desc: "Design et développement sur mesure — pas de template générique, un système pensé pour votre cuisine.",
  },
  {
    n: "03",
    title: "Mise en service",
    desc: "Site en ligne, écran cuisine installé, équipe formée. Hébergement et sauvegardes automatiques inclus.",
  },
  {
    n: "04",
    title: "Suivi",
    desc: "On reste disponible après la mise en ligne : ajustements, évolutions, support.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-[var(--panel-line)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mono-tag mb-3 text-[11px] text-[var(--amber)]">Comment ça marche</p>
        <h2 className="max-w-lg text-3xl font-semibold leading-tight md:text-4xl">
          Du premier échange à la mise en service.
        </h2>

        <div className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[13px] hidden h-px bg-[var(--panel-line)] md:block"
          />
          {STEPS.map((s) => (
            <div key={s.n} className="relative">
              <div className="mono-tag relative z-10 inline-block bg-[var(--ink)] pr-3 text-[13px] text-[var(--mint)]">
                {s.n}
              </div>
              <h3 className="mt-4 text-[16px] font-semibold">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-dim)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
