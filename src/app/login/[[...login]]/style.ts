import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    height: 100vh;
    background-color: #2a2a2a;
`;

const LeftSide = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

const BackgroundImage = styled.img`
    z-index: -1;
`;

const Logo = styled.img`
    z-index: 1;
`;

const SiteName = styled.h1`
    font-family: 'Cinzel', serif;
    font-size: 48px;
    color: #ffd700;
    margin-top: 1rem;
    z-index: 1;
    font-weight: 500;
`;

const RightSide = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', serif;
    width: 80%;
    max-width: 400px;
`;

const FormTitle = styled.h2`
    color: #ffd700;
    font-size: 36px;
    font-family: 'Cinzel', serif;
    font-weight: 500;
    margin-bottom: 2rem;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    padding: 0.75rem;
    border: 1px solid #ffd700;
    border-radius: 4px;
    font-size: 1rem;
    background-color: #2a2a2a;
    color: #ffd700;

    &::placeholder {
        color: #ffd700;
        opacity: 0.7;
    }
`;

const SubmitButton = styled.button`
    font-family: 'Poppins', sans-serif;
    background-color: #ffd700;
    color: #2a2a2a;
    border: none;
    padding: 0.75rem;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e6c200;
    }
`;

const ToggleText = styled.p`
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin-top: 1rem;
    color: #ffd700;
`;

const ToggleButton = styled.button`
    font-family: 'Poppins', sans-serif;
    background: none;
    border: none;
    color: #ffd700;
    cursor: pointer;
    margin-left: 0.5rem;
    text-decoration: underline;

    &:hover {
        color: #e6c200;
    }
`;
const Divider = styled.div`
    width: 1px;
    height: 100%;
    background-color: rgba(255, 215, 0, 0.3);
    margin: 0 2rem;

    &::before {
        content: attr(children);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #2a2a2a;
        padding: 0.5rem;
        color: #ffd700;
    }
`;
const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const Icon = styled.span`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #ffd700;
`;

export {
    LoginContainer,
    LeftSide,
    BackgroundImage,
    Logo,
    SiteName,
    RightSide,
    FormContainer,
    FormTitle,
    Form,
    Input,
    SubmitButton,
    ToggleText,
    ToggleButton,
    Divider,
    InputWrapper,
    Icon
};
