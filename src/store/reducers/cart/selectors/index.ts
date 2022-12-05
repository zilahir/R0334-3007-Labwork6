import { CartProduct } from './../index';
import { groupBy } from "lodash";

interface CartSelector {
    isEmpty: boolean,
    numOfItems: number
}

export const isCartEmpty = (items: CartProduct[]): CartSelector => {
    return {
        isEmpty: items.length === 0,
        numOfItems: items.length
    }
}

export interface Receipt {
    numOfProducts: number,
    totalSum: string;
}

export const countTotalSum = (items: CartProduct[]): Receipt => ({
    totalSum: items.reduce((accumulator, { price }):number => Number(accumulator) + Number(price), 0).toFixed(2),
    numOfProducts: items.length,
})

interface GroupedItems {
    [key: string]: CartProduct[]
}

export const groupCartItems = (items: CartProduct[]): GroupedItems => {
    const grouped = groupBy(items, 'id');
    return grouped; 
}