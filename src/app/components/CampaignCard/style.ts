import { Rating } from '@mui/material';

import { Calendar, Crown, Scroll, Swords, Users } from 'lucide-react';
import styled from 'styled-components';

const Card = styled.div`
    background: rgba(42, 42, 42, 0.95);
    border: 2px solid #3d3d3d;
    border-radius: 8px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #ffd700, transparent);
    }

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    h3 {
        color: #ffd700;
        font-size: 1.5rem;
        letter-spacing: 1px;
    }
`;

const DmIcon = styled(Crown)`
    color: #ffd700;
`;

const SubHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    color: #a0a0a0;
    font-family: 'Inter', sans-serif;
`;

const DmInfo = styled.span`
    display: flex;
    flex-direction: column;
`;

const SystemTag = styled.span`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 215, 0, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: #ffd700;
    font-weight: 500;
    border: 1px solid rgba(255, 215, 0, 0.2);
`;

const Meta = styled.div`
    display: flex;
    gap: 1.5rem;
    color: #a0a0a0;
    font-family: 'Inter', sans-serif;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;

const Description = styled.p`
    display: flex;
    gap: 1rem;
    color: #e0e0e0;
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-family: 'Inter', sans-serif;
`;

const DescriptionIcon = styled(Scroll)`
    flex-shrink: 0;
    margin-top: 0.25rem;
    color: #ffd700;
`;

const Tags = styled.div`
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
`;

const Tag = styled.span`
    background: rgba(255, 215, 0, 0.1);
    color: #ffd700;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 500;
    border: 1px solid rgba(255, 215, 0, 0.2);
    font-family: 'Inter', sans-serif;
`;

const JoinButton = styled.button`
    padding: 0.75rem 1.5rem;
    border: 2px solid #ffd700;
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
    background-color: #ffd700;
    color: #1a1a1a;
    position: relative;
    overflow: hidden;

    &:hover {
        background-color: #e6c200;
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
    }

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
`;

export {
    Card,
    Header,
    DmIcon,
    SubHeader,
    DmInfo,
    SystemTag,
    Meta,
    Description,
    DescriptionIcon,
    Tags,
    Tag,
    JoinButton
};
