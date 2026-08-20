"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Brand } from "@/app/_components/Brand";
import { GoogleSignInButton } from "@/app/_components/GoogleSignInButton";
import { FormProvider } from "@/components/ui/react-hook-form/form-provider";
import { RHFInput } from "@/components/ui/react-hook-form/RHFInput";
import type { Locale } from "@/i18n/config";
import { registerSchema, type RegisterFormValues } from "@/schemas/auth";
import { useForm } from "react-hook-form";

type RegisterFormProps = {
  locale: Locale;
  auth: {
    back: string;
    brand: string;
    title: string;
    description: string;
    google: string;
    or: string;
    firstName: string;
    firstNamePlaceholder: string;
    lastName: string;
    lastNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    password: string;
    passwordPlaceholder: string;
    confirmPassword: string;
    confirmPasswordPlaceholder: string;
    submit: string;
    hasAccount: string;
    login: string;
  };
};

export function RegisterForm({ locale, auth }: RegisterFormProps) {
  const methods = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = methods.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <div className="w-full max-w-md">
      <div className="rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-6">
        <Link
          href={`/${locale}/login`}
          className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
        >
          <ArrowLeft size={16} aria-hidden="true" />
        </Link>

        <div className="mt-6 lg:mt-1  text-center mb-3">
          <Brand locale={locale} name={auth.brand} />

          <h1 className="mt-6 lg:mt-2 text-2xl lg:text-3xl font-semibold text-text-primary">
            {auth.title}
          </h1>

          <p className="mt-2 lg:mt-1  text-sm text-text-muted">
            {auth.description}
          </p>
        </div>

        <GoogleSignInButton locale={locale} label={auth.google} />

        <div className="my-5 lg:my-3  flex items-center gap-4 ">
          <div className="h-px flex-1 bg-border" />

          <span className="text-xs text-text-muted">{auth.or}</span>

          <div className="h-px flex-1 bg-border" />
        </div>

        <FormProvider methods={methods} onSubmit={onSubmit}>
          <div className="space-y-3.5 lg:space-y-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <RHFInput
                name="firstName"
                label={auth.firstName}
                placeholder={auth.firstNamePlaceholder}
                autoComplete="given-name"
                className="lg:h-11"
                size="sm"
              />

              <RHFInput
                name="lastName"
                label={auth.lastName}
                placeholder={auth.lastNamePlaceholder}
                autoComplete="family-name"
                className="lg:h-11"
                size="sm"
              />
            </div>

            <RHFInput
              name="email"
              type="email"
              label={auth.email}
              placeholder={auth.emailPlaceholder}
              autoComplete="email"
              className="lg:h-11"
              size="sm"
            />

            <RHFInput
              name="password"
              type="password"
              label={auth.password}
              placeholder={auth.passwordPlaceholder}
              autoComplete="new-password"
              className="lg:h-11"
              size="sm"
            />

            <RHFInput
              name="confirmPassword"
              type="password"
              label={auth.confirmPassword}
              placeholder={auth.confirmPasswordPlaceholder}
              autoComplete="new-password"
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

        <p className="mt-6 lg:mt-5 text-center text-sm text-text-muted">
          {auth.hasAccount}{" "}
          <Link
            href={`/${locale}/login`}
            className="font-medium text-blue-600 hover:text-blue-700"
          >
            {auth.login}
          </Link>
        </p>
      </div>
    </div>
  );
}
