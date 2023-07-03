import React from "react";
import styled from 'styled-components'

import Burger from '../../assets/icon/burger.svg'
import ViewList from '../../assets/icon/view-list.svg'
import Profile from '../../assets/icon/profile.svg'
import Logo from '../../assets/icon/logo.svg'
import Container from '../container/container'
import Link from "next/link";




const Wrapper = styled.div`
    background-color: #1C1C21;
    z-index: 300;
    position: fixed;
    width: 100%;
`;


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    padding: 16px 0;
    /* justify-items: center; */

    @media (max-width: 767.97px) {
        display: none;
    }
    >div:first-child {

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
    
`

const BoxLogo = styled.div`
    display: flex;
    color: #F2F2F3;
    align-items: center;
    justify-content: center;
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: flex-end;
`

const Header = () => {

    return (
        <Wrapper> 
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
                    <StyledLink  href={'/account/profile'}>
                        <BoxBlock >
                            <Profile />
                            <div>Личный кабинет</div>
                        </BoxBlock>
                    </StyledLink>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default Header