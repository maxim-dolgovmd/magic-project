import React from "react";
import styled from 'styled-components'

import Button from '../components/button/button'
import ButtonText from '../components/button/buttonText'
import Input from '../components/input/input'
import BaseInput from '../components/input/baseInput'
import Tab from '../components/tabs/tab'
import Ingridient from '../components/ingridient/ingridient'
import IngridientBurger from "../components/ingridient/ingridientBurger";
import CardDesktop from '../components/objectCart/cardDesktop'
import CardBurger from '../components/objectCart/cardBurger'
import Constructor from './constructor/constructor'
import Container from "../components/container/container";

const Box = styled.div`
    padding: 110px 0 0px 0;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const Margin = styled.div`
    margin: 40px 0 0 0;
`

const Home = () => {
    return(
    <Box>
        <Container>
            <Margin>
                <Constructor />
            </Margin>
        </Container>
    </Box>
    )
} 

 export default Home