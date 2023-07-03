import {configureStore} from '@reduxjs/toolkit'
import addCart from './slices/addCartSlice'
import {ingridientApi} from '../services/ingridientsApi'
import {ordersApi} from '../services/ordersApi'
import {registrationApi} from '../services/registrationApi'
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        addCart,
        [ingridientApi.reducerPath]: ingridientApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [registrationApi.reducerPath]: registrationApi.reducer,
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat([
        ingridientApi.middleware,
        ordersApi.middleware, 
        registrationApi.middleware
    ]),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch