import useInput from "../hooks/use-input";
import { isEmailValid, isNotEmpty } from "../utils/form-data";
import Input from "./shared/Input";

const SimpleInput = () => {
    const {
        value: nameValue,
        valueIsValid: enteredNameIsValid,
        hasError: nameFiledIsInValid,
        valueChnageHandler: inputChnageHandler,
        onBlurHandler: onNameBlurHandler,
        resetField: resetNameField
    } = useInput(isNotEmpty);
    const {
        value: lNameValue,
        valueIsValid: enteredLNameIsValid,
        hasError: lNameFiledIsInValid,
        valueChnageHandler: lNameChnageHandler,
        onBlurHandler: onLNameBlurHandler,
        resetField: resetLNameField
    } = useInput(isNotEmpty);
    const {
        value: emailValue,
        valueIsValid: enteredEmailIsValid,
        hasError: emailFiledIsInValid,
        valueChnageHandler: emailChnageHandler,
        onBlurHandler: onEmailBlurHandler,
        resetField: resetEmailField
    } = useInput(isEmailValid);

    let fornIsValid = false;
    if (enteredNameIsValid && enteredLNameIsValid && enteredEmailIsValid ) {
        fornIsValid = true;
    }

    const onSubmitHandler = event => {
        event.preventDefault();

        if (!enteredNameIsValid || !enteredLNameIsValid || !enteredEmailIsValid ) {
            return;
        }
        resetNameField();
        resetLNameField();
        resetEmailField();
    }
    const nameInputClass = nameFiledIsInValid ? 'form-control invalid' : 'form-control';
    const lNameInputClass = lNameFiledIsInValid ? 'form-control invalid' : 'form-control';
    const emailInputClass = emailFiledIsInValid ? 'form-control invalid' : 'form-control';
    return (
        <form onSubmit={onSubmitHandler}>
            <Input
                className={nameInputClass}
                id='fname'
                label='First Name'
                type="text"
                onChange={inputChnageHandler}
                onBlur={onNameBlurHandler}
                value={nameValue}
                filedIsInValid={nameFiledIsInValid}
                errorMessage='First Name field is required'
            />
            <Input
                className={lNameInputClass}
                id='lname'
                label='Last Name'
                type="text"
                onChange={lNameChnageHandler}
                onBlur={onLNameBlurHandler}
                value={lNameValue}
                filedIsInValid={lNameFiledIsInValid}
                errorMessage='Last Name field is required'
            />
            <Input
                className={emailInputClass}
                id='email'
                label='E-Mail Address'
                type="email"
                onChange={emailChnageHandler}
                onBlur={onEmailBlurHandler}
                value={emailValue}
                filedIsInValid={emailFiledIsInValid}
                errorMessage='Please enter a valid email address'
            />
            <div className="form-actions">
                <button disabled={!fornIsValid} type="submit" >Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput;