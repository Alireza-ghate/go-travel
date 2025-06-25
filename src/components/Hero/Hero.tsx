import { heroBenefits } from "../../utils/content";
import HeroBenefit from "./HeroBenefit";

function Hero() {
  return (
    <section className="relative mx-auto max-w-432">
      <div className="relative flex items-center justify-center rounded-[2.25rem] bg-[url('/public/hero.webp')] bg-cover bg-bottom pb-[56.25%]">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center text-center text-white">
          <div>
            <h1 className="mb-4 pt-54 text-[6.5rem]/34 font-semibold">
              Start your memorable <br /> Journey Here
            </h1>
            <p className="text-[1.75rem]/10.5">
              Where unforgettable adventures awaits you.
            </p>
          </div>
        </div>

        <ul className="absolute -bottom-23 mx-21.5 flex gap-x-18 rounded-[1.5rem] bg-white px-16 py-18 drop-shadow-[0px_2px_40px_rgba(0,0,0,0.06)]">
          {heroBenefits.map((benefit) => (
            <HeroBenefit key={benefit.id} benefit={benefit} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
