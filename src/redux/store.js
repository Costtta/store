import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from './SliderSlice'
import productSlice from './ProductSlice'
import filterSlice from './FilterSlice'
import cartSlice from './CartSlice'

const store = configureStore({
    reducer: {
        slider: sliderSlice,
        products: productSlice,
        filter: filterSlice,
        cart: cartSlice
        }
})

export default store;