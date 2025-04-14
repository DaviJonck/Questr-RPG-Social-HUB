'use client';

import styled from 'styled-components';

const EditProfileModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: #2a2a2a;
    border-radius: 8px;
    width: 90%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 2rem;

    /* Estilização do scrollbar */
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #1a1a1a;
        border-radius: 0 8px 8px 0;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(226, 56, 13);
        border-radius: 10px;
        border: 2px solid #1a1a1a;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: rgb(235, 35, 0);
    }

    /* Para Firefox */
    scrollbar-width: thin;
    scrollbar-color: rgb(68, 67, 67) #1a1a1a;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255, 215, 0, 0.3);
    padding-bottom: 1rem;
`;

const ModalTitle = styled.h2`
    color: #ffd700;
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    color: #ffd700;
    cursor: pointer;
    font-size: 1.5rem;
    transition: all 0.2s ease;

    &:hover {
        color: #e6c200;
        transform: scale(1.1);
    }
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.6rem;
`;

const FormLabel = styled.label`
    color: rgb(250, 250, 250);
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const FormInput = styled.input`
    background-color: #1a1a1a;
    border: 1px solid rgb(27, 24, 2);
    border-radius: 4px;
    padding: 0.75rem;
    color: #e0e0e0;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    width: 100%; // Adicione esta linha

    &:focus {
        outline: none;
        border-color: #e6c200;
        box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
    }
`;

const FormTextarea = styled.textarea`
    background-color: #1a1a1a;
    border: 1px solid rgb(27, 24, 2);
    border-radius: 4px;
    padding: 0.75rem;
    color: #e0e0e0;
    font-family: 'Poppins', sans-serif;
    min-height: 120px;
    resize: vertical;
    transition: all 0.3s ease;
    width: 100%; // Adicione esta linha

    &:focus {
        outline: none;
        border-color: #e6c200;
        box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
    }
`;
const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
`;

const AvatarPreview = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid #ffd700;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a1a1a;
`;

const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const AvatarFallback = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6e45e2;
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
`;

const ChangeAvatarButton = styled.button`
    background-color: rgba(255, 215, 0, 0.1);
    color: #ffd700;
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(255, 215, 0, 0.2);
        color: #e6c200;
    }
`;

const SocialLinksHeader = styled.h3`
    color: #ffd700;
    font-family: 'Cinzel', serif;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
`;

const PrimaryButton = styled.button`
    background-color: #ffd700;
    color: #2a2a2a;
    border: none;
    border-radius: 4px;
    padding: 0.75rem 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
        background-color: #e6c200;
        transform: translateY(-2px);
    }
`;

const SecondaryButton = styled.button`
    background-color: rgba(255, 215, 0, 0.1);
    color: #ffd700;
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 4px;
    padding: 0.75rem 1.5rem;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(255, 215, 0, 0.2);
        color: #e6c200;
    }
`;
const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const TagItem = styled.div<{ selected: boolean }>`
    padding: 0.5rem 1rem;
    border-radius: 20px;
    background-color: ${({ selected }) => (selected ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 215, 0, 0.1)')};
    border: 1px solid rgba(255, 215, 0, 0.5);
    color: ${({ selected }) => (selected ? '#ffd700' : 'rgba(255, 215, 0, 0.7)')};
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 0.9rem;

    &:hover {
        background-color: rgba(255, 215, 0, 0.2);
    }
`;

const AvailabilityContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
`;

const DayAvailabilityItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const DayCheckbox = styled.input`
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #ffd700;
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    &:checked {
        background-color: #ffd700;

        &::after {
            content: '✓';
            position: absolute;
            color: #2a2a2a;
            font-size: 12px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;

const DayLabel = styled.span`
    color: #e0e0e0;
    min-width: 80px;
`;

const TimeRangeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;
`;

const TimeInput = styled.input`
    background-color: #1a1a1a;
    border: 1px solid #ffd700;
    border-radius: 4px;
    padding: 0.5rem;
    color: #e0e0e0;
    font-family: 'Poppins', sans-serif;
`;

const TimeSeparator = styled.span`
    color: #ffd700;
    font-size: 0.9rem;
`;
export {
    EditProfileModal,
    ModalContent,
    ModalHeader,
    ModalTitle,
    CloseButton,
    FormGroup,
    FormLabel,
    FormInput,
    FormTextarea,
    AvatarContainer,
    AvatarPreview,
    AvatarImage,
    AvatarFallback,
    ChangeAvatarButton,
    SocialLinksHeader,
    ButtonGroup,
    PrimaryButton,
    SecondaryButton,
    TagsContainer,
    TagItem,
    AvailabilityContainer,
    DayAvailabilityItem,
    DayCheckbox,
    DayLabel,
    TimeRangeContainer,
    TimeInput,
    TimeSeparator
};
