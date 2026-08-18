import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "white" | "outline" | "ghost" | "ghost-light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-pink focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy/85 active:scale-[0.98]",
  secondary: "bg-pink text-white hover:bg-pink-dark active:scale-[0.98]",
  white: "bg-white text-navy shadow-md hover:bg-pink-light active:scale-[0.98]",
  outline:
    "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white active:scale-[0.98]",
  ghost: "text-navy hover:bg-navy/5 active:scale-[0.98]",
  "ghost-light":
    "border border-white/50 text-white hover:bg-white/10 active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    const isProtocol = href.startsWith("tel:") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }

    if (isProtocol) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      suppressHydrationWarning
    >
      {children}
    </button>
  );
}
