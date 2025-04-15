import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
    padding: 2rem 0;
    background-color: #1a1a1a;
    min-height: calc(100vh - 60px);
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`;

export const ProfileCard = styled.div`
    background: #2a2a2a;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    position: relative;
    border: 1px solid #ffd700;
`;

export const BannerWrapper = styled.div`
    position: relative;
    height: 200px;
`;

export const Banner = styled.div`
    background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    height: 100%;
    width: 100%;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('https://images.ctfassets.net/swt2dsco9mfe/3M3i1fX4jBztQ6MAUWNmra/9ac3ee6576f8aebfec1a5e093f55de7b/MadMage_Expansion_1920x1080_WallpaperTemplate.jpeg?q=70&fit=thumb&w=1920&h=1080&fm=avif')
            center/cover;
        opacity: 1;
    }
`;

export const AvatarWrapper = styled.div`
    position: absolute;
    bottom: -60px;
    left: 40px;
    border: 4px solid #ffd700;
    border-radius: 50%;
    background: #2a2a2a;
    width: 120px;
    height: 120px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const EditButton = styled.button`
    position: absolute;
    right: 20px;
    bottom: 20px;
    background: #ffd700;
    color: #2a2a2a;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;

    &:hover {
        background: #e6c200;
        transform: translateY(-2px);
    }
`;

// Animação para os ícones flutuantes
const floatAnimation = keyframes`
    0% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(10deg);
    }
    100% {
        transform: translateY(0) rotate(0deg);
    }
`;

export const FloatingIcon = styled.div`
    position: absolute;
    color: rgba(255, 215, 0, 0.4);
    user-select: none;
    pointer-events: none;
    animation: ${floatAnimation} 8s ease-in-out infinite;
    z-index: 0;

    &:hover {
        color: rgba(255, 215, 0, 0.7);
    }
`;

// ... (mantenha todos os outros estilos existentes) ...
export const UserInfo = styled.div`
    padding: 4rem 2rem 2rem;
    border-bottom: 1px solid rgba(255, 215, 0, 0.2);
`;

export const Title = styled.h1`
    margin: 0;
    color: #ffd700;
    font-size: 2rem;
    font-family: 'Cinzel', serif;
`;

export const UserType = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    color: #ffd700;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
`;

export const Bio = styled.p`
    color: #e0e0e0;
    line-height: 1.6;
    margin: 1rem 0;
    font-family: 'Poppins', sans-serif;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;

    span {
        background: rgba(255, 215, 0, 0.1);
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.9rem;
        color: #ffd700;
        border: 1px solid rgba(255, 215, 0, 0.3);
        font-family: 'Poppins', sans-serif;
    }
`;

export const Availability = styled.div`
    padding: 2rem;

    h3 {
        margin-top: 0;
        color: #ffd700;
        font-size: 1.5rem;
        font-family: 'Cinzel', serif;
    }
`;

export const AvailabilityDisplay = styled.div`
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
`;

export const AvailabilityCard = styled.div`
    background: rgba(255, 215, 0, 0.05);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 215, 0, 0.2);

    strong {
        display: block;
        color: #ffd700;
        margin-bottom: 0.5rem;
        font-family: 'Cinzel', serif;
    }

    span {
        color: #e0e0e0;
        font-size: 0.9rem;
        font-family: 'Poppins', sans-serif;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
`;

export const SocialLink = styled.a`
    display: flex;
    align-items: center;
    color: #ffd700;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    font-family: 'Poppins', sans-serif;

    span {
        padding: 0.5rem 1rem;
        background: rgba(255, 215, 0, 0.1);
        border-radius: 20px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border: 1px solid rgba(255, 215, 0, 0.3);
    }

    &:hover {
        color: #e6c200;
        transform: translateY(-2px);

        span {
            background: rgba(255, 215, 0, 0.2);
        }
    }
`;

export const EmptyState = styled.span`
    color: rgba(255, 215, 0, 0.5);
    font-style: italic;
    font-size: 0.9rem;
    font-family: 'Poppins', sans-serif;
`;
