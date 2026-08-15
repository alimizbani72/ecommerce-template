import { Locale } from "@/i18n/config";
import { BenefitSection } from "./_sections/benefits";
import { FeaturedProductsSection } from "./_sections/featured-products";
import { HeroSection } from "./_sections/hero";

type HomePageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  return (
    <main>
      <HeroSection
        imageSrc="/images/home/hero.png"
        href={`/${locale}/products`}
        alt="Featured collection"
      />

      <BenefitSection locale={locale} />
      <FeaturedProductsSection locale={locale} />
    </main>
  );
}
