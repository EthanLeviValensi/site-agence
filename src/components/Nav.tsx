export default function Nav() {
  return (
    <header className="fixed inset-x-4 top-4 z-50 md:inset-x-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[var(--line)] bg-[var(--bg)]/70 px-5 py-3 backdrop-blur-xl">
        <a href="/#top" className="flex items-center gap-2">
          <span
            aria-hidden
            className="h-2 w-2 rounded-full"
            style={{ background: "var(--grad-signature)" }}
          />
          <span className="text-[15px] font-semibold tracking-tight">Synergy Solutions</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          <a href="/#services" className="text-[13px] text-[var(--text-dim)] transition-colors hover:text-[var(--text)]">
            Services
          </a>
          <a href="/#kds" className="text-[13px] text-[var(--text-dim)] transition-colors hover:text-[var(--text)]">
            KDS
          </a>
          <a href="/#ecommerce" className="text-[13px] text-[var(--text-dim)] transition-colors hover:text-[var(--text)]">
            E-commerce
          </a>
          <a href="/#hebergement" className="text-[13px] text-[var(--text-dim)] transition-colors hover:text-[var(--text)]">
            Hébergement
          </a>
          <a
            href="/sauvegardes"
            className="flex items-center gap-1.5 text-[13px] text-[var(--text-dim)] transition-colors hover:text-[var(--text)]"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--cyan)" }} />
            Sauvegardes
          </a>
        </nav>

        <a href="/#contact" className="btn btn--primary !py-2 !px-4 text-[13px]">
          Demander un devis
        </a>
      </div>
    </header>
  );
}
