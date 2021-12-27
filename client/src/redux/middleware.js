import axios from "axios"
import { store } from "../redux/store"
import { updateCartFromDB } from "./cartRedux"

const BASE_URL = "https://actioncore.herokuapp.com/api"
// const BASE_URL = "http://localhost:3001/api"


const middleWare = (store) => (next) => (action) => {
    // console.log("actionType ==>", action.type)

    if (action.type === "user/logOut") {
        localStorage.removeItem("token")
    }

    if (action.type === "cart/addProduct") {
        const state = store.getState()
        const userId = state.user.currentUser._id
        const productsInCart = state.cart.products
        const quantity = state.cart.quantity
        const total = state.cart.total
        const newProduct = action.payload
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
        if (state.user) {
            saveCartToDB(userId, updatedCart)
        }
        action.payload = updatedCart
    }

    if (action.type === "cart/removeProduct") {
        const state = store.getState()
        const userId = state.user.currentUser._id
        const productsInCart = state.cart.products
        const quantity = state.cart.quantity
        const total = state.cart.total
        const productToBeRemoved = action.payload
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
        if (state.user) {
            saveCartToDB(userId, updatedCart)
        }
        action.payload = updatedCart
    }

    if (action.type === "user/loginSuccess") {
        const userId = action.payload._id
        getCartOnLogin(userId)
    }
    next(action)
}

async function saveCartToDB(userId, updatedCart) {
    await axios.put(`${BASE_URL}/carts/${userId}`,
        { _id: userId, ...updatedCart },
        {
            headers: {
                token: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
}

async function getCartOnLogin(userId) {
    const cart = await axios.get(`${BASE_URL}/carts/find/${userId}`, {
        headers: {
            token: `Bearer ${localStorage.getItem("token")}`
        }
    })
    store.dispatch(updateCartFromDB(cart.data))
}

export default middleWare