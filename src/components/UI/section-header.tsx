import type { ReactNode } from "react";

import { Typography } from "@/components/ui/typography";

type SectionHeaderProps = {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  title,
  description,
  action,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={[
        "mb-8 flex gap-4",
        isCentered
          ? "flex-col items-center text-center"
          : "items-end justify-between",
        className,
      ].join(" ")}
    >
      <div className="max-w-2xl">
        <Typography variant="h2">{title}</Typography>

        {description ? (
          <Typography variant="body" className="mt-2 text-text-secondary">
            {description}
          </Typography>
        ) : null}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
