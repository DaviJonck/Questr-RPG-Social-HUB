'use client';

import { useEffect, useState } from 'react';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

import { Header, User } from '../components/Header/Header';
import UserProfileSection from './Modules/Profile';

export default function ProfilePage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    return (
        <>
            <Header />
            <UserProfileSection
                user={{
                    name: user?.user_metadata.display_name || 'Visitante',
                    stars: 4.5,
                    bio: 'Aventureiro incansável, adoro criar histórias épicas e personagens memoráveis. Sempre em busca do equilíbrio perfeito entre interpretação e estratégia.',
                    tags: ['🎭 Interpretação', '⚔️ Combate', '🎲 OSR', '🧙‍♂️ Fantasia'],
                    availability: {
                        days: ['Terças', 'Quintas'],
                        hours: ['20h-23h']
                    },
                    type: 'dm',
                    id: 1,
                    email: 'beholder@gmail.com'
                }}
            />
        </>
    );
}
