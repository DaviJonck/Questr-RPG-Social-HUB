'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import { supabase } from '@/app/lib/supabaseClient';

import { FaChevronDown, FaChevronUp, FaCrown, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { MdCampaign, MdCreateNewFolder } from 'react-icons/md';
import styled, { css } from 'styled-components';

export const ProfileContainer = styled.div`
    position: relative;
    font-family: 'Cinzel Decorative', serif;
    font-size: 16px;
`;

export const ProfileHeader = styled.div<{ open: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #403c26;
    color: #ffd700;
    padding: 8px 10px;
    width: 200px;
    cursor: pointer;
    user-select: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: ${(props) => (props.open ? '0' : '5px')};
    border-bottom-right-radius: ${(props) => (props.open ? '0' : '5px')};
`;

export const ProfileName = styled.span`
    margin-right: 10px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const DropdownContent = styled.div<{ open: boolean }>`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #403c26;
    min-width: 200px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 5px 16px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-top: none;
`;

export const DropdownItem = styled.div<{ disabled?: boolean }>`
    color: #ffd700;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s;

    svg {
        margin-right: 10px;
    }

    &:hover {
        background-color: ${(props) => (props.disabled ? 'inherit' : '#4a4a4a')};
    }

    ${(props) =>
        props.disabled &&
        css`
            opacity: 0.4;
            cursor: not-allowed;
        `}
`;

type Props = {
    userName: string;
};

const ProfileDropdown = ({ userName }: Props) => {
    const router = useRouter();
    const [open, setopen] = useState(false);

    const toggleDropdown = () => setopen(!open);

    const handleGoProfile = () => {
        router.push('/profile');
    };

    const handleGoCreateCampaign = () => {
        router.push('/create-campaign');
    };

    const handleLogout = async () => {
        console.log('Desconectando...');
        await supabase.auth.signOut();
        router.push('/login');
    };

    return (
        <ProfileContainer>
            <ProfileHeader onClick={toggleDropdown} open={open}>
                <ProfileName>{userName}</ProfileName>
                {open ? <FaChevronUp /> : <FaChevronDown />}
            </ProfileHeader>
            {open && (
                <DropdownContent open={open}>
                    <DropdownItem onClick={handleGoProfile}>
                        <FaUser />
                        Perfil
                    </DropdownItem>
                    <DropdownItem disabled>
                        <MdCampaign />
                        Minhas Campanhas
                    </DropdownItem>
                    <DropdownItem onClick={handleGoCreateCampaign}>
                        <MdCreateNewFolder />
                        Criar Campanha
                    </DropdownItem>
                    <DropdownItem disabled>
                        <FaCrown />
                        Planos VIP
                    </DropdownItem>
                    <DropdownItem onClick={handleLogout}>
                        <FaSignOutAlt />
                        Sair
                    </DropdownItem>
                </DropdownContent>
            )}
        </ProfileContainer>
    );
};

export default ProfileDropdown;
