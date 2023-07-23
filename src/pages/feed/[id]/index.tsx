import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import DinamickPath, { orders } from "@/components/components/dinamickPath/dinamickPath";
import { statusCategories } from "@/components/components/statusCategories/statusCategories";
import { device } from "@/components/components/device/device";
import { useAppDispatch } from "@/components/redux/store";
import { IIngredient, setActiveIngr } from "@/components/redux/slices/addCartSlice";

const Window = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-Index: 200;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 16px 0 16px;

    @media ${device.tablet} {
      padding: 0px;
    }
`

const OrderContent = styled.div`
    max-width: 718px;
    background:  rgba(0,0,0,1);
    border: 1px solid  rgba(0,0,0,1);
    display: flex;

    @media ${device.tablet} {
      /* height: 100%; */
      width: 100%;
    }
`

type IdNumberType = {
  id: string,
}

interface ContextType {
  params: IdNumberType,
  locales: any,
  locale: any,
  defaultLocale: any,
}

type StatusTypeEn = 'ready' | 'in preparation' | 'handed over to courier' | 'canceled' | 'closed';
  
interface Order {
    order_number: number;
    date_created: string;
    name: string;
    price: number;
    status: StatusTypeEn;
    ingredients: IIngredient[];
}

interface ModalType {
  order: Order
}

const InfoCardOrder: React.FC<ModalType> = (props) => {
  console.log(props)

  const orderObject = props?.order
  console.log(orderObject)

  const router = useRouter()

  const closedModal = () => {
    router.push('/feed')
  }

  return (
    <Window onClick={() => closedModal()}>
      <OrderContent onClick={(e) => e.stopPropagation()}>
        {/* <DinamickPath closedModal={closedModal}/> */}
        <DinamickPath closedModal={closedModal}  order={orderObject} status={statusCategories[orderObject?.status]}/>
      </OrderContent>
    </Window>
  );
}

export default InfoCardOrder;

export const getStaticProps = async (context: ContextType) => {
  console.log(context)
  const id = context?.params?.id

  const respData = orders?.find((order) => {
     if ( String(order.order_number) === id) {
      return order
     }
  })

  return {
    props: {order: respData}
  }
} 

export const getStaticPaths = () => {

  const paths = orders?.map((order) => {
    // console.log(order)
    return {
      params: {id: String(order?.order_number)}
    }
  })

  return {
    paths,
    fallback: false,
  }
}