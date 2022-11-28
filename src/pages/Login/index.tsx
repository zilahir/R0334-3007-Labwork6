import { ReactElement, useState } from "react"
import { useHistory } from "react-router";

import Button from "../../components/Button"
import Input from "../../components/Input";
import Layout from "../../components/Layout"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { handleLogin } from "../../store/reducers/auth";
import { dummyUser, UserState } from "../../store/reducers/users";

import styles from "./Login.module.scss";

const LoginPage = (): ReactElement => {

    
    const [email, setEmail] = useState<string>(process.env.NODE_ENV === "development" ? dummyUser.email : "");
    const [password, setPassword] = useState<string>(process.env.NODE_ENV === "development" ? dummyUser.password : "")
    const [loginError, setLoginError] = useState<boolean>(false)

    const { users } = useAppSelector((store): UserState => store.users)

    const history = useHistory()
    const dispatch = useAppDispatch()

    function handleAuthentication(): void {
        const user = {
            thisEmail: email,
            thisPassword: password
        }

        const thisUser = users.find(({email, password}): boolean =>  email === user.thisEmail && password === user.thisPassword)

        if (thisUser) {
            dispatch(handleLogin(thisUser))
            history.push('/products')
        } else {
            setLoginError(true)
        }
    }
    return (
        <Layout>
            <div className={styles.loginInputContainer}>
                {
                    loginError && (
                        <div>
                            There is no such user
                        </div>
                    )
                }
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
                    onClick={():void => handleAuthentication()}
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