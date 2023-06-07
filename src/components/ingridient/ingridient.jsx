import React from "react";
import styled from "styled-components";

import Image from "next/image";
import {getCountFromCart} from '../../utils/getCountFromCart'


import { useSelector, useDispatch } from "react-redux";

import {
  setAddProduct,
  setActiveIngr,
  setProductInfo,
  setOrder,
  setActiveOrder,
  setDeleteCount,
} from "../../redux/slices/addCartSlice";

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

function Ingridient({
  photo,
  price,
  nameItem,
  setAddProduc,
  objIngredient,
  hasBunds,
  addMap,
  // deleteIngrSum,
}) {
  const [count, setCount] = React.useState(0)

  const addProduct = useSelector((state) => state.addCart.addProduct);

  // console.log(getCountFromCart(addProduct))
  // const productSum = addProduct.filter((product, index, array) => {
  //   if (array.indexOf(product) !== index) {
  //     return product
  //   }
  // })
  // console.log(productSum)

  // const findObj = addProduct.find((obj) => obj.id ===  objIngredient.id)
  // if (findObj) {
  //   console.log(findObj)
  // }

  // const arrayProductId = addProduct.map((obj) => {
  //   return obj.id
  // })

  // console.log(arrayProductId)

  // const productSum = () => {
  //   for (const item of arrayProductId) {
  //     return countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
  //   }
  // }

  // console.log(productSum)




  const dispatch = useDispatch();

  const addProductCart = () => {
    if (!hasBunds && objIngredient.type !== 'Булки') {
      window.alert('Выберите булку, для добавления ингридиента')
      return
    }
    dispatch(setAddProduct(objIngredient));
    // getCountFromCart(addProduct)
  };

  const activeModal = (status) => {
    dispatch(setProductInfo(objIngredient));
    dispatch(setActiveIngr(status))
  };

  console.log(addMap)

  return (
    <Wrapper>
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
      </Block>
    </Wrapper>
  );
}

export default Ingridient;
