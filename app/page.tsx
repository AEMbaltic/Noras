import Image from "next/image";
import BookingForm from "@/components/BookingForm";
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
  IconClock,
  IconCar,
  IconHome,
} from "@/components/Icon";
import { houses, toneClasses } from "@/data/houses";

const nav = [
  { href: "#about", label: "Par mums" },
  { href: "#majas", label: "Mājas" },
  { href: "#amenities", label: "Ērtības" },
  { href: "#gallery", label: "Galerija" },
  { href: "#contact", label: "Kontakti" },
];

const amenities = [
  { icon: IconWifi, label: "Bezmaksas WiFi" },
  { icon: IconCar, label: "Bezmaksas stāvvieta" },
  { icon: IconDeck, label: "Privāta terase katrai mājai" },
  { icon: IconKitchen, label: "Aprīkota virtuve" },
  { icon: IconFire, label: "Ugunskura un grila vieta" },
  { icon: IconUsers, label: "Rotaļu laukums bērniem" },
  { icon: IconTree, label: "Priežu meža taka" },
  { icon: IconWave, label: "300 m līdz pludmalei" },
  { icon: IconBed, label: "Gultas veļa un dvieļi" },
];

const gallery = [
  { src: "/photos/camping-aerial.jpg", alt: "Kempings no putna lidojuma — mājiņas un jūra", span: "md:col-span-2 md:row-span-2" },
  { src: "/photos/house-lighthouse.jpg", alt: "Mājiņa ar Mērsraga bāku fonā", span: "md:row-span-2" },
  { src: "/photos/kitchen.jpg", alt: "Mājiņas virtuve", span: "" },
  { src: "/photos/interior.jpg", alt: "Mājīga viesistaba", span: "" },
  { src: "/photos/beach-aerial.jpg", alt: "Mērsraga pludmale un bāka no augšas", span: "md:col-span-2" },
];

const reviews = [
  {
    name: "Viesis",
    country: "Booking.com",
    text: "Klusa, sakopta vietiņa tieši pie jūras — bērni no rotaļlaukuma un ugunskura vakariem bija sajūsmā. Noteikti brauksim vēlreiz.",
  },
  {
    name: "Viesis",
    country: "Booking.com",
    text: "Mājiņas tīras un mājīgas, viss nepieciešamais uz vietas. Pludmale dažu minūšu attālumā caur priedēm — brīnišķīgi!",
  },
  {
    name: "Viesis",
    country: "Booking.com",
    text: "Lieliska atrašanās vieta pie Mērsraga bākas. Miers, jūras šalkas un laipni saimnieki.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-sand-50">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-choc-900/30 backdrop-blur-md">
        <div className="container-px mx-auto flex h-[72px] max-w-7xl items-center justify-between">
          <a href="#top" className="font-serif text-2xl font-medium tracking-wide text-white">
            NORAS
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[13px] font-medium uppercase tracking-[0.12em] text-white/85 transition-colors hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+37126333458" className="hidden items-center gap-2 text-[13px] font-medium text-white/85 transition-colors hover:text-white md:flex">
              <IconPhone className="h-4 w-4" /> +371 26 333 458
            </a>
            <a
              href="#booking"
              className="rounded-lg bg-pine-600 px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.1em] text-sand-50 transition-colors hover:bg-pine-700"
            >
              Rezervēt
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-[100svh] items-end">
        <Image
          src="/photos/camping-aerial.jpg"
          alt="Noras kempings no putna lidojuma — deviņas mājiņas priežu mežā pie Baltijas jūras"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-choc-900/85 via-choc-900/25 to-choc-900/30" />
        <div className="container-px relative z-10 mx-auto w-full max-w-7xl pb-24 pt-40 md:pb-32">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.3em] text-sand-200">
            Mērsrags · Latvija · Baltijas jūra
          </p>
          <h1 className="balance max-w-3xl font-serif text-[clamp(3rem,8vw,6.5rem)] font-medium leading-[1.02] text-white">
            Noras
          </h1>
          <p className="mt-4 max-w-xl balance text-lg leading-relaxed text-sand-100/95 md:text-xl">
            Deviņas brīvdienu mājiņas priežu mežā, dažus soļus no Baltijas jūras krasta
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 rounded-lg bg-pine-600 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-sand-50 transition-colors hover:bg-pine-700"
            >
              Rezervēt uzturēšanos
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:border-white/80 hover:bg-white/10"
            >
              Galerija
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/photos/house-lighthouse.jpg"
              alt="Noras mājiņa vakarā ar Mērsraga bāku fonā"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-terra-500">Par kempingu</p>
            <h2 className="balance mt-4 font-serif text-4xl font-medium leading-tight text-choc-800 md:text-5xl">
              Jūsu vasara pie jūras
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-choc-700/90">
              Klusā priežu mežā pie pašas Mērsraga bākas, Noras kempings piedāvā deviņas atsevišķas brīvdienu
              mājiņas — katra ar savu terasi, virtuvi un vietu līdz četriem viesiem. Izbaudiet ugunskura vakarus,
              priežu smaržu un jūru, kas sākas tepat aiz kāpas.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-choc-700/90">
              Ideāla vieta ģimenēm un draugu lokam, kas meklē vienkāršu, dabai tuvu atpūtu bez liekas steigas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: IconHome, label: "9 mājiņas" },
                { icon: IconUsers, label: "Līdz 4 viesiem katrā" },
                { icon: IconWave, label: "300 m līdz jūrai" },
              ].map((h) => (
                <span key={h.label} className="inline-flex items-center gap-2 rounded-full border border-choc-800/12 bg-cream px-4 py-2 text-[14px] text-choc-800">
                  <h.icon className="h-4 w-4 text-pine-600" /> {h.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOUSES */}
      <section id="majas" className="bg-sand-100 py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-terra-500">Deviņas mājas</p>
            <h2 className="balance mt-4 font-serif text-4xl font-medium leading-tight text-choc-800 md:text-5xl">
              Katrai mājai — savs vārds
            </h2>
            <p className="mt-5 text-[16px] text-choc-700/80">
              Visas mājas ir vienādi ērtas — līdz 4 viesiem, sava terase un aprīkota virtuve. Nosaukumi nāk no
              jūras un kāpu ainavas, kas tās ieskauj.
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
                  <div className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden ${tone.bg}`}>
                    {h.image ? (
                      <Image
                        src={h.image}
                        alt={`Māja Nr. ${h.number} — ${h.name}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <>
                        <span className={`font-serif text-7xl font-medium ${tone.text} opacity-90`}>
                          {String(h.number).padStart(2, "0")}
                        </span>
                        <span className="absolute right-4 top-4 rounded-full bg-black/10 px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-white/90">
                          Foto drīzumā
                        </span>
                      </>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-medium text-choc-800">
                      {h.name} <span className="text-base text-choc-700/50">Nr. {h.number}</span>
                    </h3>
                    <div className="mt-3 flex items-center gap-4 text-choc-700/80">
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
                        href="#booking"
                        className="text-[13px] font-medium uppercase tracking-[0.08em] text-terra-500 hover:text-terra-600"
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
      <section id="amenities" className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-terra-500">Ko piedāvājam</p>
          <h2 className="balance mt-4 font-serif text-4xl font-medium leading-tight text-choc-800 md:text-5xl">
            Ērtības
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
          {amenities.map((a) => (
            <div key={a.label} className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pine-600/10 text-pine-600">
                <a.icon className="h-6 w-6" />
              </span>
              <span className="text-[15px] text-choc-800">{a.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-sand-100 py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-terra-500">Apskatiet</p>
            <h2 className="balance mt-4 font-serif text-4xl font-medium leading-tight text-choc-800 md:text-5xl">
              Galerija
            </h2>
          </div>
          <div className="mt-14 grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-4">
            {gallery.map((g) => (
              <div key={g.src} className={`relative overflow-hidden rounded-xl ${g.span}`}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-terra-500">Rezervējiet uzturēšanos</p>
          <h2 className="balance mt-4 font-serif text-4xl font-medium leading-tight text-choc-800 md:text-5xl">
            Izvēlieties datumus
          </h2>
        </div>
        <BookingForm />
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-pine-800 py-24 text-sand-100 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-sea-300">Ko saka viesi</p>
            <h2 className="balance mt-4 font-serif text-4xl font-medium leading-tight text-sand-50 md:text-5xl">
              Atsauksmes
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="font-serif text-5xl font-medium text-sand-50">4.5</span>
              <div className="text-left">
                <div className="flex gap-0.5 text-terra-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" />
                  ))}
                </div>
                <span className="text-[13px] text-sand-100/70">/ 5 — vairāk nekā 200 atsauksmes</span>
              </div>
            </div>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <figure key={i} className="rounded-2xl bg-pine-700/60 p-7">
                <blockquote className="text-[15px] leading-relaxed text-sand-100/90">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-[13px] uppercase tracking-[0.08em] text-sand-100/60">
                  {r.name} · {r.country}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-terra-500">Plānojiet vizīti</p>
          <h2 className="balance mt-4 font-serif text-4xl font-medium leading-tight text-choc-800 md:text-5xl">
            Kā mūs atrast
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            {
              icon: IconPin,
              title: "Atrašanās vieta",
              lines: ["Bākas iela 58, Mērsrags", "Talsu novads, LV-3284", "Latvija"],
            },
            {
              icon: IconClock,
              title: "Ierakstīšanās / Izrakstīšanās",
              lines: ["Ierakstīšanās: no 15:00", "Izrakstīšanās: līdz 12:00"],
            },
            {
              icon: IconCar,
              title: "Attālums",
              lines: ["93 km no Rīgas lidostas", "300 m līdz pludmalei", "Bezmaksas stāvvieta"],
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-choc-800/10 bg-cream p-7 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pine-600/10 text-pine-600">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-medium text-choc-800">{c.title}</h3>
              <div className="mt-3 space-y-1 text-[14px] text-choc-700/80">
                {c.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.booking.com/hotel/lv/camping-noras.lv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-pine-600 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-sand-50 transition-colors hover:bg-pine-700"
          >
            Rezervēt Booking.com
          </a>
          <a
            href="tel:+37126333458"
            className="inline-flex items-center gap-2 rounded-lg border border-choc-800/20 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-choc-800 transition-colors hover:border-choc-800/50"
          >
            <IconPhone className="h-4 w-4" /> +371 26 333 458
          </a>
          <a
            href="mailto:info@noras.lv"
            className="inline-flex items-center gap-2 rounded-lg border border-choc-800/20 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-choc-800 transition-colors hover:border-choc-800/50"
          >
            <IconMail className="h-4 w-4" /> info@noras.lv
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-choc-900 py-12 text-sand-100">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <span className="font-serif text-2xl font-medium text-sand-50">NORAS</span>
            <p className="mt-1 text-[13px] text-sand-100/60">Mērsrags, Latvija · Baltijas krasts</p>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/noras_kempings" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-sand-100/70 transition-colors hover:text-sand-50">
              <IconInstagram className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/p/NORAS-kempings-100061153254170/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-sand-100/70 transition-colors hover:text-sand-50">
              <IconFacebook className="h-5 w-5" />
            </a>
          </div>
          <p className="text-[12px] text-sand-100/50">© {new Date().getFullYear()} Noras. Visas tiesības aizsargātas.</p>
        </div>
      </footer>
    </div>
  );
}
