import { Compass } from 'lucide-react';
import styled from 'styled-components';

const colors = {
    primary: '#ffd700',
    primaryDark: '#e6c200',
    background: '#1a1a1a',
    text: '#e0e0e0',
    glow: '0 0 20px rgba(255, 215, 0, 0.3)'
};

const HeroSection = styled.section`
    text-align: center;
    padding: 8rem 0;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
    }
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
`;

const HeroIcon = styled(Compass)`
    color: ${colors.primary};
    margin-bottom: 2rem;
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3));
`;

const HeroTitle = styled.h1`
    font-size: 4rem;
    margin-bottom: 1.5rem;
    color: ${colors.primary};
    text-transform: uppercase;
    letter-spacing: 4px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroDescription = styled.p`
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto 3rem;
    color: ${colors.text};
    font-family: 'Inter', sans-serif;
`;

const Button = styled.button`
    padding: 0.75rem 1.5rem;
    border: 2px solid ${colors.primary};
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Cinzel', serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(120deg, transparent, rgba(255, 215, 0, 0.2), transparent);
        transition: 0.5s;
    }

    &:hover::before {
        left: 100%;
    }

    /* Specific styles for .btn-accent */
    background-color: transparent;
    color: ${colors.primary};
    font-size: 1.1rem;
    padding: 1rem 2rem;

    &:hover {
        background-color: ${colors.primary};
        color: ${colors.background};
    }
`;

export { HeroSection, Container, HeroIcon, HeroTitle, HeroDescription, Button };
