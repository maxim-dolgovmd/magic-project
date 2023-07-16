import React from "react";
import styled from "styled-components";

import Image from "next/image";

import { useDispatch } from "react-redux";
import useDeviceDetect from "@/components/hooks/useDeviceDetect";

import IngridientMobile from "./ingridientMobile";

import {
  setAddProduct,
  setActiveIngr,
  setProductInfo,
  IIngredient,
  IngredientPropsTypes,
} from "../../redux/slices/addCartSlice";
import { useAppDispatch } from "@/components/redux/store";

const Wrapper = styled.div`
  display: flex;
`;

const Block = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  color: #f2f2f3;
  font-weight: 400;
  font-size: 20px;
  line-height: 18px;
`;

const BoxImage = styled.div`
  position: relative;
`;

const Counter = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #4c4cff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f2f2f3;
  font-weight: 400;
  font-size: 20px;
  line-height: 18px;
  cursor: pointer;
`;

const BoxName = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #f2f2f3;
`;


const Ingridient: React.FC<IngredientPropsTypes> = (props) => {

  const {
    photo,
    price,
    nameItem,
    objIngredient,
    hasBunds,
    addMap,
  } = props

  // console.log(getCountFromCart(addProduct))
  // const productSum = addProduct.filter((product, index, array) => {
  //   if (array.indexOf(product) !== index) {
  //     return product
  //   }
  // })

  const dispatch = useAppDispatch();

  const addProductCart = () => {
    if (!hasBunds && objIngredient.category !== 'Булки') {
      window.alert('Выберите булку, для добавления ингридиента')
      return
    }
    dispatch(setAddProduct(objIngredient));
  };

  const activeModal = (status: boolean) => {
    dispatch(setProductInfo(objIngredient));
    dispatch(setActiveIngr(status))
  };
  const {isMobile} = useDeviceDetect()
  console.log(isMobile)

  return (
    <Wrapper >
      {isMobile ? <IngridientMobile ingredient = {props}/> : 
        <Block>
        <BoxImage>
          <div style={{ cursor: "pointer" }} onClick={() => activeModal(true)}>
            <Image
              src={photo}
              width={240}
              height={120}
              alt="Crator"
              unoptimized
            />
          </div>

          <Counter onClick={addProductCart}>
            {
              addMap ? addMap : 0
            }
          </Counter>
        </BoxImage>
        <Box>
          <div>{price}</div>
          <Image src="/price.svg" width={24} height={24} alt="PriceSvg" />
        </Box>
        <BoxName>{nameItem}</BoxName>
      </Block>}
    </Wrapper>
  );
}

export default Ingridient;
