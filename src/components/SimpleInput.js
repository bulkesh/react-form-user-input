const SimpleInput = props => {
    return(
        <form>
            <div className="form-control">
                <label htmlFor='name'>Name</label>
                <input type="text" id="name"/>
            </div>
            <div className="form-actions">
                <button type="submit" >Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput;