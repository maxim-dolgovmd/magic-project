import React from "react";
import styled from "styled-components";
import Container from "../../../components/container/container";
import CardOrder from "../../../components/cardOrder/cardOrder";
// import { useRouter } from "next/router"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import Link from "next/link";
import { useRouter } from "next/router"


const Box = styled.div`
  padding-top: 150px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const ButtonBox = styled.div`
  display: grid;
  grid-template-rows: repeat(3);
  padding-bottom: 80px;
  /* gap: 20px; */
`;

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

  ${(props) => {
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
`

const BoxOrder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 700px;
`

function OrderHistory() {

    const router = useRouter()
  
  return (
    <Container>
      <Box>
        <div>
          <ButtonBox>
            <Link href={'/account/profile'}>
              <Button >
                <span>Профиль </span>
              </Button>
            </Link>
            <Button active >
              <span>История заказов </span>
            </Button>
            <Button>
              <span>Выход </span>
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
                <CardOrder/>
                <CardOrder/>
                <CardOrder/>
                <CardOrder/>
            </BoxOrder>
        </OverlayScrollbarsComponent>
      </Box>
    </Container>
  );
}

export default OrderHistory;