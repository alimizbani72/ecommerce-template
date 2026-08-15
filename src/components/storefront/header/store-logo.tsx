import Link from "next/link";

type StoreLogoProps = {
  href: string;
  name: string;
};

export function StoreLogo({ href, name }: StoreLogoProps) {
  return (
    <Link
      href={href}
      className="shrink-0 text-xl font-bold tracking-tight text-text-primary"
    >
      {name}
    </Link>
  );
}
