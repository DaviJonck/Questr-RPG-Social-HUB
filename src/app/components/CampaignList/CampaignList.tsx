'use client';

import { useRouter } from 'next/navigation';

import { campaigns } from '@/app/mock/campaigns';

import { CampaignCard } from '../CampaignCard/CampaignCard';
import { Actions, Button, Container, Grid, Header, SearchBox, Section } from './style';
import { Filter, Plus, Search } from 'lucide-react';

export function CampaignList() {
    const router = useRouter();

    const handleCreateCampaign = () => {
        router.push('/createCampaign');
    };

    return (
        <Section>
            <Container>
                <Header>
                    <h2>Quests disponíveis</h2>
                    <Actions>
                        <Button variant='primary' onClick={handleCreateCampaign}>
                            <Plus size={18} />
                            Criar Campanha
                        </Button>
                        <Button variant='secondary'>
                            <Filter size={18} />
                            Filtrar
                        </Button>
                        <SearchBox>
                            <Search size={18} />
                            <input type='text' placeholder='Procurar campanhas...' />
                        </SearchBox>
                    </Actions>
                </Header>
                <Grid>
                    {campaigns.map((campaign) => (
                        <CampaignCard key={campaign.id} campaign={campaign} />
                    ))}
                </Grid>
            </Container>
        </Section>
    );
}
