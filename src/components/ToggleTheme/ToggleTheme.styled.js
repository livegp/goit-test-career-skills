import { FaRegMoon, FaRegSun } from 'react-icons/fa6';
import styled, { keyframes } from 'styled-components';

export const LabelToggleTheme = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  order: 3;
  cursor: pointer;
  user-select: none;

  svg {
    font-size: 30px;
    fill: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }

  &:hover {
    svg {
      fill: rgba(var(--bg-primary), 0.7);
    }
  }

  input {
    cursor: pointer;
    opacity: 0;
    display: none;
  }
`;

const rotateslide = keyframes`   
  0% {
    transform: rotate(-360deg) scale(0);
    opacity: 0;
  }

  75% {
    transform: rotate(25deg);
  }
`;

export const MoonToggleTheme = styled(FaRegMoon)`
  animation: ${rotateslide} 0.5s;
`;

export const SunToggleTheme = styled(FaRegSun)`
  animation: ${rotateslide} 0.5s;
`;
