

export const Input = ({label, placeholder, onChange, ...props}) => {

    return(

        <div className="formLabel">
            <span>{label}</span>
            <input
                required 
                className="form__input"
                placeholder={placeholder || label} 
                onChange={onChange}
                {...props}
                />
        </div>
    );
};