import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

const protectedRoutes = ["/account", "/orders"];

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
    const baseLocale = language.split("-")[0];

    if (locales.includes(baseLocale as Locale)) {
      return baseLocale as Locale;
    }
  }

  return defaultLocale;
}

function isProtectedRoute(pathname: string) {
  return protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

export const proxy = auth((request) => {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  // Add locale to URLs that don't have one.
  if (!pathnameHasLocale) {
    const locale = getPreferredLocale(request);
    const url = request.nextUrl.clone();

    url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

    return NextResponse.redirect(url);
  }

  // Find the locale from the URL.
  const locale = locales.find(
    (value) => pathname === `/${value}` || pathname.startsWith(`/${value}/`),
  );

  if (!locale) {
    return NextResponse.next();
  }

  // Remove /en, /tr, /de from the pathname.
  const pathnameWithoutLocale =
    pathname === `/${locale}` ? "/" : pathname.slice(`/${locale}`.length);

  // Protect customer routes.
  if (isProtectedRoute(pathnameWithoutLocale) && !request.auth) {
    const url = request.nextUrl.clone();

    url.pathname = `/${locale}/login`;
    url.searchParams.set("callbackUrl", pathname);

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
