import { getCartFromDb } from "./redux/apiCalls"
import { store } from "./redux/store"

export const handleAddProduct = async (newProduct, userId) => {

    const state = store.getState()
    const prevCart = userId ? await getCartFromDb(userId) : state.cart
    const prevProducts = prevCart.products
    const prevQuantity = prevCart.quantity
    const prevTotal = prevCart.total
    const updatedCart = {
        products: [],
        quantity: 0,
        total: 0
    }
    updatedCart.total = prevTotal + (newProduct.price * newProduct.quantity)
    const alreadyInCart = prevProducts.find(product => product._id === newProduct._id)
    if (alreadyInCart) {
        prevProducts.forEach(product => {
            if (product._id === newProduct._id) {
                newProduct.quantity += product.quantity
                updatedCart.products.push(newProduct)
            } else {
                updatedCart.products.push(product)
            }
        });
        updatedCart.quantity = prevQuantity
    } else {
        updatedCart.products = [...prevProducts, newProduct]
        updatedCart.quantity = prevQuantity + 1
    }
    return updatedCart
}


export const handleRemoveProduct = async (productToBeRemoved, userId) => {
    const state = store.getState()
    const prevCart = userId ? await getCartFromDb(userId) : state.cart
    const prevProducts = prevCart.products
    const prevQuantity = prevCart.quantity
    const prevTotal = prevCart.total
    const updatedCart = {
        products: [],
        quantity: 0,
        total: 0
    }
    const productInCart = prevProducts.find(product => product._id === productToBeRemoved._id)
    if (productInCart.quantity > 1) {
        prevProducts.forEach(product => {
            if (product._id === productToBeRemoved._id) {
                productToBeRemoved.quantity = product.quantity - productToBeRemoved.quantity
                updatedCart.products.push(productToBeRemoved)
            } else {
                updatedCart.products.push(product)
            }
        })
        updatedCart.quantity = prevQuantity
    } else {
        updatedCart.products = prevProducts.filter(product => product._id !== productToBeRemoved._id)
        updatedCart.quantity = prevQuantity - 1
    }
    updatedCart.total = prevTotal - productToBeRemoved.price

    return updatedCart
}

