import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

// Estilos
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 230px;
  height: 80px;
  position: relative;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  font-weight: bold;
  color: #a0a0a0;
`;

const Required = styled.p`
  color: #e6c200;
`;

const StyledInput = styled.input`
  background-color: #3c3d3e;
  border: 1px solid #625a30;
  border-radius: 5px;
  padding: 8px;
  color: white;
  outline: none;

  /* Remover setas para inputs numéricos */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Para Firefox */
  &[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  &:focus {
    border-color: #e6c200;
  }
`;
const ErrorMessage = styled.span`
  color: #d64747;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
`;

// Componente CustomInput
interface CustomInputProps {
  label: string;
  required?: boolean;
  register: UseFormRegisterReturn;
  error?: string;
  placeholder?: string;
  type?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  required,
  register,
  error,
  type = "text",
  placeholder,
}) => {
  return (
    <InputContainer>
      <StyledLabel>
        {required && <Required>*</Required>} {label}
      </StyledLabel>
      <StyledInput
        style={{ fontFamily: "Cinzel" }}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default CustomInput;
