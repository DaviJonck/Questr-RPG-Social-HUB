import styled from 'styled-components';

export const FeaturedSection = styled.section`
    background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    padding: 3rem 2rem;
    border-bottom: 2px solid #ffd70033;
`;

export const MainSection = styled.section`
    padding: 2rem;
    background-color: #1a1a1a;
`;

export const SectionHeader = styled.div`
    max-width: 1200px;
    margin: 0 auto 2rem;
`;

export const SectionTitle = styled.h2`
    color: #ffd700;
    font-size: 2rem;
    font-family: 'Cinzel', serif;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
`;

export const FilterControls = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
`;

export const CampaignCardsContainer = styled.div<{ highlight?: boolean }>`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${(props) => (props.highlight ? '350px' : '280px')}, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    ${(props) =>
        props.highlight &&
        `
        & > div {
            border: 2px solid #ffd700;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
        }
    `}

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
