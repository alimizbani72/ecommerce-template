import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type IconLinkVariant = "ghost" | "outline" | "primary";

type IconLinkSize = "sm" | "md" | "lg";

type IconLinkProps = {
  children: ReactNode;
  label: string;
  variant?: IconLinkVariant;
  size?: IconLinkSize;
} & LinkProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "children" | "aria-label"
  >;

const variantClasses: Record<IconLinkVariant, string> = {
  ghost:
    "bg-transparent text-text-primary hover:bg-surface-subtle active:bg-surface-muted",

  outline:
    "border border-border bg-surface text-text-primary hover:bg-surface-subtle active:bg-surface-muted",

  primary:
    "bg-primary text-text-inverse hover:bg-primary-hover active:bg-primary-active",
};

const sizeClasses: Record<IconLinkSize, string> = {
  sm: "size-9",
  md: "size-11",
  lg: "size-12",
};

export function IconLink({
  children,
  label,
  variant = "ghost",
  size = "md",
  className = "",
  ...props
}: IconLinkProps) {
  return (
    <Link
      aria-label={label}
      className={[
        "inline-flex shrink-0 items-center justify-center rounded-md",
        "[&_svg]:size-5 [&_svg]:shrink-0",
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </Link>
  );
}
