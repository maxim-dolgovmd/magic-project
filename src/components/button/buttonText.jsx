import React from "react";
import styled from "styled-components";

const ButtonText = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) => {
        switch(props.size) {
            case 'small':
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
            case 'large':
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