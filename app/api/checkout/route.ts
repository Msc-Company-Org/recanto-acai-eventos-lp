import { NextResponse } from "next/server";
import { valorReserva } from "@/lib/pricing";

// Price IDs do catálogo Stripe (criados via API; não são segredos).
const PRICES: Record<string, Record<string, string>> = {
  unico: { total: "price_1Tk6BbIglSfdwnhTkM0fEGEN", sinal: "price_1Tk6BcIglSfdwnhTZeh6KxsI" },
  combo: { total: "price_1Tk6BeIglSfdwnhT85BxtYMM", sinal: "price_1Tk6BeIglSfdwnhTnsNy6nic" },
};

export async function POST(req: Request) {
  try {
    const { pacote = "combo", modo = "total" } = await req.json();
    const pk = PRICES[pacote] ? pacote : "combo";
    const md = modo === "sinal" ? "sinal" : "total";
    const price = PRICES[pk][md];
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) return NextResponse.json({ error: "pagamento indisponível" }, { status: 500 });

    const origin = req.headers.get("origin") || "https://recanto-eventos.vercel.app";
    const valor = valorReserva(pk, md); // valor da conversão de compra (o que é cobrado agora)
    const body = new URLSearchParams();
    body.set("mode", "payment");
    // session_id permite dedup da conversão; valor/pacote/modo alimentam GA4/Google Ads/Meta.
    body.set(
      "success_url",
      `${origin}/obrigado?pago=1&valor=${valor}&pacote=${pk}&modo=${md}&session_id={CHECKOUT_SESSION_ID}`
    );
    body.set("cancel_url", `${origin}/#pacotes`);
    body.set("line_items[0][price]", price);
    body.set("line_items[0][quantity]", "1");
    body.set("phone_number_collection[enabled]", "true");
    body.set("metadata[pacote]", pk);
    body.set("metadata[modo]", md);
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
