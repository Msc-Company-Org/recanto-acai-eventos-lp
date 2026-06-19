import { NextResponse } from "next/server";

// Preços autoritativos no servidor (centavos). Sinal = 50%.
const PACOTES: Record<string, { nome: string; centavos: number }> = {
  unico: { nome: "Açaí ou Sorvete", centavos: 149000 },
  combo: { nome: "Combo Açaí + Sorvete", centavos: 169000 },
};

export async function POST(req: Request) {
  try {
    const { pacote = "combo", modo = "total" } = await req.json();
    const p = PACOTES[pacote] ?? PACOTES.combo;
    const amount = modo === "sinal" ? Math.round(p.centavos / 2) : p.centavos;
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      return NextResponse.json({ error: "pagamento indisponível" }, { status: 500 });
    }
    const origin = req.headers.get("origin") || "https://recanto-eventos.vercel.app";
    const rotulo = modo === "sinal" ? "Sinal 50%" : "Pagamento total";
    const body = new URLSearchParams();
    body.set("mode", "payment");
    body.set("success_url", `${origin}/obrigado?pago=1`);
    body.set("cancel_url", `${origin}/#pacotes`);
    body.set("line_items[0][quantity]", "1");
    body.set("line_items[0][price_data][currency]", "brl");
    body.set("line_items[0][price_data][unit_amount]", String(amount));
    body.set("line_items[0][price_data][product_data][name]", `Recanto do Açaí Eventos — ${p.nome} (${rotulo})`);
    body.set("payment_method_types[0]", "card");
    body.set("metadata[pacote]", pacote);
    body.set("metadata[modo]", modo);
    body.set("metadata[origem]", "site-checkout");

    const r = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const data = await r.json();
    if (!r.ok) {
      console.error("[checkout] stripe:", data?.error?.message || data);
      return NextResponse.json({ error: "falha ao iniciar o pagamento" }, { status: 502 });
    }
    return NextResponse.json({ url: data.url });
  } catch (e) {
    console.error("[checkout] erro:", e);
    return NextResponse.json({ error: "erro" }, { status: 400 });
  }
}
