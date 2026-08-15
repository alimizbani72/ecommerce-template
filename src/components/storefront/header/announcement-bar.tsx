import { Truck } from "lucide-react";

import { Container } from "@/components/ui/container";

type AnnouncementBarProps = {
  message: string;
};

export function AnnouncementBar({ message }: AnnouncementBarProps) {
  return (
    <div className="h-8 bg-blue-300">
      <Container className="flex h-full items-center justify-center">
        <div className="flex items-center gap-2 text-xs font-medium text-text-inverse">
          <Truck className="size-3.5" aria-hidden="true" />
          <span>{message}</span>
        </div>
      </Container>
    </div>
  );
}
