import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
};

export default function PrimaryButton({ children, href }: PrimaryButtonProps) {
  const className = `
    relative inline-flex items-center justify-center overflow-hidden
    rounded-full
    bg-gradient-to-r from-indigo-500 to-indigo-600
    px-6 py-2.5 text-sm font-medium text-white
    shadow-md shadow-indigo-500/30
    transition-all duration-300
    hover:-translate-y-0.5
    hover:shadow-lg hover:shadow-indigo-500/50
    before:pointer-events-none before:absolute before:inset-0
    before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_55%)]
    before:opacity-0 before:transition-opacity before:duration-300
    hover:before:opacity-100
  `;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
