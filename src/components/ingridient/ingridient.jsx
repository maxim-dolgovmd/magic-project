import React from "react"
import styled from 'styled-components'

import Image from "next/image"

import { useSelector, useDispatch } from "react-redux";

import {setAddProduct} from '../../redux/slices/addCartSlice'


const Wrapper = styled.div`
    display: flex;
`

const Block = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
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
    position: relative;
`


const Counter = styled.div`
    position: absolute;
    top: 0;
    right: 0px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #4C4CFF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F2F2F3;
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
    cursor: pointer;
`

const BoxName = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #F2F2F3;
`


function Ingridient({
    photo,
    price,
    nameItem,
    setAddProduc,
    objIngredient,
    deleteIngrSum,
}) {

    const [count, setCount] = React.useState(0)

    // const count = useSelector((state) => state.addCart.count)

    const addProduct = useSelector((state) => state.addCart.addProduct)
    const dispatch = useDispatch()

    const addProductCart = (prev) => {
        setCount(prev+1)
        dispatch(setAddProduct(objIngredient))
        console.log(deleteIngrSum)
    }

    // console.log(addProduct.nameItem)

    return (
        <Wrapper>
            <Block>
                <BoxImage>
                    <div>
                        <Image src={photo} width={240} height={120} alt="Crator" unoptimized />
                    </div>
                
                    <Counter onClick={() => addProductCart(count)}>
                        {count}
                    </Counter>
                </BoxImage>
                <Box>
                    <div>{price}</div>
                    <Image src='/price.svg' width={24} height={24} alt="PriceSvg" />
                </Box>
                <BoxName>{nameItem}</BoxName>
            </Block>
        </Wrapper>
    )
}

export default Ingridient