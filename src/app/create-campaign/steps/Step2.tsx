import CustomSelect from '@/app/components/Header/components/CustomSelect';
import CustomInput from '@/app/components/Header/components/input';
import { Container } from '@mui/material';

import { Button, ButtonContainer } from '../style';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';

const step2Schema = z.object({
    plataform: z.string().min(1, 'A plataforma é obrigatória'),
    gameFrequency: z.string().min(1, 'A frequência do jogo é obrigatória'),
    playerXp: z.string().min(1, 'O nível de experiência do jogador é obrigatório'),
    sessionDuration: z.string().min(1, 'A duração da sessão é obrigatória'),
    requiredTools: z.string().min(1, 'As ferramentas necessárias são obrigatórias')
});

interface Step2Props {
    onPrev: () => void;
    onNext: () => void;
}

export default function Step2({ onPrev, onNext }: Step2Props) {
    const {
        register,
        formState: { errors },
        trigger
    } = useFormContext();

    const handleSubmit = async () => {
        const isValid = await trigger(Object.keys(step2Schema.shape));
        if (isValid) {
            onNext();
        }
    };

    return (
        <Container>
            <div
                className='top'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    marginBottom: '45px'
                }}>
                <CustomInput
                    required
                    placeholder='Roll20'
                    label='Plataforma'
                    register={register('plataform')}
                    error={errors.plataform?.message?.toString()}
                />

                <CustomInput
                    required
                    placeholder='Semanal'
                    label='Frequência do Jogo'
                    register={register('gameFrequency')}
                    error={errors.gameFrequency?.message?.toString()}
                />
                <CustomSelect
                    required
                    label='Experiência do Jogador'
                    register={register('playerXp')}
                    error={errors.playerXp?.message?.toString()}
                    options={[
                        { value: 'Beginner', label: 'Iniciante' },
                        { value: 'Intermediate', label: 'Intermediário' },
                        { value: 'Advanced', label: 'Avançado' },
                        { value: 'Everyone', label: 'Todos' }
                    ]}
                />
            </div>
            <div
                className='bottom'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px'
                }}>
                <CustomInput
                    required
                    label='Duração da Sessão'
                    placeholder='2 Horas'
                    register={register('sessionDuration')}
                    error={errors.sessionDuration?.message?.toString()}
                />
                <CustomInput
                    required
                    label='Ferramentas Necessárias'
                    placeholder='Discord'
                    register={register('requiredTools')}
                    error={errors.requiredTools?.message?.toString()}
                />
            </div>
            <ButtonContainer>
                <Button type='button' onClick={onPrev}>
                    ANTERIOR
                </Button>

                <Button primary type='button' onClick={handleSubmit}>
                    PRÓXIMO
                </Button>
            </ButtonContainer>
        </Container>
    );
}
