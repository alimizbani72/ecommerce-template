import { CreditCard, Headphones, RotateCcw, Truck } from "lucide-react";

type Benefit = {
  title: string;
  description: string;
};

type HeroBenefitsProps = {
  shipping: Benefit;
  returns: Benefit;
  payment: Benefit;
  support: Benefit;
};

export function HeroBenefits({
  shipping,
  returns,
  payment,
  support,
}: HeroBenefitsProps) {
  const benefits = [
    { icon: Truck, ...shipping },
    { icon: RotateCcw, ...returns },
    { icon: CreditCard, ...payment },
    { icon: Headphones, ...support },
  ];

  return (
    <div className="flex justify-between items-center gap-2 py-5 lg:gap-8 lg:py-7">
      {benefits.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="flex min-w-0 flex-col items-center text-center lg:flex-row lg:items-start lg:text-left"
        >
          <Icon
            className="size-4 shrink-0 text-text-primary lg:mt-0.5 lg:size-5"
            aria-hidden="true"
          />

          <div className="mt-1 min-w-0 lg:ml-3 lg:mt-0">
            <p className="text-[11px] font-medium leading-tight text-text-primary sm:text-xs lg:text-sm lg:leading-normal">
              {title}
            </p>

            <p className="mt-1 hidden text-xs leading-relaxed text-text-muted md:block">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
