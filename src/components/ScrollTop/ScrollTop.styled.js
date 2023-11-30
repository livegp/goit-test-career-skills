import { IoIosArrowDropup } from 'react-icons/io';
import styled from 'styled-components';

const ScrollTop = styled(IoIosArrowDropup)`
  height: 50px;
  width: 50px;
  background-color: rgba(var(--bg-primary), 1);
  opacity: 0.6;
  border-radius: 50%;
  fill: rgba(var(--text), 1);
  transition: var(--trans);

  &:hover {
    opacity: 0.8;
    fill: rgba(var(--accent), 1);
  }
`;

export default ScrollTop;
