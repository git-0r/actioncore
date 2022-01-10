import { createSlice } from "@reduxjs/toolkit"

const statusSlice = createSlice({
    name: "status",
    initialState: {
        isFetching: false,
        error: false,
    },
    reducers: {
        operationStart: (state) => {
            state.isFetching = true;
        },
        operationComplete: (state) => {
            state.isFetching = false;
        },
        operatFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        operationErrorReset: (state) => {
            state.error = false;
        }
    }
})

export const {
    operationStart,
    operationComplete,
    operatFailed,
    operationErrorReset
} = statusSlice.actions
export default statusSlice.reducer 