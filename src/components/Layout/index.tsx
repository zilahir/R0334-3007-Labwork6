import { IonPage } from "@ionic/react";
import { ReactElement } from "react"
import { useLocation } from "react-router";

import Header from "./components/Header";
import styles from "./Layout.module.scss";
interface Ilayout {
    children: ReactElement | ReactElement[]
}

const Layout = ({ children }: Ilayout): ReactElement => {
    const location = useLocation()
    console.log('location', location)
    return (
    <IonPage>
        <div className={styles.layoutRootContainer}>
            <Header />
            <div className={styles.layoutInnerContainer}>
                <p>
                    hello from layout
                </p>
                <>
                    {children}
                </>
            </div>
        </div>
    </IonPage>
    )
}

export default Layout;