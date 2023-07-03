import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface UserAuthType {
    username: string,
    password: string,
}

export interface UserRegisrType {
    email: string,
    username: string,
    password: string,
}

const API_URL = '/api'

export const registrationApi = createApi({
    reducerPath: 'registrationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        PostRegistration: builder.mutation<null, UserRegisrType>({
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
        PostAuthorization: builder.mutation<null, UserAuthType>({
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
    usePostRegistrationMutation,
    usePostAuthorizationMutation,
} = registrationApi