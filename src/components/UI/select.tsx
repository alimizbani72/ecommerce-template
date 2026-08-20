"use client";

import { ChevronDown } from "lucide-react";
import * as SelectPrimitive from "radix-ui";
import type { ReactNode } from "react";

export type SelectProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
};

export function Select({
  value,
  defaultValue,
  onValueChange,
  placeholder,
  children,
  disabled,
  className = "",
}: SelectProps) {
  return (
    <SelectPrimitive.Select.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
    >
      <SelectPrimitive.Select.Trigger
        className={[
          "inline-flex h-10 items-center justify-between gap-2",
          "rounded-md border border-border",
          "bg-surface px-3",
          "text-sm text-text-primary",
          "transition-colors",
          "hover:bg-surface-subtle",
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        ].join(" ")}
      >
        <SelectPrimitive.Select.Value placeholder={placeholder} />

        <SelectPrimitive.Select.Icon>
          <ChevronDown size={16} aria-hidden="true" />
        </SelectPrimitive.Select.Icon>
      </SelectPrimitive.Select.Trigger>

      <SelectPrimitive.Select.Portal>
        <SelectPrimitive.Select.Content
          position="popper"
          sideOffset={6}
          className="z-50 min-w-(--radix-select-trigger-width) overflow-hidden rounded-md border border-border bg-surface p-1 text-text-primary shadow-md"
        >
          <SelectPrimitive.Select.Viewport>
            {children}
          </SelectPrimitive.Select.Viewport>
        </SelectPrimitive.Select.Content>
      </SelectPrimitive.Select.Portal>
    </SelectPrimitive.Select.Root>
  );
}

type SelectItemProps = {
  value: string;
  children: ReactNode;
};

export function SelectItem({ value, children }: SelectItemProps) {
  return (
    <SelectPrimitive.Select.Item
      value={value}
      className={[
        "relative flex w-full cursor-pointer select-none",
        "items-center rounded-sm px-3 py-2",
        "text-sm text-text-primary",
        "outline-none",
        "data-highlighted:bg-surface-subtle",
        "data-highlighted:text-text-primary",
        "data-[state=checked]:font-medium",
      ].join(" ")}
    >
      <SelectPrimitive.Select.ItemText>
        {children}
      </SelectPrimitive.Select.ItemText>
    </SelectPrimitive.Select.Item>
  );
}
