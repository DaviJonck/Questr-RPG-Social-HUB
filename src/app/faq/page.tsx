'use client';

import React, { useEffect, useState } from 'react';

import { Header } from '../components/Header/Header';
import Loading from '../components/Loading/Loading';
import { Footer } from '../home/modules/Footer/Footer';
import {
    ContactButton,
    ContactCard,
    ContactSection,
    ContactTitle,
    DecorationCrystal,
    DecorationDice,
    DecorationHelmet,
    DecorationPotion,
    DecorationScroll,
    DecorationShield,
    DecorationSword,
    FAQAnswer,
    FAQContent,
    FAQContentWrapper,
    FAQHeader,
    FAQItem,
    FAQPageContainer,
    FAQPatternBackground,
    FAQQuestion,
    FAQTitle
} from './style';
import { ChevronDown, ChevronUp, Coins, Dice5, FlaskConical, Gem, Mail, Scroll, Shield, Sword } from 'lucide-react';

export interface FAQItemProps {
    $isActive?: boolean;
}
const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    if (!isMounted) {
        return <Loading />;
    }

    const faqs = [
        {
            question: 'Como posso me juntar a uma campanha?',
            answer: "Navegue até a seção 'Descobrir Campanhas', encontre uma que lhe interesse e clique em 'Solicitar Ingresso'. O mestre da campanha avaliará sua solicitação."
        },
        {
            question: 'Quais sistemas de RPG são suportados?',
            answer: 'Aceitamos todos os sistemas! D&D 5e, Pathfinder, Call of Cthulhu, Sistemas Próprios e muitos outros. Você pode filtrar por sistema na busca.'
        },
        {
            question: 'Como funcionam as assinaturas VIP?',
            answer: 'Nossos planos VIP oferecem benefícios como badges exclusivos, ferramentas avançadas para mestres e prioridade em buscas. Você pode atualizar a qualquer momento na página de perfil.'
        },
        {
            question: 'Posso criar campanhas como jogador iniciante?',
            answer: 'Com certeza! Encorajamos jogadores de todos os níveis de experiência a criarem suas próprias campanhas. Temos guias e recursos para ajudar mestres iniciantes.'
        },
        {
            question: 'Como reportar problemas com outros usuários?',
            answer: "Você pode reportar qualquer comportamento inadequado clicando no menu de três pontos no perfil do usuário e selecionando 'Reportar'. Nossa equipe analisará cada caso."
        },
        {
            question: 'Há recursos para mestres?',
            answer: 'Sim! Oferecemos ferramentas para criação de fichas, gerenciamento de sessões, compartilhamento de documentos e muito mais na versão VIP.'
        }
    ];

    return (
        <FAQPageContainer>
            <FAQPatternBackground />
            <Header />

            <FAQContentWrapper>
                {/* Elementos Decorativos */}
                <DecorationDice key='dice' $position='top-left'>
                    <Dice5 size={48} />
                </DecorationDice>

                <DecorationPotion key='potion' $position='bottom-right'>
                    <FlaskConical size={48} />
                </DecorationPotion>

                <DecorationSword key='sword' $position='top-right'>
                    <Sword size={40} />
                </DecorationSword>

                <DecorationShield key='shield' $position='bottom-left'>
                    <Shield size={40} />
                </DecorationShield>

                <DecorationScroll key='scroll' $position='mid-left'>
                    <Scroll size={44} />
                </DecorationScroll>

                <DecorationHelmet key='helmet' $position='mid-right'>
                    <Coins size={42} />
                </DecorationHelmet>

                <FAQHeader>
                    <Sword size={32} />
                    <FAQTitle>PERGUNTAS FREQUENTES</FAQTitle>
                    <Shield size={32} />
                </FAQHeader>

                <FAQContent>
                    {faqs.map((faq, index) => (
                        <FAQItem key={`faq-${index}`} onClick={() => toggleFAQ(index)}>
                            <FAQQuestion $isActive={activeIndex === index}>
                                {faq.question}
                                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </FAQQuestion>
                            {activeIndex === index && <FAQAnswer $isActive={true}>{faq.answer}</FAQAnswer>}{' '}
                        </FAQItem>
                    ))}
                </FAQContent>

                <ContactSection>
                    <ContactCard>
                        <ContactTitle>
                            <Mail size={28} />
                            Não encontrou sua dúvida?
                        </ContactTitle>
                        <p>Nossa equipe está pronta para te ajudar com qualquer questão sobre a plataforma.</p>
                        <ContactButton href='/contato'>Entre em Contato</ContactButton>
                    </ContactCard>
                </ContactSection>
            </FAQContentWrapper>

            <Footer />
        </FAQPageContainer>
    );
};

export default FAQPage;
