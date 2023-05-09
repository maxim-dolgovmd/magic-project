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

const Title = styled.h1`
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    color: #F2F2F3;
    padding: 0 0 20px 0;
`

const GridTab = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
    display: grid;
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



const hardcodeIngredient = [ "Булки", "Соусы", "Начинки" ]
const hardcode = [
    {
        id: 0,
        nameObj: 'Булки'
    },
    {
        id: 1,
        nameObj: 'Соусы'
    },
    {
        id: 2,
        nameObj: 'Начинки'
    }
]

const Constructor = () => {

    const [active, setActive] = React.useState(0)
    const [sortTitle, setSortTitle] = React.useState('Булки')
    

    return(
        <div>
            <Title>Соберите бургер</Title>
            <GridColumns>
                <div>
                    <GridTab>
                        {hardcode.map((obj, index) => {
                            return (
                                <Tab key={index} status={active===obj.id ? 'active' : 'noactive'} onClick={() => (setActive(index), setSortTitle(obj.nameObj))}>
                                    {obj.nameObj}
                                </Tab>
                            )
                        })}
                    </GridTab>
                    {/* {hardcodeIngredient.map((title, index) => {
                        // sort((a, b) => a.title < b.sortTitle ? 1 : -1)
                        return (
                            <> */}
                            <OverlayScrollbarsComponent>
                                <div style={{height: '440px'}}>
                                        <TitleBlock>{sortTitle}</TitleBlock>
                                        <GridMenu>
                                            {harcodeIllustration
                                                .filter((obj) => obj.type === sortTitle)
                                                // .sort((a, b) => a.title < b.sortTitle ? 1 : -1)
                                                .map((objIngredient, index) =>  {
                                                
                                                return (
                                                    <>
                                                        <Ingridient
                                                            key={objIngredient.id}
                                                            nameItem={objIngredient?.nameItem}
                                                            photo={objIngredient?.largePhoto}
                                                            price={objIngredient?.price}
                                                            quantity={objIngredient?.quantity}
                                                        />
                                                    </>
                                                )
                                            })}
                                        </GridMenu>
                                    </div>
                            </OverlayScrollbarsComponent>
                            {/* </>
                        )
                    })} */}
                    
                </div>
                <div>
                    <OverlayScrollbarsComponent>
                        <GridBurger>
                            <CardBurger />
                        </GridBurger>
                    </OverlayScrollbarsComponent>
                    <BoxOrder>
                        <BoxSum>
                            <div>610</div>
                            <Image src='/price.svg' width={24} height={24} alt="PriceSvg" />
                        </BoxSum>
                        <Button size='small'>
                            Оформить заказ
                        </Button>
                    </BoxOrder>
                </div>
            </GridColumns>
        </div>
    )
} 

export default Constructor