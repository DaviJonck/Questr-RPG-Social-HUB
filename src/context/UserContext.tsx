'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { User } from '@/app/components/Header/Header';
import Loading from '@/app/components/Loading/Loading';
import { supabase } from '@/app/lib/supabaseClient';

interface UserContextType {
    user: User | null;
}

const UserContext = createContext<UserContextType>({ user: null });

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data?.user || null);
            setLoading(false);
        };

        fetchUser();

        // opcional: escuta mudanças de login em tempo real
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });

        return () => listener.subscription.unsubscribe();
    }, []);

    if (loading) return <Loading />;

    return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
