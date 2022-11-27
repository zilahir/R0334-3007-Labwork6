import { ReactElement, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import Button from "../../components/Button"
import Input from "../../components/Input"
import Layout from "../../components/Layout"
import { useAppDispatch } from "../../store/hooks";
import { createNewUser } from "../../store/reducers/users";
import { User } from "../../types/user"

import styles from "./Signup.module.scss"

const SignupPage = (): ReactElement => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");

    const dispatch = useAppDispatch()

    function handleSignup(): void {
        const user: User = {
            email,
            password,
            id: uuidv4(),
            name,
            createdAt: Date.now(),
        }

        dispatch(createNewUser({user}))
    }
    return (
        <Layout>
            <div className={styles.signupInputContainer}>
            <Input
                    placeHolder="Name"
                    onChangeHandler={(value): void => setName(value)}
                    value={name}
                />
                <Input
                    placeHolder="Email"
                    onChangeHandler={(value): void => setEmail(value)}
                    value={email}
                />
                <Input
                    placeHolder="password"
                    onChangeHandler={(value): void => setPassword(value)}
                    value={password}
                    type="password"
                />
            </div>
            <div className={styles.signupBtnContainer}>
                <Button
                        label="Sign Up"
                        onClick={(): void => handleSignup()}
                    />
            </div>
        </Layout>
    )
}

export default SignupPage
