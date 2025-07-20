// this interface is an object type and might have 1 or few properties which all are strings and thier values also are strings

import { ChangeEvent, useState } from "react";

// (before hand we do not know how many properties will be in this object)
interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

// custome hook itself
export function useFormAndValidation(inputs: FormValues) {
  const [values, setValues] = useState<FormValues>(inputs);
  const [errors, setErrors] = useState<FormErrors>({}); //default empty obj(no errors in begining)
  const [isValid, setIsValid] = useState<boolean>(false); //default is false (form is invalid in the begining)

  // event obj is related to onChange event => event is type of ChangeEvent
  // event obj comimg from browser is onChange event and the element which this event applys, is HtmlInputElement
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target; // e.target is the element which onChange happened on it (HtmlInputElement)
    setValues((prev) => {
      return { ...prev, [name]: value }; // name is same name attr in input el
    });

    setErrors((prev) => {
      return { ...prev, [name]: e.target.validationMessage };
    });

    setIsValid(e?.target?.closest("form")?.checkValidity() ?? false); //e?.target?.closest("form") === <form></form>
  }

  function resetForm(
    values: FormValues = inputs,
    errors: FormErrors = {},
    isValid: boolean = false,
  ) {
    setValues(values);
    setErrors(errors);
    setIsValid(isValid);
  }

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  };
}
