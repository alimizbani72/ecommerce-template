import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { RegisterForm } from "./_section";

type RegisterPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function RegisterPage({ params }: RegisterPageProps) {
  const { locale } = await params;

  const dictionary = await getDictionary(locale);

  return <RegisterForm locale={locale} auth={dictionary.auth.register} />;
}
