import React, { BaseSyntheticEvent } from "react";
import styled from 'styled-components'

import Container from "../../../components/container/container";
import BaseInput from '../../../components/input/baseInput'
import ButtonComponent from '../../../components/button/button'
import { useForm } from "react-hook-form";
import { useRouter } from "next/router"
import Link from 'next/link';
import {UserAuthType, usePostAuthorizationMutation} from '../../../services/registrationApi'

const Box = styled.div`
  padding-top: 250px;
  display: flex;
  justify-content: center;
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

const SignIn: React.FC = () => {

    const [authMutation] = usePostAuthorizationMutation()

    const {register,watch, handleSubmit, formState: {errors}, setValue} = useForm<UserAuthType>({mode: 'onBlur'})

    console.log(setValue)

    const OnSubmit = handleSubmit((data) => {
        console.log(data)
        authMutation(data)
    })

    return (
        <Container>
            <Box>
                <Column>
                    <ColumnSignIn>
                        <Title>Вход</Title>
                        <BaseInput 
                            label={"E-mail"}
                            setValue={setValue}
                            error={errors.username?.message}
                            register={{
                                ...register('username', {
                                    required: 'Введите свой email',
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/,
                                        message: 'Некорректный email',
                                    }
                                })
                            }}
                            valueField={watch('username')} type={""}
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
                            <ButtonComponent onClick={OnSubmit} size='medium'>Войти</ButtonComponent>
                        </BlockButton>
                    </ColumnSignIn>
                    <BlockText>
                        <div>
                            <span>Вы — новый пользователь? </span>
                            <Link href="/registration/registration"> Зарегестрироваться</Link>
                        </div>
                        <div>
                            <span>Забыли пароль? </span>
                            <Link href="/registration/forgot-password-1"> Восстановить пароль</Link>
                        </div>
                    </BlockText>
                </Column>
            </Box>
        </Container>
    )
}

export default SignIn