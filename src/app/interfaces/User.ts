export interface UserInterface {
    id: number;
    name: string;
    email: string;
    password?: string;
    avatar?: string;
    bio?: string;
    stars: number;
    type?: string;
    availability: {
        days: string[];
        hours: string[];
    };
    tags?: string[];
    backgroundImage?: string;
    activeCampaigns?: string[];
}
