'use client';

import { useEffect, useState } from 'react';

import CustomInput from '../../Header/components/input';
import { Scroll, Sword, User, X } from 'lucide-react';
import styled from 'styled-components';

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
    background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
    padding: 2rem;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #ffd700;
    cursor: pointer;
    font-size: 1.5rem;
`;

const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    h2 {
        color: #ffd700;
        font-family: 'Cinzel', serif;
        margin: 0;
    }
`;

const FormGroup = styled.div`
    margin-bottom: 1.5rem;

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: #ffd700;
        font-family: 'Cinzel', serif;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    input,
    textarea,
    select {
        width: 100%;
        padding: 0.75rem;
        background: rgba(0, 0, 0, 0.137);
        border: none;
        border-radius: 4px;
        color: white;
        font-family: 'Poppins', sans-serif;

        &:focus {
            outline: none;
            border-color: #ffd700;
            box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
        }
        /* Remover setas para inputs numéricos */
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Para Firefox */
        &[type='number'] {
            appearance: textfield;
            -moz-appearance: textfield;
        }
    }

    textarea {
        min-height: 100px;
        resize: vertical;
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #ffd700, #e6c200);
    border: none;
    border-radius: 4px;
    color: #1a1a1a;
    font-family: 'Cinzel', serif;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
        background: linear-gradient(135deg, #e6c200, #ffd700);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
    }
`;

interface ApplyModalProps {
    isOpen: boolean;
    onClose: () => void;
    campaign: {
        id: number;
        title: string;
        dm: string;
    };
}

export function ApplyModal({ isOpen, onClose, campaign }: ApplyModalProps) {
    const [formData, setFormData] = useState({
        characterName: '',
        gender: '',
        age: 0,
        experience: '',
        backstory: '',
        playStyle: 'balanced'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    useEffect(() => {
        if (isOpen) {
            // Salva a posição atual do scroll
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';

            return () => {
                // Restaura o scroll quando o modal fecha
                const scrollY = parseInt(document.body.style.top || '0');
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                window.scrollTo(0, -scrollY);
            };
        }
    }, [isOpen]);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você faria a chamada API para enviar a aplicação
        console.log('Application submitted:', {
            campaignId: campaign.id,
            ...formData
        });
        onClose();
        // Mostrar feedback de sucesso para o usuário
    };

    return (
        <ModalOverlay $isOpen={isOpen}>
            <ModalContent>
                <CloseButton onClick={onClose}>
                    <X size={24} />
                </CloseButton>

                <ModalHeader>
                    <Sword size={28} />
                    <h2>Juntar-se a {campaign.title}</h2>
                </ModalHeader>

                <p style={{ color: '#aaaaaaa7', marginBottom: '2rem', fontFamily: 'Poppins, sans-serif' }}>
                    Envie sua aplicação para o Mestre {campaign.dm}. Se aprovado, você receberá uma notificação.
                </p>

                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <label>
                            <User size={16} />
                            Seu nome
                        </label>
                        <input
                            type='text'
                            name='characterName'
                            value={formData.characterName}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <FormGroup>
                            <label>Gênero</label>
                            <input type='text' name='gender' value={formData.gender} onChange={handleChange} required />
                        </FormGroup>

                        <FormGroup>
                            <label>Idade</label>
                            <input
                                type='number'
                                name='age'
                                value={formData.age}
                                onChange={handleChange}
                                min='1'
                                max='99'
                                required
                            />
                        </FormGroup>
                    </div>

                    <FormGroup>
                        <label>Experiência com RPG</label>
                        <input
                            type='text'
                            name='experience'
                            value={formData.experience}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>Estilo de Jogo Preferido</label>
                        <input
                            type='text'
                            name='playStyle'
                            value={formData.playStyle}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            <Scroll size={16} />
                            Conte mais sobre você
                        </label>
                        <textarea
                            name='backstory'
                            value={formData.backstory}
                            onChange={handleChange}
                            required
                            placeholder='Conte-nos sobre seu personagem...'
                        />
                    </FormGroup>

                    <SubmitButton type='submit'>
                        <Sword size={18} />
                        Enviar Aplicação
                    </SubmitButton>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
}
