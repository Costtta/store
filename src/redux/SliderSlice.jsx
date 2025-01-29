import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
    initialState: {
        value: 0,
        length: 4
    },
    name: 'sliderSlice',
    reducers: {
        nextSlide: (state, actions) => {
            state.value = actions.payload > state.length -1 ? 0 : actions.payload;
        },
        prevSlide: (state, actions) => {
            state.value = actions.payload < 0 ? state.length -1 : actions.payload;
        },
        dotSlide: () => {}
    }
})

export const {nextSlide, prevSlide, dotSlide} = sliderSlice.actions
export default sliderSlice.reducer;