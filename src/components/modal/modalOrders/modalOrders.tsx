import React from "react";
import styled from "styled-components";

import Image from "next/image";
import Check from "../../../assets/icon/done.svg";

import { useDispatch } from "react-redux";
import { setActiveOrder } from "../../../redux/slices/addCartSlice";
import Modal from "../modal";
import { useAppDispatch } from "@/components/redux/store";
import { device } from "../../device/device";

const BlockOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 40px 40px 100px 40px; */
  padding: 40px;
  color: #f2f2f3;

  @media ${device.tablet} {
    width: 100%;
    height: 100%;
  }
`;

const BlockIngr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 36px;

  @media ${device.tablet} {
    padding-bottom: 100px
  }
`;

const CloseIngr = styled.div`
  padding-left: 20px;
  cursor: pointer;
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

const TitleMenu = styled.div`
  font-weight: 700;
  font-size: 28px;
  font-family: 'JetBrains Mono';
  line-height: 32px;
  padding: 8px 0;
`

const BlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const ModalOrder: React.FC = () => {
  const dispatch = useAppDispatch();
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  const activeModal = () => {
    dispatch(setActiveOrder(false));
  };

  return (
    <Modal activeModal={activeModal}>
      <BlockOrder>
        <BlockIngr>
          <TitleMenu>Заказ оформлен</TitleMenu>
          <CloseIngr onClick={() => dispatch(setActiveOrder(false))}>
            <Image src="/close.svg" width={18} height={18} alt="CloseSvg" />
          </CloseIngr>
        </BlockIngr>
        {/* <Identificator>{getRandomInt(111111, 999999)}</Identificator>
        <IdentificatorTitle>идентификатор заказа</IdentificatorTitle> */}
        <BlockContent>
          <Check />
          <Content>
            <div>Ваш заказ начали готовить</div>
            <div>Дождитесь готовности на орбитальной станции</div>
          </Content>
        </BlockContent>
      </BlockOrder>
    </Modal>
  );
}

export default ModalOrder;
