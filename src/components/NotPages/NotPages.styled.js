import styled from 'styled-components';

const Section = styled.section`
  display: grid;
  gap: 16px;
  text-align: center;
  color: var(--text-secondary);
  transition: var(--trans);

  h1 {
    font-size: 20px;
    font-weight: bold;
  }
`;

export default Section;
