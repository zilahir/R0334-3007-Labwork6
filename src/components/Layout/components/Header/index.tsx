import { IonHeader } from "@ionic/react";
import { ReactElement } from "react";

import styles from "./Header.module.scss";

const Header = (): ReactElement => (
    <IonHeader className={styles.headerRootContainer}>
        <p>
            hello fom header
        </p>
        <p>
            hello fom header
        </p>
    </IonHeader>
)

export default Header;