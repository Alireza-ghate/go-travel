import { type Service } from "../../utils/contentTypes";

interface ServiceProps {
  service: Service;
}

function Service({
  service: { Icon, description, heading, id },
}: ServiceProps) {
  return (
    <li key={id} className="flex h-90 max-w-90 flex-col justify-between">
      {<Icon className="h-28 place-self-center" />}
      <div className="text-center">
        <h3 className="tracking-6 mb-9.5 text-[1.75rem]/10.5 font-semibold text-nowrap">
          {heading}
        </h3>
        <p className="text-grey-900/85 tracking-6 font-rubik text-base/9.5">
          {description}
        </p>
      </div>
    </li>
  );
}

export default Service;
