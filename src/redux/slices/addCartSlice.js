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
    orderModal: [],
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        setAddProduct(state, action) {
                
                const isBundsType = action.payload.category === 'Булки'
                const hasBunds =  state.addProduct.find((product) => product.category === 'Булки')

                if (!hasBunds && isBundsType) {
                    state.addProduct.push(action.payload)
                    state.addProduct.push(action.payload)
                } 

                if (hasBunds && isBundsType) {
                    if (hasBunds.id === action.payload.id) {
                        window.alert('Нельзя выбрать больше одной пары булок')
                        return
                    }
                    state.addProduct.splice(0, 1, action.payload)
                    state.addProduct.splice(-1, 1, action.payload)
                    // window.alert('Нельзя выбрать больше одной пары булок')
                }

                if (hasBunds && !isBundsType) {
                    state.addProduct.splice(1, 0, action.payload)
                }

                state.sumProduct = state.addProduct.reduce((acc, cur) => acc + cur.price, 0)
                
        },

        setDeleteProduct(state, action) {

            const lengthProducts = state.addProduct.length
            const indexIngr = state.addProduct[action.payload]
            const isBundsType = indexIngr.category === 'Булки'

            if (lengthProducts === 2 && isBundsType) {
                state.addProduct = [] 
            }
            if (lengthProducts > 2 && isBundsType) {
                window.alert('Для удаления булок с корзины необходимо очистить содержимое бургера')
            }

            state.addProduct =  state.addProduct.filter((product, index, products) => {
                // console.log(product)
                if (isBundsType ) {
                    return true
                }
                return index !== action.payload
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

        setOrderModal(state, action) {
            state.orderModal = action.payload
        }

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
    setOrderModal,
} = cartSlice.actions

export default cartSlice.reducer