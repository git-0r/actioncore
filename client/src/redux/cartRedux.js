import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { userRequest } from "../requestMethods"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        updateCartFromDB: (state, action) => {
            state.products = action.payload.products;
            state.quantity = action.payload.quantity;
            state.total = action.payload.total
        },
        addProduct: (state, action) => {
            state.products = action.payload.products;
            state.quantity = action.payload.quantity;
            state.total = action.payload.total
        },
        removeProduct: (state, action) => {
            state.products = action.payload.products;
            state.quantity = action.payload.quantity;
            state.total = action.payload.total
        },
        clearCart: (state, action) => {
            state.quantity = 0;
            state.products = [];
            state.total = 0
        }
    }
})

export const { addProduct, removeProduct, clearCart, updateCartFromDB } = cartSlice.actions
export default cartSlice.reducer 