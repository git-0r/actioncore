import {
    loginFailure,
    loginStart,
    loginSuccess,
    registrationStart,
    registrationSuccess,
    registrationFailure,
} from "./userRedux";
import { publicRequest, registrationRequest } from "../requestMethods"


export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("/auth/login", user)
        localStorage.setItem("token", res.data.accessToken)
        console.log(localStorage.getItem("token"))
        // console.log(res.data)
        dispatch(loginSuccess(res.data))

    } catch (error) {
        console.log(error)
        // dispatch(loginFailure())
    }
}

export const register = async (dispatch, user) => {
    dispatch(registrationStart())
    try {
        const res = await registrationRequest.post("/auth/register", user)
        dispatch(registrationSuccess(res.data))
    } catch (error) {
        dispatch(registrationFailure())
    }
}