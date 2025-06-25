import Star from "../Icons/Star";

interface RatingProps {
  name: string;
  rating: number;
  img: string;
  className: string; //for dynamic styling
}

function Rating({ name, rating, img, className }: RatingProps) {
  return (
    <div
      className={`absolute flex items-center gap-x-2.5 rounded-xl bg-white/85 py-3.5 pr-5 pl-3 drop-shadow-[0px_4px_30px_rgba(0,0,0,0.12)] backdrop-blur-3xl ${className}`}
    >
      <div className="flex items-end justify-center overflow-hidden rounded-full bg-gray-300">
        <img className="size-16" src={img} alt={name} />
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-grey-1000 tracking-6 text-base font-semibold">
          {name}
        </p>
        <div className="flex items-center gap-x-2">
          <Star className="fill-yellow size-6" />
          <p className="text-grey-600 tracking-6 text-[17px] font-semibold">
            {rating}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rating;
