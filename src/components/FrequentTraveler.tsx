import { useState, MouseEvent } from "react";
import Checkmark from "./Icons/Checkmark";
import { useFormAndValidation } from "../Hooks/useFormAndValidation";
import { AnimatePresence, motion } from "motion/react";
import useInsertLead from "../Hooks/useInsertLead";
import { FORM_STATE_DURATION } from "../utils/constans";

interface FormState {
  currentState: "idle" | "pending" | "success" | "error";
  errorMessage: string | null;
}
const buttonStateClasses = {
  idle: "bg-primary-700 opacity-100",
  pending: "bg-primary-700 opacity-50",
  success: "bg-green opacity-100",
  error: "bg-red opacity-100",
};

function FrequentTraveler() {
  const [formState, setFormState] = useState<FormState>({
    currentState: "idle",
    errorMessage: null, //there is no error in the begining
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const mutation = useInsertLead({
    onError: handleError,
    onSuccess: handleSuccess,
  });

  // better way of form submitting: [onSubmit on form]
  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   console.log("form submitted");
  // }

  const { errors, handleChange, isValid, resetForm, values } =
    useFormAndValidation({
      fullName: "",
      emailAddress: "",
    });

  function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (isChecked && isValid) {
      //submit the form!
      setFormState({
        currentState: "pending", // when form is submitting we dont know form is succesfully submitted or not
        errorMessage: null,
      });
      // to mutate data on server
      mutation.mutate({
        createdAt: Date.now(),
        emailAddress: values.emailAddress,
        fullName: values.fullName,
      });
    }
  }

  function handleSuccess() {
    resetForm();
    setIsChecked(false); //after data successfully mutated on server, this checkbox be unchecked(reset)
    setFormState({ currentState: "success", errorMessage: null });
    // after 3s formState goes back to "idle" state
    setTimeout(
      () => setFormState({ currentState: "idle", errorMessage: null }),
      FORM_STATE_DURATION,
    );
  }

  function handleError(error: Error) {
    setFormState({ currentState: "error", errorMessage: error.message });
    // after 3s formState goes back to "idle" state
    setTimeout(
      () => setFormState({ currentState: "idle", errorMessage: null }),
      FORM_STATE_DURATION,
    );
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
              value={values.fullName}
              onChange={handleChange}
              minLength={2}
              maxLength={50}
              name="fullName"
              required
              disabled={formState.currentState !== "idle"}
              placeholder="Jane Doe"
              className={`${errors.fullName && "outline-red outline-2"} placeholder:tracking-6 placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50`}
              type="text"
            />
            {/* for rendering the errors messages */}
            <AnimatePresence>
              {errors.fullName && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{ opacity: 0, height: 0 }} //when el goes off the screen play the exit animation
                  transition={{ duration: 0.15 }}
                  className="text-red pt-1 pl-0.5 text-sm"
                >
                  {errors.fullName}
                </motion.p>
              )}
            </AnimatePresence>
          </label>

          <label className="mb-12">
            <p className="tracking-6 mb-3 text-lg/9.5 font-semibold">Email</p>
            <input
              value={values.emailAddress}
              onChange={handleChange}
              minLength={3}
              maxLength={50}
              name="emailAddress"
              disabled={formState.currentState !== "idle"}
              required
              placeholder="janedoe@gmail.com"
              className={`${errors.emailAddress && "outline-red outline-2"} placeholder:tracking-6 placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50`}
              type="email"
            />
            <AnimatePresence>
              {errors.emailAddress && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{ opacity: 0, height: 0 }} //when el goes off the screen play the exit animation
                  transition={{ duration: 0.15 }}
                  className="text-red pt-1 pl-0.5 text-sm"
                >
                  {errors.emailAddress}
                </motion.p>
              )}
            </AnimatePresence>
          </label>

          <div className="flex flex-wrap items-center justify-between gap-8">
            <label className="flex cursor-pointer items-center gap-x-1.5">
              <button
                disabled={formState.currentState !== "idle"}
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
              disabled={formState.currentState !== "idle"}
              onClick={handleSubmit}
              type="submit"
              className={`enabled:hover:bg-primary-800 cursor-pointer rounded-[0.625rem] px-8 py-3.5 text-base font-medium text-white transition-all duration-200 disabled:cursor-not-allowed ${buttonStateClasses[formState.currentState]}`}
            >
              {formState.currentState === "idle" && "Learn More"}
              {formState.currentState === "pending" && "Submitting..."}
              {formState.currentState === "success" && "Success!"}
              {formState.currentState === "error" && "Submission Failed"}
            </button>
            {formState.errorMessage && (
              <p className="text-red text-base font-semibold">
                {formState.errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default FrequentTraveler;
