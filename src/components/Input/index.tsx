import { ReactElement } from "react";
import classnames from "classnames"

import styles from "./Input.module.scss";

type InputType = "password" | "text"

interface IInput {
    type?: InputType;
    onChangeHandler: (value: string) => void;
    placeHolder: string;
    containerClass?: string;
    inputClass?: string
    value: string;
}

const Input = ({
    type = "text",
    onChangeHandler,
    placeHolder,
    containerClass,
    inputClass,
    value,
}: IInput): ReactElement => (
    <div className={classnames([
        containerClass,
        styles.inputRootContainer
    ])}>
        <input
            type={type}
            className={classnames([
                inputClass,
                styles.inputElement
            ])}
            onChange={(event): void => onChangeHandler(event.target.value)}
            placeholder={placeHolder}
            value={value}
        />
    </div>
)

export default Input