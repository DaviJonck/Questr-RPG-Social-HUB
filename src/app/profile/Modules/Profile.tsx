'use client';

import Legolas from '@/app/images/Legolas.jpeg';
import { UserInterface } from '@/app/interfaces/User';
import { Rating } from '@mui/material';

import {
    Availability,
    AvailabilityCard,
    AvailabilityGrid,
    Avatar,
    AvatarWrapper,
    Banner,
    BannerWrapper,
    Bio,
    Container,
    ProfileCard,
    Section,
    Tags,
    Title,
    UserInfo,
    UserType
} from './style';
import { User } from 'lucide-react';

const schedule = [
    { day: 'Segunda', time: '18h às 23h' },
    { day: 'Terça', time: '19h às 22h' },
    { day: 'Quarta', time: '20h às 23h' },
    { day: 'Quinta', time: '20h às 23h' },
    { day: 'Sexta', time: '20h às 23h' },
    { day: 'Sabado', time: '20h às 23h' },
    { day: 'Domingo', time: '20h às 23h' }
];

export default function UserProfileSection({ user }: { user: UserInterface }) {
    return (
        <Section>
            <Container>
                <ProfileCard>
                    <BannerWrapper>
                        <Banner />
                        <AvatarWrapper>
                            <Avatar src={Legolas.src} alt='User Avatar' />
                        </AvatarWrapper>
                    </BannerWrapper>
                    <UserInfo>
                        <Title>{user.name}</Title>
                        <Rating readOnly defaultValue={user.stars} precision={0.5}></Rating>
                        <UserType>
                            <User size={20} style={{ color: '#ffd700', marginRight: '10px' }} />
                            {user.type === 'dm' ? 'Mestre' : 'Jogador'}
                        </UserType>
                        <Bio>
                            Aventureiro incansável, adoro criar histórias épicas e personagens memoráveis. Sempre em
                            busca do equilíbrio perfeito entre interpretação e estratégia.
                        </Bio>
                        <Tags>
                            <span>🎭 Interpretação</span>
                            <span>⚔️ Combate</span>
                            <span>🎲 OSR</span>
                            <span>🧙‍♂️ Fantasia</span>
                        </Tags>
                    </UserInfo>
                    <Availability>
                        <h3>Disponibilidade</h3>
                        <AvailabilityGrid>
                            {schedule.map(({ day, time }, index) => (
                                <AvailabilityCard key={index}>
                                    <strong>{day}</strong>
                                    <span>{time}</span>
                                </AvailabilityCard>
                            ))}
                        </AvailabilityGrid>
                    </Availability>
                </ProfileCard>
            </Container>
        </Section>
    );
}
