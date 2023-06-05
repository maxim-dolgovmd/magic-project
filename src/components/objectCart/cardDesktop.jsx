import React from "react";

import {harcodeIllustration} from "../json/hardcodeillustration";
import Ingridient from '../ingridient/ingridient'

const cardDesktop = () => {

    return harcodeIllustration.map((obj, index) => {
        // console.log(obj)
        return (
            <Ingridient
                key={obj.id}
                nameItem={obj?.nameItem}
                photo={obj?.largePhoto}
                price={obj?.price}
                quantity={obj?.quantity}
            />
        )
    })
}

export default cardDesktop