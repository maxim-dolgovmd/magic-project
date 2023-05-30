import React from "react"
import styled from 'styled-components'

import Image from "next/image"
import { useSelector, useDispatch } from "react-redux";
import {setDeleteProduct, setDeletePrice, setDeleteBun} from '../../redux/slices/addCartSlice'

const Wrapper = styled.div`
    display: flex;
    gap: 16px;
`

const BlockFirst = styled.div`
    display: flex;
    align-items: center;
    background: #1C1C21;
    border-radius: 40px;
    padding: 16px 24px;
    gap: 20px;

    ${(props) => {
        return props.border && {
            borderRadius: '88px 88px 40px 40px'
        }
    }};

`

const Block = styled.div`
    display: flex;
    align-items: center;
    background: #1C1C21;
    border-radius: 88px 88px 40px 40px;
    padding: 16px 24px;
    gap: 20px;
`

const BlockLast = styled.div`
    display: flex;
    align-items: center;
    background: #1C1C21;
    border-radius: 88px 88px 40px 40px;
    padding: 16px 24px;
    gap: 20px;
`

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

const BoxImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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




function IngridientBurger({
    photo,
    price,
    nameItem,
    obj,
    border,
    index,
    setDeleteIngrSum,
    deleteIngrSum,
}) {

    const dispatch = useDispatch()

    const deleteProduct = useSelector((state) => state.addCart.deleteProduct)
    const addProduct = useSelector((state) => state.addCart.addProduct)
    const deleteBun = useSelector((state) => state.addCart.deleteBun)
    console.log('addProduct', addProduct, 'deleteBun', deleteBun)

    const deleteIngr = (iter) => {
        dispatch(setDeleteProduct(iter))
        dispatch(setDeleteBun(obj))
        dispatch(setDeletePrice(obj))
        setDeleteIngrSum(deleteIngrSum-1)
        // console.log(deleteIngrSum)
    }


    return (
        // <Wrapper> 
        <>
            <div>
                <Image src={photo} width={80} height={40} alt="Crator" />
            </div>
            <BoxName>{nameItem}</BoxName>
            <Box>
                <div>{price}</div>
                <Image src='/price.svg' width={24} height={24} alt="PriceSvg" />
            </Box>
            <BoxImage onClick={() => deleteIngr(index)}>
                <Image src='/block.svg' width={24} height={24} alt="Block" />
            </BoxImage>
        </>
        // </Wrapper>
    )
}

export default IngridientBurger