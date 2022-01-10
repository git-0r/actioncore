import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        updateCartFromDB: (state, action) => {
            state.products = action.payload.products;
            state.quantity = action.payload.quantity;
            state.total = action.payload.total
        },
        addProductSuccess: (state, action) => {
            state.products = action.payload.products;
            state.quantity = action.payload.quantity;
            state.total = action.payload.total;
        },
        removeProductSuccess: (state, action) => {
            state.products = action.payload.products;
            state.quantity = action.payload.quantity;
            state.total = action.payload.total
        },
        clearCart: (state, action) => {
            state.quantity = 0;
            state.products = [];
            state.total = 0;
        }
    }
})

export const {
    addProductSuccess,
    removeProductSuccess,
    clearCart,
    updateCartFromDB
} = cartSlice.actions
export default cartSlice.reducer 