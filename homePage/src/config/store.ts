import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { UISlice } from '../slices'
import { productsSlice } from '../slices'
import { productsApi } from '../services'


export const rootReducer = combineReducers({
    UI: UISlice,
    Products: productsSlice,
    [productsApi.reducerPath]: productsApi.reducer
})

export const configStore = () =>
    configureStore({
        reducer: rootReducer,

        // default
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(productsApi.middleware)
        }
    })