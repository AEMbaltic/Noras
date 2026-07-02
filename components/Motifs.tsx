export function DuneLayers({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="var(--sand-300)"
        opacity="0.6"
        d="M0,180 C220,240 380,120 620,160 C860,200 980,100 1220,140 C1340,160 1400,150 1440,150 L1440,320 L0,320 Z"
      />
      <path
        fill="var(--sand-400)"
        opacity="0.75"
        d="M0,220 C180,180 340,260 560,220 C800,176 940,240 1180,210 C1300,196 1380,220 1440,210 L1440,320 L0,320 Z"
      />
      <path
        fill="var(--choc-600)"
        d="M0,260 C200,230 420,290 660,255 C900,220 1040,280 1280,250 C1360,240 1400,250 1440,248 L1440,320 L0,320 Z"
      />
    </svg>
  );
}

export function PineRow({ className = "" }: { className?: string }) {
  const trees = [
    { x: 40, s: 1.1 },
    { x: 140, s: 0.75 },
    { x: 210, s: 1.35 },
    { x: 320, s: 0.9 },
    { x: 410, s: 1.15 },
    { x: 500, s: 0.7 },
    { x: 590, s: 1.25 },
    { x: 700, s: 0.85 },
    { x: 790, s: 1.05 },
    { x: 890, s: 0.8 },
    { x: 980, s: 1.3 },
    { x: 1090, s: 0.9 },
    { x: 1180, s: 1.1 },
    { x: 1280, s: 0.75 },
    { x: 1370, s: 1.2 },
  ];
  return (
    <svg
      className={className}
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {trees.map((t, i) => (
        <g key={i} transform={`translate(${t.x} ${180 - 120 * t.s}) scale(${t.s})`}>
          <path
            d="M30 0 L0 55 L14 55 L-8 100 L10 100 L-14 145 L74 145 L50 100 L68 100 L46 55 L60 55 Z"
            fill="var(--pine-800)"
          />
          <rect x="24" y="145" width="12" height="18" fill="var(--choc-800)" />
        </g>
      ))}
    </svg>
  );
}

export function WaveDivider({ className = "", color = "var(--sea-400)" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
      <path
        fill={color}
        d="M0,40 C160,80 320,0 480,30 C640,60 800,20 960,40 C1120,60 1280,20 1440,45 L1440,100 L0,100 Z"
      />
    </svg>
  );
}

export function SunMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="52" fill="var(--sand-200)" />
      <circle cx="100" cy="100" r="52" fill="none" stroke="var(--choc-600)" strokeWidth="1.5" opacity="0.35" />
    </svg>
  );
}

export function HouseGlyph({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M8 30 L32 10 L56 30 V54 H8 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      <path d="M8 30 L32 10 L56 30" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinejoin="round" />
      <rect x="27" y="38" width="10" height="16" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="34" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <rect x="42" y="34" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function GrassTuft({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" aria-hidden="true">
      <path d="M10 60 C8 40 14 24 6 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 60 C20 36 24 22 20 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 60 C33 38 28 20 34 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M40 60 C38 40 44 26 40 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M50 60 C50 36 46 22 52 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
