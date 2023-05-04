import React from "react";
import Button from '../components/button/button'
import ButtonText from '../components/button/buttonText'
import Input from '../components/input/input'
import BaseInput from '../components/input/baseInput'
import Tub from '../components/tubs/tub'
import Ingridient from '../components/ingridient/ingridient'
import IngridientBurger from "../components/ingridient/ingridientBurger";
import CardDesktop from '../components/objectCart/cardDesktop'
import CardBurger from '../components/objectCart/cardBurger'

const Home = () => {
    return(
        <div style={{paddingTop: '112px'}}>
            <Button size="medium">
                <a href="https://www.google.com/">Купить</a>
            </Button>
            <div>lohnya</div>
            <label >
                <BaseInput 
                    label='Логин'
                    // error
                />
            </label>
            < ButtonText size="medium">Купить</ButtonText>
            <Tub status='active'>
                вкладка
            </Tub>
            {/* <Ingridient />
            <IngridientBurger /> */}
            {/* <CardDesktop /> */}
            <CardBurger />
        </div>
    )
} 

 export default Home