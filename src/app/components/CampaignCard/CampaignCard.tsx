import { Rating } from '@mui/material';

import {
    Card,
    Description,
    DescriptionIcon,
    DmIcon,
    DmInfo,
    Header,
    JoinButton,
    Meta,
    SubHeader,
    SystemTag,
    Tag,
    Tags
} from './style';
import { Calendar, Swords, Users } from 'lucide-react';

interface CampaignCardProps {
    campaign: {
        id: number;
        title: string;
        dm: string;
        system: string;
        schedule: string;
        players: string;
        style: string[];
        description: string;
        stars: number;
    };
}

export function CampaignCard({ campaign }: CampaignCardProps) {
    return (
        <Card>
            <Header>
                <DmIcon size={20} />
                <h3>{campaign.title}</h3>
            </Header>
            <SubHeader>
                <DmInfo>
                    <span>DM: {campaign.dm}</span>
                    <Rating readOnly name='half-rating' defaultValue={campaign.stars} precision={0.5} />
                </DmInfo>
                <SystemTag>
                    <Swords size={14} />
                    {campaign.system}
                </SystemTag>
            </SubHeader>
            <Meta>
                <span>
                    <Users size={16} />
                    {campaign.players}
                </span>
                <span>
                    <Calendar size={16} />
                    {campaign.schedule}
                </span>
            </Meta>
            <Description>
                <DescriptionIcon size={16} />
                {campaign.description}
            </Description>
            <Tags>
                {campaign.style.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <JoinButton>Join Quest</JoinButton>
        </Card>
    );
}
