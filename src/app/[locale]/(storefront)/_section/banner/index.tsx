import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";

type PromotionBannerProps = {
  imageSrc: string;
  href: string;
  alt: string;
};

export function PromotionBanner({ imageSrc, href, alt }: PromotionBannerProps) {
  return (
    <Container as="section" className="py-10 lg:py-14 rounded-2xl">
      <Link
        href={href}
        className=" relative block aspect-3/1 overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-300 hover:scale-[1.01]"
        />
      </Link>
    </Container>
  );
}
