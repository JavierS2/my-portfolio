"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { FiDownload } from "react-icons/fi";

type DownloadCvButtonProps = {
  href: string;
  children?: ReactNode;
};

export default function DownloadCvButton({
  href,
  children = "Descargar CV",
}: DownloadCvButtonProps) {
  return (
    <Link
      href={href}
      download
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600 hover:shadow-md"
    >
      <FiDownload className="text-[16px]" />
      {children}
    </Link>
  );
}
