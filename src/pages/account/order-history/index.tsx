import React from "react";
import styled from "styled-components";
import Container from "../../../components/container/container";
import CardOrder from "../../../components/cardOrder/cardOrder";
// import { useRouter } from "next/router"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { harcodeIllustration } from "../../../components/json/hardcodeillustration";
import { useGetOrderQuery } from "../../../services/ingridientsApi";

import ModalCardOrder from "../../../components/modal/modalCardOrders/modalCardOrders";
import { useSelector, useDispatch } from "react-redux";

import { AddCartSelect, setActiveCard } from "../../../redux/slices/addCartSlice";

const Box = styled.div`
  padding-top: 150px;
  margin: 0 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const ButtonBox = styled.div`
  display: grid;
  grid-template-rows: repeat(3);
  padding-bottom: 80px;
  /* gap: 20px; */
`;

type AciveButton = {
  active?: any
}

const Button = styled.div`
  /* border: 2px dashed #4C4CFF; */
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

const InputBlock = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
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

const BoxOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 700px;
`;

interface IIngredient {
  id: number,
  largePhotoUrl: string,
  normalPhotoUrl: string,
  mobilePhotoUrl: string,
  previewPhotoUrl: string,
  price: number,
  name: string,
  category: string,
  quantity: number,
}

interface Order {
  order_number: number;
  date_created: string;
  name: string;
  price: number;
  status: 'ready' | 'in preparation' | 'handed over to courier' | 'canceled' | 'closed';
  ingredients: IIngredient[];
}

const OrderHistory:React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {activeCard, orderModal} = useSelector(AddCartSelect);
  const orderGet = useGetOrderQuery({ limit: 12, offset: 0 , role: 'admin'});
  // console.log(orderGet?.data?.orders)

  return (
    <Container>
      <Box>
        <div>
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
        </div>
        <OverlayScrollbarsComponent>
          <BoxOrder>
            {
              orderGet?.data?.orders.map((obj: Order) => {
                console.log(obj)
              return (
                <Link key={obj.order_number} href={`/account/order-history/${obj.order_number}`}>
                  <CardOrder {...obj} />
                </Link>
              )
              })
            }
          </BoxOrder>
        </OverlayScrollbarsComponent>
        {/* {activeCard && (
          <div>
            <ModalCardOrder order={orderModal} />
          </div>
        )} */}
      </Box>
    </Container>
  );
}

export default OrderHistory;
