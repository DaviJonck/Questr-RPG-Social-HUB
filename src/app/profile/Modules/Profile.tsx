'use client';

import { useEffect, useState } from 'react';

import { Rating } from '@mui/material';

import { EditProfile } from './EditProfile';
import {
    Availability,
    AvailabilityCard,
    AvailabilityDisplay,
    Avatar,
    AvatarWrapper,
    Banner,
    BannerWrapper,
    Bio,
    Container,
    EditButton,
    EmptyState,
    ProfileCard,
    Section,
    SocialLink,
    SocialLinks,
    Tags,
    Title,
    UserInfo,
    UserType
} from './style';
import { Edit, User } from 'lucide-react';

interface ScheduleItem {
    day: string;
    time: string;
}

interface UserInterface {
    id: string;
    name: string;
    username: string;
    stars: number;
    bio: string;
    tags: string[];
    availability: {
        days: string[];
        hours: string[];
    };
    type: 'dm' | 'player';
    email: string;
    avatar_url?: string;
    social_links?: {
        twitter?: string;
        discord?: string;
        roll20?: string;
    };
}

export default function UserProfileSection({ user }: { user: UserInterface }) {
    const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(user);

    useEffect(() => {
        const formattedSchedule = currentUser.availability.days.map((day, index) => ({
            day,
            time: currentUser.availability.hours[index] || 'A combinar'
        }));
        setSchedule(formattedSchedule);
    }, [currentUser]);

    const handleSave = async (updatedUser: UserInterface) => {
        setCurrentUser(updatedUser);
        setIsEditing(false);
    };

    return (
        <Section>
            <Container>
                <ProfileCard>
                    <BannerWrapper>
                        <Banner />
                        <AvatarWrapper>
                            {currentUser.avatar_url ? (
                                <Avatar
                                    src={currentUser.avatar_url}
                                    alt={`Avatar de ${currentUser.name}`}
                                    onError={() => {
                                        // Fallback se a imagem não carregar
                                        setCurrentUser((prev) => ({ ...prev, avatar_url: '' }));
                                    }}
                                />
                            ) : (
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        backgroundColor: '#6e45e2',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '48px',
                                        fontWeight: 'bold'
                                    }}>
                                    {currentUser.name.charAt(0).toUpperCase()}
                                </div>
                            )}
                        </AvatarWrapper>
                        <EditButton onClick={() => setIsEditing(true)}>
                            <Edit size={16} style={{ marginRight: '8px' }} />
                            Editar Perfil
                        </EditButton>
                    </BannerWrapper>

                    <UserInfo>
                        <Title>{user.username || user.name}</Title>
                        <Rating
                            readOnly
                            value={user.stars}
                            precision={0.5}
                            sx={{
                                '& .MuiRating-iconFilled': {
                                    color: '#ffd700'
                                },
                                '& .MuiRating-iconHover': {
                                    color: '#ffd700'
                                }
                            }}
                        />
                        <UserType>
                            <User size={20} style={{ color: '#6e45e2', marginRight: '10px' }} />
                            {user.type === 'player' ? 'Jogador' : user.type === 'dm' ? 'Mestre' : 'Jogador e Mestre'}
                            <span style={{ marginLeft: '10px', color: '#888' }}>{user.email}</span>
                        </UserType>
                        <Bio>{user.bio || <EmptyState>Este usuário ainda não escreveu uma biografia.</EmptyState>}</Bio>
                        <Tags>
                            {user.tags.length > 0 ? (
                                user.tags.map((tag, index) => <span key={index}>{tag}</span>)
                            ) : (
                                <EmptyState>Nenhuma tag adicionada</EmptyState>
                            )}
                        </Tags>
                        {(user.social_links?.twitter || user.social_links?.discord || user.social_links?.roll20) && (
                            <SocialLinks>
                                {user.social_links?.twitter && (
                                    <SocialLink
                                        href={user.social_links.twitter}
                                        target='_blank'
                                        rel='noopener noreferrer'>
                                        <span>🐦 Twitter</span>
                                    </SocialLink>
                                )}
                                {user.social_links?.discord && (
                                    <SocialLink
                                        href={user.social_links.discord}
                                        target='_blank'
                                        rel='noopener noreferrer'>
                                        <span>🎮 Discord</span>
                                    </SocialLink>
                                )}
                                {user.social_links?.roll20 && (
                                    <SocialLink
                                        href={user.social_links.roll20}
                                        target='_blank'
                                        rel='noopener noreferrer'>
                                        <span>🎲 Roll20</span>
                                    </SocialLink>
                                )}
                            </SocialLinks>
                        )}
                    </UserInfo>

                    <Availability>
                        <h3>Disponibilidade</h3>
                        <AvailabilityDisplay>
                            {schedule.length > 0 ? (
                                schedule.map(({ day, time }, index) => (
                                    <AvailabilityCard key={index}>
                                        <strong>{day}</strong>
                                        <span>{time}</span>
                                    </AvailabilityCard>
                                ))
                            ) : (
                                <EmptyState>Nenhuma disponibilidade definida</EmptyState>
                            )}
                        </AvailabilityDisplay>
                    </Availability>
                </ProfileCard>
            </Container>
            {isEditing && <EditProfile user={currentUser} onSave={handleSave} onClose={() => setIsEditing(false)} />}
        </Section>
    );
}
