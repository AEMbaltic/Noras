"use client";

import { useEffect, useState } from "react";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [checking, setChecking] = useState(false);

  const [booked, setBooked] = useState<string[] | null>(null);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  useEffect(() => {
    if (!authed) return;
    fetch("/api/availability")
      .then((r) => r.json())
      .then((j) => setBooked(j.booked))
      .catch(() => setBooked([]));
  }, [authed]);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setChecking(true);
    setAuthError("");
    try {
      const res = await fetch("/api/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) setAuthed(true);
      else setAuthError("Nepareiza parole");
    } catch {
      setAuthError("Neizdevās sazināties ar serveri");
    } finally {
      setChecking(false);
    }
  };

  const save = async () => {
    if (!booked) return;
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch("/api/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, booked }),
      });
      const j = await res.json();
      if (res.ok) {
        setDirty(false);
        setStatus({ kind: "ok", text: "Saglabāts!" });
      } else {
        setStatus({ kind: "err", text: j.error || "Neizdevās saglabāt" });
      }
    } catch {
      setStatus({ kind: "err", text: "Neizdevās sazināties ar serveri" });
    } finally {
      setSaving(false);
    }
  };

  if (!authed) {
    return (
      <div className="grid min-h-screen place-items-center bg-sand-50 px-4">
        <form onSubmit={login} className="w-full max-w-sm rounded-2xl border border-choc-800/10 bg-cream p-8 text-center shadow-[0_20px_50px_-25px_rgba(58,37,25,0.3)]">
          <span className="font-serif text-3xl font-medium text-choc-800">NORAS</span>
          <p className="mt-2 text-[14px] text-choc-700/70">Administrācijas panelis</p>
          <input
            type="password"
            autoFocus
            placeholder="Parole"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-6 w-full rounded-lg border border-choc-800/15 bg-sand-50 px-4 py-3 text-[15px] text-choc-800 outline-none transition-colors focus:border-pine-600"
          />
          {authError && <p className="mt-2 text-[13px] text-terra-600">{authError}</p>}
          <button
            type="submit"
            disabled={checking || !password}
            className="mt-4 w-full rounded-lg bg-pine-600 px-6 py-3 text-[14px] font-medium uppercase tracking-[0.08em] text-sand-50 transition-colors hover:bg-pine-700 disabled:opacity-50"
          >
            {checking ? "Pārbauda…" : "Ienākt"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sand-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-serif text-3xl font-medium text-choc-800">NORAS</span>
            <h1 className="mt-1 text-[15px] text-choc-700/80">
              Aizņemto datumu pārvaldība — uzklikšķini uz datuma, lai atzīmētu vai atbrīvotu to
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {status && (
              <span className={`text-[14px] ${status.kind === "ok" ? "text-pine-600" : "text-terra-600"}`}>
                {status.text}
              </span>
            )}
            <button
              type="button"
              onClick={save}
              disabled={!dirty || saving}
              className="rounded-lg bg-pine-600 px-6 py-2.5 text-[13px] font-medium uppercase tracking-[0.08em] text-sand-50 transition-colors hover:bg-pine-700 disabled:opacity-40"
            >
              {saving ? "Saglabā…" : dirty ? "Saglabāt izmaiņas" : "Saglabāts"}
            </button>
          </div>
        </div>
        <div className="mt-8">
          {booked === null ? (
            <p className="text-choc-700/60">Ielādē…</p>
          ) : (
            <AvailabilityCalendar
              initialBooked={booked}
              adminMode
              onChange={(next) => {
                setBooked(next);
                setDirty(true);
                setStatus(null);
              }}
            />
          )}
        </div>
        <p className="mt-6 text-center text-[13px] text-choc-700/50">
          Publiskajā lapā apmeklētāji redz šo pašu kalendāru tikai lasīšanas režīmā.
        </p>
      </div>
    </div>
  );
}
