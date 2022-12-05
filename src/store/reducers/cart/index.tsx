import { createSlice } from "@reduxjs/toolkit";
import { without, find } from "lodash"

import { Product } from "../../../utils/routes/api/products";

export interface CartState {
    products: Pick<Product, "id" | "price">[]
}

const initialState = {
    products: []
} as CartState


const cartSlice = createSlice({
    name: "app/cart",
    initialState,
    reducers: {
        addToCart(state, action): void {
            state.products = [state.products, ...action.payload.products]
        },
        wipeCart(state): void {
            state.products = []
        },

        removeItemFromCart(state, action): void {
            state.products = without(state.products, find(state.products, { id: action.payload.id })) as Item[]
        }
    }
})

const { reducer, actions } = cartSlice;

export const { addToCart, wipeCart, removeItemFromCart } = actions;

export default reducer;