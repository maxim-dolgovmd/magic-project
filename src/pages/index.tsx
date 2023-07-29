import React from "react";
import styled from "styled-components";
import Image from "next/image";
// import {Reorder} from 'framer-motion';

import CardBurger from "../components/objectCart/cardBurger";
import Tab from "../components/tabs/tab";
import Ingridient from "../components/ingridient/ingridient";
import Button from "../components/button/button";
import ModalWindow from "../components/modal/modalWindow/modalWindow";
import ModalOrder from "../components/modal/modalOrders/modalOrders";
import Container from "../components/container/container";
import { getCountFromCart } from '../utils/getCountFromCart'
import { device, size } from '../components/device/device'

import { usePostOrderMutation } from '../services/ordersApi'
import { useGetIngridientQuery } from '../services/ingridientsApi'

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import { useSelector, useDispatch } from "react-redux";

import useDeviceDetect from "../hooks/useDeviceDetect";
import useDeviceHeight from "../hooks/useDeviceHeight";
import { useRouter } from "next/router";

import {
    setActiveOrder,
    setDeleteOrder,
    AddCartSelect,
    IIngredient,
    setCartActive,
} from "../redux/slices/addCartSlice";
import { useAppDispatch } from "../redux/store";
import CardBurgerMobile from "./cart-order";

const Box = styled.div`
    display: flex;
    flex-direction: column;
`

const TopMargin = styled.div`
  padding: 150px 0 0px 0;
  margin: 0 20px;

    @media ${device.mobileL} {
        margin: 0;
    }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: #f2f2f3;
  padding: 0 0 20px 0;

  @media ${device.mobileL} {
    font-size: 28px;
    line-height: 30px;
}
`;

const GridTab = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 0 40px 0;

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const GridMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  justify-items: center;

    @media ${device.laptop} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const GridColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    @media ${device.laptop} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

type heightCartType = {
    heightScrollCart: number
}

const GridBurger = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-end;
    gap: 16px;
    height: auto;
    ${(props: heightCartType) => {
        return props.heightScrollCart && {
            height: `${props.heightScrollCart}px`
        }
    }};
    @media ${device.laptop} {
        padding: 0 20px;
        height: auto;
    }
`;

const TitleBlock = styled.div`
  color: #f2f2f3;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  @media ${device.laptop} {
    padding-bottom: 16px;
  }
`;

const BoxOrder = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: flex-end;
  /* padding-right: 20px; */

  @media ${device.laptop} {
    padding: 50px 20px
  }
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
  /* padding: 0 0 20px 20px; */
  padding: 0 0 20px 0px;
`;

const ColumnsIngr = styled.div`
    
`
const ColumnsCart = styled.div`
    @media ${device.tablet} {
        display: none;
    }
`

const ViewOrder = styled.div`
    background-color: #1C1C21;
    /* display: flex; */
    position: fixed;
    bottom: 0;
    z-index: 20;
    width: 100%;

    @media (min-width: ${size.tablet}) {
        display: none;
    }
`
const ViewSum = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    color: #F2F2F3;
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
    padding-right: 8px;
`

const BoxView = styled.div`
    display: flex;
    padding: 16px 0;
    justify-content: center;
    gap: 16px;
`

type categoryType = {
    id: number,
    category: string,
}

const ContentContainer = styled(Container)`
    z-index: 3;
    /* display: flex; */
    width: 100%;
    flex: 1 1 auto;
`

type heightType = {
    heightScrollIngr: number
}

const ScrollHeight = styled.div`
    height: auto;
    ${(props: heightType) => {
        return props.heightScrollIngr && {
            height: `${props.heightScrollIngr}px`
        }
    }};
    @media ${device.tablet} {
        height: auto;
    }
`

const Constructor: React.FC = () => {

    const isMobile = useDeviceDetect()
    const { heightMobile } = useDeviceHeight()
    const heightScrollIngr = Number(heightMobile) - 310
    const heightScrollCart = Number(heightMobile) - 415

    const router = useRouter()

    const arrayProduct = useGetIngridientQuery('ingredients')
    const categories = useGetIngridientQuery('categories')
    const [createOrder, { isLoading, isSuccess, isError }] = usePostOrderMutation()
    // const orderGet = useGetOrderQuery({limit: 12, offset: 0})

    const [filterIngr, setFilterIngr] = React.useState({
        id: Number(1),
        category: "Все",
    });
    console.log(typeof(filterIngr.id))

    const dispatch = useAppDispatch();
    const { sumProduct, addProduct, activeIngr, activeOrder} = useSelector(AddCartSelect);

    const hasBunds = addProduct?.find((product: IIngredient) => product.category === 'Булки')

    const addMap = (id: number) => {
        return getCountFromCart(addProduct).get(id)
    }

    const isProduct = {
        addProduct,
        role: 'user',
    }
    console.log(addProduct)

    const arrIngrReduce = arrayProduct.data?.reduce((acc: any, ingredient, index, arr) => {
        if (filterIngr?.category === 'Все') {
            acc?.push(ingredient)
        }
        if (ingredient?.category === filterIngr?.category) {
            acc?.push(ingredient)
        }
        console.log(index)
        return acc
    }, [])

    console.log(arrIngrReduce)

    return (
        <Box>
            <ContentContainer>
                <TopMargin>
                    <Title>Соберите бургер</Title>
                    <GridColumns>
                        <ColumnsIngr>
                            <GridTab>
                                {categories?.data?.map((obj: categoryType, index) => {
                                    console.log(obj)
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
                                <ScrollHeight heightScrollIngr={heightScrollIngr}>
                                    <TitleBlock>{filterIngr?.category}</TitleBlock>
                                    <GridMenu>
                                        {
                                            arrIngrReduce?.map((ingr: IIngredient) => {
                                                return (
                                                    <Ingridient
                                                        key={ingr?.id}
                                                        nameItem={ingr?.name}
                                                        photo={ingr?.largePhotoUrl}
                                                        price={ingr?.price}
                                                        objIngredient={ingr}
                                                        hasBunds={hasBunds}
                                                        addMap={addMap(ingr?.id)}
                                                    />
                                                )
                                            })
                                            
                                        }
                                        {/* {arrayProduct.data
                                            ?.filter((obj) => {
                                                if (filterIngr?.category === "Все") {
                                                    return obj
                                                }
                                                return obj.category === filterIngr?.category
                                            })
                                            ?.map((objIngredient) => {
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
                                            })
                                        } */}
                                       
                                    </GridMenu>
                                </ScrollHeight>
                            </OverlayScrollbarsComponent>
                        </ColumnsIngr>
                        <ColumnsCart>
                            <HeaderCard>Корзина</HeaderCard>
                            <OverlayScrollbarsComponent>
                                <GridBurger heightScrollCart={heightScrollCart}>
                                    {addProduct?.length > 0 ? (
                                        <CardBurger addProduct={addProduct}/>
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
                                    size="large"
                                    onClick={() => {
                                        dispatch(setActiveOrder(true))
                                        dispatch(setDeleteOrder())
                                        createOrder(isProduct)
                                    }}
                                    disabled={addProduct?.length === 0}
                                >
                                    Оформить заказ
                                </Button>
                            </BoxOrder>
                        </ColumnsCart>
                        {activeIngr && (
                            <div>
                                <ModalWindow />
                            </div>
                        )}
                        {activeOrder && (
                            <div >
                                <ModalOrder />
                            </div>
                        )}
                        {/* {cartActive && router.push('/cart-order')} */}
                    </GridColumns>
                </TopMargin >
            </ContentContainer >
            <ViewOrder>
                <BoxView>
                    <ViewSum>
                        <div>{sumProduct}</div>
                        <Image src='/price.svg' width={24} height={24} alt="PriceSvg" />
                    </ViewSum>
                    <Button
                        size="small"
                        onClick={() => {
                            router.push('/cart-order')
                            // dispatch(setDeleteOrder())
                            // createOrder(isProduct)
                        }}
                        disabled={addProduct?.length === 0}
                    >
                        Смотреть заказ
                    </Button>
                </BoxView>
            </ViewOrder>
        </Box>
    );
};

export default Constructor;
