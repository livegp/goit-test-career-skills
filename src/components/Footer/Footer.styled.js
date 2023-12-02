import styled from 'styled-components';

const FooterBox = styled.footer`
  color: rgba(var(--bg-primary), 1);
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);

  a {
    color: rgba(var(--bg-primary), 1);
    transition: var(--trans);

    &:hover {
      color: #f7f7f7;
    }
  }
`;

export default FooterBox;
