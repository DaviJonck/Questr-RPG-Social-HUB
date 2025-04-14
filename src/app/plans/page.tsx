'use client';

import React from 'react';

import { Header } from '../components/Header/Header';
import { Footer } from '../home/modules/Footer/Footer';
import { Castle, Check, Coins, Crown, Gem, Heart, Scroll, Shield, Star, Sword, Users, X } from 'lucide-react';
import styled from 'styled-components';

const VIPPlansPage = () => {
    return (
        <>
            <Header />
            <PlansContainer>
                <PageHeader>
                    <Crown size={48} />
                    <h1>Planos VIP</h1>
                    <p>Desbloqueie recursos exclusivos e melhore sua experiência na Taverna</p>
                </PageHeader>

                <PlansGrid>
                    {/* Plano Básico */}
                    <PlanCard>
                        <PlanHeader>
                            <h2>Jogador</h2>
                            <Price>Grátis</Price>
                        </PlanHeader>
                        <PlanFeatures>
                            <Feature $valid='true'>
                                <Check size={16} /> Criação de perfil básico
                            </Feature>
                            <Feature $valid='true'>
                                <Check size={16} /> Acesso a mesas públicas
                            </Feature>
                            <Feature $valid='true'>
                                <Check size={16} /> 3 tags de interesse
                            </Feature>
                            <Feature $valid='false'>
                                <X size={16} /> Badge exclusiva
                            </Feature>
                            <Feature $valid='false'>
                                <X size={16} /> Mesas VIP
                            </Feature>
                            <Feature $valid='false'>
                                <X size={16} /> Recursos avançados
                            </Feature>
                        </PlanFeatures>
                        <PlanButton>Seu Plano Atual</PlanButton>
                    </PlanCard>

                    {/* Plano Intermediário */}
                    <PlanCard $highlighted='true'>
                        <Ribbon>Popular</Ribbon>
                        <PlanHeader>
                            <h2>Mestre</h2>
                            <Price>
                                R$ 19,90<small>/mês</small>
                            </Price>
                        </PlanHeader>
                        <PlanFeatures>
                            <Feature $valid='true'>
                                <Check size={16} /> Todos os recursos do Jogador
                            </Feature>
                            <Feature $valid='true'>
                                <Check size={16} /> Badge de Mestre VIP
                            </Feature>
                            <Feature $valid='true'>
                                <Check size={16} /> Até 10 tags de interesse
                            </Feature>
                            <Feature $valid='true'>
                                <Check size={16} /> Crie mesas VIP
                            </Feature>
                            <Feature $valid='true'>
                                <Check size={16} /> Ferramentas de mestre
                            </Feature>
                            <Feature $valid='false'>
                                <X size={16} /> Suporte prioritário
                            </Feature>
                        </PlanFeatures>
                        <PlanButton $highlighted='true'>Assinar</PlanButton>
                    </PlanCard>

                    {/* Plano Premium */}
                    <PlanCard>
                        <PlanHeader>
                            <h2>Heroi</h2>
                            <Price>
                                R$ 39,90<small>/mês</small>
                            </Price>
                        </PlanHeader>
                        <PlanFeatures>
                            <Feature $valid='true'>
                                <Check size={16} /> Todos os recursos do Mestre
                            </Feature>
                            <Feature $valid='true'>
                                <Check size={16} /> Badge exclusiva dourada
                            </Feature>
                            <Feature $valid='true'>
                                <Check size={16} /> Tags ilimitadas
                            </Feature>
                            <Feature $valid='true'>
                                <Check size={16} /> Suporte prioritário 24/7
                            </Feature>
                            <Feature $valid='true'>
                                <Check size={16} /> Acesso antecipado a recursos
                            </Feature>
                            <Feature $valid='true'>
                                <Check size={16} /> Sala privada para campanhas
                            </Feature>
                        </PlanFeatures>
                        <PlanButton>Assinar</PlanButton>
                    </PlanCard>
                </PlansGrid>

                <VIPBenefits>
                    <h2>Benefícios VIP Exclusivos</h2>
                    <BenefitsGrid>
                        <BenefitCard>
                            <Gem size={32} />
                            <h3>Badges Exclusivas</h3>
                            <p>Mostre seu status com badges especiais no seu perfil</p>
                        </BenefitCard>
                        <BenefitCard>
                            <Sword size={32} />
                            <h3>Ferramentas para Mestres</h3>
                            <p>Gerencie suas campanhas com ferramentas avançadas</p>
                        </BenefitCard>
                        <BenefitCard>
                            <Shield size={32} />
                            <h3>Mesas VIP</h3>
                            <p>Acesso a mesas exclusivas com jogadores selecionados</p>
                        </BenefitCard>
                        <BenefitCard>
                            <Scroll size={32} />
                            <h3>Recursos de Campanha</h3>
                            <p>Compartilhe materiais e documentos com seus jogadores</p>
                        </BenefitCard>
                        <BenefitCard>
                            <Users size={32} />
                            <h3>Comunidade Premium</h3>
                            <p>Acesso a canais exclusivos da comunidade</p>
                        </BenefitCard>
                        <BenefitCard>
                            <Star size={32} />
                            <h3>Prioridade em Buscas</h3>
                            <p>Seu perfil aparece primeiro nos resultados de busca</p>
                        </BenefitCard>
                    </BenefitsGrid>
                </VIPBenefits>

                {/* Nova Seção de Apoio */}
                <CommunitySupport>
                    <Castle size={48} />
                    <h2>Ajude a Construir a Taverna</h2>
                    <SupportText>
                        <p>
                            Cada assinatura VIP ajuda diretamente a manter o site ativo e em constante evolução. Nosso
                            compromisso é oferecer a melhor plataforma para a comunidade de RPG, e seu apoio faz toda a
                            diferença!
                        </p>
                        <ul>
                            <li>
                                <Heart size={16} /> Mantenha os servidores online e estáveis
                            </li>
                            <li>
                                <Coins size={16} /> Permita o desenvolvimento de novas ferramentas
                            </li>
                            <li>
                                <Users size={16} /> Sustente uma equipe dedicada a melhorar sua experiência
                            </li>
                        </ul>
                        <p>Junte-se aos nossos apoiadores VIP e faça parte dessa jornada épica!</p>
                    </SupportText>
                </CommunitySupport>
            </PlansContainer>
            <Footer />
        </>
    );
};

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

const PlanCard = styled.div<{ $highlighted?: string }>`
    background: #2a2a2a;
    border-radius: 8px;
    padding: 2rem;
    position: relative;
    border: 1px solid ${({ $highlighted }) => ($highlighted === 'true' ? '#ffd700' : 'rgba(255, 215, 0, 0.3)')};
    box-shadow: ${({ $highlighted }) => ($highlighted === 'true' ? '0 0 20px rgba(255, 215, 0, 0.2)' : 'none')};
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

const Feature = styled.li<{ $valid?: string }>`
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
        color: ${({ $valid }) => ($valid === 'true' ? '#4CAF50' : '#F44336')};
        flex-shrink: 0;
    }
`;

const PlanButton = styled.button<{ $highlighted?: string }>`
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    background: ${({ $highlighted }) => ($highlighted === 'true' ? '#ffd700' : 'rgba(255, 215, 0, 0.1)')};
    color: ${({ $highlighted }) => ($highlighted === 'true' ? '#2a2a2a' : '#ffd700')};
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
        background: ${({ $highlighted }) => ($highlighted === 'true' ? '#e6c200' : 'rgba(255, 215, 0, 0.2)')};
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

export default VIPPlansPage;
