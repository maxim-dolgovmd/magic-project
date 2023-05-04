import React from "react";
import styled from 'styled-components'

import Burger from '../../assets/icon/burger.svg'
import ViewList from '../../assets/icon/Name=view-list.svg'
import Profile from '../../assets/icon/Name=profile.svg'
import Logo from './logo/logo.svg'
import Tab from '../tubs/tub'

const HeaderWrapper = styled.header`
    padding-top: 40px;
`

const Wrapper = styled.div`
    background-color: #1C1C21;
    z-index: 3;
    position: fixed;
    width: 100%;
`;

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    padding: 16px 0;
    justify-items: center;

    @media (max-width: 767.97px) {
        display: none;
    }
`

const Box = styled.div`
    display: flex;
`
const BoxBlock = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    color: #8585AD;
    padding: 16px 20px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    &:hover {
        color: #F2F2F3;
    }
`

const BoxLogo = styled.div`
    display: flex;
    color: #F2F2F3;
    align-items: center;
`

const Header = () => {

    return (
        <HeaderWrapper>
            <Wrapper> 
                <Container>
                    <Grid>
                        <Box>
                            <BoxBlock >
                                <Burger />
                                <div>Конструктор</div>
                            </BoxBlock>
                            <BoxBlock>
                                <ViewList />
                                <div>Лента заказов</div>
                            </BoxBlock>
                        </Box>
                        <BoxLogo>
                            <Logo />
                        </BoxLogo>
                        <BoxBlock>
                            <Profile />
                            <div>Личный кабинет</div>
                        </BoxBlock>
                    </Grid>
                </Container>
            </Wrapper>
        </HeaderWrapper>
    )
}

export default Header