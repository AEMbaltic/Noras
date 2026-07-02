import { DuneLayers, PineRow, WaveDivider, GrassTuft } from "@/components/Motifs";
import {
  IconBed,
  IconDeck,
  IconKitchen,
  IconFire,
  IconWifi,
  IconTree,
  IconWave,
  IconUsers,
  IconPin,
  IconPhone,
  IconMail,
  IconInstagram,
  IconFacebook,
  IconStar,
  IconArrowRight,
} from "@/components/Icon";
import { houses, toneClasses } from "@/data/houses";

const nav = [
  { href: "#majas", label: "Mājas" },
  { href: "#ertibas", label: "Ērtības" },
  { href: "#vieta", label: "Atrašanās vieta" },
  { href: "#kontakti", label: "Kontakti" },
];

const amenities = [
  { icon: IconKitchen, title: "Koplietošanas virtuve", desc: "Gāzes plītis, grili un viss nepieciešamais ēst gatavošanai zem klajas debess." },
  { icon: IconFire, title: "Ugunskura vieta", desc: "Vakari ap uguni, jūras vējš un stāsti līdz vēlai naktij." },
  { icon: IconDeck, title: "Privāta terase", desc: "Katrai mājai — sava terase ar galdu un četriem krēsliem." },
  { icon: IconUsers, title: "Rotaļu laukums", desc: "Drošs un jautrs stūrītis mazākajiem viesiem." },
  { icon: IconTree, title: "Priežu meža taka", desc: "Ēnaina pastaiga tieši no kempinga līdz kāpām." },
  { icon: IconWave, title: "300m līdz jūrai", desc: "Mērsraga pludmale un bāka — īsā pastaigas attālumā." },
  { icon: IconWifi, title: "Wi-Fi visur", desc: "Paliec sasniedzams vai atslēdzies pavisam — izvēle tava." },
  { icon: IconBed, title: "Viss mājīgumam", desc: "Gultas veļa, dvieļi, trauki 4 personām un neliels dīvāns." },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-sand-50">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-choc-800/5 bg-sand-50/80 backdrop-blur-md">
        <div className="container-px mx-auto flex h-[72px] max-w-7xl items-center justify-between">
          <a href="#top" className="font-serif text-2xl font-medium tracking-wide text-choc-800">
            NORAS
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[13px] font-medium uppercase tracking-[0.12em] text-choc-700/80 transition-colors hover:text-choc-800"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#kontakti"
            className="rounded-full bg-choc-800 px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.1em] text-sand-50 transition-colors hover:bg-pine-700"
          >
            Rezervēt
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-gradient-to-b from-sea-300 via-sand-100 to-sand-200 pt-[72px]">
        <div className="absolute inset-0">
          <div className="absolute right-[10%] top-[14%] h-2.5 w-2.5 rounded-full bg-choc-600/40 animate-float" />
          <div className="absolute right-[22%] top-[24%] h-1.5 w-1.5 rounded-full bg-choc-600/30 animate-float" style={{ animationDelay: "1.5s" }} />
          <PineRow className="absolute bottom-[13%] left-0 h-28 w-full text-pine-800 opacity-90" />
        </div>

        <div className="container-px relative z-10 mx-auto w-full max-w-7xl pb-40 pt-24 md:pb-48">
          <p className="mb-5 flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.25em] text-choc-700/80">
            <IconPin className="h-4 w-4" /> Mērsrags, Latvija
          </p>
          <h1 className="balance max-w-4xl font-serif text-[clamp(3rem,9vw,7.2rem)] font-medium leading-[0.95] text-choc-800">
            Kāpas.
            <br />
            <span className="italic font-normal text-choc-700">Priedes.</span>
            <br />
            Jūra pie sliekšņa.
          </h1>
          <p className="mt-8 max-w-md balance text-lg text-choc-700/90">
            Deviņas mājas ieaugušas priežu mežā starp kāpām — Noras kempings, kur vasara ilgst tik ilgi, cik vēlies.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontakti"
              className="group inline-flex items-center gap-2 rounded-full bg-choc-800 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-sand-50 transition-colors hover:bg-pine-700"
            >
              Rezervēt savu māju
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#majas"
              className="inline-flex items-center gap-2 rounded-full border border-choc-800/25 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-choc-800 transition-colors hover:border-choc-800/60"
            >
              Apskatīt mājas
            </a>
          </div>
        </div>

        <DuneLayers className="relative z-10 h-32 w-full md:h-44" />
      </section>

      {/* STATS STRIP */}
      <section className="bg-choc-800 py-10 text-sand-100">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            ["9", "mājas priežu mežā"],
            ["300m", "līdz pludmalei"],
            ["4", "viesi katrā mājā"],
            ["4.5/5", "no 200+ atsauksmēm"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-serif text-4xl font-medium text-sand-50 md:text-5xl">{n}</div>
              <div className="mt-1 text-[13px] uppercase tracking-[0.08em] text-sand-100/70">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-sea-300 via-sand-200 to-sand-300">
            <PineRow className="absolute bottom-0 left-0 h-2/5 w-full text-pine-700/90" />
            <DuneLayers className="absolute bottom-0 left-0 h-1/3 w-full" />
            <GrassTuft className="absolute bottom-6 right-8 h-24 w-24 text-choc-700/70" />
            <GrassTuft className="absolute bottom-4 left-10 h-16 w-16 text-choc-700/50" />
          </div>
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-sea-600">Par kempingu</p>
            <h2 className="balance mt-4 font-serif text-4xl font-medium leading-tight text-choc-800 md:text-5xl">
              Ģimenes vieta, kur jūra ir kaimiņos
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-choc-700/90">
              Noras ir neliels, mājīgs kempings Mērsraga kāpu priedēs — deviņas atsevišķas mājiņas, katra ar savu
              terasi, virtuvi un mieru. Šeit dienas skaitās ar saulrietiem virs jūras, vakari — ar ugunskuru un
              priežu smaržu, un rīti — ar putnu dziesmām un kafiju uz terases.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-choc-700/90">
              Ideāli piemērots ģimenēm, kas meklē vienkāršu, dabai tuvu atpūtu bez liekas steigas — pludmale, bāka un
              zvejnieku ciema gars ir tepat aiz kāpas.
            </p>
          </div>
        </div>
      </section>

      {/* HOUSES */}
      <section id="majas" className="bg-sand-100 py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-sea-600">Deviņas mājas</p>
              <h2 className="balance mt-4 max-w-xl font-serif text-4xl font-medium leading-tight text-choc-800 md:text-5xl">
                Katrai mājai — savs vārds, savs stāsts
              </h2>
            </div>
            <p className="max-w-sm text-[15px] text-choc-700/80">
              Visas mājas ir vienādi ērtas un mājīgas — līdz 4 viesiem, sava terase un pilnībā aprīkota virtuve.
              Nosaukumi iedvesmoti no jūras un kāpu ainavas, kas tās ieskauj.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {houses.map((h) => {
              const tone = toneClasses[h.tone];
              return (
                <div
                  key={h.number}
                  className="group overflow-hidden rounded-2xl border border-choc-800/8 bg-sand-50 transition-shadow hover:shadow-[0_18px_40px_-15px_rgba(58,37,25,0.25)]"
                >
                  <div className={`relative flex aspect-[4/3] items-center justify-center ${tone.bg}`}>
                    <span className={`font-serif text-7xl font-medium ${tone.text} opacity-90`}>
                      {String(h.number).padStart(2, "0")}
                    </span>
                    <span className="absolute right-4 top-4 rounded-full bg-black/10 px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-white/90">
                      Foto drīzumā
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-2xl font-medium text-choc-800">
                        {h.name} <span className="text-base text-choc-700/50">Nr. {h.number}</span>
                      </h3>
                    </div>
                    <p className="mt-1 text-[13px] italic text-choc-700/60">{h.meaning}</p>
                    <div className="mt-4 flex items-center gap-4 text-choc-700/80">
                      <span className="flex items-center gap-1.5 text-[13px]">
                        <IconUsers className="h-4 w-4" /> {h.guests} viesi
                      </span>
                      <span className="flex items-center gap-1.5 text-[13px]">
                        <IconDeck className="h-4 w-4" /> Terase
                      </span>
                      <span className="flex items-center gap-1.5 text-[13px]">
                        <IconKitchen className="h-4 w-4" /> Virtuve
                      </span>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-choc-800/8 pt-4">
                      <span className="text-[15px] text-choc-800">
                        no <span className="font-serif text-xl font-medium">€{h.from}</span> / naktī
                      </span>
                      <a
                        href="#kontakti"
                        className="text-[13px] font-medium uppercase tracking-[0.08em] text-sea-600 hover:text-sea-500"
                      >
                        Rezervēt →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="ertibas" className="relative overflow-hidden bg-pine-800 py-24 text-sand-100 md:py-32">
        <PineRow className="pointer-events-none absolute -top-2 left-0 h-20 w-full text-pine-700/40" />
        <div className="container-px relative mx-auto max-w-7xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-sea-300">Ērtības</p>
          <h2 className="balance mt-4 max-w-xl font-serif text-4xl font-medium leading-tight text-sand-50 md:text-5xl">
            Viss, kas vasarai nepieciešams
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((a) => (
              <div key={a.title}>
                <a.icon className="h-8 w-8 text-sand-200" />
                <h3 className="mt-4 font-serif text-xl text-sand-50">{a.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-sand-100/70">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOOD STRIP */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {[
          { label: "Kāpas", tone: "bg-sand-300" },
          { label: "Priežu mežs", tone: "bg-pine-600" },
          { label: "Baltijas jūra", tone: "bg-sea-500" },
          { label: "Vakara ugunskurs", tone: "bg-choc-600" },
        ].map((m) => (
          <div key={m.label} className={`relative flex aspect-square items-center justify-center ${m.tone}`}>
            <span className="font-serif text-lg italic text-white/90">{m.label}</span>
          </div>
        ))}
      </section>

      {/* REVIEWS */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center gap-1 text-choc-700">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="h-5 w-5" />
            ))}
          </div>
          <p className="balance mt-6 font-serif text-2xl leading-snug text-choc-800 md:text-3xl">
            &ldquo;Klusa, sakopta vietiņa tieši pie jūras — bērni no rotaļlaukuma un ugunskura vakariem bija
            sajūsmā. Noteikti brauksim vēlreiz.&rdquo;
          </p>
          <p className="mt-5 text-[14px] uppercase tracking-[0.1em] text-choc-700/60">
            Booking.com viesis · 4.5/5 no 200+ atsauksmēm
          </p>
        </div>
      </section>

      {/* LOCATION */}
      <section id="vieta" className="bg-sand-100 py-24 md:py-32">
        <div className="container-px mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-sea-600">Atrašanās vieta</p>
            <h2 className="balance mt-4 font-serif text-4xl font-medium leading-tight text-choc-800 md:text-5xl">
              Bākas iela 58, Mērsrags
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-choc-700/90">
              Mērsraga bāka un pludmale — dažu minūšu pastaigā. Rīga ir aptuveni pusotras stundas brauciena
              attālumā, tāpēc Noras ir lieliska izvēle gan nedēļas nogales izbraucienam, gan garākai vasaras
              atpūtai.
            </p>
            <ul className="mt-8 space-y-3 text-[15px] text-choc-700/90">
              <li className="flex items-center gap-3">
                <IconPin className="h-4 w-4 text-sea-600" /> ~90 min no Rīgas
              </li>
              <li className="flex items-center gap-3">
                <IconWave className="h-4 w-4 text-sea-600" /> 300m līdz Mērsraga pludmalei
              </li>
              <li className="flex items-center gap-3">
                <IconTree className="h-4 w-4 text-sea-600" /> Ieskauts priežu mežā un kāpās
              </li>
            </ul>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-sand-200">
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
              <rect width="400" height="400" fill="var(--sand-100)" />
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" stroke="var(--sand-300)" strokeWidth="1" />
              ))}
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="var(--sand-300)" strokeWidth="1" />
              ))}
              <path d="M0 260 C120 300 260 220 400 250" stroke="var(--sea-400)" strokeWidth="26" fill="none" opacity="0.55" />
              <path d="M0 300 C130 330 250 270 400 300" stroke="var(--sea-500)" strokeWidth="34" fill="none" opacity="0.5" />
              <circle cx="200" cy="190" r="10" fill="var(--choc-700)" />
              <path d="M200 150 v40 M180 165 h40" stroke="var(--choc-700)" strokeWidth="3" />
            </svg>
            <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-choc-800 text-sand-50 shadow-lg">
                <IconPin className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section id="kontakti" className="relative overflow-hidden bg-choc-800 py-24 text-sand-50 md:py-32">
        <WaveDivider className="pointer-events-none absolute -top-1 left-0 h-14 w-full rotate-180 text-choc-800" color="var(--sand-50)" />
        <div className="container-px relative mx-auto max-w-4xl text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-sea-300">Rezervācija</p>
          <h2 className="balance mt-4 font-serif text-4xl font-medium leading-tight md:text-6xl">Rezervē savu vasaru pie jūras</h2>
          <p className="mx-auto mt-6 max-w-lg text-[17px] text-sand-100/80">
            Sazinies ar mums, un atradīsim māju, kas piestāv tieši jūsu ģimenei.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+37126333458"
              className="inline-flex items-center gap-2 rounded-full bg-sand-50 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-choc-800 transition-colors hover:bg-sand-200"
            >
              <IconPhone className="h-4 w-4" /> +371 26 333 458
            </a>
            <a
              href="mailto:info@noras.lv"
              className="inline-flex items-center gap-2 rounded-full border border-sand-50/30 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-sand-50 transition-colors hover:border-sand-50/70"
            >
              <IconMail className="h-4 w-4" /> info@noras.lv
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-5">
            <a href="https://www.instagram.com/noras_kempings" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-sand-100/70 transition-colors hover:text-sand-50">
              <IconInstagram className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/p/NORAS-kempings-100061153254170/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-sand-100/70 transition-colors hover:text-sand-50">
              <IconFacebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-sand-50 py-12">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <span className="font-serif text-2xl font-medium text-choc-800">NORAS</span>
            <p className="mt-1 text-[13px] text-choc-700/60">Bākas iela 58, Mērsrags, Talsu novads</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-[13px] uppercase tracking-[0.08em] text-choc-700/70 hover:text-choc-800">
                {n.label}
              </a>
            ))}
          </nav>
          <p className="text-[12px] text-choc-700/50">© {new Date().getFullYear()} Noras kempings</p>
        </div>
      </footer>
    </div>
  );
}
