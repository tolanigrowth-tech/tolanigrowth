import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold transition-all duration-200 active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30",
  secondary:
    "bg-white text-navy border border-navy/15 hover:border-navy/30 hover:-translate-y-0.5 hover:shadow-md",
  ghost: "bg-transparent text-navy hover:bg-navy/5",
};

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  onClick,
  disabled,
}: Props) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
