import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLocale, locales, type Locale } from "@/i18n/config";

function getPreferredLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) {
    return defaultLocale;
  }

  const requestedLanguages = acceptLanguage
    .split(",")
    .map((language) => language.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const language of requestedLanguages) {
    const baseLocale = language?.split("-")[0];

    if (locales.includes(baseLocale as Locale)) {
      return baseLocale as Locale;
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);

  const url = request.nextUrl.clone();

  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
