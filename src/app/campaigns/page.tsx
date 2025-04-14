'use client';

import { useRouter } from 'next/navigation';

import { mockCampaigns } from '../Mock/campaingsMock';
import { CampaignCard } from '../components/CampaignCard/CampaignCard';
import { Button } from '../components/CampaignList/style';
import { Header } from '../components/Header/Header';
import { Footer } from '../home/modules/Footer/Footer';
import { CampaignCardsContainer, CampaignSection, CampaignTitle } from './style';
import { Filter, Plus } from 'lucide-react';

const Campaigns = () => {
    const router = useRouter();

    const handleCreateCampaign = () => {
        router.push('/create-campaign');
    };

    return (
        <div style={{ backgroundColor: '#2a2a2a', minHeight: '100vh' }}>
            <Header />
            <CampaignSection>
                <CampaignTitle>Campanhas</CampaignTitle>
                <Button variant='primary' onClick={handleCreateCampaign}>
                    <Plus size={18} />
                    Criar Campanha
                </Button>
                <Button variant='secondary'>
                    <Filter size={18} />
                    Filtrar
                </Button>
            </CampaignSection>
            <CampaignCardsContainer>
                {mockCampaigns.map((campaign) => (
                    <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
            </CampaignCardsContainer>
            <Footer />
        </div>
    );
};

export default Campaigns;
