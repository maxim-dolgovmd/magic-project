import React from "react";
import styled from "styled-components";
// import Order from "../../components/cardOrder/cardOrder";
import Container from "../../components/container/container";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import CardOrder from "../../components/cardOrder/cardOrder";
import { harcodeIllustration } from "../../components/json/hardcodeillustration";
import ModalCardOrder from "../../components/modal/modalCardOrders/modalCardOrders";
import { useSelector, useDispatch } from "react-redux";

const Box = styled.div`
  padding-top: 150px;
  margin: 0 20px;
  /* display: flex;
  flex-direction: column;
  align-items: flex-end; */
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
  gap: 60px;
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

const ReadiOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InWork = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TextStatus = styled.div`
  color: #f2f2f3;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const ReadyStatus = styled.ul`
  color: #00cccc;
  font-weight: 400;
  font-size: 28px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InWorkStatus = styled.ul`
  color: #f2f2f3;
  font-weight: 400;
  font-size: 28px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
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

function OrderFeet() {
  const activeCard = useSelector((state) => state.addCart.activeCard);

  return (
    <div>
      <Container>
        <Box>
          <Title>Лента заказов</Title>
          <GridColumn>
            <div>
              <OverlayScrollbarsComponent>
                <BoxOrder>
                  <CardOrder order={harcodeIllustration} />
                  <CardOrder order={harcodeIllustration} />
                  <CardOrder order={harcodeIllustration} />
                  <CardOrder order={harcodeIllustration} />
                </BoxOrder>
              </OverlayScrollbarsComponent>
            </div>
            <BoxInfo>
              <GridStatus>
                <ReadiOrder>
                  <TextStatus>Готовы:</TextStatus>
                  <ReadyStatus>
                    <li>034533</li>
                    <li>034533</li>
                    <li>034533</li>
                    <li>034533</li>
                    <li>034533</li>
                  </ReadyStatus>
                </ReadiOrder>
                <InWork>
                  <TextStatus>В работе: </TextStatus>
                  <InWorkStatus>
                    <li>034538</li>
                    <li>034538</li>
                    <li>034538</li>
                  </InWorkStatus>
                </InWork>
              </GridStatus>
              <BlockThisTime>
                <TextStatus>Выполнено за все время:</TextStatus>
                <NumbersOfOrder>28 752</NumbersOfOrder>
              </BlockThisTime>
              <BlockForToday>
                <TextStatus>Выполнено за сегодня:</TextStatus>
                <NumbersOfOrder>138</NumbersOfOrder>
              </BlockForToday>
            </BoxInfo>
          </GridColumn>
          {activeCard && (
            <div>
              <ModalCardOrder order={harcodeIllustration} />
            </div>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default OrderFeet;
