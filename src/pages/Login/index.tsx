import { ReactElement } from "react"

import Button from "../../components/Button"
import Input from "../../components/Input";
import Layout from "../../components/Layout"

import styles from "./Login.module.scss";

const Login = (): ReactElement => (
    <Layout>
        <div className={styles.loginInputContainer}>
            <Input
                placeHolder="Email"
                onChangeHandler={(value): void => console.log(value)}
            />
        </div>
        <div className={styles.loginBtnContainer}>
            <Button
                label="Login"
                onClick={(): void => alert("login")}
            />
        </div>
    </Layout>
)

export default Login