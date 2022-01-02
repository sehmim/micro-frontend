import { Product } from './../../types/index';
import { createSlice } from '@reduxjs/toolkit'
import * as reducers from './reducers'
import { getProducts } from '../../services';


export interface ProductsStateType {
    products: Array<Product>
    loading: boolean
}

export const initialState: ProductsStateType = {
    products: [],
    loading: true
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state: ProductsStateType, action: any) => {
            state.products = action.payload
            state.loading = false
        })
    },
})

export const { filterProductsByTag, updateProductsList } = productsSlice.actions
export default productsSlice.reducer
