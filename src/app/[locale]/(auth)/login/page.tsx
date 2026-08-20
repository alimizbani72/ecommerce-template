import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import LoginForm from "./_section";

type LoginPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
  searchParams: Promise<{
    callbackUrl?: string;
  }>;
};

export default async function LoginPage({
  params,
  searchParams,
}: LoginPageProps) {
  const { locale } = await params;
  const { callbackUrl } = await searchParams;
  const dictionary = await getDictionary(locale);
  return (
    <LoginForm
      locale={locale}
      auth={dictionary.auth.login}
      callbackUrl={callbackUrl}
    />
  );
}
