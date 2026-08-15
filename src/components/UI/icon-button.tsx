import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonVariant = "ghost" | "outline" | "secondary" | "primary";

type IconButtonSize = "sm" | "md" | "lg";

type IconButtonProps = {
  children: ReactNode;
  label: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<IconButtonVariant, string> = {
  ghost:
    "bg-transparent text-text-primary hover:bg-surface-subtle active:bg-surface-muted",

  outline:
    "border border-border bg-surface text-text-primary hover:bg-surface-subtle active:bg-surface-muted",

  secondary:
    "bg-surface/80 text-text-primary backdrop-blur-sm shadow-xs hover:bg-surface/90 active:bg-surface",

  primary:
    "bg-primary text-text-inverse hover:bg-primary-hover active:bg-primary-active",
};

const sizeClasses: Record<IconButtonSize, string> = {
  sm: "size-7",
  md: "size-11",
  lg: "size-12",
};

export function IconButton({
  children,
  label,
  variant = "ghost",
  size = "md",
  className = "",
  type = "button",
  disabled,
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={label}
      className={[
        "inline-flex shrink-0 items-center justify-center rounded-md cursor-pointer [&_svg]:size-5",
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
