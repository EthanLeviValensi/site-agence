"use client";

import { motion, useReducedMotion } from "framer-motion";

const SIZE = 300;
const CENTER = 150;

const RINGS = [
  { radius: 45, duration: 3, color: "#2ee6d6", label: "Toutes les heures", period: "1ʳᵉ semaine" },
  { radius: 78, duration: 5.5, color: "#4dbde4", label: "Tous les jours", period: "Jusqu'à 1 mois" },
  { radius: 111, duration: 9, color: "#6b95f1", label: "Toutes les semaines", period: "Jusqu'à 6 mois" },
  { radius: 138, duration: 14, color: "#8b6bff", label: "Tous les mois", period: "Jusqu'à 2 ans" },
];

export default function BackupOrbits() {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-center">
      <div className="relative shrink-0" style={{ width: SIZE, height: SIZE }}>
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="absolute inset-0 h-full w-full">
          {RINGS.map((r) => (
            <circle
              key={r.radius}
              cx={CENTER}
              cy={CENTER}
              r={r.radius}
              fill="none"
              stroke={r.color}
              strokeOpacity={0.22}
              strokeDasharray="2 7"
              strokeWidth={1}
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <motion.span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: "var(--text)" }}
            animate={reduce ? undefined : { scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="mono-tag mt-2 whitespace-nowrap text-[8px] text-[var(--text-faint)]">
            Aujourd&apos;hui
          </span>
        </div>

        {RINGS.map((r) => (
          <motion.div
            key={r.radius}
            className="absolute left-1/2 top-1/2 h-0 w-0"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: r.duration, repeat: Infinity, ease: "linear" }}
          >
            <span
              className="absolute rounded-full"
              style={{
                background: r.color,
                width: 9,
                height: 9,
                left: r.radius - 4.5,
                top: -4.5,
                boxShadow: `0 0 10px ${r.color}`,
              }}
            />
          </motion.div>
        ))}
      </div>

      <ul className="flex w-full flex-col gap-3">
        {RINGS.map((r) => (
          <li
            key={r.radius}
            className="flex items-center gap-3 border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0 sm:first:border-t"
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ background: r.color, boxShadow: `0 0 8px ${r.color}` }}
            />
            <div>
              <p className="mono-tag text-[9px] text-[var(--text-faint)]">{r.period}</p>
              <p className="text-[14px] text-[var(--text)]">{r.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
