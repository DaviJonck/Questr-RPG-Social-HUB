'use client';

import { SetStateAction, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Logo } from '@/app/components/Header/styles';
import { supabase } from '@/app/lib/supabaseClient';

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
} from '../login/style';
import { Shield } from 'lucide-react';

const RegisterPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            setLoading(false);

            return;
        }

        const {
            data: { user },
            error: signUpError
        } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { display_name: displayName } }
        });

        if (signUpError) {
            setError(signUpError.message);
            setLoading(false);

            return;
        }

        router.push('/');
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
                <FormContainer>
                    <FormTitle>Registro</FormTitle>
                    <Form onSubmit={handleRegister}>
                        <Input
                            type='text'
                            placeholder='Usuário'
                            value={displayName}
                            onChange={(e: { target: { value: SetStateAction<string> } }) =>
                                setDisplayName(e.target.value)
                            }
                            required
                        />
                        <Input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e: { target: { value: SetStateAction<string> } }) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            type='password'
                            placeholder='Senha'
                            value={password}
                            onChange={(e: { target: { value: SetStateAction<string> } }) => setPassword(e.target.value)}
                            required
                        />
                        <Input
                            type='password'
                            placeholder='Confirmar Senha'
                            value={confirmPassword}
                            onChange={(e: { target: { value: SetStateAction<string> } }) =>
                                setConfirmPassword(e.target.value)
                            }
                            required
                        />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <SubmitButton type='submit' disabled={loading}>
                            {loading ? 'Registrando...' : 'Registrar'}
                        </SubmitButton>
                    </Form>
                </FormContainer>
            </RightSide>
        </LoginContainer>
    );
};

export default RegisterPage;
