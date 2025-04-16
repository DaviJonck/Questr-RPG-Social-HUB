// styles/tavernTheme.ts
import styled, { keyframes } from 'styled-components';

const flicker = keyframes`
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
`;

export const TavernScene = styled.div`
    background: url('/images/tavern-background.jpg') center/cover;
    min-height: 100vh;
    position: relative;
    font-family: 'MedievalSharp', cursive;
`;

export const WoodenBeams = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/wooden-beams.png');
    pointer-events: none;
    opacity: 0.8;
`;

export const FlickeringTorches = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 100px;
    background: url('/images/torch.gif') center/contain no-repeat;
    animation: ${flicker} 2s infinite;
`;

export const ScrollContainer = styled.div`
    background: url('/images/scroll-texture.jpg');
    padding: 2rem;
    border-radius: 0;
    position: relative;
    transform: rotate(-2deg);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    border: 1px solid #d4a762;
    max-width: 300px;
    margin: 1rem;
`;

export const WaxSeal = styled.div<{ $color: string }>`
    position: absolute;
    top: -15px;
    right: -15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${(props) => props.$color};
    border: 2px solid #fff;
`;
