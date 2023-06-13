import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const API_URL = '/api'

export const ingridientApi = createApi({
    reducerPath: 'ingridientApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getIngridient: builder.query({
            query: (type) => {
                return {
                    url: `/ingredients?type=${type}`,
                    method: 'GET',
                }
            },
        }),
        postOrder: builder.mutation({
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
        getOrder: builder.query({
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
        PostRegistration: builder.mutation({
            query: ({username, email, password}) => {
                return {
                    url: '/register',
                    method: 'POST',
                    body: {
                        username,
                        email,
                        password,
                    }
                }
            }
        }),
        PostAuthorization: builder.mutation({
            query: ({username, password}) => {
                return {
                    url: '/auth',
                    method: 'POST',
                    body: {
                        username,
                        password,
                    },
                }
            }
        })

    })
})

export const {
    useGetIngridientQuery, 
    usePostOrderMutation, 
    useGetOrderQuery, 
    usePostRegistrationMutation,
    usePostAuthorizationMutation,
} = ingridientApi