import {
    loginSuccess,
} from "./userRedux";
import { cartToDb, publicRequest, registrationRequest, userRequest } from "../requestMethods"


export const login = async (dispatch, user) => {
    try {
        const res = await publicRequest.post("/auth/login", user)
        localStorage.setItem("token", res.data.accessToken)
        dispatch(loginSuccess(res.data))

    } catch (error) {
    }
}

export const register = async (dispatch, user) => {
    await registrationRequest.post("/auth/register", user)
}

export const saveCartToDB = async (userId, updatedCart) => {
    await cartToDb.put(`/carts/${userId}`,
        { _id: userId, ...updatedCart },
        {
            headers: {
                token: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
}

export const getCartFromDb = async (userId) => {
    const cart = await userRequest(`/carts/find/${userId}`, {
        headers: {
            token: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return cart.data
}