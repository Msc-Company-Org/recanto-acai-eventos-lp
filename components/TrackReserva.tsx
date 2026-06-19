"use client";

import { useEffect } from "react";
import { track, EVENTS } from "@/lib/tracking";

/** Dispara a conversão de reserva paga na página de obrigado (uma vez). */
export function TrackReserva() {
  useEffect(() => {
    track(EVENTS.RESERVA_PAGA, { currency: "BRL" });
  }, []);
  return null;
}
