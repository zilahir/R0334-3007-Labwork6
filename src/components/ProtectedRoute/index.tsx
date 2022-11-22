import { ReactElement } from "react"
import { Redirect } from "react-router"
import useAuth from "../../hooks/useAuth"

interface IProtectedRoute {
    children: ReactElement
}

const ProtectedRoute = ({ children }: IProtectedRoute): ReactElement => {
    const { isLoggedIn } = useAuth()
    return isLoggedIn ? children : <Redirect to="/login" />
}

export default ProtectedRoute