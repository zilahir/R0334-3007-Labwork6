/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './styles/reset.css';
import { ReactElement } from 'react';
import BottomTabNavigation from './components/BottomTabNavigation';

import { routeApi } from './utils/routes';
import { useAppSelector } from './store/hooks';
import { AuthState } from './store/reducers/auth';

setupIonicReact();

const App: React.FC = (): ReactElement => {
  const nonTabRoutes = routeApi.getDefaultRoute();
  const tabRoutes = routeApi.getTabRoutes()

  const { isLoggedIn } = useAppSelector((store): AuthState => store.auth)
  return (
    <IonApp>
      <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              {
                [...nonTabRoutes, ...tabRoutes].map((route): ReactElement => (
                  <Route
                    key={route.url}
                    exact={route.url !== '/products'}
                    path={route.url}
                  >
                    {
                      // @ts-ignore this should be typed
                      <route.component />
                    }
                  </Route>
                ))
              }
                <Route exact path="/">
                  <Redirect to={isLoggedIn ? "/products" : "/login"} />
                </Route>
              </IonRouterOutlet>
              <IonTabBar
                slot="bottom"
                style={{
                  display: isLoggedIn ? "flex" : "none"
                }}
              >
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
          </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
