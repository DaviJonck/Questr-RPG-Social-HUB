import styled from 'styled-components';

export const CampaignCard = styled.div`
    position: relative;
    margin: 2rem auto;
    background: #2a2a2a;
    min-height: 70vh;
    border-radius: 16px;
    border: 1px solid rgba(255, 215, 0, 0.15);
    width: 85%;
    max-width: 900px;
    padding: 40px;
    margin-top: 30px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #ffd700, #e6c200);
        background-size: 200% 100%;
        animation: gradient 3s ease infinite;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

export const ContentWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
    z-index: 1;
`;

export const DecorationLeft = styled.div`
    position: absolute;
    top: 50px;
    left: 30px;
    width: 100px;
    height: 100px;
    background: url('/a') no-repeat;
    background-size: contain;
    opacity: 0.1;
    z-index: -1;
`;

export const DecorationRight = styled.div`
    position: absolute;
    bottom: 50px;
    right: 30px;
    width: 100px;
    height: 100px;
    background: url('/images/hero_dmgscreen_0.jpg') no-repeat;
    background-size: contain;
    opacity: 0.1;
    z-index: -1;
`;

export const CampaignHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;

    svg {
        color: #ffd700;
        opacity: 0.7;
    }
`;

export const CampaignContent = styled.div`
    padding: 20px 0;
`;

export const FormHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(255, 215, 0, 0.2);

    h3 {
        color: #ffd700;
        font-family: 'Cinzel', serif;
        font-size: 1.4rem;
        margin: 0;
    }

    svg {
        color: #ffd700;
    }
`;

export const FormFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 215, 0, 0.1);

    button {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 24px;
        border-radius: 6px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;

        &.primary {
            background: #ffd700;
            color: #2a2a2a;
            border: none;

            &:hover {
                background: #e6c200;
                transform: translateY(-2px);
            }
        }

        &.secondary {
            background: transparent;
            color: #ffd700;
            border: 1px solid #ffd700;

            &:hover {
                background: rgba(255, 215, 0, 0.1);
                transform: translateY(-2px);
            }
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none !important;
        }
    }
`;

export const Title = styled.h1`
    text-align: center;
    margin: 0;
    color: #ffd700;
    font-family: 'Cinzel', serif;
    font-size: 2.4rem;
    letter-spacing: 1px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const StepperContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    padding: 0 20px;
`;

export const StepContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    flex: 1;
`;

export const Step = styled.div<{ $isActive: boolean; $completed: boolean }>`
    width: 36px;
    height: 36px;
    border: 2px solid ${({ $isActive, $completed }) => ($completed ? '#4CAF50' : $isActive ? '#ffd700' : '#665b1e')};
    font-size: 16px;
    font-weight: bold;
    border-radius: 50%;
    background-color: ${({ $isActive, $completed }) =>
        $completed ? 'rgba(76, 175, 80, 0.2)' : $isActive ? '#403C26' : '#2A2A2A'};
    color: ${({ $isActive, $completed }) => ($completed ? '#4CAF50' : $isActive ? '#ffd700' : '#665b1e')};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
`;

export const StepIcon = styled.div<{ $isActive: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    svg {
        color: ${({ $isActive }) => ($isActive ? '#ffd700' : '#665b1e')};
        margin-bottom: 5px;
        transition: all 0.3s ease;
    }
`;

export const StepConnector = styled.div<{ $isActive: boolean }>`
    position: absolute;
    top: 18px;
    left: calc(50% + 18px);
    right: calc(-50% + 18px);
    height: 2px;
    background: ${({ $isActive }) => ($isActive ? 'rgba(255, 215, 0, 0.5)' : 'rgba(102, 91, 30, 0.3)')};
    transition: all 0.3s ease;
`;

export const TextP = styled.p<{ $isActive: boolean }>`
    text-align: center;
    width: 100%;
    font-family: '', sans-serif;
    font-size: 0.9rem;
    color: ${({ $isActive }) => ($isActive ? '#FFD700' : '#a0a0a0')};
    margin: 0;
    transition: all 0.3s ease;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 750px;
    gap: 20px;
`;
export interface ButtonProps {
    primary?: boolean;
}
export const Button = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'primary'
})<ButtonProps>`
    border-radius: 5px;
    padding: 10px 20px;
    width: 180px;
    background-color: ${(props) => (props.primary ? '#e6c200' : '#CDD5D8')};
    color: ${(props) => (props.primary ? 'black' : 'black')};
    border: none;
    cursor: pointer;
    font-family: 'Cinzel', sans-serif;
    font-weight: 500;
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 60px;
`;
