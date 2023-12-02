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

export const Box = styled.div`
  display: grid;
  gap: 8px;
  padding: 14px 0 28px 0;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  color: #121417;
  font-weight: 500;
  line-height: 24px;

  span {
    color: rgba(var(--accent), 1);
  }
`;

export const SubTitle = styled.p`
  text-align: justify;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;
