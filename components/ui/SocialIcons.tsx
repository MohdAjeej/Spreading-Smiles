type IconProps = { className?: string };

export function FacebookIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7.8h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.49-1.46H16.6V4.14C16.32 4.1 15.36 4 14.24 4c-2.33 0-3.93 1.42-3.93 4.03v2.17H7.7v3h2.61V21h3.19Z" />
    </svg>
  );
}

export function TwitterIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.9 3h3.1l-6.8 7.8L23.3 21h-6.3l-4.9-6.4L6.4 21H3.3l7.3-8.3L3 3h6.4l4.4 5.9L18.9 3Zm-1.1 16.2h1.7L7.9 4.7H6.1l11.7 14.5Z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5A2 2 0 1 0 5.25 7.5 2 2 0 0 0 5.25 3.5ZM20.5 20.5H17.13V14.5C17.13 13 16.6 12 15.28 12 14.28 12 13.7 12.68 13.44 13.34 13.35 13.57 13.32 13.9 13.32 14.23V20.5H9.94S10 9.4 9.94 8.5H13.32V10C13.77 9.24 14.6 8.16 16.58 8.16 19 8.16 20.5 9.76 20.5 13.2V20.5Z" />
    </svg>
  );
}

export function PinterestIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C6.48 2 2 6.35 2 11.71c0 4.11 2.6 7.62 6.29 9.03-.09-.77-.16-1.95.04-2.79.18-.77 1.16-4.9 1.16-4.9s-.3-.59-.3-1.46c0-1.37.8-2.39 1.8-2.39.85 0 1.26.63 1.26 1.39 0 .84-.54 2.11-.82 3.28-.23.98.5 1.78 1.48 1.78 1.78 0 3.15-1.86 3.15-4.53 0-2.37-1.72-4.02-4.17-4.02-2.84 0-4.51 2.11-4.51 4.29 0 .85.33 1.76.75 2.25.08.1.09.18.07.28-.07.32-.24.98-.27 1.11-.04.18-.14.22-.32.13-1.2-.55-1.95-2.29-1.95-3.68 0-3 2.19-5.76 6.3-5.76 3.31 0 5.88 2.35 5.88 5.5 0 3.28-2.07 5.92-4.94 5.92-.96 0-1.87-.5-2.18-1.09l-.59 2.27c-.22.82-.81 1.85-1.21 2.48.91.28 1.87.43 2.87.43 5.52 0 10-4.35 10-9.71C22 6.35 17.52 2 12 2Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
