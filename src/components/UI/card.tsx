import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type CardVariant = "default" | "outlined" | "elevated";

type CardPadding = "none" | "sm" | "md" | "lg";

type CardProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const variantClasses: Record<CardVariant, string> = {
  default: "border border-border bg-surface",

  outlined: "border border-border-strong bg-surface",

  elevated: "border border-border bg-surface shadow-sm",
};

const paddingClasses: Record<CardPadding, string> = {
  none: "",
  sm: "p-4",
  md: "p-5 md:p-6",
  lg: "p-6 md:p-8",
};

export function Card<T extends ElementType = "div">({
  as,
  children,
  variant = "default",
  padding = "md",
  className = "",
  ...props
}: CardProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={[
        "rounded-lg",
        variantClasses[variant],
        paddingClasses[padding],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
