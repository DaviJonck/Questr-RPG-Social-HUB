'use client';

import ProfileDropdown from './components/ProfileDropdown';
import { HeaderWrapper, Logo, Nav, NavLink, NavLinkItem, NavLinks } from './styles';
import { Scroll, Shield } from 'lucide-react';

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
                        <NavLink href='campaigns'>Campanhas</NavLink>
                    </NavLinkItem>
                    <NavLinkItem>
                        <NavLink href='createCampaign'>Criar Campanha</NavLink>
                    </NavLinkItem>
                    <NavLinkItem>
                        <NavLink href='#profile'>Faq</NavLink>
                    </NavLinkItem>
                    <NavLinkItem>
                        <ProfileDropdown userName={'Beholder'} />
                    </NavLinkItem>
                </NavLinks>
            </Nav>
        </HeaderWrapper>
    );
}
