import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import seed from "@/data/availability.json";

export const dynamic = "force-dynamic";

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;
const KV_KEY = "noras:booked";
const FILE = path.join(process.cwd(), "data", "availability.json");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "noras2026";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

async function readBooked(): Promise<string[]> {
  if (KV_URL && KV_TOKEN) {
    const res = await fetch(`${KV_URL}/get/${KV_KEY}`, {
      headers: { Authorization: `Bearer ${KV_TOKEN}` },
      cache: "no-store",
    });
    const json = await res.json();
    if (json.result) return JSON.parse(json.result);
    return seed.booked;
  }
  try {
    const raw = await fs.readFile(FILE, "utf8");
    return JSON.parse(raw).booked;
  } catch {
    return seed.booked;
  }
}

async function writeBooked(dates: string[]): Promise<boolean> {
  if (KV_URL && KV_TOKEN) {
    const res = await fetch(`${KV_URL}/set/${KV_KEY}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${KV_TOKEN}` },
      body: JSON.stringify(dates),
    });
    return res.ok;
  }
  try {
    await fs.writeFile(FILE, JSON.stringify({ booked: [...dates].sort() }, null, 2) + "\n");
    return true;
  } catch {
    // Vercel serverless filesystem is read-only — configure KV env vars for persistence
    return false;
  }
}

export async function GET() {
  return NextResponse.json({ booked: await readBooked() });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.password !== "string") {
    return NextResponse.json({ error: "Nederīgs pieprasījums" }, { status: 400 });
  }
  if (body.password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Nepareiza parole" }, { status: 401 });
  }
  if (body.booked === undefined) {
    return NextResponse.json({ ok: true }); // password verification only
  }
  if (!Array.isArray(body.booked) || !body.booked.every((d: unknown) => typeof d === "string" && ISO_DATE.test(d))) {
    return NextResponse.json({ error: "Nederīgs datumu formāts" }, { status: 400 });
  }
  const saved = await writeBooked(body.booked);
  if (!saved) {
    return NextResponse.json(
      { error: "Saglabāšana nav pieejama — servera krātuve nav konfigurēta (KV_REST_API_URL / KV_REST_API_TOKEN)" },
      { status: 507 }
    );
  }
  return NextResponse.json({ ok: true, booked: body.booked });
}
