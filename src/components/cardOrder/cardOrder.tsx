import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useDispatch } from "react-redux";

import {IIngredient, Order, setOrderModal} from '../../redux/slices/addCartSlice'
import {statusCategories} from "../statusCategories/statusCategories";
import { useAppDispatch } from "@/components/redux/store";
import { device } from "../device/device";


const OrderBlock = styled.div`
  padding: 24px;
  /* width: 844px; */
  /* height: 246px; */
  background-color: #1c1c21;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
  color: #f2f2f3;
  display: flex;
  flex-direction: column;
  gap: 24px;
  cursor: pointer;
  :hover {
    background: #2F2F37;
  }
`;

const OrderNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Number = styled.div`
  font-weight: 400;
  font-size: 28px;
  line-height: 24px;
`;

const TimeOrder = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8585ad;
  padding-left: 20px;
  text-align: left;
`;

const StatusOrder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  display: flex;
`;

const Status = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #00CCCC;
  display: flex;
`;

const ImageOrders = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media ${device.tablet} {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;

const ImageBlock = styled.div`
  /* position: relative; */
  display: flex;
  @media ${device.tablet} {
    max-width: 320px;
  }
  @media ${device.mobileL} {
    max-width: 260px;
  }
`;

const PriceSum = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Price = styled.div`
  font-weight: 400;
  font-size: 28px;
  line-height: 24px;
  padding-left: 20px;

  @media ${device.tablet} {
    padding: 0px;
  }
`;

// export const ImageBoxFunction = (count, zIndex, right) => {
    const ImageBox = styled.div`
    position: relative;

    :first-child {
        top: 0;
        left: 0;
        z-index: 10;
    }
    :nth-child(2) {
        z-index: 9;
        top: 0;
        right: 16px;
    }
    :nth-child(3) {
        z-index: 8;
        top: 0;
        right: 32px;
    }
    :nth-child(4) {
        z-index: 7;
        top: 0;
        right: 48px;
    }
    :nth-child(5) {
        z-index: 6;
        top: 0;
        right: 64px;
    }
    :nth-child(6) {
        z-index: 5;
        top: 0;
        right: 80px;
        img {
            opacity: 0.4;
        }
    }

    @media ${device.mobileL} {
    :first-child {
      top: 0;
      left: 0;
      z-index: 10;
    }
    :nth-child(2) {
      z-index: 9;
      top: 0;
      right: 26px;
    }
    :nth-child(3) {
      z-index: 8;
      top: 0;
      right: 54px;
    }
    :nth-child(4) {
      z-index: 7;
      top: 0;
      right: 80px;
    }
    :nth-child(5) {
      z-index: 6;
      top: 0;
      right: 106px;
    }
    :nth-child(6) {
      z-index: 5;
      top: 0;
      right: 130px;
      img {
          opacity: 0.4;
      }
    }
  }

`;

const Count = styled.div`
    position: absolute;
    top: 21px;
    left: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* opacity: 1; */
`

type OrdersPropsType = {
  orders: Order,
  status: string
}

const CardOrder: React.FC<OrdersPropsType> = (orders) => {

  console.log(orders)

    const {
      order_number,
      date_created,
      name,
      status,
      price,
      ingredients,
    } = orders.orders
   
    const dispatch = useAppDispatch()

    const orderTopArray = ingredients?.slice(0, 5)
   
    const newArrayCount = ingredients?.length - orderTopArray?.length
  
    const dateOrder = date_created?.split('T', 1)
    const timeOrderStr = date_created?.split('T', 2)[1].split(':', 2).join(":")
  return (
    <OrderBlock onClick={() => {
      dispatch(setOrderModal(orders))
    }}>
      <OrderNumber>
        <Number>#{order_number}</Number>
        <TimeOrder>Дата: {dateOrder}<br/>Время: {timeOrderStr}</TimeOrder>
      </OrderNumber>
      <StatusOrder>
        <Title >{name}</Title>
        <Status>
          {orders.status}
        </Status>
      </StatusOrder>
      <ImageOrders>
        <ImageBlock>
            {
                orderTopArray?.map((obj: IIngredient) => {
                    return (
                        <>
                            <ImageBox>
                                <Image
                                    src={obj.previewPhotoUrl}
                                    width={64}
                                    height={64}
                                    alt="Preview" 
                                />
                            </ImageBox>
                        </>
                    )
                })
                
            }
            { newArrayCount > 0 &&
                <ImageBox>
                    <Image
                        src={ingredients[5]?.previewPhotoUrl}
                        width={64}
                        height={64}
                        alt="Preview" 
                    />
                    <Count>
                        +{newArrayCount}
                    </Count>
                </ImageBox> 
            }
        </ImageBlock>
        <PriceSum>
          <Price>{price}</Price>
          <Image src="/price.svg" width={24} height={24} alt="PriceSvg" />
        </PriceSum>
      </ImageOrders>
    </OrderBlock>
  );
};

export default CardOrder;
