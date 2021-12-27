import axios from "axios"

// const BASE_URL = "http://localhost:3001/api/"
const BASE_URL = "http://actioncore.herokuapp.com/api/"
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWNmMjk2MTNiZjYzZjYxN2QxYWM0MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTE0NzAxMSwiZXhwIjoxNjM5NDA2MjExfQ.HVrZQpGUAzVeIg4m9DMH6oV4BG8OQlGnYABi1tj7veI"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
})

export const registrationRequest = axios.create({
    baseURl: BASE_URL
})