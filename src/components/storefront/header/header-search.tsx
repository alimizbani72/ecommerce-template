import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

type HeaderSearchProps = {
  placeholder: string;
  label: string;
};

export function HeaderSearch({ placeholder, label }: HeaderSearchProps) {
  return (
    <div role="search" className="relative hidden w-64 lg:block">
      <Input
        id="header-search"
        type="search"
        aria-label={label}
        placeholder={placeholder}
        className="pr-10"
      />

      <Search
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-text-muted"
      />
    </div>
  );
}
