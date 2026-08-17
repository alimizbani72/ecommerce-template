import { Footer } from "@/components/storefront/footer";
import { HeaderSection } from "@/components/storefront/header";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

type StorefrontLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function StorefrontLayout({
  children,
  params,
}: StorefrontLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return (
    <div className="flex min-h-full flex-col">
      <HeaderSection locale={locale} />

      <main className="flex-1">{children}</main>

      <Footer locale={locale} />
    </div>
  );
}
