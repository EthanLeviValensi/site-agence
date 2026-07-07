"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GRID_COLS = 26;
const GRID_ROWS = 9;
const REVEAL_THRESHOLD = 0.5;
const BRUSH_RADIUS = 22;

export default function ScratchTicket() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const scratching = useRef(false);
  const grid = useRef<boolean[]>(new Array(GRID_COLS * GRID_ROWS).fill(false));
  const [revealed, setRevealed] = useState(false);

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const rect = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, "#8b6bff");
    grad.addColorStop(1, "#2ee6d6");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = "rgba(10,11,16,0.35)";
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.font = "600 13px ui-monospace, monospace";
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.letterSpacing = "2px";
    ctx.fillText("✦  GRATTEZ ICI  ✦", rect.width / 2, rect.height / 2);

    grid.current = new Array(GRID_COLS * GRID_ROWS).fill(false);
    setRevealed(false);
  }, []);

  useEffect(() => {
    setupCanvas();
    window.addEventListener("resize", setupCanvas);
    return () => window.removeEventListener("resize", setupCanvas);
  }, [setupCanvas]);

  function scratchAt(clientX: number, clientY: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, BRUSH_RADIUS, 0, Math.PI * 2);
    ctx.fill();

    const col = Math.floor((x / rect.width) * GRID_COLS);
    const row = Math.floor((y / rect.height) * GRID_ROWS);
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const r = row + dr;
        const c = col + dc;
        if (r >= 0 && r < GRID_ROWS && c >= 0 && c < GRID_COLS) {
          grid.current[r * GRID_COLS + c] = true;
        }
      }
    }
    const revealedCount = grid.current.filter(Boolean).length;
    if (revealedCount / (GRID_COLS * GRID_ROWS) > REVEAL_THRESHOLD) {
      setRevealed(true);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 pb-6">
      <div
        ref={wrapRef}
        className="ticket relative mx-auto flex min-h-[140px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[var(--line)] px-8 py-6 text-center"
        style={{ background: "#f0e9d8" }}
      >
        <div>
          <p className="mono-tag text-[10px] text-[#8a8060]">Offre cachée</p>
          <p className="mt-2 text-[14px] leading-relaxed text-[#2a2620]">
            Puisque vous êtes arrivé·e jusque-là, n&apos;hésitez pas à mentionner{" "}
            <span className="font-semibold">LoveSynergy</span> pour bénéficier de{" "}
            <span className="font-semibold">10&nbsp;% de réduction</span> sur le premier mois
            d&apos;hébergement.
          </p>
        </div>

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full cursor-pointer"
          style={{
            touchAction: "none",
            opacity: revealed ? 0 : 1,
            pointerEvents: revealed ? "none" : "auto",
            transition: "opacity 0.6s ease",
          }}
          onPointerDown={(e) => {
            scratching.current = true;
            scratchAt(e.clientX, e.clientY);
          }}
          onPointerMove={(e) => {
            if (scratching.current) scratchAt(e.clientX, e.clientY);
          }}
          onPointerUp={() => {
            scratching.current = false;
          }}
          onPointerLeave={() => {
            scratching.current = false;
          }}
        />
      </div>
    </div>
  );
}
