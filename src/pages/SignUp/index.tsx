import { ReactElement } from "react"
import Button from "../../components/Button"
import Layout from "../../components/Layout"

const SignupPage = (): ReactElement => (
    <Layout>
        <div>
            <Button
                label="SignUp"
                onClick={(): void => alert("login")}
            />
        </div>
    </Layout>
)

export default SignupPage
