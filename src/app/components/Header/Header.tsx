'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { supabase } from '@/app/lib/supabaseClient';
import { useUser } from '@/context/UserContext';

import EmptyProfile from './components/EmptyProfile';
import EmptyProfileDropdown from './components/EmptyProfile';
import ProfileDropdown from './components/ProfileDropdown';
import { HeaderWrapper, Logo, Nav, NavLink, NavLinkItem, NavLinks } from './styles';
import { Scroll, Shield } from 'lucide-react';

export interface User {
    user_metadata: {
        display_name?: string;
    };
}
export function Header() {
    const { user } = useUser();

    return (
        <HeaderWrapper>
            <Nav>
                <Logo>
                    <Shield size={28} />
                    <span>Taverna</span>
                </Logo>
                <NavLinks>
                    <NavLinkItem>
                        <NavLink href='/'>
                            <Scroll size={18} /> Início
                        </NavLink>
                    </NavLinkItem>
                    <NavLinkItem>
                        <NavLink href='/campaigns'>Campanhas</NavLink>
                    </NavLinkItem>
                    <NavLinkItem>
                        <NavLink href='/create-campaign'>Criar Campanha</NavLink>
                    </NavLinkItem>
                    <NavLinkItem>
                        <NavLink href='#profile'>Faq</NavLink>
                    </NavLinkItem>
                    <NavLinkItem>
                        {user ? (
                            <ProfileDropdown userName={user.user_metadata.display_name || 'Aventureiro'} />
                        ) : (
                            <EmptyProfileDropdown />
                        )}
                    </NavLinkItem>
                </NavLinks>
            </Nav>
        </HeaderWrapper>
    );
}
