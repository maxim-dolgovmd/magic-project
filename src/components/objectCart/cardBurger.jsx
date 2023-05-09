import React from "react";

import {harcodeIllustration} from '../json/hardcodeillustration'
import IngredientBurger from '../ingridient/ingridientBurger'

const cardBurger = () => {

    return harcodeIllustration.map((obj) => {
        // console.log(Object(obj))
        return (
            <IngredientBurger 
                key={obj.id}
                photo={obj?.mobilePhoto}
                nameItem={obj?.nameItem}
                price={obj?.price}
            />
        )
    })
}

export default cardBurger