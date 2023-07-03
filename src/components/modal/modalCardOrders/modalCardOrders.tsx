import React from "react";
import styled from 'styled-components'

import { useDispatch } from "react-redux";
import IngridientOrder from "../../ingridient/ingridientOrder";
import Image from "next/image";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Order } from "@/components/redux/slices/addCartSlice";

const Window = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-Index: 200;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
`

const OrderContent = styled.h1`
    max-width: 718px;
    background:  rgba(0,0,0,1);
    border: 1px solid  rgba(0,0,0,1);
    display: flex;
`

const BlockOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;

  color: #f2f2f3;
`;

const TimeOrder = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8585ad;
`;

const PriceSum = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Price = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  padding-left: 20px;
`;

const Identificator = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
`

const BlockStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding-top: 40px;
    padding-bottom: 60px;
`

const StatusTitle = styled.div`
    font-weight: 700;
    font-size: 28px;
    line-height: 30px;
`

const Status = styled.div`
    color: #00CCCC;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`

const CompoundBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 40px;
    max-width: 100%;
`

const CompoundTitle = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`

const BoxCompound = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 24px;
    gap: 16px;
    height: 300px;
`

const BoxTime = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

interface IIngredientPreviewType {
previewPhotoUrl: string,
price: number,
name: string,
quantity: number
}

const ModalCardOrder: React.FC<Order> = (props) => {

    const order = Object.values(props)[0]

    const dateOrder = order?.date_created?.split('T', 1)
    const timeOrderStr = order?.date_created?.split('T', 2)[1].split(':', 2).join(":")


    return (
        <Window >
            <OrderContent onClick={(e) => e.stopPropagation()}>
                <BlockOrder>
                    <Identificator>#{order.order_number}</Identificator>
                    <BlockStatus>
                        <StatusTitle>{order.name}</StatusTitle>
                        <Status>{order.status}</Status>
                    </BlockStatus>
                    <CompoundBlock>
                        <CompoundTitle>Состав:</CompoundTitle>
                        <OverlayScrollbarsComponent>
                            <BoxCompound>
                                {
                                    order?.ingredients?.map((obj: IIngredientPreviewType) => {
                                        return (
                                            <>
                                                <IngridientOrder 
                                                    photo={obj.previewPhotoUrl}
                                                    price={obj.price}
                                                    nameItem={obj.name}
                                                    quantity={obj.quantity}
                                                />
                                            </>
                                        )
                                    })
                                }
                            </BoxCompound>
                        </OverlayScrollbarsComponent>
                    </CompoundBlock>
                    <BoxTime>
                        <TimeOrder> {dateOrder}, {timeOrderStr}</TimeOrder>
                        <PriceSum>
                            <Price>{order?.price}</Price>
                            <Image src="/price.svg" width={24} height={24} alt="PriceSvg" />
                        </PriceSum>
                    </BoxTime>
                </BlockOrder>
            </OrderContent>
        </Window>
    )
}

export default ModalCardOrder