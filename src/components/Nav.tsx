"use client";

import { useState } from "react";
import Image from "next/image";

const LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#kds", label: "KDS" },
  { href: "/#ecommerce", label: "E-commerce" },
  { href: "/#hebergement", label: "Hébergement" },
  { href: "/sauvegardes", label: "Sauvegardes", dot: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-4 top-4 z-50 md:inset-x-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-full border border-[var(--line)] bg-[var(--bg)]/70 px-5 py-3 backdrop-blur-xl">
          <a href="/#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <Image
              src="/logo.jpg"
              alt="Synergy Solutions"
              width={100}
              height={100}
              className="h-8 w-8 shrink-0 rounded-lg"
              priority
            />
            <span className="text-[15px] font-semibold tracking-tight">Synergy Solutions</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 text-[13px] text-[var(--text-dim)] transition-colors hover:text-[var(--text)]"
              >
                {link.dot && (
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--cyan)" }} />
                )}
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="/#contact" className="btn btn--primary !py-2 !px-4 text-[13px]">
              Demander un devis
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-[var(--text)] lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              {open ? (
                <path d="M3 3l12 12M15 3L3 15" />
              ) : (
                <path d="M2 5h14M2 9h14M2 13h14" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div
            id="mobile-menu"
            className="mt-2 flex flex-col gap-1 rounded-2xl border border-[var(--line)] bg-[var(--bg)]/95 p-3 backdrop-blur-xl lg:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-[14px] text-[var(--text-dim)] transition-colors hover:bg-white/5 hover:text-[var(--text)]"
              >
                {link.dot && (
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--cyan)" }} />
                )}
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn btn--primary mt-2 w-full"
            >
              Demander un devis
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
