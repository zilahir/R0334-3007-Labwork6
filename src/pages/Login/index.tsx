import { ReactElement, useState } from "react"
import { useHistory } from "react-router";

import Button from "../../components/Button"
import Input from "../../components/Input";
import Layout from "../../components/Layout"

import styles from "./Login.module.scss";

const LoginPage = (): ReactElement => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")

    const history = useHistory()
    return (
        <Layout>
            <div className={styles.loginInputContainer}>
                <Input
                    placeHolder="Email"
                    onChangeHandler={(value): void => setEmail(value)}
                    value={email}
                />
                <Input
                    placeHolder="Password"
                    onChangeHandler={(value): void => setPassword(value)}
                    value={password}
                />
            </div>
            <div className={styles.loginBtnContainer}>
                <Button
                    label="Login"
                    onClick={(): void => void 0}
                />
                <Button
                    label="Signup"
                    onClick={(): void => history.push('/signup')}
                    buttonVariant="text"
                />
            </div>
        </Layout>
    )
}

export default LoginPage