import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { UISlice } from '../slices'


export const rootReducer = combineReducers({
    UI: UISlice
})

export const configStore = () =>
    configureStore({
        reducer: rootReducer,

        // default
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: false
            })
        }
    })