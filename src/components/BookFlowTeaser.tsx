"use client";

import { motion, useReducedMotion } from "framer-motion";

// Aperçu de BookFlow sur la page d'accueil. Une seule idée à faire passer :
// le rendez-vous entre d'un côté, la facture sort de l'autre, sans personne
// au milieu. Le reste est sur /bookflow.
const ETAPES = ["Réservé", "Rappelé", "Honoré", "Encaissé", "Facturé"];

export default function BookFlowTeaser() {
  const reduce = useReducedMotion();

  return (
    <section id="bookflow" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mono-tag mb-3 text-[11px] text-[var(--cyan)]">BookFlow · notre logiciel</p>
            <h2 className="max-w-xl text-4xl md:text-5xl">
              Vos rendez-vous se prennent <span className="accent-serif gradient-text">pendant que vous travaillez.</span>
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--text-dim)]">
              Réservation en ligne sur votre propre site, rappels automatiques, empreinte bancaire
              contre les absences, paiement d&apos;avance et facture déposée dans votre comptabilité.
              Pas de place de marché, pas de commission sur vos prestations : vos clients restent les
              vôtres.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/bookflow" className="btn btn--primary">Découvrir BookFlow</a>
              <a href="/bookflow#formules" className="btn btn--ghost">Voir les formules</a>
            </div>
          </motion.div>

          {/* Le parcours d'un rendez-vous, qui se dessine au défilement. */}
          <motion.ol
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ shown: { transition: { staggerChildren: reduce ? 0 : 0.12 } } }}
            className="relative pl-7"
          >
            <motion.span
              aria-hidden
              className="absolute left-[7px] top-2 w-px origin-top"
              style={{ background: "var(--grad-signature)", bottom: "0.75rem" }}
              variants={{ hidden: { scaleY: 0 }, shown: { scaleY: 1 } }}
              transition={{ duration: reduce ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            {ETAPES.map((etape, i) => (
              <motion.li
                key={etape}
                variants={{
                  hidden: { opacity: 0, x: reduce ? 0 : -10 },
                  shown: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-center gap-4 py-3.5"
              >
                <span
                  aria-hidden
                  className="absolute -left-7 h-[15px] w-[15px] rounded-full border-2"
                  style={{
                    borderColor: `color-mix(in oklab, var(--cyan) ${i * 25}%, var(--violet))`,
                    background: "var(--bg)",
                  }}
                />
                <span className="mono-tag text-[10px] text-[var(--text-faint)]">0{i + 1}</span>
                <span className="text-[15px]">{etape}</span>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
