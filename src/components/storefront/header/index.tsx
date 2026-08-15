import { Header } from "@/components/storefront/header/header";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { AnnouncementBar } from "./announcement-bar";

type StorefrontHeaderProps = {
  locale: Locale;
};

export async function HeaderSection({ locale }: StorefrontHeaderProps) {
  const dictionary = await getDictionary(locale);

  return (
    <>
      <AnnouncementBar message={dictionary.header.announcement} />
      <Header
        logoHref={`/${locale}`}
        storeName="ShopUp"
        searchLabel={dictionary.navigation.search}
        searchPlaceholder={dictionary.header.searchPlaceholder}
        accountHref={`/${locale}/account`}
        accountLabel={dictionary.navigation.account}
        wishlistHref={`/${locale}/wishlist`}
        wishlistLabel={dictionary.navigation.wishlist}
        cartLabel={dictionary.navigation.cart}
      />
    </>
  );
}
