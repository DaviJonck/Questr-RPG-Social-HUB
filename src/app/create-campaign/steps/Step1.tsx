import CustomSelect from '@/app/components/Header/components/CustomSelect';
import CustomInput from '@/app/components/Header/components/input';
import { Container } from '@mui/material';

import { Button, ButtonContainer } from '../style';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';

const step1Schema = z.object({
    campaignName: z.string().min(1, 'O nome da campanha é obrigatório'),
    rpgSystem: z.string().min(1, 'O sistema RPG é obrigatório'),
    gameType: z.string().min(1, 'O tipo de jogo é obrigatório'),
    description: z.string().min(10, 'A descrição deve ter pelo menos 10 caracteres')
});

interface Step1Props {
    onNext: () => void;
    isLastStep?: boolean;
    onPrev: () => void;
}

export default function Step1({ onNext, isLastStep, onPrev }: Step1Props) {
    const {
        register,
        formState: { errors },
        trigger
    } = useFormContext();

    const handleNext = async () => {
        const isValid = await trigger(Object.keys(step1Schema.shape));
        if (isValid) {
            onNext();
        }
    };

    return (
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
                className='top'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    marginBottom: '45px'
                }}>
                <div className='tst'>
                    <CustomInput
                        placeholder='Morte dos Dragões'
                        required
                        label='Nome da Campanha'
                        register={register('campaignName')}
                        error={errors.campaignName?.message?.toString()}
                    />
                </div>

                <CustomInput
                    label='Idade mínima'
                    placeholder='16'
                    type='number'
                    register={register('recommendedAge')}
                />
                <CustomInput
                    required
                    placeholder='D&D 5e'
                    label='Sistema'
                    register={register('rpgSystem')}
                    error={errors.rpgSystem?.message?.toString()}
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
                    placeholder='Morte dos Dragões é uma campanha sobre dragões e morte'
                    label='Descrição'
                    register={register('description')}
                    error={errors.description?.message?.toString()}
                />
                <CustomSelect
                    options={[
                        { value: 'one-shot', label: 'One-shot' },
                        { value: 'longCampaign', label: 'Campanha Longa' },
                        { value: 'smallcampaign', label: 'Campanha Pequena' }
                    ]}
                    required
                    label='Tipo de campanha'
                    register={register('gameType')}
                    error={errors.gameType?.message?.toString()}
                />
                <CustomInput
                    type='number'
                    placeholder='8'
                    label='Número de Jogadores'
                    register={register('numberOfPlayersMax')}
                />
            </div>
            <ButtonContainer>
                <Button primary type='button' onClick={handleNext}>
                    PRÓXIMO
                </Button>
            </ButtonContainer>
        </Container>
    );
}
