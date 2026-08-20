import { LogoutButton } from "@/app/_components/LogoutButton";
import { getCurrentUser } from "@/utils/get-current-user";

type AccountPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function AccountPage({ params }: AccountPageProps) {
  const user = await getCurrentUser();
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12">
      <h1 className="text-2xl font-semibold">Welcome, {user?.name}</h1>
      <LogoutButton>logout</LogoutButton>
      <p className="mt-2 text-text-muted">{user?.email}</p>
    </main>
  );
}
