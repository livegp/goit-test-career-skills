import styled from 'styled-components';

const Label = styled.label`
  display: block;
  top: 14px;
  right: 14px;
  position: absolute;
  cursor: pointer;
  font-size: 20px;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  div {
    top: 0;
    left: 0;
  }

  svg {
    fill: ${({ checked }) =>
      checked === true ? 'rgba(var(--accent), 1)' : 'none'};
    stroke: ${({ checked }) =>
      checked === true
        ? 'rgba(var(--accent), 1)'
        : 'rgba(var(--bg-primary), 1)'};
    transition: var(--trans);
  }
`;

export default Label;
