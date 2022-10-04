import { useState, useReducer } from "react";

const actions = {
  INPUT: 'INPUT',
  BLUR: 'BLUR',
  RESET: 'RESET'
}

const initialState = {
  value: '',
  fieldTouched: false
}

const inputReducer = (state, { type, value }) => {
  switch (type) {
    case actions.INPUT:
      return {
        ...state,
        value: value
      }
    case actions.BLUR:
      return {
        ...state,
        fieldTouched: true
      }
    case actions.RESET:
      return initialState
    default:
      return state
  }
}
const useInput = (validteValue) => {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  const valueIsValid = validteValue(state.value);
  const hasError = !valueIsValid && state.fieldTouched;

  const valueChnageHandler = event => {
    dispatch({type:actions.INPUT, value: event.target.value})
  }
  
  const onBlurHandler = () => {
    dispatch({type:actions.BLUR})
  }

  const resetField = () => {
    dispatch({type:actions.RESET})
  }

  return {
    value: state.value,
    valueIsValid,
    hasError,
    valueChnageHandler,
    onBlurHandler,
    resetField
  }
}

export default useInput;
