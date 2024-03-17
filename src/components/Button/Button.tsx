import { ButtonHTMLAttributes } from "react"
import "./Button.css"

type ButtonSize = "small" | "large"
const ButtonSizeClassName: Record<ButtonSize, string> = {
    small: "btn-small",
    large: "btn-large"
} as const

interface ButtonProps {
    type: ButtonHTMLAttributes<HTMLButtonElement>["type"]
    text: string
    size: ButtonSize
}

function Button(props: ButtonProps) {
    const { type, text, size } = props

    const className = ButtonSizeClassName[size]

    return (
        <button type={type} className={className}>
            {text}
        </button>
    )
}

export default Button