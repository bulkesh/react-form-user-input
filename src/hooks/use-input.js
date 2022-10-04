import { useState } from "react";

const useInput = (validteValue) => {
  const [fieldValue, setFieldValue] = useState('');
  const [fieldTouched, setFieldTouched] = useState(false);

  const valueIsValid = validteValue(fieldValue);
  const hasError = !valueIsValid && fieldTouched;

  const valueChnageHandler = event => {
    setFieldValue(event.target.value);
  }
  const onBlurHandler = () => {
    setFieldTouched(true);
  }

  const resetField = () => {
    setFieldValue('');
    setFieldTouched(false);
  }

  return {
    value: fieldValue,
    valueIsValid,
    hasError,
    valueChnageHandler,
    onBlurHandler,
    resetField
  }
}

export default useInput;
