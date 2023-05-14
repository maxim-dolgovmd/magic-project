import React from "react";
import styled from 'styled-components'
import Image from "next/image"

import CardBurger from '../../components/objectCart/cardBurger'
import Tab from '../../components/tabs/tab'
import CridBurgers from '../../components/objectCart/cardDesktop'
import { harcodeIllustration } from "../../components/json/hardcodeillustration";
import Ingridient from '../../components/ingridient/ingridient'
import Button from '../../components/button/button'

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import { useSelector, useDispatch } from "react-redux";

import {setAddProduct} from '../../redux/slices/addCartSlice'

const Title = styled.h1`
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    color: #F2F2F3;
    padding: 0 0 20px 0;
`

const GridTab = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 0 40px 0;
`

const GridMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    justify-items: center;
`

const GridColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
`

const GridBurger = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-end;
    gap: 16px;
    height: 400px;
    /* padding: 0 0 50px 0; */
`

const TitleBlock = styled.div`
    color: #F2F2F3;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`

const BoxOrder = styled.div`
    padding-top: 50px;
    display: flex;
    align-items: center;
    gap: 40px;
    justify-content: flex-end;
`

const BoxSum = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    &>div {
        font-size: 48px;
        font-weight: 400;
        line-height: 36px;
        color: #F2F2F3;
    }
`

const HeaderCard = styled.div`
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    color: #F2F2F3;
    padding: 0 0 20px 0;
`



// const hardcodeIngredient = [ "Булки", "Соусы", "Начинки" ]
const hardcodeObjIngr = [
    {
        id: 0,
        nameObj: 'Все'
    },
    {
        id: 1,
        nameObj: 'Булки'
    },
    {
        id: 2,
        nameObj: 'Соусы'
    },
    {
        id: 3,
        nameObj: 'Начинки'
    }
]

const Constructor = () => {

    // const [active, setActive] = React.useState(0)
    const [filterIngr, setFilterIngr] = React.useState(hardcodeObjIngr[0])

    const sumProduct = useSelector((state) => state.addCart.sumProduct)
    const addProduct = useSelector((state) => state.addCart.addProduct)
    console.log(addProduct)
    const [deleteIngrSum, setDeleteIngrSum] = React.useState(0) 
    // const [addProduct, setAddProduct] = React.useState([])
    // const addProduct = useSelector((state) => state.addCart.addProduct)
    

    return(
        <div>
            <Title>Соберите бургер</Title>
            <GridColumns>
                <div>
                    <GridTab>
                        {hardcodeObjIngr.map((obj, index) => {
                            return (
                                <Tab 
                                    key={index} 
                                    status={filterIngr.id===obj.id} 
                                    onClick={() => {
                                        setFilterIngr(obj)
                                    }}>
                                    {obj.nameObj}
                                </Tab>
                            )
                        })}
                    </GridTab>
                    {/* {hardcodeIngredient.map((title, index) => {
                        return (
                            <>
                            <OverlayScrollbarsComponent> */}
                            <OverlayScrollbarsComponent>
                                <div style={{height: '460px'}}>
                                    <TitleBlock>{filterIngr.nameObj}</TitleBlock>
                                    <GridMenu>
                                        {filterIngr.nameObj === 'Все' ? 
                                            harcodeIllustration
                                                .map((objIngredient, index) =>  {
                                                // console.log(addProduct)
                                                return (
                                                    // eslint-disable-next-line react/jsx-key
                                                    <>
                                                        <Ingridient
                                                            key={objIngredient.id}
                                                            nameItem={objIngredient?.nameItem}
                                                            photo={objIngredient?.largePhoto}
                                                            price={objIngredient?.price}
                                                            objIngredient={objIngredient}
                                                            deleteIngrSum={deleteIngrSum}
                                                            // setAddProduct={(obj) => setAddProduct(obj)}
                                                        />
                                                    </>
                                                )
                                            }) : harcodeIllustration
                                                    .filter((obj) => obj.type === filterIngr.nameObj)
                                                    .map((objIngredient, index) =>  {
                                                        // console.log(addProduct)
                                                        // eslint-disable-next-line react-hooks/rules-of-hooks
                                                        
                                                        return (
                                                            // eslint-disable-next-line react/jsx-key
                                                            <>
                                                                <Ingridient
                                                                    key={objIngredient.id}
                                                                    nameItem={objIngredient?.nameItem}
                                                                    photo={objIngredient?.largePhoto}
                                                                    price={objIngredient?.price}
                                                                    objIngredient={objIngredient}
                                                                    // setAddProduct={(obj) => setAddProduct(obj)}
                                                                />
                                                            </>
                                                        )
                                                    }) 
                                        }
                                    </GridMenu>
                                </div>
                            </OverlayScrollbarsComponent>
                            {/* </OverlayScrollbarsComponent> */}
                            {/* </>
                        )
                    })} */}
                    
                </div>
                <div>
                    <HeaderCard>Корзина</HeaderCard>
                    <OverlayScrollbarsComponent>
                        <GridBurger>
                            {addProduct.length > 0 ? <CardBurger setDeleteIngrSum={setDeleteIngrSum} deleteIngrSum={deleteIngrSum}/> : <div>jdjdjdj</div>}
                            {/* <CardBurger setDeleteIngrSum={setDeleteIngrSum} deleteIngrSum={deleteIngrSum}/> */}
                        </GridBurger>
                    </OverlayScrollbarsComponent>
                    <BoxOrder>
                        <BoxSum>
                            <div>{sumProduct}</div>
                            <Image src='/price.svg' width={24} height={24} alt="PriceSvg" />
                        </BoxSum>
                        <Button size='small'>
                            Оформить заказ
                        </Button>
                    </BoxOrder>
                    {/* <div>{addProduct}</div> */}
                </div>
            </GridColumns>
        </div>
    )
} 

export default Constructor