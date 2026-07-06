export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--panel-line)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-[11px] text-[var(--text-dim)] md:flex-row md:items-center md:justify-between">
        <p className="mono-tag">Synergy Solutions — Agence sites web &amp; KDS pour la restauration</p>
        <p className="mono-tag">synergysolutions.fr · © {year}</p>
      </div>
    </footer>
  );
}
