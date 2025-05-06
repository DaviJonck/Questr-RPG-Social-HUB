'use client';

import { useState } from 'react';

import LogoImg from '@/images/logo1.webp';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import {
    HeaderWrapper,
    Logo,
    MobileMenuButton,
    MobileMenuIcon,
    MobileNavLink,
    MobileNavLinkItem,
    MobileNavLinks,
    Nav,
    NavLink,
    NavLinkItem,
    NavLinks
} from './styles';
import { Menu, Scroll, Shield, X } from 'lucide-react';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <HeaderWrapper>
            <Nav>
                <Logo>
                    <Shield size={28} />
                    <span>Taverna</span>
                </Logo>

                {/* Menu Desktop */}
                <NavLinks>
                    <NavItem href='/' icon={<Scroll size={18} />} text='Início' />
                    <NavItem href='/campaigns' text='Campanhas' />
                    <NavItem href='/plans' text='Apoie' />
                    <NavItem href='/create-campaign' text='Criar Campanha' />
                    <NavItem href='/faq' text='Faq' />
                    <AuthButtons />
                </NavLinks>

                {/* Menu Mobile - Botão */}
                <MobileMenuButton onClick={toggleMobileMenu}>
                    <MobileMenuIcon>{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</MobileMenuIcon>
                </MobileMenuButton>
            </Nav>

            {/* Menu Mobile - Conteúdo */}
            {isMobileMenuOpen && (
                <MobileNavLinks>
                    <NavItem href='/' icon={<Scroll size={18} />} text='Início' mobile />
                    <NavItem href='/campaigns' text='Campanhas' mobile />
                    <NavItem href='/plans' text='Apoie' mobile />
                    <NavItem href='/create-campaign' text='Criar Campanha' mobile />
                    <NavItem href='/faq' text='Faq' mobile />
                    <AuthButtons mobile />
                </MobileNavLinks>
            )}
        </HeaderWrapper>
    );
}

// Componente auxiliar para itens de navegação
function NavItem({
    href,
    icon,
    text,
    mobile = false
}: {
    href: string;
    icon?: React.ReactNode;
    text: string;
    mobile?: boolean;
}) {
    const LinkComponent: React.ElementType = mobile ? MobileNavLinkItem : NavLinkItem;
    const AnchorComponent = mobile ? MobileNavLink : NavLink;

    return (
        <LinkComponent>
            <AnchorComponent href={href}>
                {icon && icon}
                {text}
            </AnchorComponent>
        </LinkComponent>
    );
}

// Componente auxiliar para botões de autenticação
function AuthButtons({ mobile = false }: { mobile?: boolean }) {
    const ItemComponent: React.ElementType = mobile ? MobileNavLinkItem : NavLinkItem;
    const ButtonComponent = mobile ? MobileNavLink : NavLink;

    return (
        <ItemComponent>
            <SignedOut>
                <SignInButton mode='modal'>
                    <ButtonComponent as='div' style={{ cursor: 'pointer' }}>
                        <FaSignOutAlt />
                        Login
                    </ButtonComponent>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton>
                    <UserButton.MenuItems>
                        <UserButton.Link label='Perfil' labelIcon={<FaUser />} href='/profile' />
                    </UserButton.MenuItems>
                </UserButton>
            </SignedIn>
        </ItemComponent>
    );
}
