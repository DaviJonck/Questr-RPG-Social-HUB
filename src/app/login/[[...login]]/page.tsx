'use client';

import { SetStateAction, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Logo } from '@/app/components/Header/styles';
import { SignIn, useSignIn } from '@clerk/nextjs';

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
} from './style';
import { Shield } from 'lucide-react';

const LoginPage = () => {
    const { signIn, setActive, isLoaded } = useSignIn();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!isLoaded) return;

        try {
            const result = await signIn.create({
                identifier: email,
                password
            });

            if (result.status === 'complete') {
                await setActive({ session: result.createdSessionId });
                router.push('/'); // redireciona ao logar
            } else {
                setError('Verifique seu email ou senha.');
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.errors?.[0]?.message || 'Erro ao tentar logar.');
        }

        setLoading(false);
    };

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
                <SignIn />
            </RightSide>
        </LoginContainer>
    );
};

export default LoginPage;
