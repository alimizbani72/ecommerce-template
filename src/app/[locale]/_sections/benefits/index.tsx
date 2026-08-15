import { Container } from "@/components/ui/container";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { HeroBenefits } from "./hero-benefits";
type BenefitSectionProps = {
  locale: Locale;
};

export async function BenefitSection({ locale }: BenefitSectionProps) {
  const dictionary = await getDictionary(locale);

  const benefits = dictionary.home.benefits;
  return (
    <Container>
      <HeroBenefits
        shipping={{
          title: benefits.shippingTitle,
          description: benefits.shippingDescription,
        }}
        returns={{
          title: benefits.returnsTitle,
          description: benefits.returnsDescription,
        }}
        payment={{
          title: benefits.paymentTitle,
          description: benefits.paymentDescription,
        }}
        support={{
          title: benefits.supportTitle,
          description: benefits.supportDescription,
        }}
      />
    </Container>
  );
}
