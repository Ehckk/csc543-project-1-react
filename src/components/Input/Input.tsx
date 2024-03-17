import { HTMLInputTypeAttribute } from "react";
import { ActionData, FormErrors } from "../../types";
import "./Input.css"

interface InputProps<Data> {
    type: HTMLInputTypeAttribute
    name: keyof Data
    label: string
    placeholder?: string
    errors?: ActionData<Data>
}

function Input<Data>(props: InputProps<Data>) {
    const { type, name, label, placeholder, errors } = props

    let defaultValue: string
    if (placeholder !== undefined) {
        defaultValue = placeholder
    } else {
        defaultValue = label
    }

    let errorMsg = ""
    if (errors) {
        if (name in errors) {
            errorMsg = (errors as FormErrors<Data>)[name]
        }
    }

    return (
        <div className="form-field">
            <input 
                type={type} 
                name={String(name)} 
                aria-label={label}
                placeholder={defaultValue}
            />
            <p className="form-error">{errorMsg}</p>
        </div>
    )
}

export default Input