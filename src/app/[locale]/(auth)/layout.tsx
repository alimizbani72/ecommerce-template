import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex min-h-dvh items-start justify-center bg-surface px-4 py-6 sm:items-center sm:px-6 lg:py-4">
      {children}
    </main>
  );
}
