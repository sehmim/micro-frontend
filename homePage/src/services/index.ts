import { createAsyncThunk } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../types'

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_PRODUCTS_API }),
    endpoints: (builder) => ({
        getProductById: builder.query<Product, string>({
            query: (id) => `products/${id}`,
        }),

        getProducts: builder.query({
            query: () => `products`,
        }),
    }),
})

export const getProducts = createAsyncThunk(
    'fetchProducts',
    async () => {
        const response = await fetch(process.env.REACT_APP_PRODUCTS_API + '/products' as string)
        const result = await response.json()
        return result
    }
)