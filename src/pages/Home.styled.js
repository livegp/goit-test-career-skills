import styled from 'styled-components';

export const Back = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-position: 25% 75%;
  background-size: cover;
  background-clip: border-box;
  background-origin: border-box;
  background-image: linear-gradient(
      to right,
      rgba(var(--bg-primary), 1),
      rgba(var(--bg-primary), 0.7),
      rgba(var(--bg-primary), 0)
    ),
    url('./img/avtomobili.webp');

  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  font-size: 40px;
  line-height: 48px;
  font-weight: bold;
  color: rgba(var(--accent), 1);
  transition: var(--trans);
`;
