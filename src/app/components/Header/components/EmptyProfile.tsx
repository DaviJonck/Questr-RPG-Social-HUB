'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import { FaChevronDown, FaChevronUp, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
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
    font-family: 'Poppins', serif;
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

export const DropdownItem = styled.div`
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
        background-color: #4a4a4a;
    }
`;

const EmptyProfileDropdown = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => setOpen(!open);

    const handleGoLogin = () => {
        router.push('/login');
    };

    const handleGoRegister = () => {
        router.push('/register');
    };

    return (
        <ProfileContainer>
            <ProfileHeader onClick={toggleDropdown} open={open}>
                <ProfileName>Forasteiro</ProfileName>
                {open ? <FaChevronUp /> : <FaChevronDown />}
            </ProfileHeader>
            {open && (
                <DropdownContent open={open}>
                    <DropdownItem onClick={handleGoLogin}>
                        <FaSignInAlt />
                        Fazer Login
                    </DropdownItem>
                    <DropdownItem onClick={handleGoRegister}>
                        <FaUserPlus />
                        Criar Conta
                    </DropdownItem>
                </DropdownContent>
            )}
        </ProfileContainer>
    );
};

export default EmptyProfileDropdown;
