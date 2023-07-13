import React from "react";
import styled from 'styled-components'

import Container from "../../../components/container/container";
import BaseInput from '../../../components/input/baseInput'
import ButtonComponent from '../../../components/button/button'
import { useForm } from "react-hook-form";
import { useRouter } from "next/router"
import Link from 'next/link';
import {UserRegisrType, usePostRegistrationMutation} from '../../../services/registrationApi'
import { device } from "@/components/components/device/device";

const Box = styled.div`
  padding-top: 250px;
  display: flex;
  justify-content: center;

  @media ${device.mobileL} {
    padding-top: 100px;
}
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 480px;
`

const ColumnSignIn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Title = styled.div`
    color: #F2F2F3;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    justify-content: center;
    text-align: center;
`

const BlockButton = styled.div`
    display: flex;
    justify-content: center;
`

const BlockText = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    >div {
        display: flex;
        justify-content: center;
        >span {
            color: #8585AD;
        }
        >a {
            padding-left: 8px;
        }
    }
`

const Content = styled.div`
    @media ${device.mobileL} {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
`

const LinkStyle = styled(Link)`
    color: #4C4CFF;
`

const Registration: React.FC = () => {

    const [registrMutation] = usePostRegistrationMutation()

    const {register,watch, handleSubmit, formState: {errors}, setValue} = useForm<UserRegisrType>({mode: 'onBlur'})

    console.log( registrMutation)

    const OnSubmit = handleSubmit((data) => {
        console.log(data)
        registrMutation(data)
    })

    return (
        <Container>
            <Box>
                <Column>
                    <ColumnSignIn>
                        <Title>Регистрация</Title>
                        <BaseInput 
                            label={'Имя'}
                            setValue={setValue}
                            error={errors.username?.message}
                            register={{
                                ...register('username', {
                                    required: 'Введите свое Имя'
                                })
                            }}
                            valueField={watch('username')} type={""}
                        />
                        <BaseInput 
                            label={"E-mail"}
                            setValue={setValue}
                            error={errors.email?.message}
                            register={{
                                ...register('email', {
                                    required: 'Введите свой email',
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/,
                                        message: 'Некорректный email',
                                    }
                                })
                            }}
                            valueField={watch('email')} type={""}
                        />
                        <BaseInput 
                            label={"Пароль"} 
                            type="password" 
                            setValue={setValue}
                            error={errors.password?.message} 
                            register={{...register('password', {required: 'Введите пароль', minLength: {
                              value: 8,
                              message: 'Минимум 8 символов'
                            },})}}
                            valueField={watch('password')}
                        />
                        <BlockButton>
                            <ButtonComponent onClick={OnSubmit} size='medium'>Зарегестрироваться</ButtonComponent>
                        </BlockButton>
                    </ColumnSignIn>
                    <BlockText>
                        <Content>
                            <span>Уже зарегестрированы? </span>
                            <LinkStyle href="/registration/sign-in">Войти</LinkStyle>
                        </Content>
                    </BlockText>
                </Column>
            </Box>
        </Container>
    )
}

export default Registration