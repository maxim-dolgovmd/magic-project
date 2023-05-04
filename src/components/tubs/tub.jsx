import React from "react";
import styled from 'styled-components'

const Tub = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #131316;
    
    
    ${(props) => {
        switch(props.status) {
            case 'active':
                return {
                    color: '#F2F2F3',
                    boxShadow: 'inset 0px -2px 0px #4C4CFF',
                    padding: '16px 40px',
                    
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '24px',
                }

            case 'noactive':
                return {
                    color: '#8585AD',
                    padding: '16px 40px',
                    
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '24px',
                }
        }
    }};
`
export default React.memo(Tub)

