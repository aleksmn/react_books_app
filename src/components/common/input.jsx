const Input = (props) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">{props.label}</label>
            <input
                value={props.value}
                onChange={props.onChange}
                id={props.name}
                name={props.name}
                type={props.type}
                className="form-control"
            />
        </div>
    );
}

export default Input;