import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: 'weather',
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

export const {fetchData} = weatherSlice.actions
export default weatherSlice.reducer