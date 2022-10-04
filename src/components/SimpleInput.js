import useInput from "../hooks/use-input";
import Input from "./shared/Input";

const SimpleInput = () => {
    const validteEmail = (email) => {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    const {
        value: nameValue,
        valueIsValid: enteredNameIsValid,
        hasError: nameFiledIsInValid,
        valueChnageHandler: inputChnageHandler,
        onBlurHandler: onNameBlurHandler,
        resetField: resetNameField
    } = useInput(value => value.trim() !== '');
    const {
        value: emailValue,
        valueIsValid: enteredEmailIsValid,
        hasError: emailFiledIsInValid,
        valueChnageHandler: emailChnageHandler,
        onBlurHandler: onEmailBlurHandler,
        resetField: resetEmailField
    } = useInput(value => validteEmail(value.trim()));

    let fornIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
        fornIsValid = true;
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }
        resetNameField();
        resetEmailField();
    }
    const nameInputClass = nameFiledIsInValid ? 'form-control invalid' : 'form-control';
    const emailInputClass = emailFiledIsInValid ? 'form-control invalid' : 'form-control';
    return (
        <form onSubmit={onSubmitHandler}>
            <Input
                className={nameInputClass}
                id='name'
                label='Name'
                type="text"
                onChange={inputChnageHandler}
                onBlur={onNameBlurHandler}
                value={nameValue}
                filedIsInValid={nameFiledIsInValid}
                errorMessage='Name field is required'
            />
            <Input
                className={emailInputClass}
                id='email'
                label='Email'
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