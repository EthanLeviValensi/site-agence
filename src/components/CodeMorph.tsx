"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CODE_LINES = [
  { t: "keyword", v: "export function " },
  { t: "fn", v: "Boutique", n: true },
  { t: "plain", v: "() {" },
  { t: "indent1", v: "return (" },
  { t: "indent2", v: "<Vitrine>" },
  { t: "indent3", v: "<Produit prix={42} />" },
  { t: "indent3", v: "<Panier live />" },
  { t: "indent2", v: "</Vitrine>" },
  { t: "indent1", v: ");" },
  { t: "plain", v: "}" },
];

export default function CodeMorph() {
  const [phase, setPhase] = useState<"code" | "ui">("code");

  useEffect(() => {
    const id = setInterval(() => {
      setPhase((p) => (p === "code" ? "ui" : "code"));
    }, 3400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mockup relative w-full overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 border-b border-[var(--line)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="mono-tag ml-3 text-[10px] text-[var(--text-faint)]">
          {phase === "code" ? "boutique.tsx" : "aperçu — localhost"}
        </span>
      </div>

      <div className="relative h-[300px] p-6">
        <AnimatePresence mode="wait">
          {phase === "code" ? (
            <motion.pre
              key="code"
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.5 }}
              className="mono whitespace-pre-wrap text-[12px] leading-relaxed"
            >
              {CODE_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className={
                    line.t === "keyword"
                      ? "text-[var(--cyan)]"
                      : line.t === "fn"
                        ? "text-[var(--amber)]"
                        : "text-[var(--text-dim)]"
                  }
                  style={{ paddingLeft: line.t.startsWith("indent") ? `${line.t.slice(-1)}rem` : 0 }}
                >
                  {line.v}
                </motion.div>
              ))}
            </motion.pre>
          ) : (
            <motion.div
              key="ui"
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.5 }}
              className="flex h-full flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="h-2.5 w-20 rounded-full bg-[var(--text-faint)]/40" />
                <div className="h-7 w-16 rounded-full" style={{ background: "var(--grad-signature)" }} />
              </div>
              <div className="grid flex-1 grid-cols-2 gap-3">
                <div className="card !rounded-xl border-[var(--line)] p-3">
                  <div className="mb-3 h-16 rounded-lg bg-gradient-to-br from-[var(--violet)]/30 to-[var(--cyan)]/20" />
                  <div className="h-2 w-3/4 rounded-full bg-[var(--text-faint)]/40" />
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-[var(--text-faint)]/25" />
                </div>
                <div className="card !rounded-xl border-[var(--line)] p-3">
                  <div className="mb-3 h-16 rounded-lg bg-gradient-to-br from-[var(--cyan)]/25 to-[var(--violet)]/15" />
                  <div className="h-2 w-2/3 rounded-full bg-[var(--text-faint)]/40" />
                  <div className="mt-2 h-2 w-1/3 rounded-full bg-[var(--text-faint)]/25" />
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-[var(--line)] px-4 py-3">
                <span className="text-[13px] text-[var(--text-dim)]">Panier</span>
                <span className="mono-tag text-[12px] text-[var(--cyan)]">42,00 €</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
