import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addProduct: [],
    sumProduct: 0,
    activeIngr: false,
    product: [],
    activeOrder: false,
    // deleteBun: {
    //     index: 0,
    //     deleteObj: [],
    // },
    deleteBun: [],
    activeCard: false,
    deleteCount: [],
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        setAddProduct(state, action) {
                
                const isBundsType = action.payload.type === 'Булки'
                const hasBunds =  state.addProduct.find((product) => product.type === 'Булки')

                if (!hasBunds && isBundsType) {
                    state.addProduct.push(action.payload)
                    state.addProduct.push(action.payload)
                } 

                if (hasBunds && isBundsType) {
                    state.addProduct.splice(0, 1, action.payload)
                    state.addProduct.splice(-1, 1, action.payload)
                }

                if (hasBunds && !isBundsType) {
                    state.addProduct.splice(1, 0, action.payload)
                }

                state.sumProduct = state.addProduct.reduce((acc, cur) => acc + cur.price, 0)
                
        },

        setDeleteProduct(state, action) {

            const lengthProducts = state.addProduct.length
            const isBundsType = action.payload.type === 'Булки'

            if (lengthProducts === 2 && isBundsType) {
               state.addProduct = [] 
            }

            state.addProduct =  state.addProduct.filter((product, index, products) => {
                if (isBundsType) {
                    return true
                }
                return product.id !== action.payload.id
            })

            state.sumProduct = state.addProduct.reduce((acc, cur) => acc + cur.price, 0)
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

        setDeleteCount(state, action) {
            state.deleteCount.push(action.payload)
            // state.deleteCount = action.payload
            // console.log(state.deleteCount)
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
    setDeleteBund,
    setActiveCard,
    setDeleteCount,
} = cartSlice.actions

export default cartSlice.reducer