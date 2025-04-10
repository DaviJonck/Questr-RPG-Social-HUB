import styled, { css } from 'styled-components';

type ButtonProps = {
    variant?: 'primary' | 'secondary';
};

export const colors = {
    primary: '#ffd700',
    primaryDark: '#e6c200',
    secondary: '#8b0000',
    secondaryDark: '#660000',
    background: '#1a1a1a',
    text: '#e0e0e0',
    textSecondary: '#a0a0a0',
    white: '#ffffff',
    glow: '0 0 20px rgba(255, 215, 0, 0.3)'
};

export const Section = styled.section`
    padding: 4rem 0;
    position: relative;
    background-color: #1e1e1e;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, ${colors.primary}, transparent);
    }
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    h2 {
        font-size: 2.5rem;
        color: ${colors.primary};
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`;

export const Actions = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.75rem 1.25rem;
    border-radius: 4px;
    border: 1px solid rgba(255, 215, 0, 0.2);

    input {
        background: none;
        border: none;
        color: ${colors.text};
        outline: none;
        width: 200px;
        font-family: 'Inter', sans-serif;

        &::placeholder {
            color: ${colors.textSecondary};
        }
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    padding: 1rem 0;
`;

export const Button = styled.button<ButtonProps>`
    padding: 0.75rem 1.5rem;
    border: 2px solid;
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

    ${({ variant }) =>
        variant === 'primary' &&
        css`
            background-color: ${colors.primary};
            color: ${colors.background};
            border-color: ${colors.primary};

            &:hover {
                background-color: ${colors.primaryDark};
                box-shadow: ${colors.glow};
            }
        `}

    ${({ variant }) =>
        variant === 'secondary' &&
        css`
            background-color: ${colors.secondary};
            color: ${colors.white};
            border-color: ${colors.secondary};

            &:hover {
                background-color: ${colors.secondaryDark};
            }
        `}
`;
