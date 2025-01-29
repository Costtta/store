import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../assets/Fake Data/FakeData";

const filterSlice = createSlice({
    initialState: {
        data: storeData,
        needed: ''
    },
    name: 'filterSlice',
    reducers: {
        male: (state) => {
            const result = storeData.filter((index) => index.gender === 'male')
            state.data = result
        },
        female: (state) => {
            const result = storeData.filter((index) => index.gender === 'female')
            state.data = result
        },
        highPrice: (state) => {
            state.data.sort((a, b) => {
                return b.price - a.price
            })
        },
        lowPrice: (state) => {
            state.data.sort((a, b) => {
                return a.price - b.price
            })
        },
        colorRed: (state) => {
            const result = storeData.filter((index) => index.color.includes('red'))
            state.data = result
        },
        colorGreen: (state) => {
            const result = storeData.filter((index) => index.color.includes('green'))
            state.data = result
        },
        colorPurple: (state) => {
            const result = storeData.filter((index) => index.color.includes('purple'))
            state.data = result
        },
        colorYellow: (state) => {
            const result = storeData.filter((index) => index.color.includes('yellow'))
            state.data = result
        },
        colorOrange: (state) => {
            const result = storeData.filter((index) => index.color.includes('orange'))
            state.data = result
        },
        colorBlue: (state) => {
            const result = storeData.filter((index) => index.color.includes('blue'))
            state.data = result
        },
        colorBlack: (state) => {
            const result = storeData.filter((index) => index.color.includes('black'))
            state.data = result
        },
        colorBrown: (state) => {
            const result = storeData.filter((index) => index.color.includes('brown'))
            state.data = result
        },
        clearFilter: (state) => {
            state.data = storeData;
        }
    }
})

export const {male, female, highPrice, lowPrice, colorRed, colorGreen, colorPurple, colorYellow, colorBlack, colorBlue, colorBrown, colorOrange, size, clearFilter} = filterSlice.actions;
export default filterSlice.reducer;