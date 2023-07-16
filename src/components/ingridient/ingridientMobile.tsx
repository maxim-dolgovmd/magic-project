import React from "react";

import styled from "styled-components";

import Image from "next/image";
import ButtonText from "../button/buttonText";
import fruitMobile from '../../../public/illustration/fruit/fruitMobile.png'

import { useDispatch } from "react-redux";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
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
  width: 24px;
  height: 24px;
  padding: 10px;
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
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #f2f2f3;
  max-width: 100vp;
`;

interface IngredientPropsType {
    ingredient: IngredientPropsTypes
}

const IngridientMobile: React.FC<IngredientPropsType> = ({ingredient}) => {
    console.log(ingredient)

    const dispatch = useAppDispatch();

    const addProductCart = () => {
        if (!ingredient?.hasBunds && ingredient?.objIngredient.category !== 'Булки') {
            window.alert('Выберите булку, для добавления ингридиента')
            return
        }
        dispatch(setAddProduct(ingredient?.objIngredient));
    };

    const activeModal = (status: boolean) => {
        dispatch(setProductInfo(ingredient?.objIngredient));
        dispatch(setActiveIngr(status))
    };

    return (
        // <Wrapper>
            <Block>
                <BoxImage>
                    <div style={{ cursor: "pointer" }} onClick={() => activeModal(true)}>
                        <Image
                            src={ingredient?.photo}
                            width={144}
                            height={72}
                            alt="Image"
                            unoptimized
                        />
                    </div>
                    <Counter> 
                        {
                            ingredient.addMap ? ingredient.addMap : 0
                        }
                    </Counter>
                </BoxImage>
                <Box>
                    <div>{ingredient?.price}</div>
                    <Image src="/price.svg" width={24} height={24} alt="PriceSvg" />
                </Box>
                <BoxName>{ingredient?.nameItem}</BoxName>
                <ButtonText onClick={addProductCart} size='small'>Добавить</ButtonText>
            </Block>
        // </Wrapper>
    )
}

export default IngridientMobile