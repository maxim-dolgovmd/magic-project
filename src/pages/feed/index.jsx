import React from "react";
import styled from 'styled-components'
// import Order from "../../components/cardOrder/cardOrder";

const Box = styled.div`
    padding-top: 150px;
    display: flex;
    flex-direction: column;
`

function OrderFeet() {
    return (
        <Box>
            <div>лента заказов</div>
            {/* <Order /> */}
        </Box>
    )
}

export default OrderFeet