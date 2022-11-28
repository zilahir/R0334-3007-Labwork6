import { ReactElement, useState } from "react"
import { useHistory } from "react-router";
import { v4 as uuidv4 } from 'uuid';

import Button from "../../components/Button"
import Input from "../../components/Input"
import Layout from "../../components/Layout"
import { useAppDispatch } from "../../store/hooks";
import { handleLogin } from "../../store/reducers/auth";
import { createNewUser } from "../../store/reducers/users";
import { User } from "../../types/user"

import styles from "./Signup.module.scss"

async function handleRegistration(): Promise<boolean> {
    return new Promise((resolve): void => {
        setTimeout((): void => {
            resolve(true)
        }, 2000)
    })
}

const SignupPage = (): ReactElement => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");

    const dispatch = useAppDispatch()
    const history = useHistory()



    async function handleSignup(): Promise<void> {
        const user: User = {
            email,
            password,
            id: uuidv4(),
            name,
            createdAt: Date.now(),
        }

        // TODO: error handling

        dispatch(createNewUser({user}))
        handleRegistration().then((): void => {
            console.log('userlogin', user)
            dispatch(handleLogin(user))
            history.push('/products')
        })

        // success 


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
                        onClick={(): Promise<void> => handleSignup()}
                    />
            </div>
        </Layout>
    )
}

export default SignupPage
