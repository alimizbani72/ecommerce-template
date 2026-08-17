import { Locale } from "@/i18n/config";
import { PromotionBanner } from "./_section/banner";
import { BenefitSection } from "./_section/benefits";
import { ShopByCategorySection } from "./_section/categories";
import { FeaturedProductsSection } from "./_section/featured-products";
import { HeroSection } from "./_section/hero";
import { NewArrivalsSection } from "./_section/new-arrivals";
import { WhyShopWithUsSection } from "./_section/why-shop-with-us";

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
      <ShopByCategorySection locale={locale} />
      <FeaturedProductsSection locale={locale} />
      <PromotionBanner
        imageSrc="/images/home/banner-home-2.png"
        href={`/${locale}/products`}
        alt="Summer sale"
      />
      <NewArrivalsSection locale={locale} />
      <WhyShopWithUsSection locale={locale} />
    </main>
  );
}
