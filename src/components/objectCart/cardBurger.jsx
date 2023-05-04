import React from "react";

import hardcodeillustration from '../json/hardcodeillustration'
import IngredientBurger from '../ingridient/ingridientBurger'

const cardBurger = () => {
    
    return hardcodeillustration.map((obj) => {
        return (
            <IngredientBurger 
                key={obj.id}
                photo={obj.mobilePhoto}
                nameItem={obj.nameItem}
                price={obj.price}
            />
        )
    })
}

export default cardBurger