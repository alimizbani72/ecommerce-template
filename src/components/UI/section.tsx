import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type SectionSpacing = "sm" | "md" | "lg";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  spacing?: SectionSpacing;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-8 md:py-10 lg:py-12",
  md: "py-12 md:py-16 lg:py-20",
  lg: "py-16 md:py-20 lg:py-24",
};

export function Section<T extends ElementType = "section">({
  as,
  children,
  spacing = "md",
  className = "",
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component
      className={[spacingClasses[spacing], className].join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
