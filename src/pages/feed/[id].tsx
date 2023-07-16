import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import DinamickPath, { orders } from "@/components/components/dinamickPath/dinamikPath";
import { statusCategories } from "@/components/components/statusCategories/statusCategories";
import { device } from "@/components/components/device/device";
import { useAppDispatch } from "@/components/redux/store";
import { setActiveIngr } from "@/components/redux/slices/addCartSlice";

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

interface ModalType {
  order: string,
}

const InfoCardOrder: React.FC<ModalType> = (props) => {
  console.log(props)

  const orderParse = JSON.parse(props?.order)
  const orderObject = orderParse?.[0]
  console.log(orderObject)

  const router = useRouter()
  const dispatch = useAppDispatch()

  const closedModal = () => {
    router.push('/feed')
  }

  return (
    <Window onClick={() => closedModal()}>
      <OrderContent onClick={(e) => e.stopPropagation()}>
        <DinamickPath closedModal={closedModal}  props={orderObject} status={statusCategories[orderObject.status]}/>
      </OrderContent>
    </Window>
  );
};

export default InfoCardOrder;

export const getStaticProps = async (context: ContextType) => {
  const id = context?.params?.id

  const respData = orders?.filter((order) => {
     if ( String(order.order_number) === id) {
      return order
     }
  })

  const data = JSON.stringify(respData)

  return {
    props: {order: data}
  }
} 

export const getStaticPaths = () => {

  const paths = orders?.map((order) => {
    return {
      params: {id: String(order?.order_number)}
    }
  })

  return {
    paths,
    fallback: false,
  }
}