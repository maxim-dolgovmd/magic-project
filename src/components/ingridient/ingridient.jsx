import React from "react";
import styled from "styled-components";

import Image from "next/image";

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
  // deleteIngrSum,
}) {
  const [count, setCount] = React.useState(0);

  let deleteCount = useSelector((state) => state.addCart.deleteCount)

  React.useEffect(() => {
    deleteCount.map((obj, index) => {

      if (obj.id === objIngredient.id && obj.type !== 'Булки') {
        setCount(count - 1)
      } 
      if (obj.id === objIngredient.id && obj.type === 'Булки') {
        setCount(count - 2)
      }
      console.log(obj)
    })
    deleteCount = []
  }, [deleteCount])

  const addProduct = useSelector((state) => state.addCart.addProduct);
  const dispatch = useDispatch();

  const addProductCart = () => {
    if (objIngredient.type === 'Булки') {
      setCount((prev) => prev + 2);
    } else {
      setCount((prev) => prev + 1);
    }
    // setCount((prev) => prev + 1);
    
    dispatch(setAddProduct(objIngredient));
    // dispatch(setAddProduct(objIngredient), setOrder(objIngredient))
    // console.log(deleteIngrSum);
  };

  const activeModal = (status) => {
    dispatch(setProductInfo(objIngredient));
    dispatch(setActiveIngr(status))
  };

  // console.log(addProduct.nameItem)

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

          <Counter onClick={() => addProductCart()}>{count}</Counter>
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
