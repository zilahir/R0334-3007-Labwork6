import { ReactElement } from "react";
import {
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
} from '@ionic/react'

import ProtectedRoute from "../ProtectedRoute";
import { routeApi } from "../../utils/routes";

const BottomTabNavigation = (): ReactElement => {
    const tabRoutes = routeApi.getTabRoutes()
    return (
        <IonTabBar slot="bottom">
            {
                tabRoutes.map((tab, index): ReactElement => (
                    <IonTabButton key={tab.url} href={tab.url} tab={`tab${index+1}`}>
                    <IonIcon icon={tab.tab?.icon} />
                        <IonLabel>
                            {tab.label}
                        </IonLabel>
                    </IonTabButton>
                ))
            }
        </IonTabBar>
    )
}

export default BottomTabNavigation