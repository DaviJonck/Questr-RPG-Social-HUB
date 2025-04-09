'use client';

import { useState } from 'react';

import { Logo } from '../components/Header/styles';
import {
    BackgroundImage,
    Divider,
    Form,
    FormContainer,
    FormTitle,
    Icon,
    Input,
    InputWrapper,
    LeftSide,
    LoginContainer,
    RightSide,
    SiteName,
    SubmitButton,
    ToggleButton,
    ToggleText
} from './style';
import { Mail, Shield } from 'lucide-react';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <LoginContainer>
            <LeftSide>
                <Logo>
                    <Shield size={60} />
                </Logo>
                <SiteName>Taverna</SiteName>
                <BackgroundImage src='/login-bg.jpg' alt='Background' />
            </LeftSide>
            <Divider />
            <RightSide>
                <FormContainer>
                    <FormTitle>{isLogin ? 'Login' : 'Registro'}</FormTitle>
                    {isLogin ? <LoginForm /> : <RegisterForm />}
                    <ToggleText>
                        {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
                        <ToggleButton onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? 'Registre-se' : 'Faça login'}
                        </ToggleButton>
                    </ToggleText>
                </FormContainer>
            </RightSide>
        </LoginContainer>
    );
};

const LoginForm = () => (
    <Form>
        <InputWrapper>
            <Icon>
                <Mail size={20} />
            </Icon>
            <Input type='email' placeholder='Email' required />
        </InputWrapper>
        <Input type='password' placeholder='Senha' required />
        <SubmitButton type='submit'>Entrar</SubmitButton>
    </Form>
);

const RegisterForm = () => (
    <Form>
        <Input type='text' placeholder='Nome' required />
        <Input type='email' placeholder='Email' required />
        <Input type='password' placeholder='Senha' required />
        <Input type='password' placeholder='Confirmar Senha' required />
        <SubmitButton type='submit'>Registrar</SubmitButton>
    </Form>
);

export default LoginPage;
