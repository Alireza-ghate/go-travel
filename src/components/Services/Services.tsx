import { services } from "../../utils/content";
import { type Service as Iservice } from "../../utils/contentTypes";
import Service from "./Service";

const customizedPackages: Iservice = services.at(0)!;
const culinaryTours: Iservice = services.at(1)!;
const destinationExpertise: Iservice = services.at(2)!;

function Services() {
  return (
    <section className="bg-primary-100 px-24 py-36">
      <ul className="border-grey-500/40 mx-auto flex max-w-389 items-center justify-between border-y-1 py-24">
        <Service service={customizedPackages} />
        <li
          aria-label="a grey divider element"
          className="bg-grey-500/40 block w-[1px] self-stretch"
        />
        <Service service={culinaryTours} />
        <li
          aria-label="a grey divider element"
          className="bg-grey-500/40 block w-[1px] self-stretch"
        />
        <Service service={destinationExpertise} />
      </ul>
    </section>
  );
}

export default Services;
