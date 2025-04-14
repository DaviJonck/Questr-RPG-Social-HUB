'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import EmptyProfileDropdown from './components/EmptyProfile';
import ProfileDropdown, { DropdownItem } from './components/ProfileDropdown';
import { HeaderWrapper, Logo, Nav, NavLink, NavLinkItem, NavLinks } from './styles';
import { Scroll, Shield } from 'lucide-react';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';

export interface User {
    user_metadata: {
        display_name?: string;
    };
}
const DotIcon = () => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='currentColor'>
            <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z' />
        </svg>
    );
};

const CustomPage = () => {
    return (
        <div>
            <h1>Custom page</h1>
            <p>This is the content of the custom page.</p>
        </div>
    );
};
export function Header() {
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
                        <SignedOut>
                            <SignInButton mode='modal'>
                                <DropdownItem>
                                    <FaSignOutAlt />
                                    Login
                                </DropdownItem>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Link label='Perfil' labelIcon={<FaUser />} href='/profile' />
                                </UserButton.MenuItems>
                            </UserButton>
                        </SignedIn>
                        {/* {user ? (
                            <ProfileDropdown userName={user.user_metadata.display_name || 'Aventureiro'} />
                        ) : (
                            <EmptyProfileDropdown />
                        )} */}
                    </NavLinkItem>
                </NavLinks>
            </Nav>
        </HeaderWrapper>
    );
}
