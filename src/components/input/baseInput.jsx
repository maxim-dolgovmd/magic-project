import React from "react";
import styled from "styled-components";

import Input from "./input";

const InputStyle = styled(Input)`
    
    
    ${(props) => {
        return props.error && {
            border: '2px solid red'
        }
    }};

    ${(props) => {
        return props.placeholder && {
            position: 'absolute',
            top: '0',
        }
    }};

    &:focus + label{
        position: absolute;
        top: 0;
        left: 16px;
        color: red;
    };

    :focus {
        border: 2px solid #4C4CFF;
        color: #fff;
    }

    
`;
const LabelBlock = styled.div`
    position: relative;
`
const Placeholder = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 16px;
    color: #8585AD;
    transition: all 200ms ease-in 0s;

    ${(props) => {
        return props.isFocus && {
            fontSize: '13px',
            lineHight: '20px',
            top: '13px',
            left: '18px',
            
        }
    }}
`

function BaseInput({ error, label }) {

    const [isFocus, setIsFocus] = React.useState(false)
    const [value, setValue] = React.useState('')

    console.log(value)
    return (
        <div style={{display: 'inline-flex'}}>
            <LabelBlock>
                <InputStyle 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    onBlur={() => value ? setIsFocus(true) : setIsFocus(false)} 
                    onFocus={() => setIsFocus(true)}  
                    error={error} />
                <Placeholder isFocus={isFocus}>
                    {label}
                </Placeholder>
            </LabelBlock>
            {error && <div style={{ paddingLeft: '16px', color: 'red' }}>Ой, произошла ошибка!</div>}
        </div>
    );
}

export default BaseInput