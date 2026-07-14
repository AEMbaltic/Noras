"use client";

import { useEffect, useState } from "react";

const MONTHS_LV = [
  "Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs",
  "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris",
];
const WEEKDAYS_LV = ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"];

function iso(d: Date): string {
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

type MonthCell = { date: Date; inMonth: boolean };

function monthCells(year: number, month: number): MonthCell[] {
  const first = new Date(year, month, 1);
  const start = new Date(year, month, 1 - first.getDay()); // back to Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const total = Math.ceil((first.getDay() + daysInMonth) / 7) * 7;
  const cells: MonthCell[] = [];
  for (let i = 0; i < total; i++) {
    const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
    cells.push({ date: d, inMonth: d.getMonth() === month });
  }
  return cells;
}

function Month({
  year,
  month,
  booked,
  today,
  onToggle,
}: {
  year: number;
  month: number;
  booked: Set<string>;
  today: string;
  onToggle?: (isoDate: string) => void;
}) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS_LV.map((w) => (
          <span key={w} className="py-2 text-[13px] font-medium text-choc-700/50">
            {w}
          </span>
        ))}
        {monthCells(year, month).map(({ date, inMonth }) => {
          const d = iso(date);
          const isBooked = booked.has(d);
          const isPast = d < today;
          const isToday = d === today;
          const muted = !inMonth || isPast;
          const clickable = !!onToggle && inMonth && !isPast;
          const cls = [
            "mx-auto grid h-10 w-10 place-items-center rounded-lg text-[15px] transition-colors",
            isBooked && !muted ? "bg-terra-500 font-medium text-white" : "",
            isBooked && muted ? "bg-terra-500/40 text-white/80" : "",
            !isBooked && muted ? "text-choc-700/30" : "",
            !isBooked && !muted ? "text-choc-800" : "",
            isToday ? "ring-2 ring-pine-600/50" : "",
            clickable ? "cursor-pointer hover:ring-2 hover:ring-terra-500/60" : "",
          ].join(" ");
          return (
            <button
              key={d}
              type="button"
              disabled={!clickable}
              onClick={clickable ? () => onToggle!(d) : undefined}
              className={cls}
              aria-label={`${d}${isBooked ? " — aizņemts" : ""}`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function AvailabilityCalendar({
  initialBooked,
  adminMode = false,
  onChange,
}: {
  initialBooked: string[];
  adminMode?: boolean;
  onChange?: (booked: string[]) => void;
}) {
  const [booked, setBooked] = useState<Set<string>>(new Set(initialBooked));
  const [offset, setOffset] = useState(0);
  const [today, setToday] = useState("2026-07-14"); // stable SSR placeholder; corrected on mount

  useEffect(() => {
    setToday(iso(new Date()));
    if (!adminMode) {
      fetch("/api/availability")
        .then((r) => (r.ok ? r.json() : null))
        .then((j) => j && setBooked(new Set(j.booked)))
        .catch(() => {});
    }
  }, [adminMode]);

  const base = new Date();
  base.setDate(1);
  base.setMonth(base.getMonth() + offset);
  const m1 = { year: base.getFullYear(), month: base.getMonth() };
  const next = new Date(base.getFullYear(), base.getMonth() + 1, 1);
  const m2 = { year: next.getFullYear(), month: next.getMonth() };

  const toggle = (d: string) => {
    if (!adminMode) return;
    const nextSet = new Set(booked);
    if (nextSet.has(d)) nextSet.delete(d);
    else nextSet.add(d);
    setBooked(nextSet);
    onChange?.([...nextSet].sort());
  };

  return (
    <div className="rounded-2xl border border-choc-800/10 bg-cream p-5 shadow-[0_20px_50px_-25px_rgba(58,37,25,0.3)] md:p-8">
      <div className="grid gap-8 md:grid-cols-2">
        {[m1, m2].map((m, i) => (
          <div key={`${m.year}-${m.month}`}>
            <div className="mb-2 flex items-center justify-between">
              {i === 0 ? (
                <button
                  type="button"
                  onClick={() => setOffset((o) => o - 1)}
                  aria-label="Iepriekšējais mēnesis"
                  className="grid h-9 w-9 place-items-center rounded-lg text-choc-700 transition-colors hover:bg-choc-800/5"
                >
                  ‹
                </button>
              ) : (
                <span className="h-9 w-9" />
              )}
              <span className="text-[17px] font-medium text-choc-800">
                {MONTHS_LV[m.month]} {m.year}
              </span>
              {i === 1 ? (
                <button
                  type="button"
                  onClick={() => setOffset((o) => o + 1)}
                  aria-label="Nākamais mēnesis"
                  className="grid h-9 w-9 place-items-center rounded-lg text-choc-700 transition-colors hover:bg-choc-800/5"
                >
                  ›
                </button>
              ) : (
                <span className="h-9 w-9" />
              )}
            </div>
            <Month {...m} booked={booked} today={today} onToggle={adminMode ? toggle : undefined} />
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-8 border-t border-choc-800/8 pt-5">
        <span className="flex items-center gap-2 text-[14px] text-choc-700/80">
          <span className="h-4 w-4 rounded border border-choc-800/25 bg-sand-50" /> Brīvs
        </span>
        <span className="flex items-center gap-2 text-[14px] text-choc-700/80">
          <span className="h-4 w-4 rounded bg-terra-500" /> Aizņemts
        </span>
      </div>
    </div>
  );
}
