import styled from 'styled-components';

export const Section = styled.section`
    padding: 60px 0;
    background-color: #1e1e1e;
    color: #f0e6d2;
    text-align: center;
`;

export const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #ffd700;
`;

export const Description = styled.p`
    font-size: 1.2rem;
    margin-bottom: 40px;
`;

export const Features = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 1rem;
    line-height: 1.6;
    text-align: left;
`;

export const Feature = styled.div`
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 12px;
    border-left: 4px solid #ffd700;
`;
