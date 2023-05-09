import React from "react"
import styled from 'styled-components'

import Image from "next/image"


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
    quantity,
}) {

    return (
        <Wrapper>
            <Block>
                <BoxImage>
                    <div>
                        <Image src={photo} width={240} height={120} alt="Crator" unoptimized />
                    </div>
                
                    <Counter>
                        {quantity}
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