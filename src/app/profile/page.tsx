'use client';

import { useUser } from '@clerk/nextjs';

import { Header } from '../components/Header/Header';
import { LoadingSpinner } from '../components/Loading/style';
import UserProfileSection from './Modules/Profile';

// Função auxiliar para garantir o tipo correto
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSafeMetadata = (user: any) => {
    if (!user) return null;

    return {
        rating: typeof user.unsafeMetadata?.rating === 'number' ? user.unsafeMetadata.rating : 0,
        bio:
            typeof user.unsafeMetadata?.bio === 'string'
                ? user.unsafeMetadata.bio
                : 'Nenhuma biografia fornecida ainda.',
        tags: Array.isArray(user.unsafeMetadata?.tags) ? user.unsafeMetadata.tags : [],
        availability: {
            days: Array.isArray(user.unsafeMetadata?.availability?.days) ? user.unsafeMetadata.availability.days : [],
            hours: Array.isArray(user.unsafeMetadata?.availability?.hours) ? user.unsafeMetadata.availability.hours : []
        },
        type: ['player', 'dm', 'both'].includes(user.unsafeMetadata?.type) ? user.unsafeMetadata.type : 'player',
        social_links: {
            twitter:
                typeof user.unsafeMetadata?.social_links?.twitter === 'string'
                    ? user.unsafeMetadata.social_links.twitter
                    : undefined,
            discord:
                typeof user.unsafeMetadata?.social_links?.discord === 'string'
                    ? user.unsafeMetadata.social_links.discord
                    : undefined,
            roll20:
                typeof user.unsafeMetadata?.social_links?.roll20 === 'string'
                    ? user.unsafeMetadata.social_links.roll20
                    : undefined
        }
    };
};

export default function ProfilePage() {
    const { isLoaded, user } = useUser();

    if (!isLoaded) {
        return <LoadingSpinner />;
    }

    const metadata = getSafeMetadata(user);

    return (
        <>
            <Header />
            <UserProfileSection
                user={{
                    id: user?.id || '',
                    name: user?.username || user?.fullName || 'Visitante',
                    username: user?.username || '',
                    email: user?.primaryEmailAddress?.emailAddress || '',
                    stars: metadata?.rating || 0,
                    bio: metadata?.bio || 'Nenhuma biografia fornecida ainda.',
                    tags: metadata?.tags || [],
                    availability: {
                        days: metadata?.availability.days || [],
                        hours: metadata?.availability.hours || []
                    },
                    type: (metadata?.type as 'dm' | 'player') || 'player',
                    avatar_url: user?.imageUrl || '',
                    social_links: metadata?.social_links || {}
                }}
            />
        </>
    );
}
