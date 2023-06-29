import React from "react";
import styled from 'styled-components'

const Tab = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #131316;
    cursor: pointer;
    
    
    ${(props: {status: boolean}) => {
        switch(props.status) {
            case true:
                return {
                    color: '#F2F2F3',
                    boxShadow: 'inset 0px -2px 0px #4C4CFF',
                    padding: '16px 40px',
                    
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '24px',
                }

            case false:
                return {
                    color: '#8585AD',
                    boxShadow: 'inset 0px -2px 0px #2F2F37',
                    padding: '16px 40px',
                    
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '24px',
                }
        }
    }};
`
export default React.memo(Tab)

