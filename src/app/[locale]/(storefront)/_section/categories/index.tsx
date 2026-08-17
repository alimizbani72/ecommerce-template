import { CategoryCard } from "@/components/category/category-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { categories } from "@/data/category";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type ShopByCategoryProps = {
  locale: Locale;
};

export async function ShopByCategorySection({ locale }: ShopByCategoryProps) {
  const dictionary = await getDictionary(locale);

  return (
    <section className="bg-surface-subtle py-10 lg:py-14">
      <Container>
        <SectionHeader
          title={dictionary.home.categories.title}
          action={
            <ButtonLink
              href={`/${locale}/categories`}
              variant="ghost"
              size="sm"
            >
              {dictionary.home.categories.viewAll}
            </ButtonLink>
          }
        />

        <div className="mt-6 flex gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:pb-0">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              locale={locale}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
