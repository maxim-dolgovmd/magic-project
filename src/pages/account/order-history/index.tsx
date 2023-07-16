import React from "react";
import styled from "styled-components";
import Container from "../../../components/container/container";
import CardOrder from "../../../components/cardOrder/cardOrder";
// import { useRouter } from "next/router"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetOrderQuery } from "../../../services/ordersApi";

import { useSelector, useDispatch } from "react-redux";
import useDeviceHeight from "@/components/hooks/useDeviceHeight";

import { AddCartSelect, Order, setActiveIngr, } from "../../../redux/slices/addCartSlice";
import { statusCategories } from "@/components/components/statusCategories/statusCategories";
import { useAppDispatch } from "@/components/redux/store";
import { device, size } from "@/components/components/device/device";

const Box = styled.div`
  padding-top: 150px;
  margin: 0 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    padding-top: 100px;
  }

  @media ${device.mobileL} {
    margin: 0px;
  }
`;

const ButtonBox = styled.div`
  display: grid;
  grid-template-rows: repeat(3);
  padding-bottom: 80px;
`;

type AciveButton = {
  active?: any
}

const Button = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  align-items: center;
  background: #131316;
  padding: 15px 0 15px 0;
  color: #8585ad;

  span:hover {
    cursor: pointer;
    color: #f2f2f3;
  }

  ${(props: AciveButton) => {
    return (
      props.active && {
        color: "#F2F2F3",
      }
    );
  }}
`;

const Title = styled.div`
  color: #8585ad;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  span:hover {
    color: #f2f2f3;
  }
`;

type ScrollHistoryType = {
  heightScroll: number
}

const BoxOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: auto;

  ${(props: ScrollHistoryType) => {
    return props.heightScroll && {
      height: `${props.heightScroll}px`
    }
  }};

  @media ${device.mobileL} {
    height: auto;
  }
`;

const ContentCategory = styled.div`
  display: none;
  @media (min-width: ${size.tablet}) {
      display: block;
  }
`

const TitleCategory = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  padding-bottom: 24px;

  @media (min-width: ${size.tablet}) {
    display: none;
  }
`

const ContainerStyle = styled(Container)`
  @media ${device.mobileL} {
    padding: 0 8px;
  }
`


const OrderHistory: React.FC = () => {
  const orderGet = useGetOrderQuery({ limit: '12', offset: '0', role: 'admin' });
  console.log(orderGet)
  const dispatch = useAppDispatch()
  
  const { heightMobile } = useDeviceHeight()
  const heightScroll = Number(heightMobile) - 150

  return (
    <ContainerStyle>
      <Box>
        <TitleCategory>История заказов</TitleCategory>
        <ContentCategory>
          <ButtonBox>
            <Button>
              <Link href={"/account/profile"}>
                <span>Профиль </span>
              </Link>
            </Button>
            <Button active>
              <span>История заказов </span>
            </Button>
            <Button>
              <span>Выход</span>
            </Button>
          </ButtonBox>
          <Title>
            <span>
              В этом разделе вы можете просмотреть свою историю заказов
            </span>
          </Title>
        </ContentCategory>
        <OverlayScrollbarsComponent>
          <BoxOrder heightScroll={heightScroll}>
            {
              orderGet?.data?.orders.map((obj: Order) => {
                console.log(obj.status)
                return (
                  <Link key={obj.order_number} href={`/account/order-history/${obj.order_number}`} >
                    <CardOrder orders={obj} status={statusCategories[obj.status]} />
                  </Link>
                )
              })
            }
          </BoxOrder>
        </OverlayScrollbarsComponent>
      </Box>
    </ContainerStyle>
  );
}

export default OrderHistory;
