import type { Locale } from "./config";

const dictionaries = {
  en: () => import("@/messages/en.json").then((module) => module.default),
  tr: () => import("@/messages/tr.json").then((module) => module.default),
  de: () => import("@/messages/de.json").then((module) => module.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
