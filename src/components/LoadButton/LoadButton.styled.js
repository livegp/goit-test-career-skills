import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  margin: 25px auto 0;
  padding: 8px 16px;
  border-radius: 4px;
  text-align: center;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  max-width: 180px;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  color: rgba(var(--text-primary), 1);
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);

  &:hover,
  &:focus {
    background-color: rgba(var(--accent), 0.7);
    color: rgba(var(--text-primary), 1);
  }
`;

export default Button;
