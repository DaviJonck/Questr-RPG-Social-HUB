interface UserInterface {
    id: string;
    name: string;
    username: string; // Novo campo
    stars: number;
    bio: string;
    tags: string[];
    availability: {
        days: string[];
        hours: string[];
    };
    type: 'dm' | 'player';
    email: string;
    avatar_url?: string;
    social_links?: {
        twitter?: string;
        discord?: string;
        roll20?: string;
    };
}
