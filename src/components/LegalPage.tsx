import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="flex-1 pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mono-tag mb-3 text-[11px] text-[var(--cyan)]">{eyebrow}</p>
          <h1 className="text-4xl md:text-5xl">{title}</h1>
          <p className="mono-tag mt-4 text-[10px] text-[var(--text-faint)]">
            Dernière mise à jour — {updated}
          </p>
          <div className="mt-12 space-y-9">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-[var(--line)] pt-7">
      <h2 className="text-lg">{title}</h2>
      <div className="mt-3 space-y-3 text-[14px] leading-relaxed text-[var(--text-dim)]">{children}</div>
    </section>
  );
}
