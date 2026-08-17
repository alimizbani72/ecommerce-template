import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";

type HeroSectionProps = {
  imageSrc: string;
  href: string;
  alt: string;
};

export function HeroSection({ imageSrc, href, alt }: HeroSectionProps) {
  return (
    <section>
      {/* Mobile + tablet */}
      <div className="lg:hidden">
        <Container className="mt-2">
          <Link
            href={href}
            className="relative block h-45 overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
          >
            <Image
              src={imageSrc}
              alt={alt}
              fill
              priority
              className="object-cover"
            />
          </Link>
        </Container>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <Link
          href={href}
          className="relative block h-100 w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </Link>
      </div>
    </section>
  );
}
