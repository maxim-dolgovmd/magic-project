import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addProduct: [],
    sumProduct: 0,
    activeIngr: false,
    product: [],
    activeOrder: false,
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

        setActiveIngr(state, action) {
            state.activeIngr = action.payload
        },

        setActiveOrder(state, action) {
            state.activeOrder = action.payload
        },

        setProductInfo(state, action) {
            state.product = action.payload
        },

        setOrder(state, action) {
            state.addProduct = action.payload
        },
        setDeletePriceCart(state, action) {
            state.sumProduct = action.payload
        },
    }
})

export const {
    setAddProduct,
    setCount,
    setDeleteProduct,
    setDeletePrice,
    setActiveIngr,
    setProductInfo,
    setActiveOrder,
    setOrder,
    setDeletePriceCart,
} = cartSlice.actions

export default cartSlice.reducer