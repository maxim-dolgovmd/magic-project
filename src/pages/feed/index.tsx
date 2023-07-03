import React from "react";
import styled from "styled-components";
import Container from "../../components/container/container";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import CardOrder from "../../components/cardOrder/cardOrder";
import { useGetOrderQuery } from "../../services/ordersApi";

import StatusOrder from "../../components/statusOrder/statusOrder";

import { getObjStatus } from "../../utils/getObjStatus";
import Link from "next/link";
import { statusCategories } from "@/components/components/statusCategories/statusCategories";
import { Order } from "@/components/redux/slices/addCartSlice";

const Box = styled.div`
  padding-top: 150px;
  margin: 0 20px;
`;

const Title = styled.h1`
  color: #f2f2f3;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  padding-bottom: 20px;
`;

const GridColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
`;

const BoxOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 700px;
`;

const GridStatus = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
`;

const TextStatus = styled.div`
  color: #f2f2f3;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 68px;
`;

const BlockThisTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const BlockForToday = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const NumbersOfOrder = styled.div`
  color: #f2f2f3;
  font-weight: 400;
  font-size: 144px;
  line-height: 120px;
  text-shadow: 0px 0px 16px rgba(51, 51, 255, 0.25),
    0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5);
  display: flex;
  align-items: center;
`;


const OrderFeet:React.FC = () => {

  const orderGet = useGetOrderQuery({ limit: '12', offset: '0', role: "admin" });
  const orders = orderGet?.data?.orders;
  console.log(orders)
  const today = new Date().toISOString().split("T")[0];
  const day = orders?.filter((obj: Order) => obj.date_created.split("T")[0] === today);

  // const statuses = [
  //   {"closed": 'Закрытые'},
  //   {"canceled": 'Отмененные'},
  //   {"handed over to courier": 'Переданные курьеру'},
  // ];

  const tsStatus = {
    'closed': 'Закрытые',
    'canceled': 'Отмененные',
    'handed over to courier': 'Переданные курьеру',
    'in preparation': 'в работе',
    'ready': 'готовые',

  }

  // console.log(Object?.keys(tsStatus))

  // type StatusTypes = {
  //     closed?: string;
  //     canceled?: string;
  //     "handed over to courier"?: string;
  // } 

  const ordersMap = getObjStatus(orders);
  console.log(ordersMap)

  return (
    <div>
      <Container>
        <Box>
          <Title>Лента заказов</Title>
          <GridColumn>
            <div>
              <OverlayScrollbarsComponent>
                <BoxOrder>
                  {orders?.map((obj: Order) => {
                    console.log(obj)
                    return (
                      <Link key={obj.order_number} href={`/feed/${obj.order_number}`}>
                        <CardOrder {...obj} status={statusCategories[obj.status]}/>
                      </Link>
                    );
                  })}
                </BoxOrder>
              </OverlayScrollbarsComponent>
            </div>
            <BoxInfo>
              <GridStatus>
                {/* {statuses.map((status: StatusTypes) => {
                  const statusKeys = Object.keys(status)
                  const statusValues = Object.values(status)
                  return (
                    <>
                      <StatusOrder order={ordersMap.get(statusKeys?.[0])} status={statusValues} />
                    </>
                  );
                })} */}
                <StatusOrder order={ordersMap.get('closed')} status={tsStatus['closed']} />
                <StatusOrder order={ordersMap.get('canceled')} status={tsStatus['canceled']} />
                <StatusOrder order={ordersMap.get('handed over to courier')} status={tsStatus['handed over to courier']} />
              </GridStatus>
              <BlockThisTime>
                <TextStatus>Выполнено за все время:</TextStatus>
                <NumbersOfOrder>{orders?.length}</NumbersOfOrder>
              </BlockThisTime>
              <BlockForToday>
                <TextStatus>Выполнено за сегодня:</TextStatus>
                <NumbersOfOrder>{day?.length}</NumbersOfOrder>
              </BlockForToday>
            </BoxInfo>
          </GridColumn>
        </Box>
      </Container>
    </div>
  );
}

export default OrderFeet;
