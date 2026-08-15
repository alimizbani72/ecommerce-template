import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Product } from "@/types/product";
import { WishlistButton } from "./wishlist-button";

type ProductCardProps = {
  product: Product;
  locale: Locale;
};

export async function ProductCard({ product, locale }: ProductCardProps) {
  const dictionary = await getDictionary(locale);

  const productHref = `/${locale}/products/${product.slug}`;

  const discountPercentage =
    product.compareAtPrice !== undefined
      ? Math.round(
          ((product.compareAtPrice! - product.price) / product.compareAtPrice) *
            100,
        )
      : 0;

  return (
    <article className="group min-w-0 overflow-hidden rounded-lg border border-border bg-surface transition-shadow duration-200 hover:shadow-md">
      <div className="relative">
        <Link
          href={productHref}
          className="relative block aspect-4/3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {product.compareAtPrice !== undefined && (
          <div className="absolute left-2 top-2">
            <Badge variant="danger">-{discountPercentage}%</Badge>
          </div>
        )}

        <div className="absolute right-2 top-2">
          <WishlistButton label={dictionary.product.addToWishlist} />
        </div>
      </div>

      <Link
        href={productHref}
        className="block px-3 py-4 md:py-7  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      >
        <p className="text-sm font-medium text-text-primary">{product.name}</p>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm font-semibold text-text-primary">
            ${product.price}
          </span>

          {product.compareAtPrice !== undefined && (
            <span className="text-xs text-text-muted line-through">
              ${product.compareAtPrice}
            </span>
          )}
        </div>
      </Link>
    </article>
  );
}
