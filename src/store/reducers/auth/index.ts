import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { User } from './../../../types/user/index';

interface AuthState {
    user: User | undefined,
    isLoggedIn: boolean;
}

const initialState = {
    user: {} as User,
    isLoggedIn: false
} as AuthState

const loginSuccess = createAsyncThunk('auth/success', async (user: User, thunkApi): Promise<{ user: User }> => {
    // we probabyl going to have to call another function
    return {user}
})

const authSlice = createSlice({
    name: "app/auth",
    initialState,
    reducers: {
        logOut(state): void {
            state.isLoggedIn = false;
            state.user = undefined
        }
    },
    extraReducers(builder): void {
        builder.addCase(loginSuccess.fulfilled, (state, action): void => {
            state.user = action.payload.user
        })
    },
})

const { reducer, actions } = authSlice

export const { logOut } = actions

export default reducer;