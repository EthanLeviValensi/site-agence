export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 text-[11px] text-[var(--text-faint)]">
          <p className="mono-tag">Synergy Solutions — Logiciels sur mesure</p>
          <p className="mono-tag">synergysolutions.fr · © {year}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-[var(--text-faint)]">
          <a href="/mentions-legales" className="transition-colors hover:text-[var(--text)]">
            Mentions légales
          </a>
          <a href="/confidentialite" className="transition-colors hover:text-[var(--text)]">
            Confidentialité
          </a>
          <a href="/cgv" className="transition-colors hover:text-[var(--text)]">
            CGV
          </a>
        </nav>
      </div>
    </footer>
  );
}
