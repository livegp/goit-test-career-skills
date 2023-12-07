import PropTypes from 'prop-types';

import ButtonStyled from './Button.styled';

function Button({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
