import { FAQItemProps } from './page';
import styled, { css } from 'styled-components';

export const FAQPageContainer = styled.div`
    position: relative;
    min-height: 100vh;
    background-color: #2b2b2b;
    overflow: hidden;
`;

export const FAQPatternBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
        radial-gradient(circle at 10% 20%, rgba(255, 215, 0, 0.03) 0%, transparent 20%),
        radial-gradient(circle at 90% 80%, rgba(110, 69, 226, 0.03) 0%, transparent 20%),
        radial-gradient(circle at 30% 70%, rgba(255, 215, 0, 0.02) 0%, transparent 25%),
        radial-gradient(circle at 70% 30%, rgba(110, 69, 226, 0.02) 0%, transparent 25%);
    pointer-events: none;
    z-index: 0;
`;

export const FAQContentWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
    z-index: 1;
`;

// Elementos Decorativos
const decorationBase = css`
    position: absolute;
    color: rgba(255, 215, 0, 0.08);
    z-index: -1;
    transition: all 0.5s ease;

    &:hover {
        color: rgba(255, 215, 0, 0.15);
        transform: scale(1.1) rotate(10deg);
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

interface DecorationProps {
    $position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'mid-left' | 'mid-right' | 'center-bottom';
}

export const DecorationDice = styled.div<DecorationProps>`
    ${decorationBase}
    ${({ $position }) => {
        switch ($position) {
            case 'top-left':
                return css`
                    top: 50px;
                    left: -30px;
                    transform: rotate(-15deg);
                `;
            case 'top-right':
                return css`
                    top: 50px;
                    right: -30px;
                    transform: rotate(15deg);
                `;
            case 'bottom-left':
                return css`
                    bottom: 100px;
                    left: -30px;
                    transform: rotate(15deg);
                `;
            case 'bottom-right':
                return css`
                    bottom: 100px;
                    right: -30px;
                    transform: rotate(-15deg);
                `;
            case 'mid-left':
                return css`
                    top: 50%;
                    left: -40px;
                    transform: rotate(-10deg);
                `;
            case 'mid-right':
                return css`
                    top: 50%;
                    right: -40px;
                    transform: rotate(10deg);
                `;
            case 'center-bottom':
                return css`
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%) rotate(0deg);
                `;
        }
    }}
`;

export const DecorationPotion = styled(DecorationDice)`
    color: rgba(110, 69, 226, 0.08);

    &:hover {
        color: rgba(110, 69, 226, 0.15);
    }
`;

export const DecorationSword = styled(DecorationDice)`
    color: rgba(200, 50, 50, 0.08);

    &:hover {
        color: rgba(200, 50, 50, 0.15);
    }
`;

export const DecorationShield = styled(DecorationDice)`
    color: rgba(50, 100, 200, 0.08);

    &:hover {
        color: rgba(50, 100, 200, 0.15);
    }
`;

export const DecorationScroll = styled(DecorationDice)`
    color: rgba(255, 255, 255, 0.08);

    &:hover {
        color: rgba(255, 255, 255, 0.15);
    }
`;

export const DecorationHelmet = styled(DecorationDice)`
    color: rgba(150, 150, 150, 0.08);

    &:hover {
        color: rgba(150, 150, 150, 0.15);
    }
`;

export const DecorationCrystal = styled(DecorationDice)`
    color: rgba(100, 255, 200, 0.08);

    &:hover {
        color: rgba(100, 255, 200, 0.15);
    }
`;

export const FAQHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 3rem;
    position: relative;

    svg {
        color: #ffd700;
        opacity: 0.7;
        transition: all 0.3s ease;

        &:hover {
            opacity: 1;
            transform: scale(1.1);
        }
    }
`;

export const FAQTitle = styled.h1`
    color: #ffd700;
    font-family: 'Cinzel', serif;
    font-size: 2.5rem;
    text-align: center;
    margin: 0;
    letter-spacing: 2px;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    position: relative;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const FAQContent = styled.div`
    margin: 3rem 0;
    position: relative;
`;

export const FAQItem = styled.div`
    margin-bottom: 1.5rem;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: rgba(42, 42, 42, 0.8);
    border: 1px solid rgba(255, 215, 0, 0.15);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);

    &:hover {
        border-color: rgba(255, 215, 0, 0.3);
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }
`;

export const FAQQuestion = styled.div<FAQItemProps>`
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    color: ${({ $isActive }) => ($isActive ? '#ffd700' : '#e0e0e0')};
    background-color: ${({ $isActive }) => ($isActive ? 'rgba(255, 215, 0, 0.08)' : 'transparent')};
    transition: all 0.3s ease;

    svg {
        color: ${({ $isActive }) => ($isActive ? '#ffd700' : '#a0a0a0')};
        transition: all 0.3s ease;
    }
`;

export const FAQAnswer = styled.div<FAQItemProps>`
    padding: ${({ $isActive }) => ($isActive ? '1rem 1.5rem 1.5rem 1.5rem' : '0 1.5rem')};
    max-height: ${({ $isActive }) => ($isActive ? '500px' : '0')};
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    line-height: 1.7;
    color: #b0b0b0;
    background-color: rgba(30, 30, 30, 0.4);
    transition: all 0.4s ease;
`;

export const ContactSection = styled.section`
    margin: 5rem 0 3rem;
    display: flex;
    justify-content: center;
`;

export const ContactCard = styled.div`
    background: linear-gradient(145deg, rgba(42, 42, 42, 0.9), rgba(30, 30, 30, 0.9));
    border-radius: 16px;
    padding: 2.5rem;
    width: 100%;
    max-width: 600px;
    text-align: center;
    border: 1px solid rgba(255, 215, 0, 0.2);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, transparent 70%);
        z-index: -1;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
        border-color: rgba(255, 215, 0, 0.3);
    }

    p {
        color: #a0a0a0;
        font-family: 'Poppins', sans-serif;
        line-height: 1.6;
        margin: 1.5rem 0;
    }
`;

export const ContactTitle = styled.h2`
    color: #ffd700;
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    svg {
        color: #ffd700;
    }
`;

export const ContactButton = styled.a`
    display: inline-block;
    background-color: #ffd700;
    color: #2a2a2a;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    font-family: 'Cinzel', serif;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
        );
        transform: rotate(30deg);
        transition: all 0.3s ease;
    }

    &:hover {
        background-color: #e6c200;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(255, 215, 0, 0.3);

        &::after {
            left: 100%;
        }
    }
`;
