import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 10,
        data: []
    },
    reducers: {
        fetchData: (state, {payload}) => {
            state.data = payload
        }
    }
})

export const {fetchData} = counterSlice.actions
export default counterSlice.reducer