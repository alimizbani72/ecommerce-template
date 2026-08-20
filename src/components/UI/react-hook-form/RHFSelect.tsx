"use client";

import type { ReactNode } from "react";
import {
  Controller,
  useFormContext,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { Select, type SelectProps } from "../select";

type RHFSelectProps<TFieldValues extends FieldValues> = Omit<
  SelectProps,
  "value" | "defaultValue" | "onValueChange"
> & {
  name: FieldPath<TFieldValues>;
  children: ReactNode;
};

export function RHFSelect<TFieldValues extends FieldValues>({
  name,
  children,
  ...props
}: RHFSelectProps<TFieldValues>) {
  const { control } = useFormContext<TFieldValues>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Select
            {...props}
            value={field.value ?? ""}
            onValueChange={field.onChange}
          >
            {children}
          </Select>

          {error?.message && (
            <p className="mt-1 text-sm text-danger">{error.message}</p>
          )}
        </div>
      )}
    />
  );
}
