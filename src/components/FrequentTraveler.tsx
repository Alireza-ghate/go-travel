import { useState, MouseEvent } from "react";
import Checkmark from "./Icons/Checkmark";

function FrequentTraveler() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // better way of form submitting:
  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   console.log("form submitted");
  // }

  function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (isChecked) {
      //submit the form!
    }
    console.log("form submitted by click on btn");
  }

  return (
    <section className="bg-primary-100 px-24 py-36">
      <div className="border-y-grey-500/40 mx-auto flex max-w-389 items-center justify-between gap-x-28 border-y-1 py-26">
        <div className="basis-150 text-center">
          <h3 className="tracking-6 mb-9.5 text-[1.75rem]/14 font-semibold">
            Learn About Our Frequent Traveler Program
          </h3>
          <p className="text-grey-800 text-base/13.5">
            Interested in saving up to $1000 on your next vacation? How about
            earning travel points that can be converted into rewards like extra
            nights, free meals, and exclusive offers from resorts around globe?
          </p>
        </div>

        <div className="bg-grey-500/40 block w-0.25 self-stretch" />

        <form className="flex basis-150 flex-col">
          <label className="mb-8">
            <p className="tracking-6 mb-3 text-lg/9.5 font-semibold">
              Full Name
            </p>
            <input
              minLength={2}
              maxLength={50}
              name="fullName"
              required
              placeholder="Jane Doe"
              className="placeholder:tracking-6 placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50"
              type="text"
            />
          </label>

          <label className="mb-12">
            <p className="tracking-6 mb-3 text-lg/9.5 font-semibold">Email</p>
            <input
              minLength={3}
              maxLength={50}
              name="emailAddress"
              required
              placeholder="janedoe@gmail.com"
              className="placeholder:tracking-6 placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50"
              type="email"
            />
          </label>

          <div className="flex flex-wrap items-center justify-between gap-8">
            <label className="flex cursor-pointer items-center gap-x-1.5">
              <button
                onClick={() => setIsChecked(!isChecked)}
                type="button"
                className="flex size-5 cursor-pointer items-center justify-center rounded-sm bg-white p-1 disabled:opacity-50"
              >
                <Checkmark
                  className={`fill-grey-800 size-2 transition-all duration-200 ${isChecked ? "visible size-3 opacity-100" : "invisible size-2 opacity-0"}`}
                />
              </button>
              <p className="text-grey-800 text-sm tracking-[.03rem]">
                Agree to receive promotional email updates
              </p>
            </label>
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[0.625rem] px-8 py-3.5 text-base font-medium text-white transition-all duration-200 disabled:cursor-not-allowed"
            >
              Learn More
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FrequentTraveler;
