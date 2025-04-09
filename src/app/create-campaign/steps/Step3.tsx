import CustomInput from '@/app/components/Header/components/input';
import { Container } from '@mui/material';

import { Button, ButtonContainer } from '../style';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';

const Step3Schema = z.object({
    primaryGenre: z.string().min(1, 'O gênero principal é obrigatório'),
    gameFocus: z.string().min(1, 'O foco do jogo é obrigatório'),
    sessionDuration: z.string().min(1, 'A duração da sessão é obrigatória'),
    requiredTools: z.string().min(1, 'As ferramentas necessárias são obrigatórias')
});

interface Step3Props {
    onPrev: () => void;
    isLastStep: boolean;
}

export default function Step3({ onPrev, isLastStep }: Step3Props) {
    const {
        register,
        formState: { errors },
        trigger,
        getValues
    } = useFormContext();

    const handleSubmit = async () => {
        const isValid = await trigger(Object.keys(Step3Schema.shape));
        if (isValid) {
            const values = getValues(); // 👈 aqui
            alert('Formulário enviado com sucesso!\n\n' + JSON.stringify(values, null, 2));
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
                    placeholder='Fantasia'
                    label='Gênero Principal'
                    register={register('primaryGenre')}
                    error={errors.primaryGenre?.message?.toString()}
                />

                <CustomInput
                    required
                    placeholder='Interpretação, Combate'
                    label='Foco do Jogo'
                    register={register('gameFocus')}
                    error={errors.gameFocus?.message?.toString()}
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
                    placeholder='Sombrio'
                    label='Tom da Campanha'
                    register={register('campaignTone')}
                    error={errors.campaignTone?.message?.toString()}
                />
                <CustomInput
                    required
                    label='Conteúdo Sensível'
                    placeholder='Violência, Morte'
                    register={register('sensitivecontent')}
                    error={errors.sensitivecontent?.message?.toString()}
                />
            </div>
            <ButtonContainer>
                <Button type='button' onClick={onPrev}>
                    ANTERIOR
                </Button>
                {isLastStep ? (
                    <Button primary type='submit' onClick={handleSubmit}>
                        CRIAR CAMPANHA
                    </Button>
                ) : (
                    <Button primary type='button' onClick={handleSubmit}>
                        PRÓXIMO
                    </Button>
                )}
            </ButtonContainer>
        </Container>
    );
}
