import { Heart, Search, ShoppingBag, User } from "lucide-react";

import { IconLink } from "@/components/ui/icon-link";
import { IconButton } from "../../ui/icon-button";

type HeaderActionsProps = {
  searchLabel: string;
  accountLabel: string;
  wishlistLabel: string;
  cartLabel: string;
  accountHref: string;
  wishlistHref: string;
};

export function HeaderActions({
  searchLabel,
  accountLabel,
  wishlistLabel,
  cartLabel,
  accountHref,
  wishlistHref,
}: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-1">
      <div className="lg:hidden">
        <IconButton label={searchLabel}>
          <Search />
        </IconButton>
      </div>

      <div className="hidden sm:block">
        <IconLink href={wishlistHref} label={wishlistLabel}>
          <Heart />
        </IconLink>
      </div>

      <div className="hidden lg:block">
        <IconLink href={accountHref} label={accountLabel}>
          <User />
        </IconLink>
      </div>

      <IconButton label={cartLabel}>
        <ShoppingBag />
      </IconButton>
    </div>
  );
}
