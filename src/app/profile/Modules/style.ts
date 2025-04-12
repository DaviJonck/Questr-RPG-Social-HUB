import Image from 'next/image';

import background from '@/app/images/hero_dmgscreen_0.jpg';

import styled from 'styled-components';

const backgroundUrl = background.src;

export const Section = styled.section`
    padding: 60px 0;
    background-color: #1e1e1e;
    color: #f0e6d2;
`;

export const Container = styled.div`
    width: 56.25rem;
    margin: 0 auto;
    padding: 0 20px;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
`;
export const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

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
`;

export const AviablityCard = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    gap: 2rem;
`;
export const AvatarCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Title = styled.h2`
    text-align: start;
    flex-wrap: wrap;
    font-size: 2rem;
    font-weight: 400;
    margin-top: 20px;
    color: #ffd700;
    font-family: 'Cinzel', serif;
`;
export const BannerWrapper = styled.div`
    width: 100%;
    position: relative;
    height: 200px; /* altura do banner */
    background-color: transparent;
`;
export const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${backgroundUrl});
    background-size: cover;
    background-position: center;
    filter: brightness(0.7);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    z-index: 1;
    overflow: hidden; /* Para evitar que o conteúdo ultrapasse */
`;

export const AvatarWrapper = styled.div`
    position: relative;
    top: -4.5rem;
    display: flex;
    justify-content: center;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    padding: 4px;
    border: 2px solid white;
    z-index: 2;
    box-shadow: 0 5px 12px 5px rgb(10, 10, 10);
    border: 2px solid #ffd700;
    background-color: #1e1e1e;
    object-fit: cover;
`;

export const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;

export const AvatarFrame = styled.img`
    position: absolute;
    pointer-events: none;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    animation: hue 20s linear infinite;

    /* Para um efeito de animação de cor */
    @keyframes hue {
        100% {
            filter: hue-rotate(360deg);
        }
    }
`;
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: #f0e6d2;
    margin-bottom: 20px;
    padding-top: 5rem;
`;

export const UserType = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 1rem;
    font-size: 1.2rem;
`;

export const Bio = styled.p`
    font-size: 1rem;
    line-height: 1.6;
`;

export const Tags = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    span {
        font-family: 'Poppins', sans-serif;
        background: rgba(255, 215, 0, 0.1);
        color: #ffd700;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid rgba(255, 215, 0, 0.2);
    }
`;

export const Availability = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 1rem;

    h3 {
        color: #ffd700;
        margin-bottom: 10px;
        margin-top: 15px;
        font-size: 1.5rem;
        font-family: 'Cinzel', serif;
    }

    div {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }
`;

export const Campaigns = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h3 {
        color: #ffd700;
        margin-bottom: 10px;
    }

    div {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }
`;

export const Rating = styled.div`
    text-align: center;

    h3 {
        color: #ffd700;
        margin-bottom: 10px;
    }

    div {
        display: flex;
        justify-content: center;
    }
`;

// Availability TABLE

export const AvailabilityExtras = styled.div`
    margin-top: 1rem;

    div {
        display: flex;
        align-items: center;
        margin-bottom: 4px;
    }
`;

export const AvailabilityGrid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 600px;
    gap: 1rem;
`;

export const AvailabilityCard = styled.div`
    background-color: #2b2b2b;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #3d3d3d;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    color: #f0e6d2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 120px;
    strong {
        color: #ffd700;
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    span {
        font-size: 0.9rem;
        color: #ccc;
    }
`;
export const DayCard = styled.div`
    background: #1e1e1e;
    border-radius: 0.5rem;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;
    width: 100%; // muito importante pra funcionar bem com grid!
`;
export const AvailabilityItem = styled.div`
    background-color: #2b2b2b;
    border: 1px solid rgba(255, 215, 0, 0.2);
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
    }

    strong {
        color: #ffd700;
        font-size: 1rem;
        margin-bottom: 0.25rem;
    }

    span {
        color: #f1f1f1;
        font-size: 0.9rem;
    }
`;
