import {InputProps} from "../../../types";
import './inputForm.css'

function InputForm({name, type, handleChange, value, placeholder}: InputProps) {
    return (
        <input name={name} placeholder={placeholder} type={type} onChange={handleChange} value={value}/>
    );
}

export default InputForm;