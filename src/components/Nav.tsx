export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--panel-line)] bg-[var(--ink)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex flex-col leading-none">
          <span className="text-[15px] font-semibold tracking-tight">Synergy Solutions</span>
          <span className="mono-tag text-[9px] text-[var(--text-dim)]">Agence web &amp; KDS</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#services" className="mono-tag text-[11px] text-[var(--text-dim)] transition-colors hover:text-[var(--text)]">
            Services
          </a>
          <a href="#process" className="mono-tag text-[11px] text-[var(--text-dim)] transition-colors hover:text-[var(--text)]">
            Comment ça marche
          </a>
          <a href="#pourquoi" className="mono-tag text-[11px] text-[var(--text-dim)] transition-colors hover:text-[var(--text)]">
            Pourquoi nous
          </a>
        </nav>

        <a href="#contact" className="btn btn--primary !py-2 !px-4">
          Demander un devis
        </a>
      </div>
    </header>
  );
}
