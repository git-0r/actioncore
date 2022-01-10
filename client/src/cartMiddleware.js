import { store } from "./redux/store"

export const handleAddProduct = (newProduct) => {

    const state = store.getState()
    const productsInCart = state.cart.products
    const quantity = state.cart.quantity
    const total = state.cart.total
    const updatedCart = {
        products: [],
        quantity: 0,
        total: 0
    }
    updatedCart.total = total + (newProduct.price * newProduct.quantity)
    const alreadyInCart = productsInCart.find(product => product._id === newProduct._id)
    if (alreadyInCart) {
        productsInCart.forEach(product => {
            if (product._id === newProduct._id) {
                newProduct.quantity += product.quantity
                updatedCart.products.push(newProduct)
            } else {
                updatedCart.products.push(product)
            }
        });
        updatedCart.quantity = quantity
    } else {
        updatedCart.products = [...productsInCart, newProduct]
        updatedCart.quantity = quantity + 1
    }
    return updatedCart
}


export const handleRemoveProduct = (productToBeRemoved) => {
    const state = store.getState()
    const productsInCart = state.cart.products
    const quantity = state.cart.quantity
    const total = state.cart.total
    const updatedCart = {
        products: [],
        quantity: 0,
        total: 0
    }
    const productInCart = productsInCart.find(product => product._id === productToBeRemoved._id)
    if (productInCart.quantity > 1) {
        productsInCart.forEach(product => {
            if (product._id === productToBeRemoved._id) {
                productToBeRemoved.quantity = product.quantity - productToBeRemoved.quantity
                updatedCart.products.push(productToBeRemoved)
            } else {
                updatedCart.products.push(product)
            }
        })
        updatedCart.quantity = quantity
    } else {
        updatedCart.products = productsInCart.filter(product => product._id !== productToBeRemoved._id)
        updatedCart.quantity = quantity - 1
    }
    updatedCart.total = total - productToBeRemoved.price

    return updatedCart
}

