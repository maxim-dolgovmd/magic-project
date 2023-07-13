import React from "react";
import styled from 'styled-components'

import Burger from '../../assets/icon/burger.svg'
import ViewList from '../../assets/icon/view-list.svg'
import Profile from '../../assets/icon/profile.svg'
import Logo from '../../assets/icon/logo.svg'
import LogoMobile from '../../assets/icon/logoMobile.svg'
import Container from '../container/container'
import Link from "next/link";
import { device, size } from "../device/device";
import HeaderMobile from "./headerMobile";
import { useSelector } from "react-redux";
import { AddCartSelect } from "@/components/redux/slices/addCartSlice";


type ActiveOrder = {
    activeOrder: boolean
}

const Wrapper = styled.div`
    background-color: #1C1C21;
    z-index: 300;
    position: fixed;
    width: 100%;

    @media ${device.tablet} {
        ${(props: ActiveOrder) => {
            return props.activeOrder && {
                display: 'none'
            }
        }};
    }
`;


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    padding: 16px 0;
   
   @media ${device.laptop} {
        grid-template-columns: 3fr 1fr 3fr;
    }
    @media ${device.tablet} {
        display: none;
    }
`

type AciveImage = {
    active?: any
}

const Box = styled.div`
    display: flex;
    justify-content: flex-start;
`
const BoxBlock = styled.div`
    display: flex;
    gap: 8px;
    color: #8585AD;
    padding: 16px 20px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        color: #F2F2F3;
        svg path {
            fill: #F2F2F3;
    }
    }

    ${(props: AciveImage) => {
        return props.active && {
            color: '#F2F2F3',
            path: {
                fill: '#F2F2F3'
            }
        }
    }};

    @media ${device.laptopL} {
        padding: 16px 12px
    }

    @media ${device.laptop} {
        padding: 16px 8px
    }
    
`

const BoxLogo = styled.div`
    display: none;

    @media (min-width: ${size.laptop}) {
        display: flex;
        color: #F2F2F3;
        align-items: center;
        justify-content: center;
    }
`

const BoxLogoMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${size.laptop}) {
        display: none;
    }
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: flex-end;
`

const MobileBox = styled.div`
    @media (min-width: ${size.tablet}) {
        display: none;
    }
`

const isBrowser = () => typeof window !== 'undefined';

const Header = () => {

    const {activeOrder, activeIngr } = useSelector(AddCartSelect);

    if (isBrowser()) {
        const screenWidth = window.screen.width
        console.log(screenWidth)
    }

    return (
        <Wrapper activeOrder={activeOrder || activeIngr}> 
            <Container>
                <Grid>
                    <Box>
                        <Link href={'/'}>
                            <BoxBlock>
                                <Burger />
                                <div>Конструктор</div>
                            </BoxBlock>
                        </Link>
                        <Link href={'/feed'}>
                            <BoxBlock >
                                <ViewList />
                                <div>Лента заказов</div>
                            </BoxBlock>
                        </Link>
                    </Box>
                    <BoxLogo>
                        <Logo />
                    </BoxLogo>
                    <BoxLogoMobile>
                        <LogoMobile />
                    </BoxLogoMobile>
                    <StyledLink  href={'/account/profile'}>
                        <BoxBlock >
                            <Profile />
                            <div>Личный кабинет</div>
                        </BoxBlock>
                    </StyledLink>
                </Grid>
                <MobileBox>
                    <HeaderMobile />
                </MobileBox>
            </Container>
        </Wrapper>
    )
}

export default Header