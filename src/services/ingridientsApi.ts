import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IIngredient } from '../redux/slices/addCartSlice'

const API_URL = '/api'

export const ingridientApi = createApi({
    reducerPath: 'ingridientApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        getIngridient: builder.query<IIngredient[], string>({
            query: (type) => {
                return {
                    url: `/ingredients?type=${type}`,
                    method: 'GET',
                }
            },
        }),
    })
})

export const {
    useGetIngridientQuery, 
} = ingridientApi