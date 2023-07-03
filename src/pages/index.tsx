import React from "react";
import styled from "styled-components";
import Image from "next/image";

import CardBurger from "../components/objectCart/cardBurger";
import Tab from "../components/tabs/tab";
import Ingridient from "../components/ingridient/ingridient";
import Button from "../components/button/button";
import ModalWindow from "../components/modal/modalWindow/modalWindow";
import ModalOrder from "../components/modal/modalOrders/modalOrders";
import Container from "../components/container/container";
import { getCountFromCart } from '../utils/getCountFromCart'

import { usePostOrderMutation } from '../services/ordersApi'
import { useGetIngridientQuery } from '../services/ingridientsApi'

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import { useSelector, useDispatch } from "react-redux";

import {
    setActiveOrder,
    setDeleteOrder,
    AddCartSelect,
    IIngredient,
} from "../redux/slices/addCartSlice";
import { useAppDispatch } from "../redux/store";

const TopMargin = styled.div`
  padding: 150px 0 0px 0;
  margin: 0 20px;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: #f2f2f3;
  padding: 0 0 20px 0;
`;

const GridTab = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 0 40px 0;
`;

const GridMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  justify-items: center;
`;

const GridColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`;

const GridBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  gap: 16px;
  height: 400px;
  /* padding: 0 0 50px 0; */
`;

const TitleBlock = styled.div`
  color: #f2f2f3;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const BoxOrder = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: flex-end;
`;

const BoxSum = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & > div {
    font-size: 48px;
    font-weight: 400;
    line-height: 36px;
    color: #f2f2f3;
  }
`;

const HeaderCard = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: #f2f2f3;
  padding: 0 0 20px 0;
`;

type categoryType = {
    category: string,
    id: string,
}

const Constructor: React.FC = () => {

    const arrayProduct = useGetIngridientQuery('ingredients')
    const categories = useGetIngridientQuery('categories')
    const [createOrder, { isLoading, isSuccess, isError }] = usePostOrderMutation()
    // const orderGet = useGetOrderQuery({limit: 12, offset: 0})

    const [filterIngr, setFilterIngr] = React.useState({
        id: '1',
        category: "Все",
    });
    console.log(filterIngr)

    const dispatch = useAppDispatch();
    const { sumProduct, addProduct, activeIngr, activeOrder } = useSelector(AddCartSelect);

    const hasBunds = addProduct.find((product: IIngredient) => product.category === 'Булки')

    const addMap = (id: string) => {
        return getCountFromCart(addProduct).get(id)
    }

    const isProduct = {
        addProduct,
        role: 'user',
    }
    console.log(addProduct)

    return (
        <Container>
            <TopMargin>
                <Title>Соберите бургер</Title>
                <GridColumns>
                    <div>
                        <GridTab>
                            {categories?.data?.map((obj: categoryType, index: number) => {
                                console.log(obj.category)
                                return (
                                    <Tab
                                        key={index}
                                        status={filterIngr?.id === obj.id}
                                        onClick={() => {
                                            setFilterIngr(obj);
                                        }}
                                    >
                                        {obj.category}
                                    </Tab>
                                )
                            })}
                        </GridTab>
                        <OverlayScrollbarsComponent>
                            <div style={{ height: "460px" }}>
                                <TitleBlock>{filterIngr?.category}</TitleBlock>
                                <GridMenu>
                                    {arrayProduct.data
                                        ?.filter((obj: categoryType) => {
                                            if (filterIngr?.category === "Все") {
                                                return obj
                                            }
                                            return obj.category === filterIngr?.category
                                        })
                                        ?.map((objIngredient: IIngredient) => {
                                            return (
                                                <Ingridient
                                                    key={objIngredient.id}
                                                    nameItem={objIngredient?.name}
                                                    photo={objIngredient?.largePhotoUrl}
                                                    price={objIngredient?.price}
                                                    objIngredient={objIngredient}
                                                    hasBunds={hasBunds}
                                                    addMap={addMap(objIngredient.id)}
                                                />
                                            );
                                        })}
                                </GridMenu>
                            </div>
                        </OverlayScrollbarsComponent>
                    </div>
                    <div>
                        <HeaderCard>Корзина</HeaderCard>
                        <OverlayScrollbarsComponent>
                            <GridBurger>
                                {addProduct.length > 0 ? (
                                    <CardBurger />
                                ) : (
                                    <div>Ваша корзина пуста</div>
                                )}
                            </GridBurger>
                        </OverlayScrollbarsComponent>
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
                                }}
                                disabled={addProduct.length === 0}
                            >
                                Оформить заказ
                            </Button>
                        </BoxOrder>
                    </div>
                    {activeIngr && (
                        <div>
                            <ModalWindow />
                        </div>
                    )}
                    {activeOrder && (
                        <div>
                            <ModalOrder />
                        </div>
                    )}
                </GridColumns>
            </TopMargin >
        </Container >
    );
};

export default Constructor;
