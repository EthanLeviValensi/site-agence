"use client";

import { motion, useReducedMotion } from "framer-motion";

const TIERS = [
  { period: "1ʳᵉ semaine", freq: "Toutes les heures", detail: "jusqu'à 168 versions", pulse: 0.9 },
  { period: "Jusqu'à 1 mois", freq: "Tous les jours", detail: "une version par jour conservée", pulse: 1.7 },
  {
    period: "Jusqu'à 6 mois",
    freq: "Toutes les semaines",
    detail: "une version par semaine conservée",
    pulse: 2.5,
  },
  { period: "Jusqu'à 2 ans", freq: "Tous les mois", detail: "une version par mois conservée", pulse: 3.4 },
];

export default function BackupTiers() {
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {TIERS.map((t) => (
        <div key={t.period} className="card relative overflow-hidden p-5">
          <div className="absolute right-5 top-5 h-2.5 w-2.5">
            {!reduce && (
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--cyan)" }}
                animate={{ scale: [1, 3], opacity: [0.55, 0] }}
                transition={{ duration: t.pulse, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            <span className="absolute inset-0 rounded-full" style={{ background: "var(--cyan)" }} />
          </div>

          <span className="mono-tag text-[10px] text-[var(--text-faint)]">{t.period}</span>
          <p className="mt-2 text-[17px]">{t.freq}</p>
          <p className="mt-1 text-[13px] text-[var(--text-dim)]">{t.detail}</p>
        </div>
      ))}
    </div>
  );
}
