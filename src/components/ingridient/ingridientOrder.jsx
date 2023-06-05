import React from "react"
import styled from 'styled-components'

import Image from "next/image"
import { useSelector, useDispatch } from "react-redux";
import {setDeleteProduct, setDeletePrice, setDeleteBund} from '../../redux/slices/addCartSlice'


const Box = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    color: #F2F2F3;
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
`


const BoxName = styled.div`
    display: flex;
    width: 255px;
    justify-content: flex-start;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #F2F2F3;
`

const IngrOrder = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const BoxTitle = styled.div`
    display: flex;
    gap: 16px;
`



function IngridientOrder({
    photo,
    price,
    nameItem,
    amount,
}) {


    return (
        // <Wrapper> 
        <IngrOrder>
            <BoxTitle>
                <div>
                    <Image src={photo} width={64} height={64} alt="Crator" />
                </div>
                <BoxName>{nameItem}</BoxName>
            </BoxTitle>
            <Box>
                <div>{amount} x {price}</div>
                <Image src='/price.svg' width={24} height={24} alt="PriceSvg" />
            </Box>
        </IngrOrder>
        // </Wrapper>
    )
}

export default IngridientOrder