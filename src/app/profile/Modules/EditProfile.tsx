'use client';

import { useRef, useState } from 'react';

import { useUser } from '@clerk/nextjs';

import {
    AvatarContainer,
    AvatarFallback,
    AvatarImage,
    AvatarPreview,
    ButtonGroup,
    CloseButton,
    EditProfileModal,
    FormGroup,
    FormInput,
    FormLabel,
    FormTextarea,
    ModalContent,
    ModalHeader,
    ModalTitle,
    PrimaryButton,
    SecondaryButton,
    SocialLinksHeader
} from './EditProfileStyle';
import { BookOpen, Clock, Edit, Hash, Link2, User, X } from 'lucide-react';
import styled from 'styled-components';

// Tipos e constantes
interface EditProfileProps {
    user: {
        id: string;
        name: string;
        username: string; // Novo campo
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
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSave: (updatedUser: any) => void;
    onClose: () => void;
}
const DAYS_OF_WEEK = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
const AVAILABLE_TAGS = [
    'Fantasia Medieval',
    'Cyberpunk',
    'Terror',
    'Ficção Científica',
    'Super Heróis',
    'Mistério',
    'Aventura',
    'Suspense',
    'Steampunk',
    'Western'
];

interface TimeRange {
    from: string;
    to: string;
}

interface DayAvailability {
    day: string;
    selected: boolean;
    time: TimeRange;
}
type UserRoleType = 'player' | 'dm' | 'both';

// Componente principal
export function EditProfile({ user, onSave, onClose }: EditProfileProps) {
    const { user: clerkUser } = useUser();
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [avatarPreview, setAvatarPreview] = useState(user.avatar_url || '');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>(user.tags);

    const [daysAvailability, setDaysAvailability] = useState<DayAvailability[]>(
        DAYS_OF_WEEK.map((day) => ({
            day,
            selected: user.availability.days.includes(day),
            time: {
                from: user.availability.hours[user.availability.days.indexOf(day)]?.split('-')[0] || '19:00',
                to: user.availability.hours[user.availability.days.indexOf(day)]?.split('-')[1] || '22:00'
            }
        }))
    );
    const [formData, setFormData] = useState({
        username: user.username, // Adiciona username aqui
        name: user.name,
        bio: user.bio,
        type: user.type as UserRoleType,
        twitter: user.social_links?.twitter || '',
        discord: user.social_links?.discord || '',
        roll20: user.social_links?.roll20 || ''
    });

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validação do tipo de arquivo
        if (!file.type.match('image.*')) {
            alert('Por favor, selecione um arquivo de imagem (JPEG, PNG)');

            return;
        }

        // Validação do tamanho do arquivo (5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('A imagem deve ter menos de 5MB');

            return;
        }

        // Cria preview sem fazer upload
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target?.result) {
                setAvatarPreview(e.target.result as string);
            }
        };
        reader.readAsDataURL(file);

        // Guarda o arquivo para upload posterior
        setAvatarFile(file);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setIsUploading(true);

            // Faz upload do avatar se houver novo
            if (avatarFile && clerkUser) {
                await clerkUser.setProfileImage({ file: avatarFile });
            }

            // Atualiza username e outros metadados
            await clerkUser?.update({
                unsafeMetadata: {
                    bio: formData.bio,
                    tags: selectedTags,
                    type: formData.type,
                    availability: {
                        days: daysAvailability.filter((d) => d.selected).map((d) => d.day),
                        hours: daysAvailability.filter((d) => d.selected).map((d) => `${d.time.from}-${d.time.to}`)
                    },
                    social_links: {
                        twitter: formData.twitter || null,
                        discord: formData.discord || null,
                        roll20: formData.roll20 || null
                    }
                }
            });

            onSave({
                ...user,
                bio: formData.bio,
                tags: selectedTags,
                type: formData.type,
                avatar_url: clerkUser?.imageUrl || user.avatar_url,
                social_links: {
                    twitter: formData.twitter,
                    discord: formData.discord,
                    roll20: formData.roll20
                },
                availability: {
                    days: daysAvailability.filter((d) => d.selected).map((d) => d.day),
                    hours: daysAvailability.filter((d) => d.selected).map((d) => `${d.time.from}-${d.time.to}`)
                }
            });
        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
            alert('Erro ao salvar alterações. Tente novamente.');
        } finally {
            setIsUploading(false);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const handleTagToggle = (tag: string) => {
        setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
    };

    const handleDayToggle = (day: string) => {
        setDaysAvailability((prev) => prev.map((d) => (d.day === day ? { ...d, selected: !d.selected } : d)));
    };

    const handleTimeChange = (day: string, field: 'from' | 'to', value: string) => {
        setDaysAvailability((prev) =>
            prev.map((d) => (d.day === day ? { ...d, time: { ...d.time, [field]: value } } : d))
        );
    };

    return (
        <EditProfileModal>
            <ModalContent>
                <ModalHeader>
                    <ModalTitle>
                        <Edit size={20} />
                        Editar Perfil
                    </ModalTitle>
                    <CloseButton onClick={onClose}>
                        <X size={24} />
                    </CloseButton>
                </ModalHeader>

                <form onSubmit={handleSubmit}>
                    {/* Seção do Avatar (mantida igual) */}

                    <AvatarContainer>
                        <AvatarPreview>
                            {avatarPreview ? (
                                <AvatarImage src={avatarPreview} alt='Avatar do usuário' />
                            ) : (
                                <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                            )}
                        </AvatarPreview>

                        <input
                            type='file'
                            ref={fileInputRef}
                            onChange={handleAvatarChange}
                            accept='image/*'
                            style={{ display: 'none' }}
                        />

                        <ChangeAvatarButton type='button' onClick={triggerFileInput} disabled={isUploading}>
                            {isUploading ? 'Enviando...' : 'Alterar Avatar'}
                        </ChangeAvatarButton>
                    </AvatarContainer>

                    {/* Nome e Biografia (mantido igual) */}
                    <FormGroup>
                        <FormLabel>
                            <User size={16} />
                            Eu sou:
                        </FormLabel>
                        <RoleSelectorContainer>
                            <RoleOption
                                selected={formData.type === 'player'}
                                onClick={() => setFormData({ ...formData, type: 'player' })}>
                                <GamepadIcon />
                                <span>Jogador</span>
                            </RoleOption>

                            <RoleOption
                                selected={formData.type === 'dm'}
                                onClick={() => setFormData({ ...formData, type: 'dm' })}>
                                <DungeonMasterIcon />
                                <span>Mestre</span>
                            </RoleOption>

                            <RoleOption
                                selected={formData.type === 'both'}
                                onClick={() => setFormData({ ...formData, type: 'both' })}>
                                <BothRolesIcon />
                                <span>Ambos</span>
                            </RoleOption>
                        </RoleSelectorContainer>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>
                            <BookOpen size={16} />
                            Biografia
                        </FormLabel>
                        <FormTextarea
                            name='bio'
                            value={formData.bio}
                            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        />
                    </FormGroup>

                    {/* Nova Seção de Tags */}
                    <FormGroup>
                        <FormLabel>
                            <Hash size={16} />
                            Tags
                        </FormLabel>
                        <TagsContainer>
                            {AVAILABLE_TAGS.map((tag) => (
                                <TagItem
                                    key={tag}
                                    selected={selectedTags.includes(tag)}
                                    onClick={() => handleTagToggle(tag)}>
                                    {tag}
                                </TagItem>
                            ))}
                        </TagsContainer>
                    </FormGroup>

                    {/* Nova Seção de Disponibilidade */}
                    <FormGroup>
                        <FormLabel>
                            <Clock size={16} />
                            Disponibilidade
                        </FormLabel>
                        <AvailabilityContainer>
                            {daysAvailability.map(({ day, selected, time }) => (
                                <DayAvailabilityItem key={day}>
                                    <DayCheckbox
                                        type='checkbox'
                                        checked={selected}
                                        onChange={() => handleDayToggle(day)}
                                    />
                                    <DayLabel>{day}</DayLabel>

                                    {selected && (
                                        <TimeRangeContainer>
                                            <TimeInput
                                                type='time'
                                                value={time.from}
                                                onChange={(e) => handleTimeChange(day, 'from', e.target.value)}
                                            />
                                            <TimeSeparator>até</TimeSeparator>
                                            <TimeInput
                                                type='time'
                                                value={time.to}
                                                onChange={(e) => handleTimeChange(day, 'to', e.target.value)}
                                                min={time.from}
                                            />
                                        </TimeRangeContainer>
                                    )}
                                </DayAvailabilityItem>
                            ))}
                        </AvailabilityContainer>
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>🐦 Twitter </FormLabel>
                        <FormInput
                            name='twitter'
                            value={formData.twitter}
                            onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>🎮 Discord</FormLabel>
                        <FormInput
                            name='discord'
                            value={formData.discord}
                            onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>🎲 Roll20 </FormLabel>
                        <FormInput
                            name='roll20'
                            value={formData.roll20}
                            onChange={(e) => setFormData({ ...formData, roll20: e.target.value })}
                        />
                    </FormGroup>

                    <ButtonGroup>
                        <SecondaryButton type='button' onClick={onClose}>
                            <X size={16} />
                            Cancelar
                        </SecondaryButton>
                        <PrimaryButton type='submit'>
                            <Edit size={16} />
                            Salvar Alterações
                        </PrimaryButton>
                    </ButtonGroup>
                </form>
            </ModalContent>
        </EditProfileModal>
    );
}

// Novos componentes de estilo
const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;
const RoleSelectorContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    width: 100%;
`;

const RoleOption = styled.div<{ selected: boolean }>`
    flex: 1;
    padding: 1rem;
    border-radius: 8px;
    background-color: ${({ selected }) => (selected ? 'rgba(91, 83, 112, 0.2)' : 'rgba(255, 255, 255, 0.05)')};
    border: 1px solid ${({ selected }) => (selected ? '#ffd700' : 'rgba(255, 255, 255, 0.1)')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: rgba(110, 69, 226, 0.1);
    }

    span {
        font-size: 0.9rem;
        color: ${({ selected }) => (selected ? '#ffd700' : '#e0e0e0')};
    }
`;

// Ícones (você pode substituir por ícones reais do Lucide)
const GamepadIcon = styled.div`
    width: 24px;
    height: 24px;
    background-color: #ffd700;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='6' y1='12' x2='10' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='10' x2='8' y2='14'%3E%3C/line%3E%3Cline x1='15' y1='13' x2='15.01' y2='13'%3E%3C/line%3E%3Cline x1='18' y1='11' x2='18.01' y2='11'%3E%3C/line%3E%3Crect x='2' y='6' width='20' height='12' rx='2'%3E%3C/rect%3E%3C/svg%3E");
`;

const DungeonMasterIcon = styled.div`
    width: 24px;
    height: 24px;
    background-color: #ffd700;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z'%3E%3C/path%3E%3Cpath d='M19 10v2a7 7 0 0 1-14 0v-2'%3E%3C/path%3E%3Cline x1='12' y1='19' x2='12' y2='22'%3E%3C/line%3E%3C/svg%3E");
`;

const BothRolesIcon = styled.div`
    width: 24px;
    height: 24px;
    background-color: #ffd700;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='9' cy='7' r='4'%3E%3C/circle%3E%3Cpath d='M23 21v-2a4 4 0 0 0-3-3.87'%3E%3C/path%3E%3Cpath d='M16 3.13a4 4 0 0 1 0 7.75'%3E%3C/path%3E%3C/svg%3E");
`;
const TagItem = styled.div<{ selected: boolean }>`
    padding: 0.5rem 1rem;
    border-radius: 20px;
    background-color: ${({ selected }) => (selected ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 215, 0, 0.1)')};
    border: 1px solid rgba(255, 215, 0, 0.5);
    color: ${({ selected }) => (selected ? '#ffd700' : 'rgba(255, 215, 0, 0.7)')};
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 0.9rem;

    &:hover {
        background-color: rgba(255, 215, 0, 0.2);
    }
`;

const AvailabilityContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
`;

const DayAvailabilityItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const DayCheckbox = styled.input`
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #ffd700;
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    &:checked {
        background-color: #ffd700;

        &::after {
            content: '✓';
            position: absolute;
            color: #2a2a2a;
            font-size: 12px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;

const DayLabel = styled.span`
    color: #e0e0e0;
    font-family: 'Poppins', serif;
    min-width: 80px;
`;

const TimeRangeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;
`;

const TimeInput = styled.input`
    background-color: #1a1a1a;
    border-radius: 4px;
    padding: 0.5rem;
    color: #e0e0e0;
    font-family: 'Poppins', sans-serif;
    border: none;

    /* Estilizando o ícone do relógio */
    &::-webkit-calendar-picker-indicator {
        filter: invert(1); /* Inverte as cores para branco */
        opacity: 0.8;
        cursor: pointer;
    }

    &:focus {
        outline: none;
        border-color: #e6c200;
        box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
    }
`;
const ChangeAvatarButton = styled.button<{ disabled?: boolean }>`
    background-color: rgba(255, 215, 0, 0.1);
    color: ${({ disabled }) => (disabled ? 'rgba(255, 215, 0, 0.5)' : '#ffd700')};
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-family: 'Poppins', sans-serif;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({ disabled }) => (disabled ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 215, 0, 0.2)')};
        color: ${({ disabled }) => (disabled ? 'rgba(255, 215, 0, 0.5)' : '#e6c200')};
    }
`;
const TimeSeparator = styled.span`
    font-family: 'Cinzel', serif;
    color: white;
    font-size: 0.9rem;
`;
