'use client';

import { useState } from 'react';

import { supabase } from '../lib/supabaseClient';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            setError(error.message);
        } else {
            window.location.href = '/'; // redireciona para Home ou Dashboard
        }

        setLoading(false);
    };

    return (
        <form
            onSubmit={handleLogin}
            className='flex flex-col gap-4 max-w-sm mx-auto p-4 bg-zinc-800 rounded-2xl shadow-lg'>
            <h2 className='text-xl font-bold text-center'>Entrar na Taverna</h2>
            <input
                type='email'
                placeholder='Seu e-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='p-2 rounded bg-zinc-700 text-white'
            />
            <input
                type='password'
                placeholder='Senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='p-2 rounded bg-zinc-700 text-white'
            />
            <button
                type='submit'
                className='bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded'
                disabled={loading}>
                {loading ? 'Entrando...' : 'Entrar'}
            </button>
            {error && <p className='text-red-500 text-center'>{error}</p>}
        </form>
    );
}
