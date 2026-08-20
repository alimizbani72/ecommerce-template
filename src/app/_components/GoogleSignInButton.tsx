"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n/config";
type Props = {
  locale: Locale;
  callbackUrl?: string | null;
  label: string;
};
export function GoogleSignInButton({ locale, callbackUrl, label }: Props) {
  const redirectTo =
    callbackUrl?.startsWith("/") && !callbackUrl.startsWith("//")
      ? callbackUrl
      : `/${locale}/account`;
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="bg-white text-text-primary font-medium lg:h-11 w-full"
      onClick={() =>
        signIn("google", {
          redirectTo,
        })
      }
    >
      <GoogleIcon />
      <span>{label}</span>
    </Button>
  );
}
function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5">
      <path
        fill="#4285F4"
        d="M21.35 12.27c0-.68-.06-1.35-.18-1.98H12v3.75h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.16Z"
      />
      <path
        fill="#34A853"
        d="M12 21.75c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.75 9.75 0 0 0 12 21.75Z"
      />
      <path
        fill="#FBBC05"
        d="M6.54 13.84A5.86 5.86 0 0 1 6.23 12c0-.64.11-1.27.31-1.84V7.63H3.3A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.06 1.05 4.37l3.24-2.53Z"
      />
      <path
        fill="#EA4335"
        d="M12 6.13c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.84 3.2 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.7 5.38l3.24 2.53c.77-2.31 2.92-4.03 5.46-4.03Z"
      />
    </svg>
  );
}
