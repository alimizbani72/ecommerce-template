import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export function Input({
  className = "",
  error = false,
  disabled,
  ...props
}: InputProps) {
  return (
    <input
      disabled={disabled}
      aria-invalid={error || undefined}
      className={[
        "h-11 w-full rounded-md border bg-input-background px-3 text-sm text-text-primary",
        "placeholder:text-input-placeholder",
        "transition-colors duration-150",
        error
          ? "border-danger focus-visible:border-danger focus-visible:ring-danger"
          : "border-input-border hover:border-input-border-hover focus-visible:border-primary focus-visible:ring-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
        "disabled:cursor-not-allowed disabled:bg-input-disabled-background disabled:text-text-muted disabled:opacity-70",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
