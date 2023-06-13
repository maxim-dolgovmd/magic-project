import {configureStore} from '@reduxjs/toolkit'
import addCart from '../redux/slices/addCartSlice'
import {ingridientApi} from '../services/ingridientsApi'

export const store = configureStore({
    reducer: {
        addCart,
        [ingridientApi.reducerPath]: ingridientApi.reducer,
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(ingridientApi.middleware)
})