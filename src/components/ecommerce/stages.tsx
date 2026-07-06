"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function BrowseStage() {
  return (
    <div className="mockup mx-auto grid w-full max-w-[280px] grid-cols-2 gap-2.5 p-4">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-2.5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          whileHover={{ borderColor: "var(--violet-soft)" }}
        >
          <div className="h-14 rounded-lg bg-gradient-to-br from-[var(--violet)]/25 to-[var(--cyan)]/15" />
          <div className="mt-2 h-2 w-4/5 rounded-full bg-[var(--text-faint)]/40" />
          <div className="mt-1.5 h-2 w-1/2 rounded-full bg-[var(--text-faint)]/25" />
        </motion.div>
      ))}
    </div>
  );
}

export function CartStage() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    const id = setInterval(() => setCount((c) => (c >= 2 ? c : c + 1)), 700);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto flex w-full max-w-[280px] flex-col items-center gap-8 p-4">
      <div className="card !rounded-xl w-40 p-3">
        <div className="h-14 rounded-lg bg-gradient-to-br from-[var(--violet)]/25 to-[var(--cyan)]/15" />
        <div className="mt-2 h-2 w-3/4 rounded-full bg-[var(--text-faint)]/40" />
      </div>

      <motion.div
        className="absolute left-1/2 top-10 h-8 w-8 -translate-x-1/2 rounded-md"
        style={{ background: "var(--grad-signature)" }}
        animate={reduce ? undefined : { y: [0, 70], opacity: [1, 0] }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.6 }}
      />

      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[var(--line)]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <motion.span
          key={count}
          className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-[#0a0b10]"
          style={{ background: "var(--grad-signature)" }}
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
        >
          {count}
        </motion.span>
      </div>
    </div>
  );
}

export function CheckoutStage() {
  return (
    <div className="mockup mx-auto w-full max-w-[260px] p-5">
      <p className="mono-tag mb-4 text-[10px] text-[var(--text-faint)]">Paiement</p>
      <div className="space-y-2.5">
        <div className="h-9 rounded-lg border border-[var(--line)] bg-[var(--surface)]" />
        <div className="flex gap-2.5">
          <div className="h-9 flex-1 rounded-lg border border-[var(--line)] bg-[var(--surface)]" />
          <div className="h-9 w-16 rounded-lg border border-[var(--line)] bg-[var(--surface)]" />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-3">
        <span className="text-[12px] text-[var(--text-dim)]">Total</span>
        <span className="mono-tag text-[13px] text-[var(--cyan)]">54,00 €</span>
      </div>
      <motion.div
        className="mt-4 flex h-9 items-center justify-center rounded-full text-[12px] font-medium text-[#0a0b10]"
        style={{ background: "var(--grad-signature)" }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 1.4, repeat: Infinity }}
      >
        Payer
      </motion.div>
    </div>
  );
}

export function SuccessStage() {
  const reduce = useReducedMotion();
  return (
    <div className="mockup mx-auto flex w-full max-w-[260px] flex-col items-center gap-4 p-8">
      <motion.div
        className="flex h-16 w-16 items-center justify-center rounded-full"
        style={{ background: "var(--grad-signature)" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <motion.svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0a0b10"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M20 6L9 17l-5-5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.svg>
      </motion.div>
      <p className="text-[15px]">Commande confirmée</p>
      {!reduce && (
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--cyan)" }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
