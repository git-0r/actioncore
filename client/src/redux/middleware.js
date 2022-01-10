import { store } from "../redux/store"
import { getCartFromDb } from "./apiCalls"
import { updateCartFromDB } from "./cartRedux"

const BASE_URL = process.env.NODE_ENV === "production"
    ? "https://actioncore.herokuapp.com/api"
    : "http://localhost:3001/api"


const middleWare = (store) => (next) => (action) => {
    // console.log("actionType ==>", action.type)

    if (action.type === "user/logOut") {
        localStorage.removeItem("token")
    }

    if (action.type === "user/loginSuccess") {
        const userId = action.payload._id
        getCartOnLogin(userId)
    }
    next(action)
}

async function getCartOnLogin(userId) {

    const cart = await getCartFromDb(userId)
    cart.quantity !== 0 && store.dispatch(updateCartFromDB(cart))
}

export default middleWare