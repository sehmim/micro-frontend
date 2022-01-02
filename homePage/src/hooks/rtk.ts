import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { configStore, rootReducer } from "../config/store"

// Create an instance to get the types of the dispatch and reducer from store
const store = configStore()
export type AppDispatchType = typeof store.dispatch
export type RootStateType = ReturnType<typeof rootReducer>

// RTK Hooks 
export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector