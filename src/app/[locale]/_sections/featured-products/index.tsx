import { ProductCard } from "@/components/storefront/product/product-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { featuredProducts } from "@/data/product";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type FeaturedProductsProps = {
  locale: Locale;
};

export async function FeaturedProductsSection({
  locale,
}: FeaturedProductsProps) {
  const dictionary = await getDictionary(locale);

  return (
    <section className="py-10 lg:py-14 bg-surface-subtle">
      <Container>
        <div>
          <div className="flex items-center justify-between gap-4">
            <Typography variant="h3">
              {dictionary.home.featuredProducts.title}
            </Typography>

            <ButtonLink href={`/${locale}/products`} variant="ghost" size="sm">
              {dictionary.home.featuredProducts.viewAll}
            </ButtonLink>
          </div>

          <Typography
            variant="body-sm"
            className="mt-2 max-w-xl text-text-secondary"
          >
            {dictionary.home.featuredProducts.description}
          </Typography>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-4 lg:grid-cols-4 lg:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
