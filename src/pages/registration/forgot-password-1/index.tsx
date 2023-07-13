import React from "react";
import styled from "styled-components";

import Container from "../../../components/container/container";
import BaseInput from "../../../components/input/baseInput";
import ButtonComponent from "../../../components/button/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
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
`;

const ColumnSignIn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.div`
  color: #f2f2f3;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const BlockButton = styled.div`
  display: flex;
  justify-content: center;
`;

const BlockText = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  > div {
    display: flex;
    justify-content: center;
    > span {
      color: #8585ad;
    }
    > a {
      padding-left: 8px;
    }
  }
`;

const LinkStyle = styled(Link)`
    color: #4C4CFF;
`

const Content = styled.div`
    @media ${device.mobileL} {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
`

type DataEmailType = {
  email: string,
}

const ForgotPasswordOne: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<DataEmailType>({ mode: "onBlur" });

  const router = useRouter();

  const OnSubmit = handleSubmit((data) => {
    console.log(data);
    router.push("/registration/forgot-password-2")
  })

  return (
    <Container>
      <Box>
        <Column>
          <ColumnSignIn>
            <Title>Восстановление пароля</Title>
            <BaseInput
              label={"Укажите e-mail"}
              setValue={setValue}
              error={errors.email?.message}
              register={{
                ...register("email", {
                  required: "Введите свой email",
                  pattern: {
                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/,
                    message: "Некорректный email",
                  },
                }),
              }}
              valueField={watch("email")} type={""}
            />
            <BlockButton>
              <ButtonComponent
                onClick={OnSubmit}
                size="medium"
              >
                Восстановить
              </ButtonComponent>    
            </BlockButton>
          </ColumnSignIn>
          <BlockText>
            <Content>
              <span>Вспомнили пароль ? </span>
              <LinkStyle href="/registration/sign-in">Войти</LinkStyle>
            </Content>
          </BlockText>
        </Column>
      </Box>
    </Container>
  );
}

export default ForgotPasswordOne;
