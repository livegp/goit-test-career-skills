import styled from 'styled-components';

export const Container = styled.li`
  position: relative;
  display: grid;
  align-content: space-between;
  border-radius: 12px;
  box-shadow:
    0px 1px 3px 0px rgba(var(--bg-innert), 0.2),
    0px 1px 1px 0px rgba(var(--bg-innert), 0.14),
    0px 2px 1px -1px rgba(var(--bg-innert), 0.12);
  transition: var(--trans);

  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const ImgBox = styled.div`
  display: grid;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 12px;
  align-content: center;
  justify-content: center;
  background-color: rgba(var(--accent), 0.5);
  transition: var(--trans);

  svg {
    width: 100px;
    height: 100px;
    fill: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }
`;

export const Box = styled.div`
  display: grid;
  gap: 8px;
  padding: 14px 5px 28px 5px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgba(var(--bg-innert), 0.8);
  font-weight: 500;
  line-height: 24px;
  transition: var(--trans);

  span {
    color: rgba(var(--accent), 1);
  }
`;

export const SubTitle = styled.p`
  text-align: justify;
  color: rgba(var(--bg-innert), 0.6);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  transition: var(--trans);
`;
