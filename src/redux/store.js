import {configureStore} from '@reduxjs/toolkit'
import addCart from '../redux/slices/addCartSlice'

export const store = configureStore({
    reducer: {
        addCart,
    },
})