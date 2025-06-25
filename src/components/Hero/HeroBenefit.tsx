import { type HeroBenefit } from "../../utils/contentTypes";

interface HeroBenefitProps {
  benefit: HeroBenefit;
}

function HeroBenefit({ benefit }: HeroBenefitProps) {
  return (
    <li className="flex items-center gap-x-12">
      <div className="bg-primary-100 flex size-24 shrink-0 items-center justify-center rounded-full">
        <benefit.Icon className="fill-primary-700" />
      </div>
      <div>
        <p className="text-grey-600 tracking-6 text-[1.75rem]/10.5 font-medium whitespace-nowrap">
          {benefit.heading}
        </p>
        <p className="tracking-6 font-rubik text-base text-gray-600">
          {benefit.description}
        </p>
      </div>
    </li>
  );
}

export default HeroBenefit;
