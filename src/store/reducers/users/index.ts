import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../../types/user';


export const dummyUser: User = {
    email: "laurea@student.com",
    name: "Laurea Student",
    id: uuidv4(),
    createdAt: Date.now(),
    password: "lorem123!"
}

interface UserState {
    users: User[]
}

const initialState = {
    users: [dummyUser]
} as UserState

const userSlice = createSlice({
    name: "app/users",
    initialState, 
    reducers: {
        createNewUser(state, action): void {
            state.users = [...state.users, ...action.payload.user]
        }
    }
})

const { reducer, actions } = userSlice

export const { createNewUser } = actions

export default reducer;