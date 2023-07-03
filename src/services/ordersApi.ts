import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IIngredient, Order } from '../redux/slices/addCartSlice'

interface PostMutationType {
    role: string,
    addProduct: IIngredient[],
}

interface GetQueryType {
    limit: string,
    offset: string,
    role: string,
}

interface ParamsDataType {
    offset: string,
    orders: Order[],
    limit: string,
}

const API_URL = '/api'

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        postOrder: builder.mutation<null, PostMutationType>({
            query: ({role, addProduct}) => {
                return {
                    url: '/orders',
                    method: 'POST',
                    headers: {
                        authorization: 'Bearer.access_token',
                        role: role,
                    },
                    body: {
                        name: 'заказ 1',
                        ingredients: addProduct,
                    },
                }
            },
            invalidatesTags: ['User'],
        }),
        getOrder: builder.query<ParamsDataType, GetQueryType>({
            query: ({limit, offset, role}) => {
                return {
                    url: `/orders?limit=${limit}&offset=${offset}`,
                    method: 'GET',
                    headers: {
                        authorization: 'Bearer.access_token',
                        role: role,
                    },
                }
            },
            providesTags: ['User'],
        }),
    })
})

export const {
    usePostOrderMutation, 
    useGetOrderQuery, 
} = ordersApi