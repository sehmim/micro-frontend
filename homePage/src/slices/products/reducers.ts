import { PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../../types"
import { ProductsStateType } from "./productsSlice"

export const filterProductsByTag = (state: ProductsStateType, { payload }: PayloadAction<keyof Product>) => {
    const prevProducts = state.products
    let newProducts: Product[] = []

    prevProducts.map(product => {
        if (product.supports.includes(payload)) {
            newProducts = [...newProducts, product]
        }
    })

    state.products = newProducts
}


export const updateProductsList = (state: ProductsStateType, { payload }: PayloadAction<Product[]>) => {
    console.log("payload", payload)
    state.products = payload
}