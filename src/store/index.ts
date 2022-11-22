import { combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'

const rootReducer = combineReducers({

})

const middlewares = [thunk, logger]

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    // eslint-disable-next-line unicorn/prefer-spread
    middleware: (getDefaultMiddleware): MiddlewareArray<Array<any>> => getDefaultMiddleware().concat([...middlewares])
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch