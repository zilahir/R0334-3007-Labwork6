
import { ReactElement } from 'react';
import ProductPage from '../../pages/ProductPage';
import { has, orderBy } from "lodash"
import { flowerOutline } from 'ionicons/icons'

import SignupPage from '../../pages/SignUp';
import Login from '../../pages/Login';
import Cart from '../../pages/Cart';

export type RouteURL = "/products" | "/signup" | "/login" | "/cart"
export interface Tab {
    label: string,
    url: RouteURL,
    icon: string,
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
            order: 1,
        },
        hasHeader: false
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
    },
    {
        label: 'Cart',
        url: '/cart',
        component: Cart,
        tab: {
            icon: '',
            order: 2,
        }
    }
]

export const routeApi = {
    // this is basically every route which is not requires authentication
    getDefaultRoute: (): AppRoute[] => appRoutes.filter((route): boolean => !has(route, ["tab"])),
    getTabRoutes: (): AppRoute[] => orderBy(appRoutes.filter((route): boolean => has(route, ["tab"])), ["tab.order", ["asc"]]),
    getLocationByUrl: (urlToFind: RouteURL): AppRoute => appRoutes.find(({ url }): boolean => url === urlToFind) as AppRoute,
}