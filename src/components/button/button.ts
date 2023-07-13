import React from "react";
import styled from "styled-components";

type ButtonProps = {
    size: 'small' | 'medium' | 'large'
}

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 64px;
    background: linear-gradient(63.18deg, #801AB3 0%, #4C4CFF 100%);
    box-shadow: 0px 0px 16px 8px rgba(51, 51, 255, 0.25), 0px 0px 8px 8px rgba(51, 51, 255, 0.25);

    border-radius: 8px;

    font-weight: 400;

    transition: all 0.3s ease 0s;
    white-space: nowrap;
    color: #fff;

    ${(props: ButtonProps) => {
        switch(props.size) {
            case 'large':
                return {
                    borderRadius: '32px',
                    padding: '20px 40px',

                    // width: '138px',
                    height: '64px',
                }
            case 'medium':
                return {
                    borderRadius: '64px',

                    padding: '16px 40px',

                    // width: '138px',
                    height: '56px',
                }
            case 'small':
                return {
                    borderRadius: '64px',

                    padding: '10px 32px',

                    // width: '115px',
                    height: '40px',
                }
        }
    }};
    :focus {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
                    linear-gradient(63.18deg, #801AB3 0%, #4C4CFF 100%);
    };
    :disabled {
        background: #3A3A55;
        color: #8585AD;
    };
`

export default React.memo(Button)