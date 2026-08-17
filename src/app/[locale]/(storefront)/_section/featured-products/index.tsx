import { ProductCard } from "@/components/storefront/product/product-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
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
    <section className="py-10 lg:py-14">
      <Container>
        <SectionHeader
          title={dictionary.home.featuredProducts.title}
          description={dictionary.home.featuredProducts.description}
          action={
            <ButtonLink href={`/${locale}/products`} variant="ghost" size="sm">
              {dictionary.home.featuredProducts.viewAll}
            </ButtonLink>
          }
        />

        <div className="mt-6 flex gap-3 overflow-x-auto pb-2 lg:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
