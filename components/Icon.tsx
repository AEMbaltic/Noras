type IconProps = { className?: string };

const base = "currentColor";
const sw = 1.6;

export function IconBed({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <path d="M3 18v2M21 18v2M3 13h18" />
      <path d="M7 13V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1" />
    </svg>
  );
}

export function IconDeck({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20h18" />
      <path d="M4 20V10M8 20V10M12 20V10M16 20V10M20 20V10" />
      <path d="M2 10h20" />
    </svg>
  );
}

export function IconKitchen({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3v9a3 3 0 0 0 3 3v6" />
      <path d="M4 3v6M8 3v6" />
      <path d="M20 3c-2.5 0-4 2-4 5s1 4 1 4v9" />
    </svg>
  );
}

export function IconFire({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1.5-1-2.5-1-2.5s.5 2-1 3c.5-2-1-3-1-5.5C15 6 12 5 12 2Z" />
      <path d="M8 14a4 4 0 1 0 8 0c0-2-1.5-3-2-5-1 2-4 2.5-6 5Z" />
    </svg>
  );
}

export function IconWifi({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8.5a16 16 0 0 1 20 0" />
      <path d="M5.5 12.5a11 11 0 0 1 13 0" />
      <path d="M9 16.5a5.5 5.5 0 0 1 6 0" />
      <circle cx="12" cy="20" r="0.9" fill={base} stroke="none" />
    </svg>
  );
}

export function IconTree({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 7 10h2.5L6 16h4v6h4v-6h4l-3.5-6H17Z" />
    </svg>
  );
}

export function IconWave({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 16c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
      <path d="M2 10c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
    </svg>
  );
}

export function IconUsers({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c.7-3.2 2.9-5 5.5-5s4.8 1.8 5.5 5" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.5 14.2c2.2.3 3.7 1.8 4.2 4.3" />
    </svg>
  );
}

export function IconPin({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function IconPhone({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2C10 22 2 14 2 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function IconMail({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconInstagram({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill={base} stroke="none" />
    </svg>
  );
}

export function IconFacebook({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 8h2V4h-2a4 4 0 0 0-4 4v2H9v4h2v6h4v-6h2.2l.8-4H15V8.5c0-.3.2-.5.5-.5Z" />
    </svg>
  );
}

export function IconStar({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none">
      <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.6l-5.9 3 1.3-6.6-4.9-4.6 6.6-.8Z" />
    </svg>
  );
}

export function IconArrowRight({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
