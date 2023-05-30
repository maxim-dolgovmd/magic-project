import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addProduct: [],
    sumProduct: 0,
    activeIngr: false,
    product: [],
    activeOrder: false,
    deleteBun: [],
    activeCard: false,
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        setAddProduct(state, action) {
            console.log(action)
            // state.addProduct.unshift(action.payload)
            // state.addProduct.splice(1, 0, action.payload)
            {
                state.addProduct.map((obj) => {
                    // if (obj.type === 'Булки' && action.payload.type === 'Булки' && obj.nameItem !== action.payload.nameItem) {
                    if (obj.type === 'Булки' && action.payload.type === 'Булки' ) {
                        state.addProduct.splice(0, 1)
                        state.addProduct.splice(-1, 1)
                    }
                })
                if (action.payload.type === 'Булки') {
                    state.addProduct.push(action.payload)
                    state.addProduct.unshift(action.payload)
                    state.deleteBun.push(action.payload)
                }
                if (action.payload.type !== 'Булки') {
                    state.addProduct.splice(1, 0, action.payload)
                    state.deleteBun.push(action.payload)
                }
            }
            state.sumProduct += action.payload.price
            // state.deleteBun = state.addProduct
        },

        setDeleteBun(state, action) {
            state.addProduct.map((obj) => {
                if (obj.type === 'Булки' && action.payload.type === 'Булки') {
                    state.addProduct.splice(0, 1)
                    state.addProduct.splice(-1, 1)
                    // state.deleteBun.push(action.payload)
                } 
            })
        },

        setDeleteProduct(state, action) {
            // state.addProduct.splice(action.payload, 1);
            // if (action.payload !== 0 && action.payload !== state.addProduct[length-1]) {
            state.deleteBun?.map((obj) => {
                if (obj.type !== 'Булки' ) {
                    state.addProduct.splice(action.payload, 1);
                }
            })
            // if (state.deleteBun === false) {
            //     state.addProduct.splice(action.payload, 1);
            // }
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
        setActiveCard(state, action) {
            state.activeCard = action.payload
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
    setDeleteBun,
    setActiveCard,
} = cartSlice.actions

export default cartSlice.reducer