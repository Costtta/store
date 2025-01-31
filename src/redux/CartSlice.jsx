import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState: [],
    name: 'cartSlice',
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        deleteFromCart: (state, action) => {
            return state.filter((index) => index.id !== action.payload.id)
        },
        clearAll: (state) => {
            return state = []
        }
    }
})

export const {addToCart, deleteFromCart, clearAll} = cartSlice.actions
export default cartSlice.reducer;