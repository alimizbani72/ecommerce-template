"use client";

import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

type LogoutButtonProps = {
  children?: React.ReactNode;
};

export function LogoutButton({ children = "Sign out" }: LogoutButtonProps) {
  return (
    <Button type="button" variant="outline" onClick={() => signOut()}>
      {children}
    </Button>
  );
}
