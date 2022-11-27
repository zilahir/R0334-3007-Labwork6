import { ReactElement } from "react"
import Button from "../../components/Button"
import Layout from "../../components/Layout"

const Login = (): ReactElement => (
    <Layout>
        <div>
            <Button
                label="Login"
                onClick={(): void => alert("login")}
            />
        </div>
    </Layout>
)

export default Login