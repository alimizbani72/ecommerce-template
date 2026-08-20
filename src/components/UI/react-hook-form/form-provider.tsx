"use client";

import type { ReactNode } from "react";
import {
  FormProvider as RHFFormProvider,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

type FormProviderProps<TFieldValues extends FieldValues> = {
  children: ReactNode;
  methods: UseFormReturn<TFieldValues>;
  onSubmit: ReturnType<UseFormReturn<TFieldValues>["handleSubmit"]>;
  className?: string;
};

export function FormProvider<TFieldValues extends FieldValues>({
  children,
  methods,
  onSubmit,
  className,
}: FormProviderProps<TFieldValues>) {
  return (
    <RHFFormProvider {...methods}>
      <form
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        className={className}
      >
        {children}
      </form>
    </RHFFormProvider>
  );
}
