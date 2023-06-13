import React from "react";
import styled from "styled-components";

import Image from "next/image";
import Check from "../../../assets/icon/done.svg";

import { useSelector, useDispatch } from "react-redux";
import { setActiveOrder } from "../../../redux/slices/addCartSlice";
import Modal from "../modal";

const Window = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderContent = styled.h1`
  /* height: 720px; */
  max-width: 718px;
  background: #1c1c21;
  border: 1px solid rgba(76, 76, 255, 0.2);
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.04),
    0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
  display: flex;
  /* justify-content: center; */
`;

const BlockOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 100px 40px;
  color: #f2f2f3;
`;

const BlockIngr = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-bottom: 36px;
`;

const CloseIngr = styled.div`
  padding-left: 20px;
  cursor: pointer;
`;

const Identificator = styled.div`
  font-size: 144px;
  font-weight: 400;
  line-height: 120px;
  text-align: center;
  text-shadow: 0px 0px 16px rgba(51, 51, 255, 0.25),
    0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5);
  padding-bottom: 32px;
`;

const IdentificatorTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  padding-bottom: 60px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 60px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  > div:last-child {
    color: #8585ad;
  }
`;

function ModalOrder() {
  const dispatch = useDispatch();
  // const product = useSelector((state) => state.addCart.product)
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  const activeModal = () => {
    dispatch(setActiveOrder(false));
  };

  return (
    // eslint-disable-next-line react/no-children-prop
    <Modal activeModal={activeModal}>
      <BlockOrder>
        <BlockIngr onClick={() => dispatch(setActiveOrder(false))}>
          <CloseIngr>
            <Image src="/close.svg" width={18} height={18} alt="CloseSvg" />
          </CloseIngr>
        </BlockIngr>
        {/* <Identificator>{getRandomInt(111111, 999999)}</Identificator>
        <IdentificatorTitle>идентификатор заказа</IdentificatorTitle> */}
        <Check />
        <Content>
          <div>Ваш заказ начали готовить</div>
          <div>Дождитесь готовности на орбитальной станции</div>
        </Content>
      </BlockOrder>
    </Modal>
  );
}

export default ModalOrder;
