import React from "react";
import styled from 'styled-components'

import Burger from '../../assets/icon/burger.svg'
import ViewList from '../../assets/icon/view-list.svg'
import Profile from '../../assets/icon/profile.svg'
import Logo from '../../assets/icon/logo.svg'
import Tab from '../tabs/tab'
import Container from '../container/container'




const Wrapper = styled.div`
    background-color: #1C1C21;
    z-index: 3;
    position: fixed;
    width: 100%;
`;


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
    )
}

export default Header