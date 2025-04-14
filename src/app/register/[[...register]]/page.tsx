'use client';

import { SetStateAction, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Logo } from '@/app/components/Header/styles';
import { SignUp, useSignUp } from '@clerk/nextjs';

import {
    BackgroundImage,
    Divider,
    Form,
    FormContainer,
    FormTitle,
    Input,
    LeftSide,
    LoginContainer,
    RightSide,
    SiteName,
    SubmitButton
} from '../../login/[[...login]]/style';
import { Shield } from 'lucide-react';

const RegisterPage = () => {
    const { signUp, isLoaded } = useSignUp();
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [registered, setRegistered] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!isLoaded) return;
        if (password !== confirmPassword) {
            setError('As senhas não conferem.');

            return;
        }

        setLoading(true);

        try {
            await signUp.create({
                emailAddress: email,
                password,
                username: displayName
            });

            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
            setRegistered(true);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.errors?.[0]?.message || 'Erro ao registrar.');
        }

        setLoading(false);
    };

    if (registered) {
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
                        <FormTitle>Verifique seu Email!</FormTitle>
                        <p style={{ color: '#ffd700', textAlign: 'center', marginBottom: '1rem' }}>
                            Enviamos um link de confirmação para: <br />
                            <strong>{email}</strong>
                        </p>
                        <p style={{ color: '#ffd700', textAlign: 'center', marginBottom: '2rem' }}>
                            Acesse seu e-mail e confirme o cadastro antes de tentar entrar.
                        </p>
                        <SubmitButton type='button' onClick={() => router.push('/login')}>
                            Login
                        </SubmitButton>
                    </FormContainer>
                </RightSide>
            </LoginContainer>
        );
    }

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
                <SignUp />
            </RightSide>
        </LoginContainer>
    );
};

export default RegisterPage;
