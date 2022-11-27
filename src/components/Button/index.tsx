import classnames from "classnames"
import { HTMLProps, ReactElement } from "react";

import styles from "./Button.module.scss";

type ButtonVariant = "filled" | "outlined"

interface IButton extends HTMLProps<HTMLButtonElement> {
    containerClass?: string;
    buttonClass?: string;
    label: string;
    type?: "button" | "submit";
    buttonVariant?: ButtonVariant
}

const Button = ({
        containerClass,
        buttonClass,
        label,
        onClick,
        type = "button",
        buttonVariant = "filled"
    }: IButton): ReactElement => (
    <div className={
        classnames([containerClass, styles.buttonRootContainer])
    }>
        <button
            onClick={onClick}
            type={type}
            className={classnames([
                buttonClass,
                styles.buttonGeneric,
                styles[buttonVariant]
            ])}
        >
            {label}
        </button>
    </div>
)

export default Button