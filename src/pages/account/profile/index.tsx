import React from "react";
import styled from "styled-components";
import Container from "../../../components/container/container";
import BaseInput from "../../../components/input/baseInput";
import { useForm } from "react-hook-form";
import ButtonComponent from '../../../components/button/button'
import Link from "next/link";
import { device, size } from "@/components/components/device/device";


const Box = styled.div`
  padding-top: 150px;
  margin: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    padding-top: 100px;
  }
`;

const ButtonBox = styled.div`
  display: grid;
  grid-template-rows: repeat(3);
  padding-bottom: 80px;
`;

type ActiveButton = {
  active?: any
}

const Button = styled.div`
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

  ${(props: ActiveButton) => {
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

  @media ${device.tablet} {
    justify-content: center;
  }
`

const ContentCategory = styled.div`
  display: none;
  @media (min-width: ${size.tablet}) {
      display: block;
  }
`

const TitleCategory = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  padding-bottom: 24px;

  @media (min-width: ${size.tablet}) {
    display: none;
  }
`

interface DataType {
  loginValue: string,
  passwordUser: string,
  userName: string,
}

const PersonalArea:React.FC = () => {
  const {register,watch, handleSubmit, formState: {errors}, setValue} = useForm<DataType>({mode: 'onBlur'})
  
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    alert('Сохранить данные?')
  })

  return (
    <Container>
      <Box>
        <TitleCategory>
          Профиль
        </TitleCategory>
        <ContentCategory>
          <ButtonBox>
            <Button active>
              <span>Профиль </span>
            </Button>
              <Button>
                <Link href={'/account/order-history'}>
                  <span>История заказов </span>
                </Link>
              </Button>
            <Button>
              <span>Выход </span>
            </Button>
          </ButtonBox>
          <Title>
            <span>
              В этом разделе вы можете изменить свои персональные данные{" "}
            </span>
          </Title>
        </ContentCategory>
        <InputBlock onSubmit={onSubmit}>
          <BaseInput 
            label={"Имя"}
            // value={nameValue} 
            // onChange={(e) => setNameValue(e.target.value)} 
            setValue={setValue}
            error={errors.userName?.message}
            register={{
              ...register('userName', {
                required: 'Введите свое Имя',
                // onBlur: (func, value) => value ? func(true) : func(false)
              })
            }}
            valueField={watch('userName')} type={""}          />
          <BaseInput 
            label={"Логин"}
            // value={loginValue} 
            // onChange={(e) => setLoginValue(e.target.value)} 
            setValue={setValue}
            error={errors.loginValue?.message}
            register={{
              ...register('loginValue', {
                required: 'Введите логин ', minLength: {
                  value: 5,
                  message: 'Минимум 5 символов'
                },
              })
            }}
            valueField={watch('loginValue')} type={""}          />
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
          <ComponentBlock onClick={onSubmit}>
            <ButtonComponent size='medium'>Сохранить</ButtonComponent>
          </ComponentBlock>
        </InputBlock>
      </Box>
    </Container>
  );
}

export default PersonalArea;
