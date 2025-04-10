import { CampaignList } from '../components/CampaignList/CampaignList';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { AboutSection } from './modules/AboutSection/AboutSection';
import { Footer } from './modules/Footer/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <CampaignList />
            <AboutSection />
            <Footer />
        </>
    );
}
