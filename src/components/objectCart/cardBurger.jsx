import React from "react";
import styled from 'styled-components'

import {harcodeIllustration} from '../json/hardcodeillustration'
import IngredientBurger from '../ingridient/ingridientBurger'

import { useSelector, useDispatch } from "react-redux";
import {setAddProduct} from '../../redux/slices/addCartSlice'



const BoxBorder = styled.div`
    display: flex;
    align-items: center;
    background: #1C1C21;
    border-radius: 40px;
    padding: 16px 24px;
    gap: 20px;

    ${(props) => {
        return props.borderFirst && {
            borderRadius: '88px 88px 40px 40px'
        }
    }};

    ${(props) => {
        return props.borderLast && {
            borderRadius: '40px 40px 88px 88px'
        }
    }};

`


const cardBurger = ({setDeleteIngrSum, deleteIngrSum}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const addProduct = useSelector((state) => state.addCart.addProduct)

    return addProduct.map((obj, index) => {
        // console.log(Object(obj))
        const firstElem = addProduct[0]
        const lastElem = addProduct[addProduct.length-1]
        
        return (
            // eslint-disable-next-line react/jsx-key
            <BoxBorder borderFirst={firstElem===obj.id} borderLast={lastElem===obj.id}>
                <IngredientBurger 
                    key={obj.id}
                    photo={obj?.mobilePhoto}
                    nameItem={obj?.nameItem}
                    price={obj?.price}
                    obj={obj}
                    border = {firstElem === obj.id }
                    index={index}
                    setDeleteIngrSum={setDeleteIngrSum}
                    deleteIngrSum={deleteIngrSum}
                /> 
            </BoxBorder>
        )
    }) 
}

export default cardBurger