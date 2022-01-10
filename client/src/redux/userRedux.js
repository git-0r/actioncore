import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;

        },
        logOut: (state, action) => {
            state.currentUser = null;
        },
        registrationSuccess: (state, action) => {
            state.currentUser = action.payload;
        },
    }
})

export const {
    logOut,
    loginSuccess,
    registrationSuccess
} = userSlice.actions
export default userSlice.reducer 