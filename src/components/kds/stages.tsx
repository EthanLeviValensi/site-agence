"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const PRODUCTS = [
  { label: "Margherita", price: "12€" },
  { label: "Reine", price: "14€" },
  { label: "4 fromages", price: "15€" },
  { label: "Boisson", price: "3€" },
];

export function KioskStage() {
  const reduce = useReducedMotion();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(0);
    const id = setInterval(() => {
      setTotal((t) => (t >= 15 ? t : t + 3));
    }, 220);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mockup relative mx-auto w-full max-w-[280px] p-4">
      <p className="mono-tag mb-3 text-center text-[10px] text-[var(--text-faint)]">Borne — Commande</p>
      <div className="grid grid-cols-2 gap-2">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.label}
            className="relative rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3"
            animate={i === 1 && !reduce ? { scale: [1, 1.05, 1] } : undefined}
            transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.6 }}
          >
            {i === 1 && (
              <motion.span
                className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-[#0a0b10]"
                style={{ background: "var(--grad-signature)" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                ✓
              </motion.span>
            )}
            <div className="h-10 rounded-lg bg-gradient-to-br from-[var(--violet)]/25 to-[var(--cyan)]/15" />
            <p className="mt-2 text-[11px] text-[var(--text-dim)]">{p.label}</p>
            <p className="mono-tag text-[10px] text-[var(--text-faint)]">{p.price}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl border border-[var(--line)] px-3 py-2.5">
        <span className="text-[12px] text-[var(--text-dim)]">Total</span>
        <span className="mono-tag text-[13px] text-[var(--cyan)]">{total.toFixed(2)} €</span>
      </div>
    </div>
  );
}

export function DispatchStage() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<"cours" | "prete">("cours");

  useEffect(() => {
    setStatus("cours");
    const id = setTimeout(() => setStatus("prete"), 1800);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-[340px] items-center gap-3">
      <div className="mockup flex flex-1 flex-col items-center gap-2 p-4">
        <span className="mono-tag text-[9px] text-[var(--text-faint)]">Salle</span>
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[var(--violet)]/30 to-[var(--cyan)]/20" />
        <span className="mono-tag text-[9px] text-[var(--text-dim)]">Commande #042</span>
      </div>

      <motion.div
        className="text-[var(--cyan)]"
        animate={reduce ? undefined : { x: [0, 6, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        →
      </motion.div>

      <motion.div
        className="ticket flex-1 rounded-xl border-l-4 p-3"
        style={{
          background: "#f0e9d8",
          color: "#2a2620",
          borderLeftColor: status === "cours" ? "var(--amber)" : "var(--cyan)",
        }}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[11px] font-medium">Cuisine · #042</p>
        <p className="mono-tag text-[9px] text-[#6b6557]">2× Margherita</p>
        <p className="mono-tag mt-1.5 text-[9px]" style={{ color: status === "cours" ? "#a9761f" : "#1f8f6b" }}>
          {status === "cours" ? "EN COURS" : "PRÊTE"}
        </p>
      </motion.div>
    </div>
  );
}

export function PaymentStage() {
  const reduce = useReducedMotion();
  return (
    <div className="mockup relative mx-auto w-full max-w-[240px] p-6">
      <p className="mono-tag mb-4 text-center text-[10px] text-[var(--text-faint)]">Terminal</p>
      <div className="mx-auto mb-6 h-16 w-full rounded-lg border border-[var(--line)] bg-[var(--surface)] flex items-center justify-center">
        <span className="mono-tag text-[14px] text-[var(--cyan)]">29,00 €</span>
      </div>
      <div className="relative flex justify-center">
        <div className="h-14 w-14 rounded-xl border-2 border-[var(--line)]" />
        <motion.div
          className="absolute -top-8 h-9 w-14 rounded-md"
          style={{ background: "var(--grad-signature)" }}
          animate={reduce ? undefined : { y: [-8, 6, -8] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#28c840] text-[11px] text-[#0a0b10]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, times: [0, 0.3, 0.7, 1] }}
        >
          ✓
        </motion.span>
      </div>
    </div>
  );
}

export function PrinterStage() {
  const reduce = useReducedMotion();
  return (
    <div className="mx-auto w-full max-w-[220px]">
      <div className="mockup relative h-10 w-full" />
      <div className="relative h-40 overflow-hidden">
        <motion.div
          className="ticket absolute left-1/2 w-[85%] -translate-x-1/2 rounded-b-md border-t-0 p-3"
          style={{ background: "#f0e9d8", color: "#2a2620" }}
          initial={{ y: -120 }}
          animate={reduce ? { y: -20 } : { y: [-120, -10, -10, -120] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.75, 1] }}
        >
          <p className="mono-tag text-[9px] text-[#6b6557]">SYNERGY · TICKET #042</p>
          <div className="my-1.5 border-t border-dashed border-[#c9c0a8]" />
          <p className="mono-tag text-[9px]">2× MARGHERITA</p>
          <p className="mono-tag text-[9px]">1× BOISSON</p>
          <div className="my-1.5 border-t border-dashed border-[#c9c0a8]" />
          <p className="mono-tag text-[9px] text-[#1f8f6b]">PAYÉ — MERCI !</p>
        </motion.div>
      </div>
    </div>
  );
}
