import { ReactElement } from "react"

interface Ilayout {
    children: ReactElement | ReactElement[]
}

const Layout = ({ children }: Ilayout): ReactElement => (
    <div>
        <p>
            hello from layout
        </p>
        <>
            {children}
        </>
    </div>
)

export default Layout;