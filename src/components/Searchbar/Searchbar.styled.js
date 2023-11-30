import { Field } from 'formik';
import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: ${properties => (properties.isSearching ? 300 : 40)}px;
  height: 40px;
  background-color: transparent;
  /* border: 2px solid rgba(var(--bg-primary), 1); */
  border-bottom-width: ${properties => (properties.isSearching ? 1 : 0)}px;
  border-style: solid;
  border-color: rgba(var(--bg-primary), 1);
  /* border-radius: 4px; */
  align-items: center;
  overflow: hidden;
  order: 2;
  display: flex;
  justify-content: space-between;
  transition: var(--trans);

  &:hover {
    border-color: rgba(var(--bg-primary), 0.7);
  }
`;

export const SearchFormLabel = styled.label`
  position: absolute;
  width: 0px;
  height: 0px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled(Field)`
  /* padding: 0 40px 0 40px; */
  padding-left: ${properties => (properties.isSearching ? 40 : 0)}px;
  padding-right: ${properties => (properties.isSearching ? 40 : 0)}px;
  position: absolute;
  border: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  font-size: 20px;
  color-scheme: dark;
  color: rgba(var(--text-primary), 0.7);
  background-color: transparent;
  transition: var(--trans);
  outline: none;
  /* border: 1px solid transparent; */

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }

  &::placeholder {
    font: inherit;
    font-size: 18px;
    background-color: transparent;
    color: rgba(var(--text-primary), 0.7);
    transition: var(--trans);
  }
`;

export const SearchFormButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  top: 0;
  left: 0;
  padding: 0;
  border: none;
  z-index: 1;
  cursor: pointer;
  background-color: transparent;
  /* transition: var(--trans); */

  &:hover {
    svg {
      fill: rgba(var(--bg-primary), 0.7);
    }

    &::after {
      opacity: 1;
      transform: scale(1);
      transition: var(--trans);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 4px;
    z-index: -1;
    background-color: #000;
    transform: scale(0.6);
    opacity: 0;
    transition: var(--trans);
  }

  svg {
    fill: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }
`;

export const IconButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  top: 0;
  right: 0;
  padding: 0;
  border: none;
  z-index: 1;
  cursor: pointer;
  background-color: transparent;
  order: 3;

  &:hover {
    svg {
      fill: rgba(var(--bg-primary), 0.7);
    }

    &::after {
      opacity: 1;
      transform: scale(1);
      transition: var(--trans);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 4px;
    z-index: -1;
    background-color: #000;
    transform: scale(0.6);
    opacity: 0;
    transition: var(--trans);
  }

  svg {
    fill: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }
`;
