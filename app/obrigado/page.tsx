import type { Metadata } from "next";
import { waLink } from "@/lib/utils";
import { TrackReserva } from "@/components/TrackReserva";

export const metadata: Metadata = {
  title: "Reserva recebida · Recanto do Açaí Eventos",
  robots: { index: false },
};

export default function Obrigado() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-radial-glow">
      <TrackReserva />
      <div className="glass-strong rounded-3xl p-10 md:p-14 max-w-md text-center">
        <div className="text-5xl mb-4">💜</div>
        <h1 className="font-display text-3xl font-bold text-ink">Reserva recebida!</h1>
        <p className="text-muted mt-4 leading-relaxed">
          Recebemos seu pagamento 🎉 Em breve a gente confirma todos os detalhes do seu evento —
          pode ficar tranquilo(a)!
        </p>
        <a
          href={waLink(
            "Olá, Recanto! 🍇 Acabei de reservar pelo site. Podemos confirmar os detalhes do meu evento?"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full font-semibold px-7 py-3.5 bg-whats text-white hover:bg-whats-dark transition-all mt-8 shadow-glow"
        >
          Confirmar no WhatsApp
        </a>
        <div className="mt-4">
          <a href="/" className="text-sm text-muted hover:text-primary transition-colors">
            Voltar ao site
          </a>
        </div>
      </div>
    </main>
  );
}
