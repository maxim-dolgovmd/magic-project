import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Link from "next/link";

import Close from '../../../public/closeIcon.svg'
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/components/redux/store";
import Image from "next/image";
import Button from "@/components/components/button/button";

import {
    setActiveOrder,
    setDeleteOrder,
    AddCartSelect,
    setCartActive,
} from "../../redux/slices/addCartSlice";
import { usePostOrderMutation } from "@/components/services/ordersApi";
import CardBurger from "@/components/components/objectCart/cardBurger";
import IngridientBurger from "@/components/components/ingridient/ingridientBurger";
import { device } from "@/components/components/device/device";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import useDeviceHeight from "@/components/utils/useDeviceHeight";


const Window = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #131316;
    display: flex;
    /* padding: 0px 15px; */
    z-index: 301;

    /* @media ${device.mobileL} {
        padding: 0px;
    } */
`

const Block = styled.div`
    /* margin: 32px 0 16px 0; */
    width: 100%;
`

const BoxHeader = styled.div`
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;

    /* @media ${device.mobileL} {
        padding: 16px;
    } */
`

const TitleMenu = styled.div`
    font-weight: 700;
    font-size: 28px;
    font-family: 'JetBrains Mono';
    line-height: 32px;
    padding: 8px 0;
`

const ViewOrder = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 20;
    width: 100%;
    background-color: #1C1C21;
`

const BoxOrder = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: center;
    padding: 16px 15px 16px 0;
`;

const BoxSum = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & > div {
    font-size: 20px;
    font-weight: 400;
    line-height: 18px;
    color: #f2f2f3;
  }
`;

const BurgerMobile = styled.div`
    display: flex;
    padding: 16px 8px 16px 0;
    gap: 12px;
    align-items: center;
    justify-content: space-around;
    @media ${device.mobileL} {
        gap: 8px;
    }
`

const Band = styled.div`
    height: 1px;
    /* display: flex;
    flex-direction: column; */
    width: 100%;
    background-color: white;
`
type ScrollHeight = {
    scroll: number,
}
const Scroll = styled.div`
    height: 400px;

    
`


const CardBurgerMobile = () => {

    const { sumProduct, addProduct, activeIngr, activeOrder, cartActive } = useSelector(AddCartSelect);

    const [createOrder, { isLoading, isSuccess, isError }] = usePostOrderMutation()

    const { isMenuClicked } = useSelector(AddCartSelect)
    const router = useRouter()
    const dispatch = useAppDispatch()

    const isProduct = {
        addProduct,
        role: 'user',
    }
    const {heightMobile} = useDeviceHeight()
    const ScrollMobile = Number(heightMobile) - 152
    console.log(ScrollMobile)


    return (
        <Window>
            <Block>
                <div>
                    <BoxHeader>
                        <TitleMenu>Заказ</TitleMenu>
                        <div onClick={() => { router.push('/'), dispatch(setCartActive(false)) }}>
                            <Close />
                        </div>
                    </BoxHeader>
                    <OverlayScrollbarsComponent>
                    {/* style={{height: `${String(ScrollMobile)}px`}} */}
                        <div style={{height: `${String(ScrollMobile)}px`}}>
                            {addProduct.length > 0 ?
                                addProduct.map((obj, index) => {
                                    return (
                                        // eslint-disable-next-line react/jsx-key
                                        <div  >
                                            <BurgerMobile>
                                                <IngridientBurger
                                                    photo={obj?.mobilePhotoUrl}
                                                    nameItem={obj?.name}
                                                    price={obj?.price}
                                                    index={index}
                                                />
                                            </BurgerMobile>
                                            <Band></Band>
                                        </div>
                                    )
                                })
                                : (
                                    <div>Ваша корзина пуста</div>
                                )}
                        </div>
                    </OverlayScrollbarsComponent>
                    <ViewOrder>
                        <BoxOrder>
                            <BoxSum>
                                <div>{sumProduct}</div>
                                <Image src="/price.svg" width={24} height={24} alt="PriceSvg" />
                            </BoxSum>
                            <Button
                                size="small"
                                onClick={() => {
                                    dispatch(setActiveOrder(true))
                                    dispatch(setDeleteOrder())
                                    createOrder(isProduct)
                                    router.push('/')
                                }}
                                disabled={addProduct.length === 0}
                            >
                                Оформить заказ
                            </Button>
                        </BoxOrder>
                    </ViewOrder>
                </div>
            </Block>
        </Window>
    )
}

export default CardBurgerMobile