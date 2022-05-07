import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { usersReducer } from './reducers/userReducer'

const rootReducer = combineReducers({
    user: usersReducer.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootReduserType = ReturnType<typeof rootReducer>
export type RootStateType = ReturnType<typeof setupStore>
export type AppDispatchType = RootStateType['dispatch']