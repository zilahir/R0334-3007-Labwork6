import { ReactElement } from 'react';
import ProductPage from '../../pages/ProductPage';
import { has } from "lodash"
import { flowerOutline, returnUpBackOutline } from 'ionicons/icons'

import SignupPage from '../../pages/SignUp';
import Login from '../../pages/Login';

export type RouteURL = "/products" | "/signup" | "/login"
export interface Tab {
    label: string,
    url: RouteURL,
    icon: string,
    color: string,
    backgroundColor: string,
    component?: () => ReactElement,
    order: number,
}

interface HeaderIcon {
    icon: string,
    onClickHandler: () => void
}

interface HeaderIcons {
    left: HeaderIcon,
    right: HeaderIcon
}

export type TabRoute = Omit<Tab, "label" | "url" | "component">

// omit takes a generic and omits the list of props
// pick takes a generic and keeps only the list of props

export interface AppRoute extends Omit<Tab, "icon" | "color" | "backgroundColor" | 'order' > {
    label: string,
    tab?: TabRoute,
    hasHeader?: boolean
}

export const appRoutes: ReadonlyArray<AppRoute> = [
    {
        label: 'Products',
        url: '/products',
        component: ProductPage,
        tab: {
            icon: flowerOutline,
            color: "#76b140",
            backgroundColor: "#ddf7c5",
            order: 1,
        },
    },
    {
        label: 'Sign up',
        url: '/signup',
        component: SignupPage,
    },
    {
        label: 'Login',
        url: '/login',
        component: Login,
        hasHeader: false
    }
]

export const routeApi = {
    // this is basically every route which is not requires authentication
    getDefaultRoute: (): AppRoute[] => appRoutes.filter((route): boolean => !has(route, ["tab"])),
    getTabRoutes: (): void => console.log('TODO finish this'),
    getLocationByUrl: (urlToFind: RouteURL): AppRoute => appRoutes.find(({ url }): boolean => url === urlToFind) as AppRoute,
}