import axios from "axios"

const BASE_URL = process.env.NODE_ENV === "production"
    ? "https://actioncore.herokuapp.com/api/"
    : "http://localhost:3001/api/"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
})

export const registrationRequest = axios.create({
    // baseURl: BASE_URL,
    baseURL: "http://localhost:3001/api/"
})

export const cartToDb = axios.create({
    baseURL: BASE_URL
})