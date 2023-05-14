import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    addProduct: [],
    sumProduct: 0,
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        setAddProduct(state, action) {
            console.log(action)
            state.addProduct.unshift(action.payload)
            state.sumProduct += action.payload.price
        },

        setDeleteProduct(state, action) {
            state.addProduct.splice(action.payload, 1);
        },

        setDeletePrice(state, action) {
            state.sumProduct -= action.payload.price
        },
    }
})

export const {setAddProduct, setCount, setDeleteProduct, setDeletePrice} = cartSlice.actions

export default cartSlice.reducer