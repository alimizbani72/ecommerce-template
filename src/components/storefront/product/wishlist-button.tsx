"use client";

import { Heart } from "lucide-react";

import { IconButton } from "@/components/ui/icon-button";

type WishlistButtonProps = {
  label: string;
};

export function WishlistButton({ label }: WishlistButtonProps) {
  return (
    <IconButton label={label} variant="secondary" size="sm" type="button">
      <Heart />
    </IconButton>
  );
}
