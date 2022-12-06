import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product, productsApi } from "../../../utils/routes/api/products";

export interface ProductsState {
    products: Product[]
}


export const getAllProducts = createAsyncThunk('/api/products/set', async (): Promise<Record<"products", Product[]>> => {
    const allProducts = productsApi.getAllProducts();
    return {
        products: allProducts
    }
})


const initialState = {
    products: []
} as ProductsState;

const productsSlice = createSlice({
    name: "/app/products/set",
    initialState,
    reducers: {
        setAllProducts(state, action): void {
            state.products = action.payload.products
        }
    },
    extraReducers(builder): void {
        builder.addCase(getAllProducts.fulfilled, (state, action): void => {
            state.products = action.payload.products
        })
    },
})

const { actions, reducer } = productsSlice

export const { setAllProducts } = actions

export default reducer;