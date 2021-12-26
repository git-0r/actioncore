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
        dispatch(loginSuccess(res.data))

    } catch (error) {
        dispatch(loginFailure())
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