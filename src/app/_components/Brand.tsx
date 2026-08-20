import { House } from "lucide-react";
import Link from "next/link";

import type { Locale } from "@/i18n/config";

type AuthBrandProps = {
  locale: Locale;
  name: string;
};

export function Brand({ locale, name }: AuthBrandProps) {
  return (
    <Link
      href={`/${locale}`}
      className="inline-flex items-center gap-2 text-xl font-semibold text-text-primary"
    >
      <House size={22} strokeWidth={1.7} aria-hidden="true" />

      <span>{name}</span>
    </Link>
  );
}
