import { IonPage } from "@ionic/react";
import { ReactElement } from "react"
import { useLocation } from "react-router";
import classnames from "classnames"

import { routeApi, RouteURL } from "../../utils/routes";
import Header from "./components/Header";
import styles from "./Layout.module.scss";
interface Ilayout {
    children: ReactElement | ReactElement[]
}

const Layout = ({ children }: Ilayout): ReactElement => {
    const location = useLocation()
    const thisRoute = routeApi.getLocationByUrl(location.pathname as RouteURL)

    return (
    <IonPage>
        <div className={styles.layoutRootContainer}>
            {
                thisRoute && thisRoute.hasHeader && (
                    <Header />
                )
            }
            <div className={classnames([
                styles.layoutInnerContainer,
                !thisRoute.hasHeader && styles.noHeaderPadding
            ])}>
                <>
                    {children}
                </>
            </div>
        </div>
    </IonPage>
    )
}

export default Layout;