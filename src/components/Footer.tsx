export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-[11px] text-[var(--text-faint)] md:flex-row md:items-center md:justify-between">
        <p className="mono-tag">Synergy Solutions — Logiciels sur mesure</p>
        <p className="mono-tag">synergysolutions.fr · © {year}</p>
      </div>
    </footer>
  );
}
