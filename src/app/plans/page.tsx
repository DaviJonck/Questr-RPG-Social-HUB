'use client';

import React, { useState } from 'react';

import { Header } from '../components/Header/Header';
import { Footer } from '../home/modules/Footer/Footer';
import { Castle, Coins, Crown, Gem, Heart, Star, Users } from 'lucide-react';
import styled, { keyframes } from 'styled-components';

const SupportPage = () => {
    const [isPouring, setIsPouring] = useState(false);

    const handleSupportClick = () => {
        setIsPouring(true);
        // Simula o tempo de "enchimento" antes de redirecionar
        setTimeout(() => {
            window.location.href = '/apoia-se';
        }, 1500);
    };

    return (
        <>
            <Header />
            <TavernContainer>
                <PlansContainer>
                    <PageHeader>
                        <Crown size={48} />
                        <h1>APOIE A TAVERNA</h1>
                        <p>Sua contribuição mantém a taverna aberta para todos os aventureiros</p>
                    </PageHeader>

                    <VIPBenefits>
                        <h2>Benefícios para apoiadores!</h2>
                        <BenefitsGrid>
                            <BenefitCard>
                                <Gem size={32} />
                                <h3>Badges Exclusivas</h3>
                                <p>Mostre seu status com badges especiais no seu perfil</p>
                            </BenefitCard>
                            <BenefitCard>
                                <Users size={32} />
                                <h3>Comunidade Premium</h3>
                                <p>Acesso a canais exclusivos da comunidade</p>
                            </BenefitCard>
                            <BenefitCard>
                                <Star size={32} />
                                <h3>Prioridade no acesso de novas Features</h3>
                                <p>Você será o primeiro a testar novas features da Taverna</p>
                            </BenefitCard>
                        </BenefitsGrid>
                    </VIPBenefits>

                    <BarrelButton onClick={handleSupportClick} $pouring={isPouring} disabled={isPouring}>
                        {isPouring ? (
                            <>
                                <BeerFill />
                                Enchendo o Barril...
                            </>
                        ) : (
                            'Quero Apoiar'
                        )}
                    </BarrelButton>

                    <CommunitySupport>
                        <Castle size={48} />
                        <h2>Ajude a Construir a Taverna</h2>
                        <SupportText>
                            <p>
                                Cada apoio ajuda diretamente a manter o site ativo e em constante evolução. Nosso
                                compromisso é oferecer a melhor plataforma para a comunidade de RPG.
                            </p>
                            <ul>
                                <li>
                                    <Heart size={16} /> Mantenha os servidores online
                                </li>
                                <li>
                                    <Coins size={16} /> Desenvolva novas ferramentas
                                </li>
                                <li>
                                    <Users size={16} /> Melhore a experiência de todos
                                </li>
                            </ul>
                        </SupportText>
                    </CommunitySupport>
                </PlansContainer>
            </TavernContainer>
            <Footer />
        </>
    );
};

// Animations
const flicker = keyframes`
    0% { opacity: 0.8; }
    50% { opacity: 1; }
    100% { opacity: 0.8; }
`;

const pour = keyframes`
    0% { height: 0; opacity: 0; }
    50% { opacity: 1; }
    100% { height: 100%; opacity: 0; }
`;

// Styles
const TavernContainer = styled.div`
    position: relative;
    min-height: 100vh;
    background: #1a1a1a;
    overflow: hidden;
`;

const BarrelButton = styled.button<{ $pouring: boolean }>`
    position: relative;
    padding: 1.5rem 3rem;
    margin: 2rem auto;
    background: linear-gradient(to bottom, #8b4513, #5d2906);
    color: #ffd700;
    border: none;
    border-radius: 50px 50px 30px 30px;
    font-family: 'Cinzel', serif;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow:
        0 5px 15px rgba(0, 0, 0, 0.3),
        inset 0 -10px 20px rgba(0, 0, 0, 0.4),
        inset 0 10px 10px rgba(255, 215, 0, 0.1);
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover:not(:disabled) {
        transform: translateY(-3px);
        box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.4),
            inset 0 -10px 20px rgba(0, 0, 0, 0.4),
            inset 0 10px 10px rgba(255, 215, 0, 0.2);
    }

    &:disabled {
        cursor: wait;
    }

    &::before {
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        height: 20px;
        background: linear-gradient(to right, transparent, rgba(255, 215, 0, 0.3), transparent);
        border-radius: 50%;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%);
        width: 60%;
        height: 10px;
        background: #5d2906;
        border-radius: 50%;
    }
`;

const BeerFill = styled.div`
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 0;
    background: linear-gradient(to bottom, transparent, #ffd700, #e6c200);
    border-radius: 0 0 20px 20px;
    animation: ${pour} 1.5s ease-out forwards;
    z-index: -1;
`;

// Mantenha todos os outros estilos existentes (PlansContainer, PageHeader, etc.) exatamente como estão

// Estilos (mantendo os anteriores e adicionando os novos)
const CommunitySupport = styled.section`
    margin-top: 4rem;
    padding: 3rem 2rem;
    background: rgba(13, 13, 14, 0.1);
    border-radius: 8px;
    text-align: center;
    border: 1px solid rgba(255, 255, 254, 0.3);

    h2 {
        color: #ffd700;
        font-family: 'Cinzel', serif;
        font-size: 2rem;
        margin: 1rem 0;
    }

    svg:first-child {
        color: #ffd700;
    }
`;
const SupportButton = styled.button`
    padding: 1rem 2rem;
    background: #ffd700;
    color: #2a2a2a;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Cinzel', serif;
    font-size: 1rem;
    margin-top: 1rem;

    &:hover {
        background: #e6c200;
        transform: translateY(-2px);
    }
`;
const SupportText = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
    font-size: 1.1rem;
    line-height: 1.6;

    p {
        margin-bottom: 1rem;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;

        li {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(255, 215, 0, 0.1);

            svg {
                color: #ffd700;
            }
        }
    }
`;

const SupportCta = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    span {
        font-style: italic;
        color: #aaa;
    }
`;

// ... (manter todos os outros estilos anteriores)

// Estilos
const PlansContainer = styled.div`
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
    color: #e0e0e0;
`;

const PageHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;

    h1 {
        color: #ffd700;
        font-family: 'Cinzel', serif;
        font-size: 2.5rem;
        margin: 1rem 0 0.5rem;
    }

    p {
        font-size: 1.1rem;
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
    }

    svg {
        color: #ffd700;
    }
`;

const PlansGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`;
interface PlanCardProps {
    $highlighted?: boolean;
}

interface FeatureProps {
    $valid?: boolean;
}

const PlanCard = styled.div<PlanCardProps>`
    background: #2a2a2a;
    border-radius: 8px;
    padding: 2rem;
    position: relative;
    border: 1px solid ${({ $highlighted }) => ($highlighted ? '#ffd700' : 'rgba(255, 215, 0, 0.3)')};
    box-shadow: ${({ $highlighted }) => ($highlighted ? '0 0 20px rgba(255, 215, 0, 0.2)' : 'none')};
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
`;

const Ribbon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background: #ffd700;
    color: #2a2a2a;
    padding: 0.5rem 1.5rem;
    font-weight: bold;
    border-radius: 0 8px 0 8px;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

const PlanHeader = styled.div`
    text-align: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255, 215, 0, 0.2);

    h2 {
        color: #ffd700;
        font-family: 'Cinzel', serif;
        font-size: 1.8rem;
        margin: 0 0 0.5rem;
        letter-spacing: 1px;
    }
`;

const Price = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: #fff;

    small {
        font-size: 1rem;
        color: #aaa;
        font-weight: normal;
    }
`;

const PlanFeatures = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
`;

const Feature = styled.li<FeatureProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 0.95rem;

    &:last-child {
        border-bottom: none;
    }

    svg {
        color: ${({ $valid }) => ($valid ? '#4CAF50' : '#F44336')};
        flex-shrink: 0;
    }
`;

const PlanButton = styled.button<{ $highlighted?: boolean }>`
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    background: ${({ $highlighted }) => ($highlighted ? '#ffd700' : 'rgba(255, 215, 0, 0.1)')};
    color: ${({ $highlighted }) => ($highlighted ? '#2a2a2a' : '#ffd700')};
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
        background: ${({ $highlighted }) => ($highlighted ? '#e6c200' : 'rgba(255, 215, 0, 0.2)')};
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`;

const VIPBenefits = styled.section`
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 215, 0, 0.1);

    h2 {
        text-align: center;
        color: #ffd700;
        font-family: 'Cinzel', serif;
        font-size: 2rem;
        margin-bottom: 2rem;
        letter-spacing: 1px;
    }
`;

const BenefitsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const BenefitCard = styled.div`
    background: rgba(42, 42, 42, 0.8);
    border: 1px solid rgba(255, 215, 0, 0.2);
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        border-color: #ffd700;
        background: rgba(42, 42, 42, 1);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    h3 {
        color: #ffd700;
        margin: 1rem 0 0.5rem;
        font-family: 'Cinzel', serif;
        font-size: 1.2rem;
    }

    p {
        color: #aaa;
        font-size: 0.9rem;
        line-height: 1.6;
    }

    svg {
        color: #ffd700;
    }
`;

export default SupportPage;
