import { ReactElement } from "react"

import Button from "../../components/Button"
import Layout from "../../components/Layout"

import styles from "./Login.module.scss";

const Login = (): ReactElement => (
    <Layout>
        <div className={styles.loginRootContainer}>
            <Button
                label="Login"
                onClick={(): void => alert("login")}
            />
        </div>
    </Layout>
)

export default Login