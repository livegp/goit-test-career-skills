import styled from 'styled-components';

const Container = styled.li`
  border-radius: 4px;
  transition: var(--trans);
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }

  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
`;

export default Container;
