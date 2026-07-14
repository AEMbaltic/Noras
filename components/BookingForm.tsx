"use client";

import { useState } from "react";
import { houses } from "@/data/houses";

export default function BookingForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [guests, setGuests] = useState("2");
  const [house, setHouse] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Rezervācijas pieprasījums — Noras kempings");
    const body = encodeURIComponent(
      `Sveiki!\n\nVēlos rezervēt māju Noras kempingā.\n\nIerašanās: ${from}\nIzbraukšana: ${to}\nViesu skaits: ${guests}\nMāja: ${house || "jebkura"}\n\nPaldies!`
    );
    window.location.href = `mailto:info@noras.lv?subject=${subject}&body=${body}`;
  };

  const inputCls =
    "w-full rounded-lg border border-choc-800/15 bg-sand-50 px-4 py-3 text-[15px] text-choc-800 outline-none transition-colors focus:border-pine-600";

  return (
    <form onSubmit={submit} className="mx-auto mt-12 max-w-2xl rounded-2xl border border-choc-800/10 bg-cream p-6 shadow-[0_20px_50px_-25px_rgba(58,37,25,0.3)] md:p-9">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium uppercase tracking-[0.08em] text-choc-700/70">Ierašanās</span>
          <input type="date" required value={from} onChange={(e) => setFrom(e.target.value)} className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium uppercase tracking-[0.08em] text-choc-700/70">Izbraukšana</span>
          <input type="date" required value={to} onChange={(e) => setTo(e.target.value)} className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium uppercase tracking-[0.08em] text-choc-700/70">Viesu skaits</span>
          <select value={guests} onChange={(e) => setGuests(e.target.value)} className={inputCls}>
            {["1", "2", "3", "4"].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium uppercase tracking-[0.08em] text-choc-700/70">Māja</span>
          <select value={house} onChange={(e) => setHouse(e.target.value)} className={inputCls}>
            <option value="">Jebkura</option>
            {houses.map((h) => (
              <option key={h.number} value={`Nr. ${h.number} — ${h.name}`}>
                Nr. {h.number} — {h.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-pine-600 px-6 py-3.5 text-[14px] font-medium uppercase tracking-[0.08em] text-sand-50 transition-colors hover:bg-pine-700"
      >
        Pieprasīt rezervāciju
      </button>
      <p className="mt-4 text-center text-[13px] text-choc-700/60">
        Mēs apstiprināsim pieejamību un sazināsimies 24 stundu laikā
      </p>
    </form>
  );
}
