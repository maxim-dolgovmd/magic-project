import React from "react";
import styled from 'styled-components'

import Modal from '../modal'
import {setActiveCard} from '../../../redux/slices/addCartSlice'
import { useSelector, useDispatch } from "react-redux";

import { harcodeIllustration } from "../../json/hardcodeillustration";
import IngridientOrder from "../../ingridient/ingridientOrder";
import Image from "next/image";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

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
    /* height: 720px; */
    max-width: 718px;
    background:  rgba(0,0,0,1);
    border: 1px solid  rgba(0,0,0,1);
    /* box-shadow: 
        0px 24px 32px rgba(0, 0, 0, 0.04), 
        0px 16px 24px rgba(0, 0, 0, 0.04),
        0px 4px 8px rgba(0, 0, 0, 0.04),
        0px 0px 1px rgba(0, 0, 0, 0.04); */
    /* border-radius: 40px; */
    display: flex;
    /* justify-content: center; */
`

const BlockOrder = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
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

const BlockIngrOrder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 100%; */
`

const BoxCompound = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 24px;
    gap: 16px;
    height: 300px;
    /* max-width: 100%; */
`

const BoxTime = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


function ModalCardOrder({order}) {
    const dispatch = useDispatch()
    const activeModal = () => {
        dispatch(setActiveCard(false))
    }

    const priceOrder = order.reduce((acum, obj) => acum + (obj.price * obj.amount), 0)
    console.log(priceOrder)

    return (
        <Window onClick={activeModal}>
            <OrderContent onClick={(e) => e.stopPropagation()}>
                <BlockOrder>
                    <Identificator>#5999434</Identificator>
                    <BlockStatus>
                        <StatusTitle>Black Hole Singularity острый бургер</StatusTitle>
                        <Status>Выполнен</Status>
                    </BlockStatus>
                    <CompoundBlock>
                        <CompoundTitle>Состав:</CompoundTitle>
                        <OverlayScrollbarsComponent>
                            <BoxCompound>
                                {
                                    order.map((obj) => {
                                        return (
                                            <>
                                                <IngridientOrder 
                                                    photo={obj.previewPhoto}
                                                    price={obj.price}
                                                    nameItem={obj.nameItem}
                                                    amount={obj.amount}
                                                />
                                            </>
                                        )
                                    })
                                }
                            </BoxCompound>
                        </OverlayScrollbarsComponent>
                    </CompoundBlock>
                    <BoxTime>
                        <TimeOrder>Сегодня, 13:20</TimeOrder>
                        <PriceSum>
                            <Price>{priceOrder}</Price>
                            <Image src="/price.svg" width={24} height={24} alt="PriceSvg" />
                        </PriceSum>
                    </BoxTime>
                </BlockOrder>
            </OrderContent>
        </Window>
    )
}

export default ModalCardOrder