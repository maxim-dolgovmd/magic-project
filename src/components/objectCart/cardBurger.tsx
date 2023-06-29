import React from "react";
import styled from 'styled-components'

import {harcodeIllustration} from '../json/hardcodeillustration'
import IngredientBurger from '../ingridient/ingridientBurger'

import { useSelector, useDispatch } from "react-redux";
import {AddProductSelect, setAddProduct} from '../../redux/slices/addCartSlice'

type BorderType = {
    borderFirst: boolean,
    borderLast: boolean,
}

const BoxBorder = styled.div`
    display: flex;
    align-items: center;
    background: #1C1C21;
    border-radius: 40px;
    padding: 16px 24px;
    gap: 20px;

    ${(props: BorderType) => {
        if (props.borderFirst) {
            return props.borderFirst && {
            borderRadius: '88px 88px 40px 40px'
        }
        }
        if (props.borderLast) {
            return props.borderLast && {
            borderRadius: '40px 40px 88px 88px'
        }
        }
    }};

`

type IngridientTypeBurgers = {
    id: string,
    mobilePhotoUrl: string,
    price: number,
    name: string,
    category: string
}

const cardBurger = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const addProduct = useSelector(AddProductSelect)

    return addProduct.map((obj: IngridientTypeBurgers, index: number) => {
      
        return (
            // eslint-disable-next-line react/jsx-key
            <BoxBorder borderFirst={index===0 && obj.category === 'Булки'} borderLast={index === addProduct.length-1 && obj.category === 'Булки'}>
                <IngredientBurger 
                    key={obj.id}
                    photo={obj?.mobilePhotoUrl}
                    nameItem={obj?.name}
                    price={obj?.price}
                    index={index}
                /> 
            </BoxBorder>
        )
    }) 
}

export default cardBurger