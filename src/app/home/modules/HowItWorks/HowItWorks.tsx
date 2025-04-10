'use client';

import { Container, Section, StepDescription, StepIcon, StepItem, StepTitle, Steps, Title } from './style';
import { Map, ScrollText, Swords, Users } from 'lucide-react';

export function HowItWorks() {
    const steps = [
        {
            icon: <ScrollText size={32} />,
            title: '1. Crie ou Explore',
            description:
                'Mestres publicam campanhas, jogadores procuram a jornada perfeita. Como um quadro de missões na taverna.'
        },
        {
            icon: <Users size={32} />,
            title: '2. Reúna seu Grupo',
            description: 'Jogadores se candidatam, mestres escolhem seus heróis. Forme a party dos sonhos!'
        },
        {
            icon: <Map size={32} />,
            title: '3. Defina os Detalhes',
            description: 'Horário, plataforma, estilo de jogo... tudo combinado antes da primeira rolagem de dados.'
        },
        {
            icon: <Swords size={32} />,
            title: '4. Comece sua Aventura!',
            description: 'Com tudo pronto, é só embarcar na campanha e viver grandes histórias!'
        }
    ];

    return (
        <Section>
            <Container>
                <Title>⚔️ Como Funciona</Title>
                <Steps>
                    {steps.map((step, index) => (
                        <StepItem key={index}>
                            <StepIcon>{step.icon}</StepIcon>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </StepItem>
                    ))}
                </Steps>
            </Container>
        </Section>
    );
}
