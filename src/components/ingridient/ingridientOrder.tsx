import React from "react"
import styled from 'styled-components'

import Image from "next/image"


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

type IngridientTypeOrders = {
    photo: string,
    price: number,
    nameItem: string,
    quantity: number
}

const IngridientOrder: React.FC<IngridientTypeOrders> = ({
    photo,
    price,
    nameItem,
    quantity,
}) => {


    return (
        <IngrOrder>
            <BoxTitle>
                <div>
                    <Image src={photo} width={64} height={64} alt="Crator" />
                </div>
                <BoxName>{nameItem}</BoxName>
            </BoxTitle>
            <Box>
                <div>{quantity} x {price}</div>
                <Image src='/price.svg' width={24} height={24} alt="PriceSvg" />
            </Box>
        </IngrOrder>
    )
}

export default IngridientOrder