import React from "react";
import styled from 'styled-components'
import Image from 'next/image'

const OrderBlock = styled.div`
    padding: 24px;
    /* width: 844px; */
    /* height: 246px; */
    background-color: #1C1C21;
    box-shadow: 
        0px 4px 8px rgba(0, 0, 0, 0.04), 
        0px 0px 2px rgba(0, 0, 0, 0.06), 
        0px 0px 1px rgba(0, 0, 0, 0.04)
    ;
    border-radius: 40px;
    color: #F2F2F3;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const OrderNumber = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`

const Number = styled.div`
    font-weight: 400;
    font-size: 28px;
    line-height: 24px;
`

const TimeOrder = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #8585AD;
    padding-left: 20px;
`

const StatusOrder = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 8px;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`

const Status = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`

const ImageOrders = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: relative; */
    /* text-align: center; */
`

const ImageBlock = styled.div`
    /* position: relative; */
    display: flex;
`

const PriceSum = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

const Price = styled.div`
    font-weight: 400;
    font-size: 28px;
    line-height: 24px;
    padding-left: 20px;
`

const ImageBox = styled.div`
    /* position: absolute; */
    /* bottom: 0; */
    position: relative;
    
    :first-child {
        top: 0;
        left: 0;
        z-index: 10;
    }
    :nth-child(2) {
        z-index: 9;
        top: 0;
        right: 16px;
    }
    :nth-child(3) {
        z-index: 8;
        top: 0;
        right: 32px;
    }
    :nth-child(4) {
        z-index: 7;
        top: 0;
        right: 48px;
    }
    :nth-child(5) {
        z-index: 6;
        top: 0;
        right: 64px;
    }
`


const CardOrder = () => {
    return (
        <OrderBlock>
            <OrderNumber>
                <Number>#034534</Number>
                <TimeOrder>Сегодня, 13:20</TimeOrder>
            </OrderNumber>
            <StatusOrder>
                <Title>Interstellar бургер</Title>
                <Status>Готовится</Status>
            </StatusOrder>
            <ImageOrders>
                <ImageBlock>
                    <ImageBox>
                        <Image src="/illustration/crator/cratorPreview.png" width={64} height={64} alt="Preview" />
                    </ImageBox>
                    <ImageBox>
                        <Image src="/illustration/crystals/crystalsPreview.png" width={64} height={64} alt="Preview" />
                    </ImageBox>
                    <ImageBox>
                        <Image src="/illustration/file/filePreview.png" width={64} height={64} alt="Preview" />
                    </ImageBox>
                    <ImageBox>
                        <Image src="/illustration/salad/saladPreview.png" width={64} height={64} alt="Preview" />
                    </ImageBox>
                    <ImageBox>
                        <Image src="/illustration/spiceSauce/spiceSaucePreview.png" width={64} height={64} alt="Preview" />
                    </ImageBox>
                </ImageBlock>
                <PriceSum>
                    <Price>560</Price>
                    <Image src="/price.svg" width={24} height={24} alt="PriceSvg" />
                </PriceSum>
            </ImageOrders>
        </OrderBlock>
    )
}

export default CardOrder