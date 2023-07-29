import {PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { CardFromLockalStorage } from '../../utils/cardFromLockalStorage';

export interface IIngredient {
    id: number,
    largePhotoUrl: string,
    normalPhotoUrl: string,
    mobilePhotoUrl: string,
    previewPhotoUrl: string,
    price: number,
    name: string,
    category: string,
    quantity: number,
}

// type StatusTypeEn = 'ready' | 'in preparation' | 'handed over to courier' | 'canceled' | 'closed';
export type StatusType = 'Закрытые' | 'Отмененные' | 'Переданные курьеру' | 'в работе' | 'готовые';
  
export interface Order {
    order_number: number;
    date_created: string;
    name: string;
    price: number;
    status: StatusType;
    ingredients: IIngredient[];
}

export type OrderIngridients = {
    category: string,
    id: number,
    largePhotoUrl: string,
    mobilePhotoUrl: string,
    name: string,
    normalPhotoUrl: string,
    previewPhotoUrl: string,
    price: number,
    quantity: number,
  }
  
export interface IngredientPropsTypes {
    photo: string,
    price: number,
    nameItem: string,
    objIngredient: OrderIngridients,
    hasBunds?: OrderIngridients,
    addMap: number,
  }

interface InitialStateType {
    addProduct: IIngredient[],
    sumProduct: number,
    activeIngr: boolean,
    product: any,
    activeOrder: boolean,
    activeCard: boolean,
    orderModal: Order[],
    isMenuClicked: boolean,
    cartActive: boolean,
}

const initialState: InitialStateType = {
    addProduct: [],
    sumProduct: 0,
    activeIngr: false,
    product: [],
    activeOrder: false,
    activeCard: false,
    orderModal: [],
    isMenuClicked: false,
    cartActive: false,
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        setAddProduct(state, action: PayloadAction<IIngredient>) {
                
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

        setDeleteProduct(state, action: PayloadAction<number>) {

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

        

        setActiveIngr(state, action: PayloadAction<boolean>) {
            state.activeIngr = action.payload
        },

        setActiveOrder(state, action: PayloadAction<boolean>) {
            state.activeOrder = action.payload
        },

        setProductInfo(state, action: PayloadAction<any>) {
            state.product = action.payload
        },

        setDeleteOrder(state) {
            state.addProduct = []
            state.sumProduct = 0
        },

        setOrderModal(state, action: PayloadAction<any>) {
            state.orderModal = action.payload
        },

        setIsMenuClicked(state, action: PayloadAction<boolean>) {
            if (action.payload) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'auto'
            }
            state.isMenuClicked = action.payload
        },

        setCartActive(state, action: PayloadAction<boolean>) {
            state.cartActive = action.payload
        },

    }
})

export const {
    setAddProduct,
    setDeleteProduct,
    setActiveIngr,
    setProductInfo,
    setActiveOrder,
    setDeleteOrder,
    setOrderModal,
    setIsMenuClicked,
    setCartActive,
} = cartSlice.actions

export const AddProductSelect = (state: RootState) => state.addCart.addProduct

export const ProductSelect = (state: RootState) => state.addCart.product

export const AddCartSelect = (state: RootState) => state.addCart

export default cartSlice.reducer