import {
    loginSuccess,
    registrationSuccess,
} from "./userRedux";
import { cartToDb, publicRequest, registrationRequest, userRequest } from "../requestMethods"
import { operationComplete } from "./statusRedux";


export const login = async (dispatch, user) => {
    // dispatch(loginStart())
    try {
        const res = await publicRequest.post("/auth/login", user)
        localStorage.setItem("token", res.data.accessToken)
        dispatch(loginSuccess(res.data))

    } catch (error) {
        // dispatch(loginFailure())
    }
}

export const register = async (dispatch, user) => {
    // dispatch(registrationStart())
    // try {
    // const res =
    await registrationRequest.post("/auth/register", user)
    // dispatch(registrationSuccess(res.data))
    // } catch (error) {
    // dispatch(registrationFailure())
    // }
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
    // try {
    const cart = await userRequest(`/carts/find/${userId}`, {
        headers: {
            token: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return cart.data
    // }
    // catch (error) {
    // console.log(error.message)
    // throw new Error(error.message)

    // throw error.message
    // }

}