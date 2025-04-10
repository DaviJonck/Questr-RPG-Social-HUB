'use client';

import { Container, Description, Feature, Features, Section, Title } from './style';
import { Wand2 } from 'lucide-react';

export function AboutSection() {
    return (
        <Section>
            <Container>
                <Wand2 size={40} style={{ color: '#ffd700', marginBottom: '10px' }} />
                <Title>O que é isso aqui?</Title>
                <Description>
                    Você acaba de chegar à <strong>Taverna Digital</strong> — um lugar onde heróis se encontram, mestres
                    tecem histórias e grandes campanhas ganham vida!
                </Description>

                <Features>
                    <Feature>
                        🧙‍♂️ <strong>Para Mestres:</strong> Crie campanhas com facilidade, descreva suas mesas, defina o
                        sistema, o tom e o estilo de jogo. Deixe seu convite chamativo como um pergaminho mágico!
                    </Feature>
                    <Feature>
                        🧝 <strong>Para Jogadores:</strong> Navegue por aventuras em busca de uma mesa que combine com
                        seu estilo. Escolha sua próxima jornada como quem escolhe uma missão na guilda.
                    </Feature>
                    <Feature>
                        🧭 <strong>Fácil e intuitivo:</strong> Em poucos cliques você está pronto para criar ou
                        participar de uma campanha. Sem burocracia, só role seus dados e vá!
                    </Feature>
                </Features>
            </Container>
        </Section>
    );
}
