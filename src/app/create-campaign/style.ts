import styled from 'styled-components';

export interface StepProps {
    isActive: boolean;
}
export interface TextPProps {
    isActive: boolean;
}
export const Title = styled.h1`
    text-align: center;
    margin-bottom: 30px;
    margin-top: 25px;
    color: #e6c200;
`;

export const StepperContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    gap: 20px;
`;

export const Step = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isActive'
})<StepProps>`
    width: 60px;
    height: 60px;
    border: 1px solid #665b1e;
    font-size: 20px;
    font-family: 'Cinzel', sans-serif;
    border-radius: 50%;
    background-color: ${(props) => (props.isActive ? '#403C26' : '#2A2A2A')};
    color: #e6c200;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
`;

export const StepConnector = styled.div`
    width: 50px;
    height: 2px;
    background-color: #665b1e;
    align-self: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const FormGroup = styled.div`
    margin-bottom: 20px;
`;

export const Label = styled.label`
    display: block;
    color: #a0a0a0;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    background-color: #3c3d3e;
    border: 1px solid #625a30;
    border-radius: 5px;
    color: #a0a0a0;
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 8px;
    background-color: #3c3d3e;
    border: 1px solid #625a30;
    border-radius: 5px;
    color: #e6c200;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 60px;
`;

export const StepContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TextP = styled.p.withConfig({
    shouldForwardProp: (prop) => prop !== 'isActive' // Não passa isActive para o DOM
})<TextPProps>`
    text-align: center;
    width: 100px;
    font-family: 'Poppins', sans-serif;
    color: ${(props) => (props.isActive ? '#FFD700' : '#e0e0e0')};
`;
export interface ButtonProps {
    primary?: boolean;
}
export const CampaignCard = styled.div`
    position: relative;
    margin: 0 auto;
    background-color: rgba(37, 37, 37, 0.95);
    box-shadow: 0px 4px 16px rgb(19, 19, 19);
    height: 80vh;
    border-radius: 8px;
    width: 50%;
    padding: 40px;
    margin-top: 15px;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        width: 100%;
        background: linear-gradient(90deg, #ffd700, transparent);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
`;

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
