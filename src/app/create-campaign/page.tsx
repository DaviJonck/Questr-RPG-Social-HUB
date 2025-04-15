'use client';

import React, { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';

import { Header } from '../components/Header/Header';
import Loading from '../components/Loading/Loading';
import {
    DecorationCrystal,
    DecorationDice,
    DecorationHelmet,
    DecorationPotion,
    DecorationScroll,
    DecorationShield,
    DecorationSword,
    FAQContentWrapper
} from '../faq/style';
import { Footer } from '../home/modules/Footer/Footer';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import {
    CampaignCard,
    CampaignContent,
    CampaignHeader,
    ContentWrapper,
    DecorationLeft,
    DecorationRight,
    Form,
    FormHeader,
    Step,
    StepConnector,
    StepContainer,
    StepIcon,
    StepperContainer,
    TextP,
    Title
} from './style';
import { BookOpen, Check, Coins, Dice5, FlaskConical, Gem, Map, Scroll, Shield, Sword } from 'lucide-react';
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
    { component: Step1, label: 'Informações Básicas', icon: <BookOpen size={18} /> },
    { component: Step2, label: 'Configuração', icon: <Dice5 size={18} /> },
    { component: Step3, label: 'Estilo', icon: <Map size={18} /> }
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
        }, 1500);

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
        <>
            <Header />
            <ContentWrapper>
                <DecorationDice $position='top-left'>
                    <Dice5 size={48} />
                </DecorationDice>

                <DecorationPotion $position='bottom-right'>
                    <FlaskConical size={48} />
                </DecorationPotion>

                <DecorationSword $position='top-right'>
                    <Sword size={40} />
                </DecorationSword>

                <DecorationShield $position='bottom-left'>
                    <Shield size={40} />
                </DecorationShield>

                <DecorationScroll $position='mid-left'>
                    <Scroll size={44} />
                </DecorationScroll>

                <DecorationHelmet $position='mid-right'>
                    <Coins size={42} />
                </DecorationHelmet>

                <DecorationCrystal $position='center-bottom'>
                    <Gem size={36} />
                </DecorationCrystal>
                <CampaignCard>
                    <DecorationLeft />
                    <DecorationRight />

                    <CampaignHeader>
                        <Title>CRIE SUA CAMPANHA</Title>
                    </CampaignHeader>

                    <StepperContainer>
                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                <StepContainer>
                                    <Step $isActive={currentStep >= index} $completed={currentStep > index}>
                                        {currentStep > index ? <Check size={16} /> : index + 1}
                                    </Step>
                                    <StepIcon $isActive={currentStep >= index}>{step.icon}</StepIcon>
                                    {index < steps.length - 1 && <StepConnector $isActive={currentStep > index} />}
                                </StepContainer>
                            </React.Fragment>
                        ))}
                    </StepperContainer>

                    <CampaignContent>
                        <FormHeader>
                            <Scroll size={24} />
                            <h3>{steps[currentStep].label}</h3>
                        </FormHeader>

                        <FormProvider {...methods}>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <CurrentStepComponent
                                    isLastStep={currentStep === steps.length - 1}
                                    onNext={nextStep}
                                    onPrev={prevStep}
                                />
                            </Form>
                        </FormProvider>
                    </CampaignContent>
                </CampaignCard>
            </ContentWrapper>

            <Footer />
            {isLoading && <Loading />}
        </>
    );
};

export default CreateCampaign;
