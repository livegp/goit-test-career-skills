import styled from 'styled-components';

const MenuB = styled.label`
  order: 6;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;

  &:hover span,
  &:hover span::before,
  &:hover span::after {
    background-color: rgba(var(--bg-primary), 0.7);
  }

  &:hover input:checked span::before {
    width: 10px;
  }

  input {
    opacity: 0;
    display: none;
    pointer-events: none;

    &:checked ~ span {
      background-color: transparent;
    }

    &:checked ~ span::before {
      top: 0;
      transform: rotate(45deg);
    }

    &:checked ~ span::after {
      top: 0;
      transform: rotate(-45deg);
    }

    &:checked:hover ~ span {
      transform: rotate(-90deg);
    }
  }

  span {
    position: relative;
    display: block;
    width: 25px;
    height: 3px;
    background-color: rgba(var(--bg-primary), 1);
    transition: var(--trans);

    &::after,
    &:before {
      position: absolute;
      left: 0;
      width: 25px;
      height: 100%;
      background-color: rgba(var(--bg-primary), 1);
      transition: var(--trans);
      content: '';
    }

    &::after {
      top: 8px;
    }

    &:before {
      top: -8px;
    }
  }
`;

export default MenuB;

// input[type='checkbox'] {
//   position: absolute;
//   opacity: 0;
//   display: none;
//   pointer-events: none;

/* &:checked ~ span {
    background-color: transparent;
  } */

/* &:checked ~ span::before {
    top: 0;
    transform: rotate(45deg);
  } */

/* &:checked ~ span::after {
    top: 0;
    transform: rotate(-45deg);
  } */

/* &:checked ~ span:hover {
    transform: rotate(-90deg);
  } */
// }
