import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { ForgotPasswordForm } from "./_section";

type ForgotPasswordPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function ForgotPasswordPage({
  params,
}: ForgotPasswordPageProps) {
  const { locale } = await params;

  const dictionary = await getDictionary(locale);

  return (
    <ForgotPasswordForm locale={locale} auth={dictionary.auth.forgotPassword} />
  );
}
