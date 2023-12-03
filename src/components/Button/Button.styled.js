import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 12px;
  border-radius: 12px;
  text-align: center;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  max-width: 100%;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  color: rgba(var(--bg-primary), 1);
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  &:hover,
  &:focus {
    background-color: rgba(var(--accent), 0.7);
    color: rgba(var(--text-primary), 1);
  }
`;

export default ButtonStyled;
