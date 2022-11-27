import { ReactElement, useState } from "react"

import Button from "../../components/Button"
import Input from "../../components/Input";
import Layout from "../../components/Layout"

import styles from "./Login.module.scss";

const Login = (): ReactElement => {

    const [email, setEmail] = useState<string>("");
    return (
        <Layout>
            <div className={styles.loginInputContainer}>
                <Input
                    placeHolder="Email"
                    onChangeHandler={(value): void => void 0}
                />
                <Input
                    placeHolder="Password"
                    onChangeHandler={(value): void => void 0}
                />
            </div>
            <div className={styles.loginBtnContainer}>
                <Button
                    label="Login"
                    onClick={(): void => alert("login")}
                />
                <Button
                    label="Signup"
                    onClick={(): void => alert("login")}
                    buttonVariant="text"
                />
            </div>
        </Layout>
    )
}

export default Login