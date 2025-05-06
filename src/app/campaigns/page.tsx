'use client';

import { useRouter } from 'next/navigation';

import { mockCampaigns } from '../Mock/campaingsMock';
import { CampaignCard } from '../components/CampaignCard/CampaignCard';
import { Button } from '../components/CampaignList/style';
import { Header } from '../components/Header/Header';
import { Footer } from '../home/modules/Footer/Footer';
import {
    CampaignCardsContainer,
    FeaturedSection,
    FilterControls,
    MainSection,
    SectionHeader,
    SectionTitle
} from './style';
import { Crown, Filter, Plus, Scroll } from 'lucide-react';

// campaingsMock.ts
export const mockSponsored = [
    {
        id: 2,
        stars: 4.5,
        title: 'Sombras de Aurith',
        dm: 'Lujia Varn',
        system: 'D&D 5E',
        schedule: 'Domingos, 19h',
        players: '4/6',
        style: ['Investigação', 'Terror', 'Narrativo'],
        description: 'Intrigas e horrores ancestrais em uma ilha esquecida.'
    },
    {
        id: 3,
        stars: 4.5,
        title: 'Sombras de Aurith',
        dm: 'Lujia Varn',
        system: 'D&D 5E',
        schedule: 'Domingos, 19h',
        players: '4/6',
        style: ['Investigação', 'Terror', 'Narrativo'],
        description: 'Intrigas e horrores ancestrais em uma ilha esquecida.'
    },
    {
        id: 4,
        stars: 4.5,
        title: 'Sombras de Aurith',
        dm: 'Lujia Varn',
        system: 'D&D 5E',
        schedule: 'Domingos, 19h',
        players: '4/6',
        style: ['Investigação', 'Terror', 'Narrativo'],
        description: 'Intrigas e horrores ancestrais em uma ilha esquecida.'
    }
];

const Campaigns = () => {
    const router = useRouter();

    const handleCreateCampaign = () => {
        router.push('/create-campaign');
    };

    return (
        <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
            <Header />

            {/* Seção Destaque - Campanhas Patrocinadas */}
            <FeaturedSection>
                <SectionHeader>
                    <SectionTitle>
                        <Crown size={28} style={{ marginRight: '12px', color: '#ffd700' }} />
                        Tábuas dos Mestres Lendários
                    </SectionTitle>
                    <p style={{ color: '#aaa', marginTop: '8px' }}>Campanhas premium selecionadas a dedo</p>
                </SectionHeader>

                <CampaignCardsContainer>
                    {mockSponsored.map((campaign) => (
                        <CampaignCard key={campaign.id} campaign={campaign} />
                    ))}
                </CampaignCardsContainer>
            </FeaturedSection>

            {/* Seção Principal - Todas as Campanhas */}
            <MainSection>
                <SectionHeader>
                    <SectionTitle>
                        <Scroll size={28} style={{ marginRight: '12px' }} />
                        Todos os Pergaminhos Disponíveis
                    </SectionTitle>

                    <FilterControls>
                        <Button variant='primary' onClick={handleCreateCampaign}>
                            <Plus size={18} />
                            Forjar Nova Campanha
                        </Button>
                        <Button variant='secondary'>
                            <Filter size={18} />
                            Filtrar
                        </Button>
                    </FilterControls>
                </SectionHeader>

                <CampaignCardsContainer>
                    {mockCampaigns.map((campaign) => (
                        <CampaignCard key={`id-${campaign.id}`} campaign={campaign} />
                    ))}
                </CampaignCardsContainer>
            </MainSection>

            <Footer />
        </div>
    );
};

export default Campaigns;
