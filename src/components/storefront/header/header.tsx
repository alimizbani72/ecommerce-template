import { Container } from "@/components/ui/container";
import { HeaderActions } from "./header-actions";
import { HeaderSearch } from "./header-search";
import { StoreLogo } from "./store-logo";

type HeaderProps = {
  logoHref: string;
  storeName: string;

  searchLabel: string;
  searchPlaceholder: string;

  accountHref: string;
  accountLabel: string;

  wishlistHref: string;
  wishlistLabel: string;

  cartLabel: string;
};

export function Header({
  logoHref,
  storeName,
  searchLabel,
  searchPlaceholder,
  accountHref,
  accountLabel,
  wishlistHref,
  wishlistLabel,
  cartLabel,
}: HeaderProps) {
  return (
    <header className="border-b border-border bg-surface">
      <Container>
        <div className="flex h-header-mobile items-center justify-between lg:h-header-desktop">
          <StoreLogo href={logoHref} name={storeName} />

          <div className="flex items-center gap-2 xl:gap-3">
            <HeaderSearch placeholder={searchPlaceholder} label={searchLabel} />

            <HeaderActions
              searchLabel={searchLabel}
              accountHref={accountHref}
              accountLabel={accountLabel}
              wishlistHref={wishlistHref}
              wishlistLabel={wishlistLabel}
              cartLabel={cartLabel}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
