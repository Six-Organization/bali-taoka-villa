import { cn } from "@/lib/utils";

/**
 * Wordmark + monogram for Bali Taoka Villa. SVG uses hex colors (never oklch)
 * for broad browser support. Swap the mark for a real logo image if provided.
 */
export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <svg
        viewBox="0 0 48 48"
        width={38}
        height={38}
        className="shrink-0"
        role="img"
        aria-label="Bali Taoka Villa"
      >
        <circle cx="24" cy="24" r="23" fill="#1b4a4f" />
        <circle cx="24" cy="24" r="19.5" fill="none" stroke="#d9a94e" strokeWidth="1" />
        {/* palm leaf */}
        <path
          d="M24 34 C 24 26 24 20 24 14"
          stroke="#e9dcc3"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M24 16 C 19 16 15.5 18.5 14 22 C 18.5 22 22 20 24 17 Z" fill="#d9a94e" />
        <path d="M24 16 C 29 16 32.5 18.5 34 22 C 29.5 22 26 20 24 17 Z" fill="#e9dcc3" />
        <path d="M24 21 C 20 21 17 23 15.5 26 C 19.5 26 22.5 24.5 24 22 Z" fill="#e9dcc3" />
        <path d="M24 21 C 28 21 31 23 32.5 26 C 28.5 26 25.5 24.5 24 22 Z" fill="#d9a94e" />
        {/* water line */}
        <path d="M15 33 q 4.5 -3 9 0 t 9 0" stroke="#7fb4b8" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-base font-bold tracking-[0.12em]",
            onDark ? "text-ivory" : "text-primary",
          )}
        >
          BALI TAOKA
        </span>
        <span
          className={cn(
            "text-[0.6rem] font-semibold tracking-[0.42em]",
            onDark ? "text-gold" : "text-gold",
          )}
        >
          VILLA · TANAH LOT
        </span>
      </span>
    </span>
  );
}

export function LogoMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Bali Taoka Villa"
    >
      <circle cx="24" cy="24" r="23" fill="#1b4a4f" />
      <circle cx="24" cy="24" r="19.5" fill="none" stroke="#d9a94e" strokeWidth="1" />
      <path d="M24 34 C 24 26 24 20 24 14" stroke="#e9dcc3" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M24 16 C 19 16 15.5 18.5 14 22 C 18.5 22 22 20 24 17 Z" fill="#d9a94e" />
      <path d="M24 16 C 29 16 32.5 18.5 34 22 C 29.5 22 26 20 24 17 Z" fill="#e9dcc3" />
      <path d="M24 21 C 20 21 17 23 15.5 26 C 19.5 26 22.5 24.5 24 22 Z" fill="#e9dcc3" />
      <path d="M24 21 C 28 21 31 23 32.5 26 C 28.5 26 25.5 24.5 24 22 Z" fill="#d9a94e" />
      <path d="M15 33 q 4.5 -3 9 0 t 9 0" stroke="#7fb4b8" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}
