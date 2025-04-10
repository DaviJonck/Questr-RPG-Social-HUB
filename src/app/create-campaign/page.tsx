'use client';

import React, { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';

import { Header } from '../components/Header/Header';
import Loading from '../components/Loading/Loading';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import { CampaignCard, Form, Step, StepContainer, StepperContainer, TextP, Title } from './style';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

const campaignSchema = z.object({
    campaignName: z.string().min(1, 'O nome da campanha é obrigatório'),
    rpgSystem: z.string().min(1, 'O sistema RPG é obrigatório'),
    gameType: z.string().min(1, 'O tipo de jogo é obrigatório'),
    description: z.string().min(10, 'A descrição deve ter pelo menos 10 caracteres'),
    plataform: z.string().min(1, 'A plataforma é obrigatória'),
    gameFrequency: z.string().min(1, 'A frequência do jogo é obrigatória'),
    playerXp: z.string().min(1, 'O nível de experiência do jogador é obrigatório'),
    sessionDuration: z.string().min(1, 'A duração da sessão é obrigatória'),
    requiredTools: z.string().min(1, 'As ferramentas necessárias são obrigatórias')
});

type FormData = z.infer<typeof campaignSchema>;

const steps = [
    { component: Step1, label: 'Informações Básicas' },
    { component: Step2, label: 'Configuração do Jogo' },
    { component: Step3, label: 'Estilo e Tema da Campanha' }
];

const CreateCampaign = () => {
    const [hasMounted, setHasMounted] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const methods = useForm<FormData>({
        resolver: zodResolver(campaignSchema),
        mode: 'onTouched'
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: FormData) => {
        console.log('Formulário enviado:', data);
        // Lógica para manipular a submissão do formulário
    };
    useEffect(() => {
        setHasMounted(true);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!hasMounted) {
        return null;
    }
    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const CurrentStepComponent = steps[currentStep].component;

    return (
        <div style={{ backgroundColor: '#2b2b2b', minHeight: '100vh' }}>
            <Header />
            <CampaignCard>
                <Title>CRIE SUA CAMPANHA</Title>

                <StepperContainer>
                    {steps.map((step, index) => (
                        <StepContainer key={index}>
                            <Step isActive={currentStep >= index}>{index + 1}</Step>
                            <TextP isActive={currentStep >= index}>{step.label}</TextP>
                        </StepContainer>
                    ))}
                </StepperContainer>

                <FormProvider {...methods}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <CurrentStepComponent
                            isLastStep={currentStep === steps.length - 1}
                            onNext={nextStep}
                            onPrev={prevStep}
                        />
                    </Form>
                </FormProvider>
            </CampaignCard>
            {isLoading && <Loading />}
        </div>
    );
};

export default CreateCampaign;
