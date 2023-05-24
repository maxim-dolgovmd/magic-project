import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import Edit from '../../assets/icon/edit.svg'

import Input from "./input";
// import { type } from "os";

const InputStyle = styled(Input)`
  &:focus + label {
    position: absolute;
    top: 0;
    left: 16px;
    color: red;
  }

  :focus {
    border: 2px solid #4c4cff;
    color: #fff;
  }

  ${(props) => {
    return (
      props.error && {
        border: "2px solid red",
      }
    );
  }};

  ${(props) => {
    return (
      props.placeholder && {
        position: "absolute",
        top: "0",
      }
    );
  }};
`;
const LabelBlock = styled.div`
  position: relative;
`;
const Placeholder = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 16px;
  color: #8585ad;
  transition: all 200ms ease-in 0s;

  ${(props) => {
    return (
      props.isFocus && {
        fontSize: "13px",
        lineHight: "20px",
        top: "13px",
        left: "18px",
      }
    );
  }}
`;

const CloseIngr = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    padding-right: 20px;
    cursor: pointer;
`;

const BaseInput = ({
  error,
  label,
  type,
  onChange,
  value,
  register,
  setValue,
  valueField,
}) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const inputRef = React.useRef()
  const [activeImg, setActiveImg] = React.useState(true)
  // const dispatch = useDispatch()
  // const value = useSelector((state) => state.addCart.value)
  const setClose = () => {
    setValue(register.name, '')
    // inputRef.current.focus()
  }

  console.log(register, valueField);
  return (
    // <div style={{display: 'inline-flex'}}>
    <div>
      <LabelBlock>
        <InputStyle
            // value={value}
            // onChange={register.onChange}
          onBlur={() => (valueField ? setIsFocus(true) : setIsFocus(false))}
          onFocus={() => {
              setIsFocus(true)
              // setActiveImg(false)
          }}
          error={error}
          type={type}
          {...register}
          // onBlur={() => register.onBlur(setIsFocus, valueField)}
          // ref={inputRef}
        />
        <Placeholder isFocus={isFocus}>{label}</Placeholder>
        {valueField &&
          <CloseIngr onClick={setClose}>
              <Image src="/close.svg" width={16} height={16} alt="CloseSvg" /> 
          </CloseIngr> 
              // <CloseIngr >
              //     <Edit /> 
              // </CloseIngr>
        }
      </LabelBlock>
      {error && (
        <div style={{ paddingLeft: "16px", color: "red" }}>{error}</div>
      )}
    </div>
  );
};

export default React.memo(BaseInput);
