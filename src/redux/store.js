import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from './SliderSlice'
import filterSlice from './FilterSlice'
import cartSlice from './CartSlice'

const store = configureStore({
    reducer: {
        slider: sliderSlice,
        filter: filterSlice,
        cart: cartSlice
        }
})

export default store;