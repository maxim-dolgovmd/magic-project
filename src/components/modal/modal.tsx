import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { device } from "../device/device";

const Window = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-Index: 200;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`

const OrderContent = styled.h1`
    /* height: 720px; */
    /* max-width: 718px; */
    background: #1C1C21;
    border: 1px solid rgba(76, 76, 255, 0.2);
    box-shadow: 
        0px 24px 32px rgba(0, 0, 0, 0.04), 
        0px 16px 24px rgba(0, 0, 0, 0.04),
        0px 4px 8px rgba(0, 0, 0, 0.04),
        0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 40px;
    display: flex;
    /* justify-content: center; */

    @media ${device.tablet} {
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }
`

type ModalType = {
    children: React.ReactNode,
    activeModal: () => void,
}

const Modal:React.FC<ModalType> = ({children, activeModal}) => {

    return (
        <Window onClick={activeModal}>
            <OrderContent onClick={(e) => e.stopPropagation()}>
                {children}
            </OrderContent>
        </Window>
    )
}

export default Modal