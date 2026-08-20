"use client";

import { usePathname, useRouter } from "next/navigation";

import { Select, SelectItem } from "@/components/ui/select";
import { isLocale, locales, type Locale } from "@/i18n/config";

type LocaleSwitcherProps = {
  locale: Locale;
};

const localeLabels: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
};

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(nextLocale: string) {
    if (!isLocale(nextLocale) || nextLocale === locale) return;

    const segments = pathname.split("/");
    segments[1] = nextLocale;

    router.push(segments.join("/"));
  }

  return (
    <Select
      value={locale}
      onValueChange={handleChange}
      aria-label="Select language"
      className="border-border/40 bg-surface-active text-text-inverse"
    >
      {locales.map((localeOption) => (
        <SelectItem key={localeOption} value={localeOption}>
          {localeLabels[localeOption]}
        </SelectItem>
      ))}
    </Select>
  );
}
