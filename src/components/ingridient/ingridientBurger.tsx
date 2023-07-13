import React from "react"
import styled from 'styled-components'

import Image from "next/image"
import {useDispatch } from "react-redux";
import {setDeleteProduct} from '../../redux/slices/addCartSlice'
import { useAppDispatch } from "@/components/redux/store";
import { device, size } from "../device/device";

const Box = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    color: #F2F2F3;
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
    padding-right: 8px;
`

const NextImage = styled(Image)`
    @media ${device.mobileL} {
        display: none;
    }
`

const BoxImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`


const BoxName = styled.div`
    display: flex;
    /* width: 255px; */
    justify-content: flex-start;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #F2F2F3;
    padding-right: 8px;
    hyphens: manual;

    @media (min-width: ${size.laptopL}) {
        width: 255px;
    }
    @media ${device.laptop} {
        width: 255px;
    }
    @media ${device.mobileL} {
        font-size: 12px;
    }
`


type IngridientTypeBurgers = {
    photo: string,
    price: number,
    nameItem: string,
    index: number,
}

const IngridientBurger: React.FC<IngridientTypeBurgers> = ({
    photo,
    price,
    nameItem,
    index,
}) => {

    const dispatch = useAppDispatch() 

    const deleteIngr = (index: number) => {
        dispatch(setDeleteProduct(index))
    }

    return (
        // <Wrapper> 
        <React.Fragment>
            <div>
                <Image src={photo} width={80} height={40} alt="Crator" />
            </div>
            <BoxName>{nameItem}</BoxName>
            <Box>
                <div>{price}</div>
                <NextImage src='/price.svg' width={24} height={24} alt="PriceSvg" />
            </Box>
            <BoxImage onClick={() => deleteIngr(index)}>
                <Image src='/block.svg' width={24} height={24} alt="Block" />
            </BoxImage>
        </React.Fragment>
        // </Wrapper>
    )
}

export default IngridientBurger