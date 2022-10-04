const Input = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor='name'>{props.label}</label>
            <input
                autoComplete="off"
                type={props.type}
                id={props.id}
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.value}
            />
            {props.filedIsInValid && <p className="error-text">{props.errorMessage}</p>}
        </div>
    );
}

export default Input;
