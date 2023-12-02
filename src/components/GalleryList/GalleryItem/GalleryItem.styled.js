import styled from 'styled-components';

export const Container = styled.li`
  display: grid;
  align-content: space-between;
  border-radius: 12px;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;
