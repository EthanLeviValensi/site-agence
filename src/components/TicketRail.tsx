"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Status = "attente" | "cours" | "prete";

interface Ticket {
  id: number;
  label: string;
  items: string;
  status: Status;
  ticksInStatus: number;
  ticksTotal: number;
}

const POOL = [
  { label: "T4", items: "2× Margherita · 1× Coca" },
  { label: "À emporter", items: "1× Poke saumon" },
  { label: "T7", items: "3× Burger · frites" },
  { label: "Livraison", items: "1× Reine · 1× Tiramisu" },
  { label: "T2", items: "2× Salade César" },
  { label: "À emporter", items: "1× Menu enfant" },
  { label: "T9", items: "1× Tartare · 1× Frites" },
];

const STATUS_META: Record<Status, { label: string; dot: string; text: string }> = {
  attente: { label: "ATTENTE", dot: "bg-[var(--paper-dim)]", text: "text-[var(--paper-dim)]" },
  cours: { label: "EN COURS", dot: "bg-[var(--amber)]", text: "text-[var(--amber)]" },
  prete: { label: "PRÊTE", dot: "bg-[var(--mint)]", text: "text-[var(--mint)]" },
};

function initial(): Ticket[] {
  return [
    { id: 1, label: "T4", items: "2× Margherita · 1× Coca", status: "cours", ticksInStatus: 1, ticksTotal: 4 },
    { id: 2, label: "Livraison", items: "1× Reine · 1× Tiramisu", status: "attente", ticksInStatus: 0, ticksTotal: 0 },
    { id: 3, label: "T7", items: "3× Burger · frites", status: "prete", ticksInStatus: 0, ticksTotal: 6 },
  ];
}

function formatClock(ticks: number) {
  const secs = ticks * 8;
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function TicketRail() {
  const [tickets, setTickets] = useState<Ticket[]>(initial);
  const [clock, setClock] = useState("18:42");
  const nextId = useRef(4);
  const poolCursor = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickets((prev) => {
        const next: Ticket[] = [];
        for (const t of prev) {
          const ticksInStatus = t.ticksInStatus + 1;
          const ticksTotal = t.ticksTotal + 1;

          if (t.status === "attente" && ticksInStatus >= 2) {
            next.push({ ...t, status: "cours", ticksInStatus: 0, ticksTotal });
          } else if (t.status === "cours" && ticksInStatus >= 3) {
            next.push({ ...t, status: "prete", ticksInStatus: 0, ticksTotal });
          } else if (t.status === "prete" && ticksInStatus >= 2) {
            const entry = POOL[poolCursor.current % POOL.length];
            poolCursor.current += 1;
            next.push({
              id: nextId.current++,
              label: entry.label,
              items: entry.items,
              status: "attente",
              ticksInStatus: 0,
              ticksTotal: 0,
            });
          } else {
            next.push({ ...t, ticksInStatus, ticksTotal });
          }
        }
        return next;
      });
    }, 1700);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const start = Date.now();
    const base = 18 * 60 + 42;
    const id = setInterval(() => {
      const secs = base + Math.floor((Date.now() - start) / 1000);
      const h = Math.floor(secs / 3600) % 24;
      const m = Math.floor((secs % 3600) / 60);
      setClock(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative rounded-lg border border-[var(--panel-line)] bg-[var(--ink-raised)] p-3 shadow-2xl">
      <div className="flex items-center justify-between border-b border-[var(--panel-line)] pb-3 px-2">
        <div className="mono-tag flex gap-3 text-[10px] text-[var(--text-dim)]">
          <span>SALLE</span>
          <span className="text-[var(--panel-line)]">/</span>
          <span>CUISINE</span>
          <span className="text-[var(--panel-line)]">/</span>
          <span>LIVRAISON</span>
        </div>
        <div className="mono-tag text-[10px] text-[var(--text-dim)]">{clock}</div>
      </div>

      <div className="relative mt-3 flex min-h-[280px] flex-col gap-2 overflow-hidden px-2 pb-2">
        <AnimatePresence initial={false}>
          {tickets.map((t) => {
            const meta = STATUS_META[t.status];
            return (
              <motion.div
                layout
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="ticket flex items-center justify-between gap-3 border-l-4 px-3 py-2.5"
                style={{
                  borderLeftColor:
                    t.status === "cours" ? "var(--amber)" : t.status === "prete" ? "var(--mint)" : "var(--paper-dim)",
                }}
              >
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[13px] font-medium">{t.label}</span>
                    <span className="text-[10px] text-[#6b6557]">#{t.id.toString().padStart(3, "0")}</span>
                  </div>
                  <p className="truncate text-[11px] text-[#4a463c]">{t.items}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <span className={`mono-tag flex items-center gap-1.5 text-[9px] ${meta.text}`}>
                    <span className={`status-dot ${meta.dot}`} />
                    {meta.label}
                  </span>
                  <span className="text-[10px] tabular-nums text-[#6b6557]">{formatClock(t.ticksTotal)}</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-lg opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 3px)",
        }}
      />
    </div>
  );
}
