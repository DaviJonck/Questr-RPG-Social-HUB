import styled from 'styled-components';

export const Section = styled.section`
    background-color: #2c2c2c;
    padding: 80px 0;
    color: #fff;
    text-align: center;
`;

export const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #ffd700;
`;

export const Steps = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 40px;
`;

export const StepItem = styled.div`
    background-color: #1e1e1e;
    border-radius: 12px;
    padding: 30px 20px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.1);
`;

export const StepIcon = styled.div`
    margin-bottom: 15px;
    color: #ffd700;
`;

export const StepTitle = styled.h3`
    font-size: 1.3rem;
    margin-bottom: 10px;
`;

export const StepDescription = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    color: #e0e0e0;
`;
