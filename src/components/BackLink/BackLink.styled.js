import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 25px;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(var(--text), 1);
  transition: var(--trans);

  :hover {
    color: rgba(var(--text), 0.7);
  }
`;

export const LinkContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;
