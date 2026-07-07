"use client";

import { useRef, useState, type ReactNode, type ComponentType } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

export interface DemoStage {
  tag: string;
  title: string;
  desc: string;
  Visual: ComponentType;
}

export default function ScrollDemo({
  id,
  eyebrow,
  heading,
  stages,
}: {
  id: string;
  eyebrow: string;
  heading: ReactNode;
  stages: DemoStage[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(stages.length - 1, Math.max(0, Math.floor(v * stages.length)));
    setActive(idx);
  });

  const Visual = stages[active].Visual;

  return (
    <section id={id} ref={ref} style={{ height: `${stages.length * 60}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mono-tag mb-3 text-[11px] text-[var(--cyan)]">{eyebrow}</p>
            <h2 className="text-4xl md:text-5xl">{heading}</h2>

            <div className="mt-9 flex flex-col gap-0.5">
              {stages.map((s, i) => (
                <div key={s.tag} className="flex items-center gap-3 py-1.5">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300"
                    style={{ background: i === active ? "var(--cyan)" : "var(--line)" }}
                  />
                  <p
                    className="mono-tag text-[10px] transition-colors duration-300"
                    style={{ color: i === active ? "var(--text)" : "var(--text-faint)" }}
                  >
                    {s.tag}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-5 min-h-[92px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-xl">{stages[active].title}</h3>
                  <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-[var(--text-dim)]">
                    {stages[active].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Visual />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
