import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
        isFetching: true,
        error: false,
    },
    reducers: {
        updateCartFromDB: (state, action) => {
            state.products = action.payload.products;
            state.quantity = action.payload.quantity;
            state.total = action.payload.total
        },
        addProductStart: (state) => {
            state.isFetching = true
        },
        addProductSuccess: (state, action) => {
            state.products = action.payload.products;
            state.quantity = action.payload.quantity;
            state.total = action.payload.total;
            state.isFetching = false
        },
        addProductFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
        removeProductStart: (state) => {
            state.isFetching = true;
        },
        removeProductSuccess: (state, action) => {
            state.products = action.payload.products;
            state.quantity = action.payload.quantity;
            state.total = action.payload.total
            state.isFetching = false;
        },
        removeProductFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
        clearCart: (state, action) => {
            state.quantity = 0;
            state.products = [];
            state.total = 0;
            state.isFetching = false;
            state.error = false
        }
    }
})

export const {
    addProductStart,
    addProductSuccess,
    addProductFailure,
    removeProductStart,
    removeProductSuccess,
    removeProductFailure,
    clearCart,
    updateCartFromDB
} = cartSlice.actions
export default cartSlice.reducer 