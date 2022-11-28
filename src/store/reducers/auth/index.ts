import { createSlice } from "@reduxjs/toolkit";

import { User } from './../../../types/user/index';

export interface AuthState {
    user: User | undefined,
    isLoggedIn: boolean;
}

const initialState = {
    user: {} as User,
    isLoggedIn: false
} as AuthState


const authSlice = createSlice({
    name: "app/auth",
    initialState,
    reducers: {
        logOut(state): void {
            state.isLoggedIn = false;
            state.user = undefined
        },
        handleLogin(state, action): void {
            state.isLoggedIn = true;
            state.user = action.payload
        }
    },
})

const { reducer, actions } = authSlice

export const { logOut, handleLogin } = actions

export default reducer;