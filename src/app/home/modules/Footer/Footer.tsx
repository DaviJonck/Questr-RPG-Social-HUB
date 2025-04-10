'use client';

import Link from 'next/link';

import { Column, FooterGrid, FooterNote, FooterWrapper, LinkList, SocialButtons, Title } from './style';
import { Github } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

export function Footer() {
    return (
        <FooterWrapper>
            <FooterGrid>
                <Column>
                    <Title>🌍 Plataforma</Title>
                    <LinkList>
                        <li>
                            <Link href='/'>Início</Link>
                        </li>
                        <li>
                            <Link href='/createCampaign'>Criar Campanha</Link>
                        </li>
                        <li>
                            <Link href='#'>Sobre</Link>
                        </li>
                    </LinkList>
                </Column>

                <Column>
                    <Title>📚 Suporte</Title>
                    <LinkList>
                        <li>
                            <Link href='#'>Termos de Uso</Link>
                        </li>
                        <li>
                            <Link href='#'>Privacidade</Link>
                        </li>
                        <li>
                            <Link href='#'>Contato</Link>
                        </li>
                    </LinkList>
                </Column>

                <Column>
                    <Title>🎲 Junte-se à Guilda</Title>
                    <SocialButtons>
                        <Link href='https://discord.com/invite/seu-link-aqui' target='_blank' rel='noopener noreferrer'>
                            <FaDiscord size={18} />
                            Discord
                        </Link>
                    </SocialButtons>
                </Column>
            </FooterGrid>

            <FooterNote>
                © {new Date().getFullYear()} TAVERNA. Forjado com dados e coragem nas terras do código.
            </FooterNote>
        </FooterWrapper>
    );
}
