import { createSlice } from '@reduxjs/toolkit';
import { Product } from "../../../utils/routes/api/products";


export interface SingleOrder {
    id: string;
    products: Product
}

export interface Order {
    orders: SingleOrder[]
}

const initialState = {
    orders: []
} as Order

const orderSlice = createSlice({
    name: "app/orders",
    initialState,
    reducers: {
        createNewOrder(state, action): void {
            state.orders = [...state.orders, action.payload.order]
        }
    }
})

const { actions, reducer } = orderSlice

export const { createNewOrder } = actions

export default reducer;