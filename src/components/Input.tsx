import { HTMLInputTypeAttribute } from "react";
import "./Input.css"

interface InputProps {
    type: HTMLInputTypeAttribute
    name: string
    label: string
    placeholder?: string
}

function Input(props: InputProps) {
    const { type, name, label, placeholder } = props

    let defaultValue: string
    if (placeholder !== undefined) {
        defaultValue = placeholder
    } else {
        defaultValue = label
    }

    return (
        <input 
            type={type} 
            name={name} 
            aria-label={label}
            placeholder={defaultValue}
        />
    )
}

export default Input