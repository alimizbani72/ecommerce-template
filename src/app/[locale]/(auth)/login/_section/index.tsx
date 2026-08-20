"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import { Brand } from "@/app/_components/Brand";
import { GoogleSignInButton } from "@/app/_components/GoogleSignInButton";
import { FormProvider } from "@/components/ui/react-hook-form/form-provider";
import { RHFInput } from "@/components/ui/react-hook-form/RHFInput";
import type { Locale } from "@/i18n/config";
import { loginSchema, type LoginFormValues } from "@/schemas/auth";

type LoginFormContentProps = {
  locale: Locale;
  callbackUrl?: string;
  auth: {
    brand: string;
    title: string;
    description: string;
    google: string;
    or: string;
    email: string;
    emailPlaceholder: string;
    password: string;
    passwordPlaceholder: string;
    forgotPassword: string;
    submit: string;
    noAccount: string;
    register: string;
  };
};

export default function LoginForm({
  locale,
  auth,
  callbackUrl,
}: LoginFormContentProps) {
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = methods.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <div className="w-full max-w-md lg:py-4">
      <div className="rounded-lg border border-border bg-surface p-4 shadow-sm sm:p-8 ">
        <div className="text-center mb-6">
          <Brand locale={locale} name={auth.brand} />

          <h1 className="mt-8 text-2xl lg:text-4xl font-semibold text-text-primary">
            {auth.title}
          </h1>

          <p className="mt-2 text-sm text-text-muted">{auth.description}</p>
        </div>

        <GoogleSignInButton
          locale={locale}
          callbackUrl={callbackUrl}
          label={auth.google}
        />
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />

          <span className="text-xs text-text-muted">{auth.or}</span>

          <div className="h-px flex-1 bg-border" />
        </div>

        <FormProvider methods={methods} onSubmit={onSubmit}>
          <div className="space-y-5">
            <RHFInput
              name="email"
              type="email"
              label={auth.email}
              autoComplete="email"
              placeholder={auth.emailPlaceholder}
              className="lg:h-11"
              size="sm"
            />

            <RHFInput
              name="password"
              type="password"
              label={auth.password}
              autoComplete="current-password"
              placeholder={auth.passwordPlaceholder}
              className="lg:h-11"
              size="sm"
            />

            <div className="flex justify-end">
              <Link
                href={`/${locale}/forgot-password`}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                {auth.forgotPassword}
              </Link>
            </div>

            <Button
              type="submit"
              size="sm"
              className="w-full lg:h-11 lg:text-base text-text-inverse"
            >
              {auth.submit}
            </Button>
          </div>
        </FormProvider>

        <p className="mt-8 text-center text-sm text-text-muted">
          {auth.noAccount}{" "}
          <Link
            href={`/${locale}/register`}
            className="font-medium text-blue-600 hover:text-blue-700"
          >
            {auth.register}
          </Link>
        </p>
      </div>
    </div>
  );
}
