import React from "react";
import styled from "styled-components";
import Container from "../../../components/container/container";
import BaseInput from "../../../components/input/baseInput";
import { useForm } from "react-hook-form";
import ButtonComponent from '../../../components/button/button'
import { useRouter } from "next/router"
import Link from "next/link";


const Box = styled.div`
  padding-top: 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ButtonBox = styled.div`
  display: grid;
  grid-template-rows: repeat(3);
  padding-bottom: 80px;
  /* gap: 20px; */
`;

const Button = styled.div`
  /* border: 2px dashed #4C4CFF; */
  display: flex;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  align-items: center;
  background: #131316;
  padding: 15px 0 15px 0;
  color: #8585ad;

  span:hover {
    cursor: pointer;
    color: #f2f2f3;
  }

  ${(props) => {
    return (
      props.active && {
        color: "#F2F2F3",
      }
    );
  }}
`;

const InputBlock = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.div`
  color: #8585ad;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  span:hover {
    color: #f2f2f3;
  }
`

const ComponentBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`

function PersonalArea() {
  const {register,watch, setFocus, handleSubmit, formState: {errors}, setValue} = useForm({mode: 'onBlur'})

  const [nameValue, setNameValue] = React.useState("");
  const [loginValue, setLoginValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const [buttonActive, setButtonActive] = React.useState(false)

  const submitHundler = data => {
    console.log(data)
    alert('Сохранить данные?')
  } 

  React.useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  
  const router = useRouter()

  console.log(errors)
  return (
    <Container>
      <Box>
        <div>
          <ButtonBox>
            <Button active>
              <span>Профиль </span>
            </Button>
            <Link href={'/account/order-history'}>
              <Button>
                <span>История заказов </span>
              </Button>
            </Link>
            <Button>
              <span>Выход </span>
            </Button>
          </ButtonBox>
          <Title>
            <span>
              В этом разделе вы можете изменить свои персональные данные{" "}
            </span>
          </Title>
        </div>
        <InputBlock onSubmit={handleSubmit(submitHundler)}>
          <BaseInput 
            label={"Имя"} 
            // value={nameValue} 
            // onChange={(e) => setNameValue(e.target.value)} 
            setValue={setValue}
            error={errors.userName?.message} 
            register={{...register('userName', {
              required: 'Введите свое Имя',
              // onBlur: (func, value) => value ? func(true) : func(false)
            })}}
            valueField={watch('userName')}
          />
          <BaseInput 
            label={"Логин"} 
            // value={loginValue} 
            // onChange={(e) => setLoginValue(e.target.value)} 
            setValue={setValue}
            error={errors.loginValue?.message} 
            register={{...register('loginValue', {required: 'Введите логин ', minLength: {
              value: 5,
              message: 'Минимум 5 символов'
            },})}}
            valueField={watch('loginValue')}
          />
          <BaseInput 
            label={"Пароль"} 
            type="password" 
            // value={passwordValue} 
            // onChange={(e) => setPasswordValue(e.target.value)} 
            setValue={setValue}
            error={errors.passwordUser?.message} 
            register={{...register('passwordUser', {required: 'Введите пароль', minLength: {
              value: 8,
              message: 'Минимум 8 символов'
            },})}}
            valueField={watch('passwordUser')}
          />
          <ComponentBlock onClick={handleSubmit(submitHundler)}>
            <ButtonComponent size='medium'>Сохранить</ButtonComponent>
          </ComponentBlock>
        </InputBlock>
      </Box>
    </Container>
  );
}

export default PersonalArea;
