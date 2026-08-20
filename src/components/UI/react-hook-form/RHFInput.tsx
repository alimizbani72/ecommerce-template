"use client";

import type { ComponentPropsWithoutRef } from "react";
import {
  useFormContext,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { Input } from "../input";

type RHFInputProps<TFieldValues extends FieldValues> = ComponentPropsWithoutRef<
  typeof Input
> & {
  name: FieldPath<TFieldValues>;
  label?: string;
};

export function RHFInput<TFieldValues extends FieldValues>({
  name,
  label,
  id,
  ...props
}: RHFInputProps<TFieldValues>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFieldValues>();

  const inputId = id ?? String(name);
  const error = errors[name];

  return (
    <div>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-medium text-text-primary"
        >
          {label}
        </label>
      )}

      <Input id={inputId} {...register(name)} error={!!error} {...props} />

      {error?.message && (
        <p className="mt-1 text-sm text-danger">{String(error.message)}</p>
      )}
    </div>
  );
}
