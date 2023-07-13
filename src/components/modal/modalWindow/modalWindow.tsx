import React from "react";
import styled from 'styled-components'

import Image from "next/image"

import { useSelector, useDispatch } from "react-redux";
import {ProductSelect, setActiveIngr} from '../../../redux/slices/addCartSlice'
import Modal from '../modal'
import { useAppDispatch } from "@/components/redux/store";
import { device } from "../../device/device";

const BlockModal = styled.div`
    padding: 40px 40px 60px 40px;

    @media ${device.tablet} {
        width: 100%;
        padding: 20px;
    }
`

const TitleIngr = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #F2F2F3;

    @media ${device.tablet} {
        padding-bottom: 50px;
    }
    @media ${device.mobileL} {
        justify-content: flex-end;
    }
`

const Title = styled.div`
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;

    @media ${device.mobileL} {
        display: none;
    }
`

const CloseIngr = styled.div`
    padding-left: 20px;
    cursor: pointer;
`

const LargePhoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0 15px 0;
`

const DetailsIngr = styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
`

const NameItem = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    color: #F2F2F3;

    @media ${device.mobileL} {
       font-size: 18px;
       line-height: 20px;
    }
`

const Calories = styled.div`
    display: flex;
    gap: 20px;

    @media ${device.mobileL} {
       display: grid;
       grid-template-columns: repeat(2, 1fr);
    }
`

const BlockCal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #8585AD;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    :hover {
        color: #F2F2F3;
    }
`


const ModalWindow: React.FC = () => {

    const dispatch = useAppDispatch()
    const product = useSelector(ProductSelect)
    console.log(product)

    const activeModal = () => {
        dispatch(setActiveIngr(false));
      };

    return (
        // eslint-disable-next-line react/no-children-prop
        <Modal activeModal={activeModal}>
            <BlockModal>
                <TitleIngr>
                    <Title>Детали ингредиента</Title>
                    <CloseIngr onClick={() => dispatch(setActiveIngr(false))}>
                        <Image src='/close.svg' width={18} height={18} alt="CloseSvg" />
                    </CloseIngr>
                </TitleIngr>
                <LargePhoto>
                    <Image src={product.largePhotoUrl} width={480} height={240} alt="Image" unoptimized />
                </LargePhoto>
                <DetailsIngr>
                    <NameItem>{product.name}</NameItem>
                    <Calories>
                        <BlockCal>
                            <div>Калории,ккал</div>
                            <div>244,4</div>
                        </BlockCal>
                        <BlockCal>
                            <div>Белки, г</div>
                            <div>12,2</div>
                        </BlockCal>
                        <BlockCal>
                            <div>Жиры, г</div>
                            <div>17,2</div>
                        </BlockCal>
                        <BlockCal>
                            <div>Углеводы, г</div>
                            <div>10,2</div>
                        </BlockCal>
                    </Calories>
                </DetailsIngr>
            </BlockModal>
    </Modal>
    )
}

export default ModalWindow