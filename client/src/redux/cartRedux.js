import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            const newProduct = action.payload
            const alreadyInCart = state.products.find(product => product._id === newProduct._id)
            if (alreadyInCart) {
                state.products = state.products.map(product => {
                    if (product._id === newProduct._id) {
                        product.quantity += newProduct.quantity
                        return product
                    } else {
                        return product
                    }
                })
            } else {
                state.products.push(action.payload);
                state.quantity += 1;
            }
            state.total += action.payload.price * action.payload.quantity
        },
        removeProduct: (state, action) => {
            const productToBeRemoved = action.payload
            const productInCart = state.products.find(product => product._id === productToBeRemoved._id)
            if (productInCart.quantity > 1) {
                state.products = state.products.map(product => {
                    if (product._id === productToBeRemoved._id) {
                        product.quantity -= 1
                        return product
                    } else {
                        return product
                    }
                })
            } else {
                state.products = state.products.filter(product => product._id !== productToBeRemoved._id)
                state.quantity -= 1
            }
            state.total -= action.payload.price
        },
        clearCart: (state, action) => {
            state.quantity = 0;
            state.products = [];
            state.total = 0
        }
    }
})

export const { addProduct, removeProduct, clearCart } = cartSlice.actions
export default cartSlice.reducer 