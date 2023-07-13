import React from "react";
import styled from "styled-components";

type ButtonTextProps = {
    size: 'small' | 'medium' | 'large'
}

const ButtonText = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props: ButtonTextProps) => {
        switch(props.size) {
            case 'large':
                return {
                    padding: '20px 10px',
                    borderRadius: '64px',

                    color: '#4C4CFF',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '24px',
                }
            case 'medium':
                return {
                    padding: '16px 8px',
                    borderRadius: '64px',

                    color: '#4C4CFF',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '24px',
                }
            case 'small':
                return {
                    padding: '10px 4px',
                    borderRadius: '32px',

                    color: '#4C4CFF',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '20px',
                }
        }
    }};
`

export default React.memo(ButtonText)