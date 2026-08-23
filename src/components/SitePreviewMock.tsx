import type { Creation } from "@/data/creations";

export default function SitePreviewMock({ creation, tall = false }: { creation: Creation; tall?: boolean }) {
  const { palette } = creation;
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 shadow-lg">
      <div
        className="flex items-center gap-1.5 border-b px-3 py-2"
        style={{ borderColor: "rgba(0,0,0,0.08)", background: palette.bg }}
      >
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate text-[10px]" style={{ color: palette.text, opacity: 0.5 }}>
          {creation.domain}
        </span>
      </div>
      <div className={`${tall ? "p-8" : "p-5"}`} style={{ background: palette.bg, color: palette.text }}>
        <p
          className="mono-tag text-[9px]"
          style={{ color: palette.accent, letterSpacing: "0.14em" }}
        >
          {creation.tagline}
        </p>
        <p
          className={tall ? "mt-2 text-3xl" : "mt-1.5 text-lg"}
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}
        >
          {creation.name}
        </p>
        <div
          className={`mt-4 rounded-lg ${tall ? "h-28" : "h-14"}`}
          style={{
            background: `linear-gradient(135deg, ${palette.accent}33, ${palette.accent2}33)`,
          }}
        />
        {tall && (
          <div className="mt-3 flex gap-2">
            <div className="h-2 w-16 rounded-full" style={{ background: `${palette.text}22` }} />
            <div className="h-2 w-10 rounded-full" style={{ background: `${palette.text}14` }} />
          </div>
        )}
      </div>
    </div>
  );
}
