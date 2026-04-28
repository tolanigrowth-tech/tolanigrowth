import { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-navy/10 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-navy/20 ${className}`}
    >
      {children}
    </div>
  );
}
