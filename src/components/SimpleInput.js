import { useState } from "react";

const SimpleInput = () => {
    const [nameValue, setNameValue] = useState('');
    const [nameFieldTouched, setNameFieldTouched] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [emailFieldTouched, setEmailFieldTouched] = useState(false);
    const validteEmail = (email) => {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    const enteredNameIsValid = nameValue.trim() !== '';
    const nameFiledIsInValid = !enteredNameIsValid && nameFieldTouched;

    const enteredEmailIsValid = validteEmail(emailValue.trim());
    const emailFiledIsInValid = !enteredEmailIsValid && emailFieldTouched;

    const isEmailEmptyAndTouched = emailFieldTouched && emailValue === '';
    const isEmailValid = !enteredEmailIsValid && emailFieldTouched && emailValue !== '';



    let fornIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
        fornIsValid = true;
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        setNameFieldTouched(true);
        setEmailFieldTouched(true);

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        setNameValue('');
        setEmailValue('');
        setNameFieldTouched(false);
        setEmailFieldTouched(false);
    }

    const inputChnageHandler = event => {
        setNameValue(event.target.value);
    }
    const onNameBlurHandler = () => {
        setNameFieldTouched(true);
    }

    const emailChnageHandler = event => {
        setEmailValue(event.target.value);
    }
    const onEmailBlurHandler = () => {
        setEmailFieldTouched(true);
    }

    const nameInputClass = nameFiledIsInValid ? 'form-control invalid' : 'form-control';
    const emailInputClass = emailFiledIsInValid ? 'form-control invalid' : 'form-control';
    return (
        <form onSubmit={onSubmitHandler}>
            <div className={nameInputClass}>
                <label htmlFor='name'>Name</label>
                <input type="text" id="name"
                    autoComplete="off"
                    onChange={inputChnageHandler}
                    onBlur={onNameBlurHandler}
                    value={nameValue}
                />
                {nameFiledIsInValid && <p className="error-text">Name field is required</p>}
            </div>
            <div className={emailInputClass}>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email"
                    autoComplete="off"
                    onChange={emailChnageHandler}
                    onBlur={onEmailBlurHandler}
                    value={emailValue}
                />
                {isEmailEmptyAndTouched && <p className="error-text">Email field is required</p>}
                {isEmailValid && <p className="error-text">Please enter a valid email address</p>}
            </div>
            <div className="form-actions">
                <button disabled={!fornIsValid} type="submit" >Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput;