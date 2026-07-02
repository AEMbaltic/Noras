import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
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
    <html lang="lv" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-sand-50 text-choc-800 antialiased">{children}</body>
    </html>
  );
}
