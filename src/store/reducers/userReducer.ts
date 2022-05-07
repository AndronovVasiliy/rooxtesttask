import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserData } from "./ActionCreateUsers";

interface AdressType {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
        lat: string
        lng: string
    }
}

export interface User {
    photo?: string
    id: number
    name: string
    username: string
    email: string
    address: AdressType,
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

interface InitialStateType {
    users: Array<User>
    isLoading: boolean
    error: string
}

const initialState: InitialStateType = {
    users: [],
    isLoading: false,
    error: ''
}

export const usersReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        sortUsers(state, action: PayloadAction<Array<User>>) {
            state.users = action.payload
        },
    },
    extraReducers: {
        [getUserData.fulfilled.type]: (state, action: PayloadAction<Array<User>>) => {
            state.users = action.payload
            state.isLoading = false
        },
        [getUserData.pending.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = true
        },
        [getUserData.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false
        },
    }
})