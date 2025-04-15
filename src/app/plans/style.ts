import styled, { css } from 'styled-components';

export const SupportPageContainer = styled.div`
    background: linear-gradient(to bottom, #1a1a1a, #2b2b2b);
    min-height: 100vh;
    position: relative;
    overflow: hidden;
`;

export const HeroSection = styled.section`
    text-align: center;
    padding: 4rem 2rem;
    position: relative;
    background: url('/tavern-background.jpg') no-repeat center center;
    background-size: cover;
    margin-bottom: 3rem;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 0;
    }
`;

export const HeroTitle = styled.h1`
    font-family: 'Cinzel', serif;
    color: #ffd700;
    font-size: 3rem;
    position: relative;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const HeroSubtitle = styled.p`
    font-family: 'Poppins', sans-serif;
    color: #e0e0e0;
    font-size: 1.2rem;
    max-width: 600px;
    margin: 1rem auto;
    position: relative;
    z-index: 1;
`;

export const SupportCards = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 0 2rem;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
`;

export const SupportCard = styled.div<{ $highlighted?: boolean }>`
    background: rgba(42, 42, 42, 0.9);
    border-radius: 12px;
    padding: 2rem;
    width: 100%;
    max-width: 350px;
    border: 1px solid ${({ $highlighted }) => ($highlighted ? '#ffd700' : 'rgba(255, 215, 0, 0.3)')};
    box-shadow: ${({ $highlighted }) => ($highlighted ? '0 0 20px rgba(255, 215, 0, 0.2)' : 'none')};
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(5px);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: ${({ $highlighted }) =>
            $highlighted
                ? 'linear-gradient(90deg, #ffd700, #e6c200)'
                : 'linear-gradient(90deg, rgba(255,215,0,0.3), transparent)'};
    }
`;

export const CardTitle = styled.h2`
    color: #ffd700;
    font-family: 'Cinzel', serif;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
`;

export const CardPrice = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 1rem;
`;

export const CardBenefits = styled.ul`
    list-style: none;
    padding: 0;
    margin: 2rem 0;
    text-align: left;
`;

export const BenefitItem = styled.li`
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #e0e0e0;
    font-family: 'Poppins', sans-serif;
`;

export const SupportButton = styled.a`
    display: inline-block;
    background: #ffd700;
    color: #2a2a2a;
    padding: 0.8rem 1.5rem;
    border-radius: 6px;
    font-family: 'Cinzel', serif;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease;
    width: 100%;
    text-align: center;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
        background: #e6c200;
        transform: translateY(-2px);
    }
`;

export const CommunityImpact = styled.section`
    max-width: 800px;
    margin: 4rem auto;
    padding: 0 2rem;
    text-align: center;

    h2 {
        color: #ffd700;
        font-family: 'Cinzel', serif;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .impact-stats {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
        flex-wrap: wrap;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            min-width: 200px;
        }
    }
`;

export const Testimonials = styled.section`
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0 2rem;
    text-align: center;

    h2 {
        color: #ffd700;
        font-family: 'Cinzel', serif;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .testimonial-cards {
        display: flex;
        gap: 2rem;
        margin-top: 2rem;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const DecorationDragon = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    opacity: 0.1;
    z-index: 0;

    img {
        height: 150px;
    }
`;

export const DecorationTreasure = styled.div`
    position: absolute;
    bottom: 50px;
    left: 50px;
    opacity: 0.1;
    z-index: 0;

    img {
        height: 100px;
    }
`;
