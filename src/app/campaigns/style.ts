import styled from 'styled-components';

export const CampaignSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #2a2a2a;
    gap: 1rem;
`;
export const CampaignTitle = styled.h1`
    color: #ffd700;
    font-size: 48px;
    font-family: 'Cinzel', serif;
    font-weight: 500;
    margin: 20px 60px;
`;

export const CampaignCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 por linha */
    gap: 1.5rem;
    padding: 1rem;

    /* Os dois primeiros cards ocupam 2 colunas */
    & > div:nth-child(1),
    & > div:nth-child(2) {
        grid-column: span 2;
    }

    /* Responsivo para telas menores */
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);

        & > div:nth-child(1),
        & > div:nth-child(2) {
            grid-column: span 2;
        }
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;

        & > div:nth-child(1),
        & > div:nth-child(2) {
            grid-column: span 1;
        }
    }
`;
