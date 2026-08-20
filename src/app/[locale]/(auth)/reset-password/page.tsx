import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { ResetPasswordForm } from "./_section";

type ResetPasswordPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function ResetPasswordPage({
  params,
}: ResetPasswordPageProps) {
  const { locale } = await params;

  const dictionary = await getDictionary(locale);

  return (
    <ResetPasswordForm locale={locale} auth={dictionary.auth.resetPassword} />
  );
}
