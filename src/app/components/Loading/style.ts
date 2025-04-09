import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const LoadingContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(26, 26, 26, 0.8); // Usando a cor de fundo do site com transparência
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

const LoadingContent = styled.div`
    text-align: center;
    background-color: rgba(42, 42, 42, 0.9); // Usando a cor de superfície do site
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border: 2px solid #3d3d3d; // Borda similar aos outros elementos
`;

const LoadingSpinner = styled.div`
    width: 50px;
    height: 50px;
    border: 4px solid #2a2a2a;
    border-top: 4px solid #ffd700; // Cor primária do site
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    margin: 0 auto 20px;
`;

const LoadingText = styled.p`
    font-size: 1.25rem;
    color: #e0e0e0; // Cor do texto principal
    animation: ${pulse} 1.5s ease-in-out infinite;
    margin: 0;
    font-family: 'Cinzel', serif; // Fonte usada nos títulos
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export { LoadingContainer, LoadingContent, LoadingSpinner, LoadingText };
