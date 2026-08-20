"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import { Brand } from "@/app/_components/Brand";
import { FormProvider } from "@/components/ui/react-hook-form/form-provider";
import { RHFInput } from "@/components/ui/react-hook-form/RHFInput";
import type { Locale } from "@/i18n/config";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from "@/schemas/auth";

type ForgotPasswordFormProps = {
  locale: Locale;
  auth: {
    back: string;
    brand: string;
    title: string;
    description: string;
    email: string;
    emailPlaceholder: string;
    submit: string;
    rememberPassword: string;
    login: string;
  };
};

export function ForgotPasswordForm({ locale, auth }: ForgotPasswordFormProps) {
  const methods = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = methods.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <div className="w-full max-w-md">
      <div className="rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-7">
        <Link
          href={`/${locale}/login`}
          className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
        >
          <ArrowLeft size={16} aria-hidden="true" />
        </Link>

        <div className="mt-6 text-center">
          <Brand locale={locale} name={auth.brand} />
        </div>

        <div className="mt-6 text-center">
          <div
            className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#FAF7F2]"
            aria-hidden="true"
          >
            <Mail size={28} strokeWidth={1.7} className="text-[#B8956A]" />
          </div>

          <h1 className="mt-5 text-2xl font-semibold text-text-primary">
            {auth.title}
          </h1>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-text-muted">
            {auth.description}
          </p>
        </div>

        <FormProvider methods={methods} onSubmit={onSubmit}>
          <div className="mt-6 space-y-4">
            <RHFInput
              name="email"
              type="email"
              label={auth.email}
              placeholder={auth.emailPlaceholder}
              autoComplete="email"
              className="lg:h-11"
              size="sm"
            />

            <Button
              type="submit"
              size="sm"
              className="w-full lg:h-11 text-text-inverse"
            >
              {auth.submit}
            </Button>
          </div>
        </FormProvider>

        <p className="mt-6 text-center text-sm text-text-muted">
          {auth.rememberPassword}{" "}
          <Link
            href={`/${locale}/login`}
            className="font-medium text-blue-600 underline-offset-4 hover:text-blue-700 hover:underline"
          >
            {auth.login}
          </Link>
        </p>
      </div>
    </div>
  );
}
