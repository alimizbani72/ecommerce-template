import Link from "next/link";

import { LocaleSwitcher } from "@/components/storefront/locale-switcher";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type FooterProps = {
  locale: Locale;
};

export async function Footer({ locale }: FooterProps) {
  const dictionary = await getDictionary(locale);
  const footer = dictionary.footer;

  return (
    <footer className="border-t border-border bg-primary">
      <Container>
        <div className="flex flex-col gap-10 py-10 md:flex-row md:justify-between lg:py-14">
          <div>
            <Typography variant="h4" className="text-text-inverse">
              Store
            </Typography>

            <Typography
              variant="body-sm"
              className="mt-3 max-w-sm text-text-inverse/80 lg:text-base"
            >
              {footer.description}
            </Typography>
          </div>

          <div>
            <Typography variant="label" className="text-text-inverse">
              {footer.shop.title}
            </Typography>

            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href={`/${locale}/products`}
                className="text-sm text-text-inverse/80 hover:text-text-inverse lg:text-base"
              >
                {footer.shop.products}
              </Link>

              <Link
                href={`/${locale}/categories`}
                className="text-sm text-text-inverse/80 hover:text-text-inverse lg:text-base"
              >
                {footer.shop.categories}
              </Link>

              <Link
                href={`/${locale}/products?sort=newest`}
                className="text-sm text-text-inverse/80 hover:text-text-inverse lg:text-base"
              >
                {footer.shop.newArrivals}
              </Link>
            </nav>
          </div>

          <div>
            <Typography variant="label" className="text-text-inverse">
              {footer.company.title}
            </Typography>

            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href={`/${locale}/about`}
                className="text-sm text-text-inverse/80 hover:text-text-inverse lg:text-base"
              >
                {footer.company.about}
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="text-sm text-text-inverse/80 hover:text-text-inverse lg:text-base"
              >
                {footer.company.contact}
              </Link>

              <Link
                href={`/${locale}/privacy`}
                className="text-sm text-text-inverse/80 hover:text-text-inverse lg:text-base"
              >
                {footer.company.privacy}
              </Link>

              <Link
                href={`/${locale}/terms`}
                className="text-sm text-text-inverse/80 hover:text-text-inverse lg:text-base"
              >
                {footer.company.terms}
              </Link>
            </nav>
          </div>
        </div>
      </Container>

      <div className="border-t border-border/40">
        <Container>
          <div className="py-5 flex justify-between">
            <Typography
              variant="caption"
              className="text-text-inverse lg:text-sm"
            >
              {footer.copyright}
            </Typography>
            <LocaleSwitcher locale={locale} />
          </div>
        </Container>
      </div>
    </footer>
  );
}
