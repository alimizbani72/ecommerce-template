import { cva, type VariantProps } from "class-variance-authority";
import type { InputHTMLAttributes } from "react";

const inputVariants = cva(
  [
    "w-full rounded-md border bg-input-background",
    "text-text-primary",
    "placeholder:text-input-placeholder",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-offset-1",
    "disabled:cursor-not-allowed",
    "disabled:bg-input-disabled-background",
    "disabled:text-text-muted",
    "disabled:opacity-70",
  ],
  {
    variants: {
      size: {
        sm: "h-9 px-3 text-sm",
        default: "h-11 px-3 text-sm",
        lg: "h-12 px-3 text-base",
      },

      error: {
        true: "border-danger focus-visible:border-danger focus-visible:ring-danger",
        false:
          "border-input-border hover:border-input-border-hover focus-visible:border-primary focus-visible:ring-primary",
      },
    },

    defaultVariants: {
      size: "default",
      error: false,
    },
  },
);

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof inputVariants>;
export function Input({
  className = "",
  size,
  error = false,
  disabled,
  ...props
}: InputProps) {
  return (
    <input
      disabled={disabled}
      aria-invalid={error || undefined}
      className={inputVariants({
        size,
        error,
        className,
      })}
      {...props}
    />
  );
}
