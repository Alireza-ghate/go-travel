import { type Testimonial } from "../../utils/contentTypes";

interface TestimonialProps {
  testimonial: Testimonial;
}

function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <li className="relative ml-24 rounded-3xl bg-white py-14 pr-12 pl-42 drop-shadow-[0px_0px_20px_rgba(0,0,0,0.05)]">
      <div className="after:bg-primary-700 absolute left-0 size-47.5 -translate-x-[50%] overflow-hidden after:absolute after:right-0 after:bottom-0 after:-z-1 after:block after:size-45 after:rounded-full">
        <img
          className="bg-grey-300 top-0 left-0 size-45 rounded-full"
          src={testimonial.img}
          alt={testimonial.alt}
        />
      </div>

      <div className="flex flex-col justify-between gap-y-14">
        <p className="text-base/9 font-light">{testimonial.description}</p>
        <p className="text-[1.065rem] font-medium">
          {testimonial.name}{" "}
          <span className="text-sm font-light">/ {testimonial.vacation}</span>
        </p>
      </div>
    </li>
  );
}

export default Testimonial;
