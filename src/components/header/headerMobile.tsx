import React, { useState } from "react";
import styled from 'styled-components'

import LogoMobile from '../../assets/icon/logoMobile.svg'
import { size } from "../device/device";

import { useSelector, useDispatch } from "react-redux";
import { AddCartSelect, setCartActive } from "@/components/redux/slices/addCartSlice";
import { useAppDispatch } from "@/components/redux/store";
import { setIsMenuClicked } from '../../redux/slices/addCartSlice'
import Navbar from "./navbar";
import Link from "next/link";


const BoxLogoMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    @media (min-width: ${size.laptop}) {
        display: none;
    }
`

const BoxMobile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    /* z-index: 2010; */
`

const MenuBtn = styled.button`
    width: 30px;
	height: 30px;
	position: relative;
	z-index:2;
	overflow: hidden;

    span {
        width: 30px;
        height: 3px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #F2F2F3;
        border-radius: 10px;
        transition: all 0.5s;

        &:nth-of-type(1) {
            ${(props: { isMenuClicked: boolean }) => {
        return (
            props.isMenuClicked && {
                display: 'none'
            });
    }}
        }
        
        &:nth-of-type(2) {
            top: calc(50% - 10px);
            ${(props: { isMenuClicked: boolean }) => {
        return (
            props.isMenuClicked && {
                top: '50%',
                transform: "translate(-50%, 0%) rotate(45deg)"
            });
    }}
        }

        &:nth-of-type(3) {
            top: calc(50% + 10px);
            ${(props: { isMenuClicked: boolean }) => {
        return (
            props.isMenuClicked && {
                top: '50%',
                transform: "translate(-50%, 0%) rotate(-45deg)"
            });
    }}
        }
    }  
`

const TitleMenu = styled(Link)`
    font-weight: 700;
    font-size: 28px;
    font-family: 'JetBrains Mono';
    line-height: 32px;
    padding: 8px 0;
`

const HeaderMobile = () => {

    // const [isMenuClicked, setIsMenuClicked] = useState(false)

    const { isMenuClicked, cartActive } = useSelector(AddCartSelect)

    const dispatch = useAppDispatch()

    const updateMenu = () => {
        dispatch(setIsMenuClicked(!isMenuClicked))
    }

    return (
        <div>
            <BoxMobile>
                <BoxLogoMobile>
                    {isMenuClicked ?
                        <TitleMenu
                            href={'/'}
                            onClick={() => dispatch(setIsMenuClicked(false))}>
                            Меню
                        </TitleMenu> :
                        <Link
                            href={'/'}
                            onClick={() => dispatch(setIsMenuClicked(false))}
                        >
                            <LogoMobile />
                        </Link>
                    }
                </BoxLogoMobile>
                <MenuBtn onClick={updateMenu} isMenuClicked={isMenuClicked}>
                    <span></span>
                    <span></span>
                    <span></span>
                </MenuBtn>
            </BoxMobile>
            {isMenuClicked && <Navbar />}
        </div>
    )
}

export default HeaderMobile