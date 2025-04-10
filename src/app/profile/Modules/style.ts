import styled from 'styled-components';

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
    height: 100vh;
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

export const Avatar = styled.div`
    box-sizing: border-box;
    position: relative;
    border-radius: 50%;
    padding: 4px;
    width: 150px; /* Tamanho do avatar */
    height: 150px;
    overflow: hidden;
    box-shadow: inset 0 0 0 2pxrgb (8, 8, 8);
    box-shadow: 0 5px 12px 5px rgb(10, 10, 10);
    border: 2px solid #ffd700;
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
