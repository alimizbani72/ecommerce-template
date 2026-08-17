import {
  BadgeCheck,
  HeartHandshake,
  RefreshCcw,
  WalletCards,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type WhyShopWithUsSectionProps = {
  locale: Locale;
};

const benefitIcons = [BadgeCheck, WalletCards, HeartHandshake, RefreshCcw];

export async function WhyShopWithUsSection({
  locale,
}: WhyShopWithUsSectionProps) {
  const dictionary = await getDictionary(locale);

  const benefits = dictionary.home.whyShopWithUs.items;

  return (
    <section className="py-10 lg:py-14">
      <Container>
        <Typography variant="h3" className="lg:text-4xl">
          {dictionary.home.whyShopWithUs.title}
        </Typography>

        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];

            return (
              <div
                key={benefit.title}
                className="rounded-lg border border-border bg-surface p-4 md:p-5"
              >
                <Icon className="size-5 text-text-primary" />

                <Typography variant="label" className="mt-4 text-text-primary">
                  {benefit.title}
                </Typography>

                <Typography
                  variant="body-sm"
                  className="mt-1 text-text-secondary"
                >
                  {benefit.description}
                </Typography>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
