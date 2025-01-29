import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    initialState: null,
    name: 'menuSlice',
    reducers: {
        handleClick: (state, actions) => {
            return state = actions.payload
        },
        handleClose: (state) => {
            return state = null
        }
    }
})

export const {handleClick, handleClose} = menuSlice.actions;
export default menuSlice.reducer;