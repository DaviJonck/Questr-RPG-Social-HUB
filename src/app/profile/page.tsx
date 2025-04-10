import { Header } from '../components/Header/Header';
import UserProfileSection from './Modules/Profile';

export default function ProfilePage() {
    return (
        <>
            <Header />
            <UserProfileSection
                user={{
                    name: 'Beholder',
                    stars: 4.5,
                    bio: 'Aventureiro incansável, adoro criar histórias épicas e personagens memoráveis. Sempre em busca do equilíbrio perfeito entre interpretação e estratégia.',
                    tags: ['🎭 Interpretação', '⚔️ Combate', '🎲 OSR', '🧙‍♂️ Fantasia'],
                    availability: {
                        days: ['Terças', 'Quintas'],
                        hours: ['20h-23h']
                    },
                    type: 'dm',
                    id: 1,
                    email: 'beholder@gmail.com'
                }}
            />
        </>
    );
}
