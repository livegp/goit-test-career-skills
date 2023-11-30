import styled from 'styled-components';

export const List = styled.ul`
  grid-row: 5 / 6;
  grid-column: 1 / 4;
  column-count: 6;
  column-gap: 25px;
  column-rule: 1px solid rgba(var(--text), 1);
  color: rgba(var(--text), 1);
  transition: var(--trans);

  li {
    line-height: 1.2;
  }

  @media (width <= 576px) {
    grid-row: 6 / 7;
    grid-column: 1 / 3;
    column-count: 2;
  }
`;

export default List;
