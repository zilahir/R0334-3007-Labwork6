import { ReactElement } from 'react';
import ProductPage from '../../pages/ProductPage';
import { has } from "lodash"
import { flowerOutline } from 'ionicons/icons'

import SignupPage from '../../pages/SignUp';
import Login from '../../pages/Login';

export interface Tab {
    label: string,
    url: string,
    icon: string,
    color: string,
    backgroundColor: string,
    component?: () => ReactElement,
    order: number,
}

export type TabRoute = Omit<Tab, "label" | "url" | "component">

export interface AppRoute extends Omit<Tab, "icon" | "color" | "backgroundColor" | 'order' > {
    label: string,
    tab?: TabRoute
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
            order: 4,
        }
    },
    {
        label: 'Sign up',
        url: '/signup',
        component: SignupPage
    },
    {
        label: 'Login',
        url: '/login',
        component: Login
    }
]

export const routeApi = {
    getDefaultRoute: (): AppRoute[] => appRoutes.filter((route): boolean => !has(route, ["tab"]))
}