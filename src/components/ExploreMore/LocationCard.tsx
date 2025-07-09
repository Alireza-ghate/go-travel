import { easeInOut, motion } from "motion/react";
import { type Location } from "../../utils/contentTypes";
import { Location as LocationIcon } from "../Icons/Location";
import Star from "../Icons/Star";

interface LocationCardProps {
  location: Location;
}

function LocationCard({
  location: { alt, img, location, pricePerPerson, rating, title },
}: LocationCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35, ease: easeInOut }}
      className="group cursor-pointer"
    >
      <div className="relative mb-8 overflow-hidden rounded-3xl">
        <img
          className="transform transition-all duration-300 ease-in-out group-hover:scale-103"
          src={img}
          alt={alt}
        />
        <div className="drop-shadow-[0_4px_6px_30px_rgba(0,0,0,0.05) absolute top-5 right-6 flex items-center gap-x-2 rounded-[0.625rem] bg-white/85 px-3 py-1.5 backdrop-blur-3xl">
          <Star className="fill-yellow size-6" />
          <p className="tracking-6 text-grey-600 text-[1.0625rem] font-semibold">
            {rating}
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="mb-3.5 text-[1.75rem] font-semibold">{title}</p>
          <div className="flex items-center">
            <LocationIcon className="mr-1.5 size-6" />
            <p className="text-grey-700 text-[1.125rem] font-normal">
              {location}
            </p>
          </div>
        </div>

        <p className="font-rubik text-[1.75rem] font-normal">
          ${pricePerPerson}/<span className="text-xl">Pax</span>
        </p>
      </div>
    </motion.li>
  );
}

export default LocationCard;
