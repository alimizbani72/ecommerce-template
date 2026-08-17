import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Category } from "@/types/category";
import { Card } from "../ui/card";
import { Typography } from "../ui/typography";

type CategoryCardProps = {
  category: Category;
  locale: Locale;
};

export function CategoryCard({ category, locale }: CategoryCardProps) {
  const categoryHref = `/${locale}/categories/${category.slug}`;

  return (
    <article className="group w-50 shrink-0 lg:w-auto">
      <Card className="overflow-hidden transition-shadow duration-200 hover:shadow-md">
        <Link
          href={categoryHref}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <div className="relative aspect-4/3 overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(min-width: 1024px) 20vw, 200px"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          <div className="px-3 py-4 md:py-7">
            <Typography variant="h4">{category.name}</Typography>
          </div>
        </Link>
      </Card>
    </article>
  );
}
