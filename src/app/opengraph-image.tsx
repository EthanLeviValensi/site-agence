import { ImageResponse } from "next/og";

export const alt = "Synergy Solutions — Logiciels sur mesure : e-commerce, KDS, CRM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0b10",
          color: "#f2f1f7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 30,
            color: "#9195a8",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 14,
              background: "linear-gradient(120deg, #8b6bff, #2ee6d6)",
            }}
          />
          Synergy Solutions
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 92, lineHeight: 1.05, fontWeight: 600 }}>
            <span>On ne configure pas un thème.</span>
            <span
              style={{
                background: "linear-gradient(120deg, #8b6bff, #2ee6d6)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              On code votre logiciel.
            </span>
          </div>
          <div style={{ fontSize: 34, color: "#9195a8" }}>
            E-commerce · KDS · Sites vitrines · CRM — 100 % sur mesure
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#5c6175" }}>
          <span>synergysolutions.fr</span>
          <span>Lançon-Provence</span>
        </div>
      </div>
    ),
    size,
  );
}
