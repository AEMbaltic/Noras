import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noras — Kempings Mērsragā",
  description:
    "Noras kempings Mērsragā — 9 mājas kāpu priedēs, soli no Baltijas jūras. Modernas ērtības, jūras gaiss un mierīga vasara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-sand-50 text-choc-800 antialiased">{children}</body>
    </html>
  );
}
