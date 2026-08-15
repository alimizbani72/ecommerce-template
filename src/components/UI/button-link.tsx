import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonLinkSize = "sm" | "md" | "lg";

type ButtonLinkProps = {
  children: ReactNode;
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
  fullWidth?: boolean;
} & LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary:
    "bg-primary text-text-inverse hover:bg-primary-hover active:bg-primary-active",

  secondary:
    "bg-surface-muted text-text-primary hover:bg-surface-hover active:bg-surface-active",

  outline:
    "border border-border-strong bg-transparent text-text-primary hover:bg-surface-subtle active:bg-surface-muted",

  ghost:
    "bg-transparent text-text-primary hover:text-text-secondary active:text-text-muted",
};

const sizeClasses: Record<ButtonLinkSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={[
        "inline-flex items-center justify-center gap-2 rounded-md font-medium",
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-primary focus-visible:ring-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </Link>
  );
}
