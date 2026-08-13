import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-lg"
  | "body"
  | "body-sm"
  | "label"
  | "caption";

type TypographyProps<T extends ElementType = "p"> = {
  as?: T;
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const variantClasses: Record<TypographyVariant, string> = {
  display:
    "text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl",

  h1: "text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl",

  h2: "text-[1.625rem] font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl",

  h3: "text-xl font-semibold leading-snug tracking-tight lg:text-2xl",

  h4: "text-lg font-semibold leading-snug",

  "body-lg": "text-lg leading-relaxed",

  body: "text-base leading-normal",

  "body-sm": "text-sm leading-normal",

  label: "text-sm font-medium leading-normal",

  caption: "text-xs font-medium leading-normal",
};

const defaultElements: Record<TypographyVariant, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "body-lg": "p",
  body: "p",
  "body-sm": "p",
  label: "span",
  caption: "span",
};

export function Typography<T extends ElementType = "p">({
  as,
  variant = "body",
  children,
  className = "",
  ...props
}: TypographyProps<T>) {
  const Component = as ?? defaultElements[variant];

  return (
    <Component
      className={[variantClasses[variant], className].join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
