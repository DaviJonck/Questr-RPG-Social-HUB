import React from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

// Estilos
const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 80px;
    position: relative;
    width: 230px;
`;

const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 16px;
    font-weight: bold;
    color: #a0a0a0;
`;

const Required = styled.p`
    color: #e6c200;
`;

const StyledSelect = styled.select`
    background-color: #3c3d3e;
    border: 1px solid #625a30;
    border-radius: 5px;
    padding: 8px;
    color: white;
    outline: none;

    &:focus {
        border-color: #e6c200;
    }
`;

const ErrorMessage = styled.span`
    color: #d64747;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
`;

// Componente CustomSelect
interface CustomSelectProps {
    label: string;
    required?: boolean;
    register: UseFormRegisterReturn;
    error?: string;
    options: { value: string; label: string }[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, required, register, error, options }) => {
    return (
        <SelectContainer>
            <StyledLabel>
                {required && <Required>*</Required>} {label}
            </StyledLabel>
            <StyledSelect style={{ fontFamily: 'Cinzel' }} {...register}>
                <option disabled style={{ fontFamily: 'Cinzel' }} value=''>
                    Select an option
                </option>
                {options.map((option) => (
                    <option style={{ fontFamily: 'Cinzel' }} key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </StyledSelect>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </SelectContainer>
    );
};

export default CustomSelect;
