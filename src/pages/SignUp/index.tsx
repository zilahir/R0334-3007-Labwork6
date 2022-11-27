import { ReactElement, useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Layout from "../../components/Layout"

import styles from "./Signup.module.scss"

const SignupPage = (): ReactElement => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    return (
        <Layout>
            <div className={styles.signupInputContainer}>
                <Input
                    placeHolder="Email"
                    onChangeHandler={(value): void => setEmail(value)}
                    value={email}
                />
                <Input
                    placeHolder="password"
                    onChangeHandler={(value): void => setPassword(value)}
                    value={password}
                />
            </div>
            <div className={styles.signupBtnContainer}>
                <Button
                        label="Sign Up"
                        onClick={(): void => alert("login")}
                    />
            </div>
        </Layout>
    )
}

export default SignupPage
