import React from "react";
import styled from 'styled-components'

import Burger from '../../assets/icon/burger.svg'
import ViewList from '../../assets/icon/view-list.svg'
import Profile from '../../assets/icon/profile.svg'
import Logo from '../../assets/icon/logo.svg'
import LogoMobile from '../../assets/icon/logoMobile.svg'
import Link from "next/link";
import { device, size } from "../device/device";


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

    /* @media ${device.laptop} {
        flex-direction: column;
    } */
`
const BoxBlock = styled.div`
    display: flex;
    gap: 8px;
    /* align-items: flex-end; */
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
        padding: 16px 10px
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

const HeaderDesktop = () => {

    return (
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
    )
}

export default HeaderDesktop