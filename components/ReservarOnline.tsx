"use client";

import { useState } from "react";

/** Botões de reserva/pagamento direto no site (Stripe Checkout) — sem passar pelo WhatsApp. */
export function ReservarOnline({ pacote }: { pacote: string }) {
  const [loading, setLoading] = useState<string | null>(null);

  async function go(modo: "sinal" | "total") {
    setLoading(modo);
    try {
      const r = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pacote, modo }),
      });
      const d = await r.json();
      if (d?.url) {
        window.location.href = d.url;
        return;
      }
      alert("Não consegui iniciar o pagamento agora. Fala com a gente no WhatsApp 💜");
    } catch {
      alert("Erro ao iniciar o pagamento. Fala com a gente no WhatsApp 💜");
    }
    setLoading(null);
  }

  return (
    <div className="mt-3">
      <div className="text-center text-xs text-muted mb-2">ou reserve pagando online</div>
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          disabled={!!loading}
          onClick={() => go("sinal")}
          className="rounded-full border border-primary/40 text-ink text-sm font-semibold py-2.5 hover:bg-primary/10 hover:border-primary transition-colors disabled:opacity-60"
        >
          {loading === "sinal" ? "Abrindo..." : "Sinal 50%"}
        </button>
        <button
          type="button"
          disabled={!!loading}
          onClick={() => go("total")}
          className="rounded-full border border-primary/40 text-ink text-sm font-semibold py-2.5 hover:bg-primary/10 hover:border-primary transition-colors disabled:opacity-60"
        >
          {loading === "total" ? "Abrindo..." : "Pagar total"}
        </button>
      </div>
    </div>
  );
}
