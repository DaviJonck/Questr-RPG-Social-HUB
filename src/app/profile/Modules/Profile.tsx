'use client';

import Image from 'next/image';

import Legolas from '@/app/images/Legolas.jpeg';
import { UserInterface } from '@/app/interfaces/user';
import { Rating } from '@mui/material';

import {
    Availability,
    Avatar,
    AvatarCard,
    AvatarFrame,
    AvatarImage,
    AviablityCard,
    Bio,
    Campaigns,
    Container,
    ProfileCard,
    Section,
    Tags,
    Title,
    UserInfo,
    UserType
} from './style';
import { BookOpen, Calendar, Clock, Globe, User } from 'lucide-react';

export default function UserProfileSection({ user }: { user: UserInterface }) {
    return (
        <Section>
            <Container>
                <ProfileCard>
                    <Avatar>
                        <AvatarImage src={Legolas.src} alt='User Avatar' />
                    </Avatar>

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
                        <div>
                            <Calendar size={16} style={{ color: '#ffd700', marginRight: '10px' }} />
                            Terças e Quintas, 20h-23h
                        </div>
                        <div>
                            <Globe size={16} style={{ color: '#ffd700', marginRight: '10px' }} />
                            GMT-3 (Brasília)
                        </div>
                        <div>
                            <Clock size={16} style={{ color: '#ffd700', marginRight: '10px' }} />
                            Semanal
                        </div>
                    </Availability>
                    <Campaigns>
                        <h3>Campanhas Ativas</h3>
                        <div>
                            <BookOpen size={16} style={{ color: '#ffd700', marginRight: '10px' }} />
                            As Crônicas de Eldoria (Jogador)
                        </div>
                        <div>
                            <BookOpen size={16} style={{ color: '#ffd700', marginRight: '10px' }} />
                            Sombras de Neverwinter (Mestre)
                        </div>
                    </Campaigns>
                </ProfileCard>
            </Container>
        </Section>
    );
}
