'use client';

import { Button, Container, HeroDescription, HeroSection, HeroTitle } from './style';
import { Compass } from 'lucide-react';

export function Hero() {
    return (
        <HeroSection>
            <Container>
                <Compass
                    size={48}
                    style={{
                        marginBottom: '15px',
                        color: '#ffd700',
                        filter: `drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))`
                    }}
                />
                <HeroTitle>Encontre Seu Grupo de RPG Ideal</HeroTitle>
                <HeroDescription>
                    Conecte-se com jogadores e mestres que compartilham seu estilo e agenda.
                </HeroDescription>
                <Button>Comece Sua Aventura</Button>
            </Container>
        </HeroSection>
    );
}
